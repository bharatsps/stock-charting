module.exports = (sequelize, DataTypes) => {
    const Forecast = sequelize.define(
      'tb_forecast_prod',
      {
        // id: {
        //   type: DataTypes.BIGINT(20).UNSIGNED,
        //   allowNull: false,
        //   primaryKey: true,
        //   autoIncrement: true,
        // },
        DATE: {
          type: DataTypes.DATE,
          allowNull: false,
          primaryKey: true,
        },
       
        SYMBOL: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        CURVE: {
          type: DataTypes.DOUBLE  ,
          allowNull: false,
        },
         
      },
      {
        tableName: 'tb_forecast_prod',
        timestamps: false,
      }
    )
   
    return Forecast
  }
  