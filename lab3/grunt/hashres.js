module.exports =
{
    options:
    {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },
    prod:
    {
        src: ['.build/js/script.js', '.build/css/style.css'],
        dest: 'index.html'
    }
};