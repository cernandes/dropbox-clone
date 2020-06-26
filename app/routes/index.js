var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', (req, res, next) => {

  let path = './' + req.query.path;

  if (fs.existsSync(path)) {

    fs.readFile(path, (err, data) => {

      if (err) {

        console.error(err);
        res.status(400).json({
          error: err
        });

      } else {

        res.status(200).end(data);
      }

    });

  } else {
    res.status(404).json({
      error: 'File not found'
    });
  }

});

router.delete('/file', (req, res) => {

  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {
    git

    let path = './' + fields.path;

    if (fs.existsSync(path)) {

      fs.unlink(path, error => {

        if (error) {
          res.status(400).json({
            error
          });
        } else {

          res.json({
            fields
          });
        }
      });
    } else {
      res.status(404).json({
        error: 'File not found'
      });
    }
  });
});

router.post('/upload', (req, res, next) => {

  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });
  form.parse(req, (err, fields, files) => {

    res.json({
      files
    });
  });
});

module.exports = router;
