import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import { useCV } from '../hooks/useCV';
import type { CVData } from '../interfaces/cv';
import PersonalDataCard from '../components/cv/PersonalDataCard';
import EducationList from '../components/cv/EducationList';

const CVPage: React.FC = () => {
  const [cvData, setCVData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCVData = async () => {
      try {
        setLoading(true);
        const data = await useCV.getCVData();
        setCVData(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar los datos del CV. Por favor, intente más tarde.');
        console.error('Error fetching CV data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCVData();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Cargando información del CV...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!cvData) {
    return (
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Alert severity="info">No se encontraron datos del CV.</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Mi Currículum Vitae
      </Typography>
      
      <PersonalDataCard persona={cvData} />
      
      <EducationList formacion={cvData.formacion} />
    </Container>
  );
};

export default CVPage;
