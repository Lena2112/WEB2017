module.exports = {
    script: {
        files: ['client/css/*.css', 'client/ts/*.ts'],
        tasks: 'build'
    },
    html: {
        options: {
            livereload: true
        },
        files: 'client/index.html',
        tasks: 'copy:index'
    }
};