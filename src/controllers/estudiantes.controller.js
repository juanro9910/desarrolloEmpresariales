import db from "../db/mysql.js";

// consulta todos los estudiante
export const consultarEstudiantes = async (req, res) => {
    try {
        // console.log('Se ejecuto el controlador de consultar estudiante');
        db.query('SELECT * FROM estudiantes', (error, results, fields) => {
            if (error) {
                // console.error('Error en la consulta: ', error);
                return res.status(500).json({
                    message: 'Error en la consulta',
                    error: error
                });
            } else {
                // console.log('Registros obtenidos:', results);
                return res.status(200).json({
                    message: 'Consulta exitosa',
                    results: results
                });
            }
        });
    } catch (error) {
        // console.error('Error en el bloque catch: ', error);
        return res.status(400).json({
            message: 'Consulta no exitosa',
            error: error
        });
    }
}

// consulta por id estudiante
export const consultarEstudianteById = async (req, res) => {
    const estudianteId = req.params.id;
    try {
        // console.log('Se ejecuto el controlador de consultar estudiante');
        db.query('SELECT * FROM estudiantes WHERE idestuadiantes = ?', [estudianteId], (error, results, fields) => {
            if (error) {
                // console.error('Error en la consulta: ', error);
                return res.status(500).json({
                    message: 'Error en la consulta',
                    error: error
                });
            } else {
                // console.log('Registros obtenidos:', results);
                return res.status(200).json({
                    message: 'Consulta exitosa',
                    results: results
                });
            }
        });
    } catch (error) {
        // console.error('Error en el bloque catch: ', error);
        return res.status(400).json({
            message: 'Consulta no exitosa',
            error: error
        });
    }
}