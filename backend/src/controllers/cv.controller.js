import {Person} from '../models/person.js';
import {Education} from '../models/education.js';

export const getCV = async (req, res) => {
  try {
    const person = await Person.findOne({
      include: [{
        model: Education,
        as: 'formacion'
      }]
    });

    if (!person) {
      return res.status(404).json({
        message: 'CV information not found'
      });
    }

    res.json({
      id: person.id,
      nombre: person.nombre,
      apellido: person.apellido,
      ciudad: person.ciudad,
      foto: person.foto,
      formacion: person.formacion.map(e => ({
        id: e.id,
        titulo: e.titulo,
        institucion: e.institucion,
        anio: e.anio
      }))
    });
  } catch (error) {
    console.error('Error getting CV:', error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};
