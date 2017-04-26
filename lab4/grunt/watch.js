module.exports = {
    script: {
        files: ['css/*.css', 'ts/*.ts', 'jsx/*.jsx'],
        tasks: 'build'
    },
    html: {
        options: {
            livereload: true
        },
        files: 'index.html',
        tasks: 'copy:index'
    }
};