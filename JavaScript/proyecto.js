


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

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    
    document.getElementById("respuesta").innerHTML = 
    `<h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}
    


let boton3 = document.getElementById("selectProdu3")
boton3.onclick = () =>{carrito.push(treci)
    carritoPrecio.push(treci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
    
    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}

let boton4 = document.getElementById("selectProdu4")
boton4.onclick = () =>{carrito.push(cuatri)
    carritoPrecio.push(cuatri["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)

    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}

let boton8 = document.getElementById("selectProdu8")
boton8.onclick = () =>{carrito.push(ochi)
    carritoPrecio.push(ochi["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)

    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}

let boton10 = document.getElementById("selectProdu10")
boton10.onclick = () =>{carrito.push(milonga)
    carritoPrecio.push(milonga["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);
    console.log(total);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)

    document.getElementById("respuesta").innerHTML = `
    <h2>El total de su carrito es: </h2>
    <p>$${total}</p>`}





console.log(total);



