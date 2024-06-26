'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Courses.belongsTo(models.Categorie, {foreignKey: 'CategoryId'})
    }
  }
  Courses.init({
    name: DataTypes.STRING,
    description: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};  