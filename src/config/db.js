
const { Sequelize }  = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize('trading_view','root', '', {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate()
.then(()=>{
    console.log("DB Connected");
})
.catch(err => {
    console.log("Error" + err);
})

module.exports = sequelize;
