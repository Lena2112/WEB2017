module.exports =
{
    script:
    {
        options:
        {
            livereload: true
        },
        files: ['index.html', 'js/*.js', 'css/*.css'],
        tasks: ['clean', 'concat', 'eslint', 'uglify', 'cssmin', 'hashres:prod', 'copy']
    }
};