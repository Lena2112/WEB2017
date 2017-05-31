module.exports =
{
    'build': ['clean:oldHashes', 'shell:run_cspell',  'tslint', 'copy:js', 'ts', 'systemjs', 'cssmin', 'hashres', 'copy:index'],
    'default': ['clean', 'copy:server', 'build', 'shell:run_server', 'watch']
};