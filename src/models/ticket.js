'use strict';
const {
  Model
} = require('sequelize');
const {Enums} = require('../utils/common');
const { PENDING, SUCCESS, FAILED } = Enums.STATUS_ENUMS;

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    subject: {
      types:DataTypes.STRING,
      allowNull:false
    },
    content: {
      types:DataTypes.STRING,
      allowNull:false
    },
    recepientName:{
      types:DataTypes.STRING,
      allowNull:false
    } ,
    status: {
      types:DataTypes.ENUMS,
      values:[PENDING,SUCCESS,FAILED],
      defaultValue:PENDING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};