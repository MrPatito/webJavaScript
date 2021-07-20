

$(() => {
    console.log('El DOM esta listo');
});


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
$(".selector").click((e) => {
    

    $("#selectProdu2").fadeIn();
    $("#selectProdu3").fadeIn();
    $("#selectProdu4").fadeIn();
    $("#selectProdu8").fadeIn();
    $("#selectProdu10").fadeIn();
    $("#vaciarCarrito").fadeIn();
})


//Declaramos la url que vamos a usar para el GET
const URLGET = "https://jsonplaceholder.typicode.com/posts"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">GET</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h3>${dato.title}</h3>
                                   <p> ${dato.body}</p>
                                  </div>`);
            }  
          }
    });
});



$("#selectProdu2").click((e) => { 
    $.get(URLGET, function (respuesta, estado){
        if(estado === "success"){
            let productoUno = respuesta
            prductoUno[producto][0]

            console.log(productoUno)

        }
    })
    carrito.push(dosci)
    carritoPrecio.push(dosci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${total}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
});

    


$("#selectProdu3").click((e) => { 
    
    carrito.push(treci)
    carritoPrecio.push(treci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)

    
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${total}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
});

$("#selectProdu4").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(cuatri)
    carritoPrecio.push(cuatri["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${total}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
});


$("#selectProdu8").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(ochi)
    carritoPrecio.push(ochi["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${total}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
});


$("#selectProdu10").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(milonga)
    carritoPrecio.push(milonga["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${total}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
});


$("#vaciarCarrito").click((e) => {
    const carrito = []
    const carritoPrecio = []
    console.log(carritoPrecio)

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)
    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
})


