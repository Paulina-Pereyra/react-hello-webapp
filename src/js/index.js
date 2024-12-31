//import react into the bundle
import React from 'react'
import {createRoot} from 'react-dom/client'


//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from './layout.js'

// Importar estilos CSS de Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importar scripts de Bootstrap (incluido Popper.js)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//
const root = createRoot(document.querySelector("#app"))

//render your react application
root.render(<Layout/>)

