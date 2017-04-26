module.exports =
{
	index:
    {
        files:
        [{
            expand: true,
            cwd: '',
            src: 'index.html',
            dest: '.build/'
        }]
    },
	images:
    {
        files:
        [{
            expand: true,
            cwd: '',
            src: 'images/*.jpg',
            dest: '.build/'
        }]
    }
};