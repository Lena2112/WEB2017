module.exports = {
    ts: {
        options: {
            module: 'system',
            target: 'es5',
            noImplicitAny: true,
            noEmitOnError: true,
            sourceMap: false
        },
        configFile: 'tsconfig.json',
        src: 'client/ts/*.ts',
        out: '.build/js/index.js'
    }
};