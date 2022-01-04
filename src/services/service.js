const { Forecast } = require("../models/");
const { TB_data } = require("../models/");

var Service = function (use) {};

Service.getSymbols = async function (req, res) {
  try {
    const symbols = [];
    //const getdata = await TB_data.findOne({ where: { HIGH: '18604.45' } });
    const getdata = await TB_data.findAll();
    for (const i of getdata) symbols.push(i.SYMBOL);
    const symbolsData = symbols.sort().filter(function (item, pos, symbols) {
      return !pos || item !== symbols[pos - 1];
    });
    res.json(symbolsData);
  } catch (err) {
    console.log();
    res.json(err);
  }
};

Service.getForcasts = async function (req, res) {
  try {
    //const data = await Forecast.findOne({ where: { CURVE: '16993' } });
    const data = await Forecast.findAll();
    res.json(data);
  } catch (err) {
    console.log("error", err);
    res.json(err);
  }
};

module.exports = Service;
