export const consultarEstudiantes = async (req,res) => {
    try {
        console.log('Se ejecuto el controlador de consultar estudiante');
        return res.status(200).json({
            messaje: 'consulta esxitosa'
        });
    } catch (error) {
        return res.status(400).json({
            messaje: 'consulta NO esxitosa'
        });
    }
}