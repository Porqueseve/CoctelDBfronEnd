


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





function mostrarCocktel (data){

    console.log(data);
    
    let contenedor = document.getElementById('cocktail-info');

    contenedor.innerHTML = "";//borra los datos previos del contenedor
    let resultado = document.createElement('div');
    resultado.className = 'resultado';
    contenedor.appendChild(resultado);
     
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
 