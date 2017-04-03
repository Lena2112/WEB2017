module.exports =
{
    options:
    {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },
    prod:
    {
        src: ['.build/js/script.js', '.build/css/style.css', '.build/images/*.{png,jpg,gif}'],
        dest: 'index.html'
    }
};