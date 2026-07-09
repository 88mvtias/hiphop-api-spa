#  HipHop 90 Api - 90s Rap Single Page Application

SPA desarrollada con **React** y **Vite** para consultar información sobre la época dorada del Hip-Hop de los 90s y 2000s.

##  Cumplimiento de Pauta

1. **React:** SPA creada bajo arquitectura moderna de React.
2. **Componentes:** Dividido en `Header`, `ArtistList` y `ArtistCard`.
3. **Consumo de API:** Petición asíncrona mediante `fetch`, `async` y `await` consumiendo `/data/raperos.json`.
4. **Hooks Utilizados:**
   - `useState`: Manejo del listado, filtros, preferencia de tema y nombre de usuario.
   - `useEffect`: Carga inicial de datos de la API y sincronización con almacenes locales.
   - `useMemo`: Filtrado eficiente en memoria según la categoría elegida (Solista / Grupo).
5. **Persistencia (Puntos Extras):**
   - **localStorage:** Almacena el nombre del usuario de forma persistente.
   - **Cookies:** Almacena la preferencia del tema (oscuro/claro).
6. **Git / Conventional Commits (Puntos Extras):** Historial de subidas con estándar de commits (`feat:`, `style:`, `docs:`).

##  Instalación y Ejecución

```bash
npm install
npm run dev