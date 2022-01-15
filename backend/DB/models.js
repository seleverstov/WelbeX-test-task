const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');
const Row = sequelize.define('row', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    count: {
        type: DataTypes.INTEGER
    },
    distance: {
        type: DataTypes.INTEGER
    }
});
sequelize.sync( {force: true} );
module.exports.row = Row;
