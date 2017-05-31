function getAllFiles(): void {
    const request = new XMLHttpRequest();
    request.onreadystatechange = (): void => {
        if (request.readyState !== 4) {
            return;
        }
        const list = document.getElementById("file_list");
        list.innerHTML = "";
        if (request.status === 200) {
            const json = JSON.parse(request.responseText);
            for (let i of json) {
                list.innerHTML += i.name + "<br>";
            }
            list.innerHTML += "<br>";
        } else {
            list.innerHTML = request.status + " " + request.statusText;
        }
    };
    request.open("GET", "/files/", true);
    request.send();
}

let get: HTMLInputElement = document.getElementById("get") as HTMLInputElement;
get.onclick = (): void => {
    const request = new XMLHttpRequest();
    const fileName = (document.getElementById("input") as HTMLInputElement).value;
    const ext = fileName.substring(fileName.lastIndexOf(".") + 1);
    if (ext !== "txt" && ext !== "html" && ext !== "css" && ext !== "js") {
        request.responseType = "blob";
    }
    request.onreadystatechange = (): void => {
        if (request.readyState !== 4) {
            return;
        }
        if (request.status === 200) {
            if (request.getResponseHeader("content-type") === "image/png" ||
            request.getResponseHeader("content-type") === "image/jpg" ||
            request.getResponseHeader("content-type") === "image/jpeg") {
                const img = document.createElement("img");
                img.src = (document.getElementById("input") as HTMLInputElement).value;
                document.getElementById("file").innerHTML = "";
                document.getElementById("file").appendChild(img);
            } else if (request.getResponseHeader("content-type") === "text/plain; charset=utf-8" ||
            request.getResponseHeader("content-type") === "text/html; charset=utf-8" ||
            request.getResponseHeader("content-type") === "text/css; charset=utf-8" ||
            request.getResponseHeader("content-type") === "text/javascript; charset=utf-8") {
                const p = document.createElement("p");
                p.innerHTML = request.responseText;
                document.getElementById("file").innerHTML = "";
                document.getElementById("file").appendChild(p);
            } else {
                const name = fileName.substr(fileName.lastIndexOf("/") + 1);
                const element = document.createElement("a");
                element.href = "data:application/octet-stream," + encodeURI(ext);
                element.target = "_blank";
                element.download = name;
                element.click();
            }
        } else {
            document.getElementById("file").innerHTML = request.status + " " + request.statusText;
        }
    };
    request.open("GET", fileName, true);
    request.send();
};

let del: HTMLInputElement = document.getElementById("delete") as HTMLInputElement;
del.onclick = (): void => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = (): void => {
        if (request.readyState !== 4) {
            return;
        }
        if (request.status === 200) {
            getAllFiles();
        }
    };
    const fileName = (document.getElementById("input") as HTMLInputElement).value;
    request.open("delete", fileName);
    document.getElementById("file").innerHTML = "";
    request.send(null);
};

getAllFiles();
