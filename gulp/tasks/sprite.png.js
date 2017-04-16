'use strict';

module.exports = function() {
    var spritesmith = require('gulp.spritesmith');
    $.gulp.task('sprite:png', function() {
        return $.gulp.src('./source/images/*.png')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/css'));
    });
};