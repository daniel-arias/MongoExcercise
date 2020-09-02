const {Inmueble} = require('./mongo');

const routes = (server) =>
{
    server.get('/inmuebles', (req, res) =>
    {
        Inmueble.find().then(
            function (resultados)
            {                
                res.status(200)
                .json(resultados);
            }
        )
        .catch(
            (err) => {
                res.status(400)
                .send('no se encontraron inmuebles ' + err)
            });
    });

//     server.post('/inmuebles/crear', (req, res) =>
//     {
//         Inmueble.
//     });
}

module.exports = routes;