var istanbulReport = require('gulp-istanbul-report');
var gulp = require('gulp');

var coverageFile = './coverage/coverage.json';


gulp.task('default', function () {
  gulp.src(coverageFile)
  .pipe(istanbulReport({
    reporters: [
      {'name': 'sonarreport', file: 'sonar-coverage.xml'}
    ]
  }))
});