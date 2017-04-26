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
        src: "drawer.js",
        dest: ".build/js/drawer.min.js"
    }
};