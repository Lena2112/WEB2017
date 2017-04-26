module.exports ={
    options: {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },
    prod: {
        src: ['.build/js/*.js', '.build/css/*.css', '.build/images/*.{png,jpg,gif}'],
        dest: 'index.html'
    }
};