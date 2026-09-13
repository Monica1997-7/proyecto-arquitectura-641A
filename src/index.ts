import express from 'express';
/*¿Qué significa?
import → le estamos diciendo a TypeScript: “quiero utilizar algo que está en otro lugar”.
express → es la herramienta que instalamos para crear nuestro servidor.
'express' → indica que esa herramienta viene del paquete Express.

En palabras sencillas:

“Trae Express para que pueda utilizarlo en este archivo.”*/
const app = express(); //estamos creando nuestra aplicación/servidor a partir de Express.

app.get('/health', (req, res) =>{
    /*¿Qué significa?
app.get → le decimos a Express: “quiero crear una ruta para solicitudes GET”.
'/health' → es la dirección de esa ruta.
(req, res) → son dos objetos que Express nos entrega:
req = la solicitud que llega.
res = la respuesta que vamos a enviar.
=> → indica que después vamos a definir qué hacer cuando alguien visite esa ruta.*/
res.json({status: 'ok'});
/*¿Qué significa res.json()?

res es la respuesta que mencionamos antes.

json() significa que vamos a enviar una respuesta en formato JSON.
{
  "status": "ok" Es como decirle al navegador:
“Sí, el servidor está funcionando correctamente.”*/

});
const courses = [
{
            id: 1,
            title: 'Programación',
            capacity: 30
        },
        {
            id: 2,
            title: 'Bases de datos',
            capacity: 25
        },
        {
            id: 3,
            title: 'Desarrollo web',
            capacity: 20
        }
    ];
app.get('/courses', (req, res) =>{
    res.json(courses);
});
        

app.get('/courses/:id', (req, res) =>{
    const id = Number(req.params.id);

    const course = courses.find(course => course.id === id);
    if(!course){
        res.status(404).json({error: 'Curso no encontrado'});
        return;
    }
    res.status(200).json(course);
});

app.get('/version', (req, res) =>{
    res.json({ version: '1.0.0' })

});

app.listen(3000, () =>{
    /*Esto significa:

app.listen → pon a funcionar el servidor.
3000 → es el puerto donde lo vamos a ejecutar.
() => → indica qué hacer cuando el servidor haya arrancado.

Todavía falta cerrar esa parte y mostrar un mensaje en la terminal.*/
console.log('Servidor ejecutándose en http://localhost:3000');
});