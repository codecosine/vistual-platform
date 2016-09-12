
module.exports = function(app) {
  app.post('/test',function (req,res) {
    console.log('test post');
  });
};
