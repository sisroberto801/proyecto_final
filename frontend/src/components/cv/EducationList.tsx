import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box } from '@mui/material';
import { School } from '@mui/icons-material';
import type { Formacion } from '../../interfaces/cv';

interface EducationListProps {
  formacion: Formacion[];
}

const EducationList: React.FC<EducationListProps> = ({ formacion }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
          <School sx={{ mr: 1 }} />
          Formación Académica
        </Typography>
        <List>
          {formacion.map((edu) => (
            <ListItem key={edu.id} sx={{ flexDirection: 'column', alignItems: 'flex-start', py: 2 }}>
              <Box>
                <Typography variant="h6" component="h3">
                  {edu.titulo}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {edu.institucion}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.anio}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default EducationList;
