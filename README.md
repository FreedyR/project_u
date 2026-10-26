# USOS 3.0

USOS 3.0 is a Vite-powered React frontend prototype for a university student
service portal. It presents a student dashboard with a responsive navigation
menu, class and exam information, announcements, grades, payments, lecture
registration, login, and a campus map.

The application is a static frontend demonstration. The screens currently use
hard-coded example content and do not connect to a backend or persist user
actions.

## Features

- Responsive student dashboard with:
  - upcoming classes
  - important announcements
  - upcoming exams
- Collapsible left-hand navigation with route-aware page headings.
- Class schedule cards with example lecture details.
- Drag-and-drop lecture registration prototype.
- Grades view with example grades and links represented by action buttons.
- Payment view for example dormitory and university payments.
- Login screen layout with identifier and password fields.
- Campus map rendered with React Leaflet and OpenStreetMap tiles.
- Responsive styling implemented with Tailwind CSS and project CSS.
- Image optimization during Vite builds.

## Routes

The frontend is a single-page application using React Router. Available paths
are:

| Path | Screen |
| --- | --- |
| `/` | Student dashboard (cockpit) |
| `/classes` | Class schedule |
| `/registration` | Lecture registration |
| `/grades` | Grades |
| `/payments` | Payments |
| `/campusMap` | Campus map |
| `/login` | Login |

The navigation and header are shared across the routed screens. The header
also displays the example student identity “Adam” and provides a logout control
that navigates to `/login`.

## Requirements

- Node.js with npm
- A modern browser with JavaScript enabled
- Network access when using the campus map, because map tiles are loaded from
  OpenStreetMap

The repository does not declare a specific Node.js version. Use a current
Node.js release compatible with the installed Vite and React versions.

## Installation

Clone the repository, enter the project directory, and install dependencies:

```bash
npm install
```

## Usage

Start the Vite development server:

```bash
npm run start
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

To preview a production build locally:

```bash
npm run build
npm run preview
```

The project also has a deployed prototype link:

<https://project-u.onrender.com/>

## Configuration

There are currently no environment variables, API keys, or application
configuration files required to run the frontend.

Build and development configuration is defined in `vite.config.js`:

- `@vitejs/plugin-react` enables React support.
- `@tailwindcss/vite` integrates Tailwind CSS.
- `vite-plugin-image-optimizer` optimizes PNG and WebP assets with quality 80
  during the Vite pipeline.

The campus map uses the OpenStreetMap tile URL
`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png` and includes the required
OpenStreetMap attribution in the page.

## Development workflow

1. Install dependencies with `npm install`.
2. Run `npm run start` while developing.
3. Make UI or routing changes under `src/`.
4. Run the linter and production build before submitting changes:

   ```bash
   npm run lint
   npm run build
   ```

5. Use `npm run preview` to inspect the generated production build.

The application entry point is `src/main.jsx`, which mounts `App` in React
Strict Mode. `src/App.jsx` loads the global styles, Leaflet styles, router, and
shared menu context. Vite generates the production output in `dist/`, which is
ignored by Git.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run start` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Serve the generated production build locally |

## Testing and quality checks

This repository does not contain automated unit, integration, or end-to-end
tests. The available automated checks are:

- `npm run lint` for ESLint validation.
- `npm run build` for production compilation and Vite asset processing.

Interactive behavior should currently be checked manually in a browser,
especially navigation, responsive layouts, drag-and-drop registration, and the
campus map.

## Project structure

```text
.
├── public/                 Static public assets
├── src/
│   ├── assets/             Images used by the interface
│   ├── components/         Shared header, navigation, dashboard, and UI pieces
│   ├── hooks/              Shared React context, including menu state
│   ├── misc/               Navigation category definitions
│   ├── pages/              Route-level page components
│   ├── App.css             Global layout and Leaflet container styles
│   ├── App.jsx             Router, shared layout, and providers
│   ├── index.css           Tailwind import and global button styling
│   └── main.jsx            React application entry point
├── eslint.config.js        ESLint configuration
├── index.html              Vite HTML entry document
├── package.json             Scripts and dependencies
├── package-lock.json        Locked npm dependency versions
└── vite.config.js           Vite, Tailwind, React, and image optimization setup
```

## Important limitations

- There is no backend, API layer, database, or authentication service.
- Dashboard content, classes, announcements, exams, grades, payment labels,
  and student details are static example data in React components.
- The login form does not submit credentials to a service, and the logout
  control only navigates to the login route.
- Payment buttons, grade resource buttons, schedule map buttons, and the
  registration controls are prototype UI elements; they do not complete
  transactions or load additional data.
- Lecture registration only demonstrates selecting a registration type and
  dragging one example lecture into a chosen area. It does not save a
  registration.
- The campus map is configured with a generic fixed center and zoom level, not
  real campus locations or user-specific data.
- Map rendering depends on the external OpenStreetMap tile service and its
  availability and usage policies.
- No automated tests are included, so regressions in interaction and visual
  layout require manual verification.
- Client-side routing is configured in the browser. A deployment serving
  history-based routes must be configured to fall back to `index.html`.
