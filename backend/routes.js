require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/error-handler");
const fs = require('fs');
const authorize = require("./_middleware/authorize");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use("/users", require("./mvc/users/user.controller"));
app.use("/categories", require("./mvc/categories/category.controller"));
app.use("/events", require("./mvc/events/event.controller"));
app.use("/uploads", require("./mvc/pdfFile/pdfFile.controller"));
app.use("/contact", require("./mvc/contact/contact.controller"));
app.use("/office", require("./mvc/address/address.controller"));
app.use("/content", require("./mvc/carrier/content.controller"));
app.use("/page", require("./mvc/page/page.controller"));
app.use("/section", require("./mvc/pageSection/section.controller"));
app.use("/pageContent", require("./mvc/pageContent/content.controller"));
app.use("/csr", require("./mvc/csrCommittee/csrCommittee.controller"));
app.use("/csrpdf", require("./mvc/csrPdf/csrPdf.controller"));
app.use("/corporateInformation", require("./mvc/corporateInformation/corporateInformation.controller"));
app.use("/cipdf", require("./mvc/ciPdf/ciPdf.controller"));
app.use("/keyPersonnel", require("./mvc/keyPersonnel/keyPersonnel.controller"));
app.get('/pdf/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = `./uploads/${filename}`;

  fs.readFile(filePath, (err, data) => {
      if (err) {
          res.status(404).send('File not found');
          return;
      }

      res.contentType('application/pdf');
      res.send(data);
  });
});
app.delete('/pdf/:filename',authorize(), (req, res) => {
  const { filename } = req.params;
  console.log(filename)
  const filePath = `./uploads/${filename}`;

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      res.status(500).send('Failed to delete file');
      return;
    }

    res.send('File deleted successfully');
  });
});
app.get('/csrpdf/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = `./csrUploads/${filename}`;

  fs.readFile(filePath, (err, data) => {
      if (err) {
          res.status(404).send('File not found');
          return;
      }

      res.contentType('application/pdf');
      res.send(data);
  });
});
app.delete('/csrpdf/:filename',authorize(), (req, res) => {
  const { filename } = req.params;
  const filePath = `./csrUploads/${filename}`;

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      res.status(500).send('Failed to delete file');
      return;
    }

    res.send('File deleted successfully');
  });
});
app.get('/ci/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = `./ciuploads/${filename}`;

  fs.readFile(filePath, (err, data) => {
      if (err) {
          res.status(404).send('File not found');
          return;
      }

      res.contentType('application/pdf');
      res.send(data);
  });
});
app.delete('/ci/:filename',authorize(), (req, res) => {
  const { filename } = req.params;
  const filePath = `./ciuploads/${filename}`;

  // Delete the file
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      res.status(500).send('Failed to delete file');
      return;
    }

    res.send('File deleted successfully');
  });
});

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
  
app.listen(port, () => console.log("Server listening on port " + port));
