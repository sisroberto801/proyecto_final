import {DataTypes} from 'sequelize';
import {sequelize} from '../database/database.js';
import {Person} from './person.js';

export const Education = sequelize.define('formacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  institucion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  persona_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Person,
      key: 'id'
    }
  },
}, {
  freezeTableName: true,
  timestamps: false
});

Person.hasMany(Education, { foreignKey: 'persona_id', as: 'formacion' });
Education.belongsTo(Person, { foreignKey: 'persona_id' });
