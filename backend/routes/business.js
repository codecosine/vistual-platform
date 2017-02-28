
var formidable = require('formidable');
var xlsx = require('xlsx');
var path = require('path');
exports.calculation = function(req, res){
  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.uploadDir = path.join(__dirname,'../public/upload');
  form.keepExtensions = true;
  form.maxFieldsSize = 2 * 1024 * 1024;
  form.parse(req, function(err, fields, files) {
    // 上传失败
    if (err) {
      res.json({
        success:false,
        msg:'上传文件失败，请重试'
      });
      return;
    }
    var d = domain.create();
    // xlsx解析
    var filepath = files.xls.path;
    var workbook = xlsx.readFile(filepath);
    var first_sheet_name = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[first_sheet_name];
    var calculation = xlsx.utils.sheet_to_json(worksheet);
    res.json({
      success: true,
      calculation: calculation,
      time: files.xls.mtime
    })
  });
};
