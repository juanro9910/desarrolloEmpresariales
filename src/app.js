import express  from "express";
import cors  from "cors";
import estudianteRoutes from "./routes/estudiantes.routes.js";

//aceptar peticion desde cualquier origen
const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());

//rutas  api
app.use('/api', estudianteRoutes);

//si no hay un param devuelve error 
app.use((req, res, next)=>{
    console.log("Ruta no encontrada");
    res.status(404).json({ message: 'Ruta no encontrada'})
})

export default app;