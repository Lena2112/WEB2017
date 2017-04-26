module.exports =
{
    'build': ['clean:oldHashes', 'shell', 'tslint', 'concat', 'ts', 'systemjs', 'react', 'cssmin', 'hashres', 'copy:index'],
    'default': ['clean', 'build', 'connect', 'watch']
};