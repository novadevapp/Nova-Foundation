const Picture = require("../models/pictures");

module.exports = publicid => {
  console.log(publicid);
  Picture.deleteOne({ public_id: publicid }).then(res => console.log(res));
};
