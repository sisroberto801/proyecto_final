import axios from 'axios';
import type {CVData} from '../interfaces/cv';

export const useCV = {
  async getCVData(): Promise<CVData> {
    try {
      const response = await axios.get('/cv');
      return response.data;
    } catch (error) {
      console.error('Error fetching CV data:', error);
      throw error;
    }
  },
};
