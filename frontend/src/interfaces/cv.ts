export interface Formacion {
  id: number;
  titulo: string;
  institucion: string;
  anio: string;
}

export interface CVData {
  id: number;
  nombre: string;
  apellido: string;
  ciudad: string;
  foto: string;
  formacion: Formacion[];
}
