module.exports = {
    run_cspell: {
        command: 'cspell client/ts/*.ts'
    },
    run_server: {
        command: [
                'cd .build',
                'server.exe'
            ].join('&&'),
        options: {
            async: true
        }
    }
};