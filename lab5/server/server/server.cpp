#include "stdafx.h"
#include <iostream>
#include <sstream>
#include <fstream>
#include <string>
#include <map>
#include <vector>
#include <filesystem>

#define _WIN32_WINNT 0x501

#include <WinSock2.h>
#include <WS2tcpip.h>

#pragma comment(lib, "Ws2_32.lib")

using std::cerr;
using namespace std::experimental::filesystem;
using namespace std;

string CreateContentTypeHeader(string const & filePath)
{
	map<string, string> map =
	{
		{ ".txt", "text/plain; charset=utf-8" },
		{ ".html", "text/html; charset=utf-8" },
		{ ".css", "text/css; charset=utf-8" },
		{ ".js", "text/javascript; charset=utf-8" },
		{ ".gif", "image/gif" },
		{ ".png", "image/png" },
		{ ".jpg", "image/jpg" },
		{ ".jpeg", "image/jpeg" },
		{ ".bmp", "image/bmp" },
		{ ".mp3", "audio/mpeg" },
		{ ".ogg", "audio/ogg" },
		{ ".wav", "audio/wav" },
		{ ".webm", "video/webm" },
		{ ".xml", "application/xml" },
		{ ".pdf", "application/pdf" }
	};
	path file = filePath;
	string fileExtension = file.extension().generic_string();
	if (map.find(fileExtension) != map.end())
	{
		return map.find(fileExtension)->second;
	}
	return "application/octet";
}

string GetJson()
{
	path filesDirectory = "files";
	recursive_directory_iterator dir(filesDirectory);
	stringstream json;
	json << '[';
	for (auto it : dir)
	{
		json << "{\"name\":\"" << it.path().generic_string() << "\", \"isDir\":\"" << is_directory(it.path()) << "\"}, ";
	}
	string jsonStr = json.str();
	jsonStr.erase(jsonStr.size() - 2, 2);
	jsonStr += "]";

	return jsonStr;
}

bool GetFile(string filePath, string & holder)
{
	filePath.erase(0, 1);
	ifstream file(filePath, ios::binary);
	if (!file.is_open())
	{
		return false;
	}
	string ext = filePath.substr(filePath.length() - 4);
	if (ext != ".txt")
	{
		stringstream stream;
		stream << file.rdbuf();
		holder = stream.str();
	}
	else
	{
		string tmp;
		while (getline(file, tmp))
		{
			tmp += "<br>";
			holder += tmp;
		}
	}
	return true;
}

string DelFile(string filePath)
{
	stringstream response;
	string responseBody;
	string fileName = filePath.substr(1);
	if (exists(fileName))
	{
		if (is_regular_file(fileName))
		{
			remove(fileName);
			responseBody = fileName + " was deleted";
			response << "HTTP/1.1 200 OK\r\n"
				<< "Version: HTTP/1.1\r\n"
				<< "Content-Type: " << CreateContentTypeHeader(fileName) << "\r\n"
				<< "Content-Length: " << responseBody.length()
				<< "\r\n\r\n"
				<< responseBody;
		}
		else
		{
			responseBody = fileName + " is not a file";
			response << "HTTP/1.1 403 Not found\r\n"
				<< "Version: HTTP/1.1\r\n"
				<< "Content-Type: text/plain; charset=utf-8\r\n"
				<< "Content-Length: " << responseBody.length()
				<< "\r\n\r\n"
				<< responseBody;
		}
	}
	else
	{
		responseBody = fileName + " not found";
		response << "HTTP/1.1 404 Not found\\r\n"
			<< "Version: HTTP/1.1\r\n"
			<< "Content-Type: text/plain; charset=utf-8\r\n"
			<< "Content-Length: " << responseBody.length()
			<< "\r\n\r\n"
			<< responseBody;
	}

	return response.str();
}

string GetFile(string const & filePath)
{
	string responseBody;
	string fileName = (filePath == "/") ? "/index.html" : filePath;
	bool fileFound = GetFile(fileName, responseBody);
	stringstream response;

	if (fileFound)
	{
		response << "HTTP/1.1 200 OK\r\n"
			<< "Version: HTTP/1.1\r\n"
			<< "Content-Type: " << CreateContentTypeHeader(fileName) << "\r\n"
			<< "Content-Length: " << responseBody.length()
			<< "\r\n\r\n"
			<< responseBody;
	}
	else
	{
		responseBody = "404 File not found";
		response << "HTTP/1.1 404 Not found\r\n"
			<< "Version: HTTP/1.1\r\n"
			<< "Content-Type: text/plain; charset=utf-8\r\n"
			<< "Content-Length: " << responseBody.length()
			<< "\r\n\r\n"
			<< responseBody;
	}

	return response.str();
}

string GetAllInJson()
{
	string responseBody = GetJson();
	stringstream response;
	response << "HTTP/1.1 200 OK\r\n"
		<< "Version: HTTP/1.1\r\n"
		<< "Content-Type: application/json; charset=utf-8\r\n"
		<< "Content-Length: " << responseBody.length()
		<< "\r\n\r\n"
		<< responseBody;
	return response.str();
}

string InvalidQuery()
{
	string responseBody = "bad http request. Check syntax";
	stringstream response;
	response << "HTTP/1.1 400 bad request\r\n"
		<< "Version: HTTP/1.1\r\n"
		<< "Content-type: text/plain\r\n"
		<< "Content-length: " + responseBody.length()
		<< "\r\n\r\n"
		<< responseBody;
	return response.str();
}

string AccessDenied()
{
	string responseBody = "access denied";
	stringstream response;
	response << "HTTP/1.1 403 forbidden\r\n"
		<< "Version: HTTP/1.1\r\n"
		<< "Content-type: text/plain\r\n"
		<< "Content-length: " + responseBody.length()
		<< "\r\n\r\n"
		<< responseBody;
	return response.str();
}

int main()
{
	WSADATA wsaData;
	int result = WSAStartup(MAKEWORD(2, 2), &wsaData);

	if (result != 0)
	{
		cerr << "WSAStartup failed: " << result << "\n";
		return result;
	}

	struct addrinfo* addr = NULL;
	struct addrinfo hints;
	ZeroMemory(&hints, sizeof(hints));

	hints.ai_family = AF_INET;
	hints.ai_socktype = SOCK_STREAM;
	hints.ai_protocol = IPPROTO_TCP;
	hints.ai_flags = AI_PASSIVE;

	result = getaddrinfo("0.0.0.0", "80", &hints, &addr);

	if (result != 0)
	{
		cerr << "getaddrinfo failed: " << result << "\n";
		WSACleanup();
		return 1;
	}

	int listen_socket = socket(addr->ai_family, addr->ai_socktype,
		addr->ai_protocol);
	if (listen_socket == INVALID_SOCKET)
	{
		cerr << "Error at socket: " << WSAGetLastError() << "\n";
		freeaddrinfo(addr);
		WSACleanup();
		return 1;
	}

	result = bind(listen_socket, addr->ai_addr, (int)addr->ai_addrlen);

	if (result == SOCKET_ERROR)
	{
		cerr << "bind failed with error: " << WSAGetLastError() << "\n";
		freeaddrinfo(addr);
		closesocket(listen_socket);
		WSACleanup();
		return 1;
	}

	if (listen(listen_socket, SOMAXCONN) == SOCKET_ERROR)
	{
		cerr << "listen failed with error: " << WSAGetLastError() << "\n";
		closesocket(listen_socket);
		WSACleanup();
		return 1;
	}


	const int max_client_buffer_size = 1024;
	char buf[max_client_buffer_size];
	int client_socket = INVALID_SOCKET;

	for (;;)
	{
		client_socket = accept(listen_socket, NULL, NULL);
		if (client_socket == INVALID_SOCKET)
		{
			cerr << "accept failed: " << WSAGetLastError() << "\n";
			closesocket(listen_socket);
			WSACleanup();
			return 1;
		}

		result = recv(client_socket, buf, max_client_buffer_size, 0);

		stringstream response;

		if (result == SOCKET_ERROR)
		{
			cerr << "recv failed: " << result << "\n";
			closesocket(client_socket);
		}
		else if (result == 0)
		{
			cerr << "connection closed...\n";
		}
		else if (result > 0)
		{
			buf[result] = '\0';

			stringstream tempBuf(buf);
			string method;
			string url;
			tempBuf >> method >> url;

			if (method == "get" || method == "GET")
			{
				if (url == "/files/")
				{
					response << GetAllInJson();
				}
				else if (url.substr(0, 5) == "/css/" || url.substr(0, 4) == "/js/" || url.substr(0, 7) == "/files/" ||
					url.substr(0, 7) == "/image/" || url.substr(0, 7) == "/audio/" || url.substr(0, 7) == "/video/" ||
					url.substr(0, 13) == "/application/" || url == "/" || url == "/index.html" || url == "/favicon.ico")
				{
					response << GetFile(url);
				}
				else
				{
					response << AccessDenied();
				}
			}
			else if (method == "delete" || method == "DELETE")
			{
				response << DelFile(url);
			}
			else
			{
				response << InvalidQuery();
			}

			result = send(client_socket, response.str().c_str(),
				response.str().length(), 0);

			if (result == SOCKET_ERROR)
			{
				cerr << "send failed: " << WSAGetLastError() << "\n";
			}
			closesocket(client_socket);
		}
	}

	closesocket(listen_socket);
	freeaddrinfo(addr);
	WSACleanup();
	return 0;
}
