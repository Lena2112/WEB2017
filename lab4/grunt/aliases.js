module.exports =
{
    'build': ['clean:oldHashes',  'tslint', 'concat', 'ts', 'systemjs', 'react', 'cssmin', 'hashres', 'copy:index'],
    'default': ['clean', 'build', 'connect', 'watch']
};