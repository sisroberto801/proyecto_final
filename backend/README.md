# API CV con Express y Swagger

Proyecto de API REST para gestión de CV desarrollado con Node.js, Express, Sequelize y documentación Swagger/OpenAPI 3.0.

## 👤 Datos del Estudiante
- **Nombre:** Roberto Carlos Olguin Ledezma
- **Fecha:** Mayo 2026

## 🚀 Características

- **API simplificada** para gestión de CV
- **Base de datos** MySQL con Sequelize ORM
- **Documentación automática** con Swagger UI
- **Logging** con Pino y Morgan
- **Datos personales** y formación académica
- **Seeders** para datos iniciales

## 📋 Requisitos

- Node.js 18+
- MySQL
- Variables de entorno configuradas

# 📚 Documentación de la API

Accede a la documentación interactiva en:

- **Swagger UI**: http://localhost:4000/api-docs

## 📋 Endpoints

### 📄 CV

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/cv` | Obtener CV completo | ❌ |

## 🗄️ Base de Datos

### Tablas
- **persona**: Datos personales (nombre, apellido, ciudad, foto)
- **formacion**: Formación académica (título, institución, año)

### Relaciones
- `persona` tiene muchas `formacion`
- `formacion` pertenece a `persona`

## 🔧 Configuración

### Variables de Entorno
```env
PORT=4000

DB_PORT=3306
DB_HOST=database
DB_USER=cv_user
DB_PASSWORD=12345
DB_DATABASE=diplomado_db
DB_DIALECT=mysql
DB_USE_SSL=false

BCRYPT_SALT_ROUNDS=10

JWT_SECRET=secret
JWT_EXPIRES_SECOND=15*60
```

### Configuración para Docker

Cuando no se ejecute desde docker-compose es requerido tener esto:
```env
DB_HOST=localhost
DB_USER=root
```

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**
```bash
git clone https://github.com/sisroberto801/backend.git
cd backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.sample .env
# Editar .env con tus credenciales
```

4. **Crear base de datos**
```sql
CREATE DATABASE diplomado_db;
```

5. **Iniciar la aplicación**
```bash
npm run start:dev
```

## 📝 Ejemplo de Respuesta

```json
{
  "id": 1,
  "nombre": "Roberto",
  "apellido": "Garcia",
  "ciudad": "Mexico City",
  "foto": "https://via.placeholder.com/150",
  "formacion": [
    {
      "id": 1,
      "titulo": "Computer Systems Engineering",
      "institucion": "Technological University",
      "anio": "2020"
    }
  ]
}
```