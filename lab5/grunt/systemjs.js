module.exports = {
    options: {
        sfx: true,
        minify: false,
        sourceMaps: false,
        configFile: "./system.config.js",
        build: {
            mangle: false
        }
    },
    ts: {
        src: "index.js",
        dest: "index.min.js"
    }
};