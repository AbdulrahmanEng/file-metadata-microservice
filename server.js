const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file !== null) {
    const { size, originalname, encoding, mimetype } = req.file;
    const metadata = {
      size,
      originalname,
      encoding,
      mimetype
    };
    console.log(metadata)
    res.json(metadata);
  }
  else {
    res.json({ error: 'Invalid input' });
  }
});

const listener = app.listen(process.env.PORT, () => console.log(`Listening on port ${listener.address().port}`));