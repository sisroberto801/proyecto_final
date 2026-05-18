# Proyecto Final - Módulo VIII


## Arquitectura
- **Frontend**: React + Nginx
- **Backend**: Node.js + Express + Sequelize
- **Base de Datos**: MySQL 8.0
- **Contenedorización**: Docker + Docker Compose

## 👤 Datos del Estudiante
- **Nombre:** Roberto Carlos Olguin Ledezma
- **Fecha:** Mayo 2026

## 🔗 Enlaces del Proyecto
- **Backend**: [Repositorio Backend](https://github.com/tu-usuario/proyecto-final-backend)
- **Frontend**: [Repositorio Frontend](https://github.com/tu-usuario/proyecto-final-frontend)

## Estructura
```
proyecto_final/
├── backend/          # API REST
├── frontend/         # Aplicación React
├── database/         # Scripts MySQL
├── docker-compose.yml
└── README.md
```

## Configuración del Entorno

### Variables de Entorno
Copia el archivo `.env.sample` a `.env` y configura las variables:

```env
# Servidor
PORT=4000

# Base de Datos MySQL
DB_HOST=database          # Para Docker
DB_HOST=localhost         # Para desarrollo local
DB_PORT=3306
DB_USER=cv_user
DB_PASSWORD=12345
DB_DATABASE=diplomado_db
DB_DIALECT=mysql
DB_USE_SSL=false

# Autenticación
BCRYPT_SALT_ROUNDS=10
JWT_SECRET=secret
JWT_EXPIRES_SECOND=15*60
```

## Instalación y Ejecución

### Opción 1: Con Docker (Recomendado)
```bash
# Construir y ejecutar todos los servicios
docker-compose up

# O en modo detached
docker-compose up -d
```

### Opción 2: Desarrollo Local
```bash
# 1. Iniciar solo la base de datos con Docker
docker-compose up database -d

# 2. Configurar .env para desarrollo local
DB_HOST=localhost

# 3. Instalar dependencias y ejecutar backend
cd backend
npm install
npm run start:dev

# 4. Ejecutar frontend (en otra terminal)
cd frontend
npm install
npm start
```

## Comandos Útiles

### Docker
```bash
# Ver logs de contenedores
docker-compose logs -f

# Detener servicios
docker-compose down

# Eliminar contenedores + volúmenes + imágenes
docker-compose down -v --rmi all

# Reconstruir imágenes
docker-compose build --no-cache
```

### Publicar imágenes en Docker Hub
```bash
# Construir imágenes locales
docker build -t olguin-backend:v1 ./backend
docker build -t olguin-frontend:v1 ./frontend

# Taggear con username de Docker Hub
docker tag olguin-backend:v1 sisroberto801/olguin-backend:v1
docker tag olguin-frontend:v1 sisroberto801/olguin-frontend:v1

# Login y publicar
docker login
docker push sisroberto801/olguin-backend:v1
docker push sisroberto801/olguin-frontend:v1
```

## Puertos
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- MySQL: localhost:3306

## Troubleshooting

### Error: "getaddrinfo ENOTFOUND database"
- **Causa**: Backend local con `DB_HOST=database`
- **Solución**: Cambiar a `DB_HOST=localhost` o usar Docker

### Error: "Access denied for user"
- Verificar credenciales en `.env`
- Asegurar que el usuario `cv_user` existe en MySQL
