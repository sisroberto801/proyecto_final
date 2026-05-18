import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import type { CVData } from '../../interfaces/cv';

interface PersonalDataCardProps {
  persona: CVData;
}

const PersonalDataCard: React.FC<PersonalDataCardProps> = ({ persona }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', mb: 4 }}>
      <CardContent sx={{ textAlign: 'center', py: 4 }}>
        <Avatar
          src={persona.foto}
          alt={`${persona.nombre} ${persona.apellido}`}
          sx={{ width: 120, height: 120, margin: 'auto', mb: 2 }}
        />
        <Typography variant="h4" component="h1" gutterBottom>
          {persona.nombre} {persona.apellido}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {persona.ciudad}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonalDataCard;
