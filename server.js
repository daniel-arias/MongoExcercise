const bodyParser = require('body-parser')
const routes = require('./routes');
const express = require('express');
const dotEnv = require('dotenv');
const {connectionDb, Inmueble} = require('./mongo');
const { promises } = require('fs');
dotEnv.config();

const server = express();
server.use(bodyParser.json())

connectionDb().then(() =>{
    console.log('Connected to DB');

    FillDataBase();

    server.listen(3100, () => {
        console.log('Start Server...');
    })
    
})
.catch((err) => {console.log(err);} );

routes(server);


async function FillDataBase() {

    const first = process.env.PRIMERA_VEZ
    await Promise.all([Inmueble.deleteMany({})]);

    if(first === '0') 
    {
        const inm1 = new Inmueble(
            {
                Operacion: "Venta",
                Tipo: "Apartamento",
                Direccion: "calle 123 # 4 - 5",
                Fotos: "foto1.jpg",
                Ambientes: "salacomedor, baño, dormitorio",
                Metros: 30,
                Descripcion: "amplio apartamento ubicado en zona universitaria",
                Propietario: "propietario1"
            }
        );
    
        const inm2 = new Inmueble(
            {
                Operacion: "Arriendo",
                Tipo: "Casa",
                Direccion: "carrera 456 # 7 - 8",
                Fotos: "foto1.jpg",
                Ambientes: "sala, comedor, baño, dormitorio, patio, cuarto visitante, estudio, parqueadero",
                Metros: 110,
                Descripcion: "Linda casa iluminada en zona tranquila residencial",
                Propietario: "propietario2"
            }
        );
    
        await inm1.save();    
        await inm2.save();

    }
}

