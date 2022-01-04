module.exports = (sequelize, DataTypes) => {
  const TB_data = sequelize.define(
    "tb_data",
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
      OPEN: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      HIGH: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      LOW: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      CLOSE: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      VOLUME: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      tableName: "tb_data",
      timestamps: false,
    }
  );

  return TB_data;
};
