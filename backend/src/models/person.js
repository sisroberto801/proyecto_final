import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';

export const Person = sequelize.define('persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false
});
