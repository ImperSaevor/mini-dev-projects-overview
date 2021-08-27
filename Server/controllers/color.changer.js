const color = require("../models/color.models");

module.exports.getColorTab = async (req, res) => {
  try {
    let colorTab = [];
    await color.findAll({ attributes: ["colorName"] }).then((a) => {
      a.forEach((e)=>{
        colorTab.push(e.colorName);
      })
      res.json(colorTab);
    });
  } catch (error) {
    console.log(error);
    res.status(404).json("Nope lol : " + error);
  }
};
