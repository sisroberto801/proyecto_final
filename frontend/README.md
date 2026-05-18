# 📝 Portafolio Personal: Currículum Vitae Online

## 👤 Datos del Estudiante
**Nombre:** Roberto Carlos Olguin Ledezma  
**Fecha:** Mayo 2026

---

Aplicación web de "Currículum Vitae" desarrollada con React, TypeScript y Material-UI, que permite mostrar información profesional de forma interactiva y moderna mediante una API externa.

## 🚀 Funcionalidades Implementadas

### ✅ Visualización de CV
- **Datos Personales**: Tarjeta interactiva con información de contacto y perfil profesional
- **Formación Académica**: Listado dinámico de estudios y certificaciones
- **Experiencia Laboral**: Sección detallada de trayectoria profesional
- **Habilidades**: Visualización de competencias técnicas y blandas

### 🎨 Interfaz de Usuario
- Diseño moderno y profesional con Material-UI
- Tarjetas elegantes para cada sección del CV
- Navegación intuitiva y responsiva
- Estados de carga y manejo de errores
- Tema personalizado con colores profesionales

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.2.5 + TypeScript
- **UI Framework**: Material-UI (MUI) v9.0.0
- **HTTP Client**: Axios para consumo de API externa
- **Validación**: Zod para tipado y validación de datos
- **Enrutamiento**: React Router DOM para navegación
- **Build Tool**: Vite
- **Testing**: Playwright
- **Despliegue**: GitHub Pages

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── cv/                  # Componentes del CV
│       ├── PersonalDataCard.tsx    # Tarjeta de datos personales
│       ├── EducationList.tsx       # Listado de formación académica
│       └── index.ts               # Exportación de componentes
├── hooks/
│   └── useCV.ts            # Hook personalizado para API del CV
├── lib/
│   └── axiosCliente.ts       # Configuración de Axios
├── interfaces/
│   └── cv.ts                # Tipos de datos del CV
├── pages/
│   └── CVPage.tsx           # Página principal del CV
├── routes/
│   └── AppRouter.tsx        # Configuración de rutas
└── config/
    └── env.ts               # Variables de entorno
```

## 🔗 Integración con API

La aplicación se integra con una API externa para obtener los datos del CV mediante el siguiente endpoint:

- `GET /cv` - Obtener todos los datos del CV (información personal y formación académica)

## 🚀 Instalación y Ejecución

### Prerequisites
- Node.js 18+
- npm o yarn

### Pasos
1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/sisroberto801/frontend.git
   cd frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.sample .env
   # Editar .env con la URL de la API si es necesario
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en: http://localhost:3000/

5. **Construir para producción**
   ```bash
   npm run build
   ```

6. **Previsualizar producción**
   ```bash
   npm run preview
   ```

## 🌐 Despliegue

### GitHub Pages
El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

```bash
npm run deploy
```

### Variables de Entorno en Producción
- `VITE_API_URL=http://localhost:4000`: URL de la API (configurada para producción)

## 🧪 Testing

El proyecto incluye configuración para Playwright:

```bash
npm run test
npm run test:ui
```

## 📝 Licencia

Proyecto profesional desarrollado como portafolio personal y currículum vitae online.

---

**Enlaces del Proyecto:**
- 📁 **Repositorio**: https://github.com/sisroberto801/frontend
