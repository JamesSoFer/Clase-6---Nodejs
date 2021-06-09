const fs = require('fs')
let path = process.cwd();

const user = {
    "id": 1,
    "name": "John Doe",
    "age": 22
}

const data = JSON.stringify(user);

fs.writeFile(`${path}/holamundo.json`,data, function(err, data){
    if(err)
        return console.error(err)
    console.log("Archivo creado y salvado")
});

fs.appendFile(`${path}/holamundo.txt`,"Hola Mundo \ny grupo", function(err, data){
    if(err)
        return console.error(err)
    console.log("Se ha actualizado el archivo")
});

fs.readFile(`${path}/holamundo.txt`,'utf8', function(err, data){
    if(err)
        return console.error(err)
    console.log(data)
    console.log(JSON.stringify(data))
})

fs.open(`${path}/nuevoarchivo.txt`,'w', function(err, data){
    if(err)
        return console.error(err)
    
    fs.write(fd, 'Esta es mi primera linea', 'utf8', function(err){
        if(err)
            return console.error(err)
    })
})

fs.unlink(`${path}/nuevoarchivo.txt`, function(err, data){
    if(err)
        return console.error(err)
    console.log("Se ha eliminado el archivo")
});
