const fs = require("fs");
const path = require("path");

const db = require("../models");
const Image = db.images;

// ve trang upload
const index = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/upload.html`));
};

//luu anh vao db
const uploadFiles = async (req, res) => {
  // try {
  //   console.log(req);

  //   if (req.file == undefined) {
  //     return res.send(`You must select a file.`);
  //   }

  //   Image.create({
  //     type: req.file.mimetype,
  //     name: req.body.username,
  //     address: req.body.address,
  //     phone: req.body.phone,
  //     nameimage: req.file.filename,
  //   }).then((image) => {

  //     // return res.redirect("assets/uploads/" + req.file.filename);
  //     return res.redirect("/python?id=" + image.id + "&nameimage=" + image.nameimage);
  //   });
  // } catch (error) {
  //   console.log(error);
  //   return res.send(`Error when trying upload images: ${error}`);
  // }
  // console.log(req.files);

  try {
    // console.log(req);
    if (req.files < 1) {
      return res.send(`You must select a file.`);
    }

    const arrays = []
    if (req.body.username)
      for (const iterator of req.files) {
        // console.log(iterator.filename);
        arrays.push({
          name: req.body.username,
          nameimage: iterator.filename,
          status: "0"
        });
      }
    else
      for (const iterator of req.files) {
        // console.log(iterator.filename);
        arrays.push({ nameimage: iterator.filename, status: "0" });
      }
    Image.bulkCreate(arrays)

    // console.log(arrays);
    // console.log(req.body);
    // console.log(!req.body)
    return res.redirect("back");

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles: uploadFiles,
  getIndex: index
};
