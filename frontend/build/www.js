/**
 * Created by cosine on 2016/9/13.
 */
var app = require('../server/server.js');
var pkg = require('../package.json');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  console.log(pkg.name, 'listening on port ', server.address().port);
});
