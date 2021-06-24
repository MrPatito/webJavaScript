


function modelo (dimensiones, cantLed, watts, precio){
    this.dimensiones = dimensiones;
    this.cantLed = cantLed;
    this.watts = watts;
    this.precio = parseInt(precio)
}

modelo();
const dosci = new modelo ("25cm X 13cm X 5cm", "4 unidades", "200 Watts", "12000")
const treci = new modelo ("35cm X 13cm X 5cm", "6 unidades", "300 Watts", "17000")
const cuatri = new modelo ("50cm X 15cm X 7cm", "8 unidades", "400 Watts", "23000")
const ochi = new modelo ("75cm X 15cm X 7cm", "16 unidades", "800 Watts", "27000")
const milonga = new modelo ("100cm X 15cm X 7cm", "18 unidades", "1000 Watts", "33000")

const carrito = []
const carritoPrecio = []
let total = carritoPrecio.reduce((a, b) => a + b, 0);

//Let Botones


let boton2 = document.getElementById("selectProdu2")
boton2.onclick = () =>{carrito.push(dosci)
    carritoPrecio.push(dosci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);
    
    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}
    


let boton3 = document.getElementById("selectProdu3")
boton3.onclick = () =>{carrito.push(treci)
    carritoPrecio.push(treci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);
    
    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}

let boton4 = document.getElementById("selectProdu4")
boton4.onclick = () =>{carrito.push(cuatri)
    carritoPrecio.push(cuatri["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}

let boton8 = document.getElementById("selectProdu8")
boton8.onclick = () =>{carrito.push(ochi)
    carritoPrecio.push(ochi["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}

let boton10 = document.getElementById("selectProdu10")
boton10.onclick = () =>{carrito.push(milonga)
    carritoPrecio.push(milonga["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}





console.log(total);

    // function agDosItems(){
    
//     for (let i = 1; i<5; i++){
//         let producto = prompt("Seleccione el producto colocando un numero segun corresponda:\n 1 = 200w;\n 2 = 300w;\n 3 = 400w;\n 4 = 800w;\n 5 = 1000w");
//         let productoParse = parseInt(producto);
        
    
//         function agItem (){
//             if (productoParse === 1){
//                 carrito.push(dosci)
              
//             }
//             else if (productoParse === 2){
//                 carrito.push(treci)
                
//             }
//             else if (productoParse === 3){
//                 carrito.push(cuatri)
             
//             }
//             else if (productoParse === 4){
//                 carrito.push(ochi)
                
//             }
//             else if (productoParse === 5){
//                 carrito.push(milonga)
                
//             }
//             else if (productoParse === 0){
//                 return(0)
//             }
        
//         }
//         agItem()
        
//         function agPrecio (){
//             if (productoParse === 1){
//                 carritoPrecio.push(dosci["precio"])
              
//             }
//             else if (productoParse === 2){
//                 carritoPrecio.push(treci["precio"])
                
//             }
//             else if (productoParse === 3){
//                 carritoPrecio.push(cuatri["precio"])
             
//             }
//             else if (productoParse === 4){
//                 carritoPrecio.push(ochi["precio"])
                
//             }
//             else if (productoParse === 5){
//                 carritoPrecio.push(milonga["precio"])
                
//             }
//             else if (productoParse === 0){
//                 return(0)
//             }
        
//         }
//         agPrecio()
//     }
// }


// agDosItems()

// for (const modelo of carrito){
//     alert("Perfecto... Seleccionaste los siguientes modelos" + " " + modelo.watts) 
//     console.log(modelo.watts)
   
//     console.log(modelo["precio"]);
       
// }


// let precioTotal = carritoPrecio[0] + carritoPrecio[1] + carritoPrecio[2] + carritoPrecio[3];
// console.log(precioTotal)
// carritoPrecio.sort();
// console.log(carritoPrecio);







// for(let element of misProductos){
    
//     let div = document.createElement('div');

//     div.className = 'card '

//     div.innerHTML = `
//     <img class="img-fluid center" src=${element.img}>
//     <h2>${element.titulo}</h2>
//     <p>${element.precio}</p>
//     <button class="btn btn-danger">Agregar al carrito</button>`

//     console.log(div);

//     section.appendChild(div);

// }