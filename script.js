


async function consultarCocktail() {
    let nombreCocktail = document.getElementById("cocktail").value;

    let resultado = await fetch(`https://localhost:7170/api/Cocktail/buscar/${nombreCocktail}`);
    console.log(resultado);
    let data = await resultado.json();
    mostrarCocktel(data);
}


async function aleatorioCocktail(){
    let resultado = await fetch(`https://localhost:7170/api/Cocktail/aleatorio`);
    console.log(resultado);
    let data = await resultado.json();
    mostrarCocktel(data);
}


async function todosCocktail(){
    let resultado = await fetch(`https://localhost:7170/api/Cocktail/todos`);
    console.log(resultado);
    let data = await resultado.json();
    mostrarTodosCocktail(data);
}

function mostrarTodosCocktail(data) {
    console.log(data);
    let container = document.getElementById('cocktail-info');
    container.innerHTML = "";//borra los datos previos del container
    data.forEach(cocktail => {
        let resultado = document.createElement('div');
        resultado.className = 'resultado';
        container.appendChild(resultado);
         
        let foto = document.createElement('img');
        foto.className = 'resultado-foto'; 
        foto.src = cocktail.fotoSrc;
        resultado.appendChild(foto);
    
        let nombre = document.createElement('p');
        nombre.innerHTML = `<strong>Nombre:</strong> ${cocktail.nombre}`;
        nombre.className = 'resultado_texto';
        resultado.appendChild(nombre);
    
    
        let receta = document.createElement('p');
        receta.innerHTML = `<strong>Receta:</strong> ${cocktail.receta}`;
        receta.className = 'resultado_texto';
        resultado.appendChild(receta);
    });
}





function mostrarCocktel (data){

    console.log(data);
    
    let container = document.getElementById('cocktail-info');

    container.innerHTML = "";//borra los datos previos del container
    let resultado = document.createElement('div');
    resultado.className = 'resultado';
    container.appendChild(resultado);
     
    let foto = document.createElement('img');
    foto.className = 'resultado-foto'; 
    foto.src = data.fotoSrc;
    resultado.appendChild(foto);

    let nombre = document.createElement('p');
    nombre.innerHTML = `<strong>Nombre:</strong> ${data.nombre}`;
    nombre.className = 'resultado_texto';
    resultado.appendChild(nombre);


    let receta = document.createElement('p');
    receta.innerHTML = `<strong>Receta:</strong> ${data.receta}`;
    receta.className = 'resultado_texto';
    resultado.appendChild(receta);


}