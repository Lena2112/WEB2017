module.exports =
{
    index:
    {
        files:
        [{
            expand: true,
            cwd: 'client',
            src: ['index.html', 'files/**', 'favicon.ico'],
            dest: '.build/'
        }]
    },
    server:
    {
        files:
        [{
            expand: true,
            cwd: 'server/Release',
            src: 'server.exe',
            dest: '.build/'
        }]
    },
    js:
    {
        files:
        [{
            expand: true,
            cwd: 'node_modules/systemjs/dist',
            src: 'system.js',
            dest: '.build/js'
        }]
    }
};