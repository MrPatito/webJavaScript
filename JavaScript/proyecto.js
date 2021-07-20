

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


//URL JSON PLACEHOLDER
const URLGET = "https://jsonplaceholder.typicode.com/posts"

//BOTON
$(".pruebaAJAX").prepend('<button id="btn1">buscar usuario</button>');

//ESCUCHAR EVENTO
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
            $("div").remove(".reestablecer")
            if(estado === "success"){
            console.log(respuesta[5])
            let misDatos = respuesta[0]
              $(".pruebaAJAX").prepend(`<div class="reestablecer">
                                   <h3>${misDatos.title}</h3>
                                   <p> ${misDatos.body}</p>
                                  </div>`);
            
          

        }
    });
});

$("#selectProdu2").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(dosci)
    carritoPrecio.push(dosci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));
    localStorage.setItem("total", JSON.stringify(total))

    let totalJson = localStorage.getItem('total')
    totalPrecio = JSON.parse(totalJson)

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)


    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);

    $("#vaciarCarrito").click(() => {
        carrito.length = 0
        carritoPrecio.length = 0
        total = 0
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

        let totalJson = localStorage.getItem('total')
        totalPrecio = JSON.parse(totalJson)
                       
        let carritoP = localStorage.getItem('carrito')
        carritoPParse = JSON.parse(carritoP)

        console.log(carrito)
        console.log(carritoPrecio)
        console.log(carritoP)
        console.log(total)
        
        $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
    })
});

$("#selectProdu3").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(treci)
    carritoPrecio.push(treci["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));
    localStorage.setItem("total", JSON.stringify(total))

    let totalJson = localStorage.getItem('total')
    totalPrecio = JSON.parse(totalJson)

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)


    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);

    $("#vaciarCarrito").click(() => {
        carrito.length = 0
        carritoPrecio.length = 0
        total = 0
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

        let totalJson = localStorage.getItem('total')
        totalPrecio = JSON.parse(totalJson)
                       
        let carritoP = localStorage.getItem('carrito')
        carritoPParse = JSON.parse(carritoP)

        console.log(carrito)
        console.log(carritoPrecio)
        console.log(carritoP)
        console.log(total)
        
        $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
    })
});

$("#selectProdu4").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(cuatri)
    carritoPrecio.push(cuatri["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));
    localStorage.setItem("total", JSON.stringify(total))

    let totalJson = localStorage.getItem('total')
    totalPrecio = JSON.parse(totalJson)

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)


    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);

    $("#vaciarCarrito").click(() => {
        carrito.length = 0
        carritoPrecio.length = 0
        total = 0
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

        let totalJson = localStorage.getItem('total')
        totalPrecio = JSON.parse(totalJson)
                       
        let carritoP = localStorage.getItem('carrito')
        carritoPParse = JSON.parse(carritoP)

        console.log(carrito)
        console.log(carritoPrecio)
        console.log(carritoP)
        console.log(total)
        
        $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
    })
});

$("#selectProdu8").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(ochi)
    carritoPrecio.push(ochi["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));
    localStorage.setItem("total", JSON.stringify(total))

    let totalJson = localStorage.getItem('total')
    totalPrecio = JSON.parse(totalJson)

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)


    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);

    $("#vaciarCarrito").click(() => {
        carrito.length = 0
        carritoPrecio.length = 0
        total = 0
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

        let totalJson = localStorage.getItem('total')
        totalPrecio = JSON.parse(totalJson)
                       
        let carritoP = localStorage.getItem('carrito')
        carritoPParse = JSON.parse(carritoP)

        console.log(carrito)
        console.log(carritoPrecio)
        console.log(carritoP)
        console.log(total)
        
        $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
    })
});

$("#selectProdu10").click((e) => { 
    $("#vaciarCarrito").fadeIn();
    carrito.push(milonga)
    carritoPrecio.push(milonga["precio"])
    let total = carritoPrecio.reduce((a, b) => a + b, 0);

    localStorage.setItem("carrito", JSON.stringify(carritoPrecio));
    localStorage.setItem("total", JSON.stringify(total))

    let totalJson = localStorage.getItem('total')
    totalPrecio = JSON.parse(totalJson)

    let carritoP = localStorage.getItem('carrito')
    carritoPParse = JSON.parse(carritoP)


    console.log(carrito)
    console.log(carritoPrecio)
    console.log(carritoP)
    console.log(carritoPParse)
   
    $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);

    $("#vaciarCarrito").click(() => {
        carrito.length = 0
        carritoPrecio.length = 0
        total = 0
        localStorage.setItem("total", JSON.stringify(total))
        localStorage.setItem("carrito", JSON.stringify(carritoPrecio));

        let totalJson = localStorage.getItem('total')
        totalPrecio = JSON.parse(totalJson)
                       
        let carritoP = localStorage.getItem('carrito')
        carritoPParse = JSON.parse(carritoP)

        console.log(carrito)
        console.log(carritoPrecio)
        console.log(carritoP)
        console.log(total)
        
        $("#respuesta").html(`<div class="monto">
                          <h2>El total de su carrito es: </h2>
                          <p>$${totalPrecio}</p>
                          </div>
                          <div class="selector">
                          <button type="button" class="btn btn-default" id="vaciarCarrito">Descartar productos</button>
                          </div>`);
    })
});


