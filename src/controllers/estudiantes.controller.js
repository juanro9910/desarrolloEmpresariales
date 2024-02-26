import db from "../db/mysql.js";


export const consultarEstudiantes = async (req,res) => {
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