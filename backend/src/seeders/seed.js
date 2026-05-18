import {Person} from '../models/person.js';
import {Education} from '../models/education.js';
import logger from '../logs/logger.js';

export async function seedDatabase() {
  try {
    // Verificar si ya existen datos
    const existingPerson = await Person.findOne();
    
    if (existingPerson) {
      logger.info('Database already seeded. Skipping seed process.');
      return;
    }

    // Crear persona
    const person = await Person.create({
      nombre: 'Roberto',
      apellido: 'Garcia',
      ciudad: 'Mexico City',
      foto: 'https://images.pexels.com/photos/36773391/pexels-photo-36773391.jpeg'
    });

    logger.info('Person created:', person.id);

    // Crear formación académica
    await Education.bulkCreate([
      {
        titulo: 'Computer Systems Engineering',
        institucion: 'Technological University',
        anio: '2020',
        persona_id: person.id
      },
      {
        titulo: 'Master in Software Development',
        institucion: 'Institute of Technology',
        anio: '2022',
        persona_id: person.id
      },
      {
        titulo: 'Docker Specialization Course',
        institucion: 'Educational Platform',
        anio: '2023',
        persona_id: person.id
      }
    ]);

    logger.info('Education records created successfully');
    logger.info('Database seeded successfully!');

  } catch (error) {
    logger.error('Error seeding database:', error);
    throw error;
  }
}
