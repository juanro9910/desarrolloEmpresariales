import { Router } from "express";
import { consultarEstudiantes } from "../controllers/estudiantes.controller.js";
import { consultarEstudianteById } from "../controllers/estudiantes.controller.js";

const router = Router();

router.get('/estudiantes', consultarEstudiantes);

router.get('/estudiante/:id', consultarEstudianteById);

export default router;