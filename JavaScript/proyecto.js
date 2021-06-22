


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
function agDosItems(){
    
    for (let i = 1; i<5; i++){
        let producto = prompt("Seleccione el producto colocando un numero segun corresponda:\n 1 = 200w;\n 2 = 300w;\n 3 = 400w;\n 4 = 800w;\n 5 = 1000w");
        let productoParse = parseInt(producto);
        
    
        function agItem (){
            if (productoParse === 1){
                carrito.push(dosci)
              
            }
            else if (productoParse === 2){
                carrito.push(treci)
                
            }
            else if (productoParse === 3){
                carrito.push(cuatri)
             
            }
            else if (productoParse === 4){
                carrito.push(ochi)
                
            }
            else if (productoParse === 5){
                carrito.push(milonga)
                
            }
            else if (productoParse === 0){
                return(0)
            }
        
        }
        agItem()
        
        function agPrecio (){
            if (productoParse === 1){
                carritoPrecio.push(dosci["precio"])
              
            }
            else if (productoParse === 2){
                carritoPrecio.push(treci["precio"])
                
            }
            else if (productoParse === 3){
                carritoPrecio.push(cuatri["precio"])
             
            }
            else if (productoParse === 4){
                carritoPrecio.push(ochi["precio"])
                
            }
            else if (productoParse === 5){
                carritoPrecio.push(milonga["precio"])
                
            }
            else if (productoParse === 0){
                return(0)
            }
        
        }
        agPrecio()
    }
}


agDosItems()

for (const modelo of carrito){
    alert("Perfecto... Seleccionaste los siguientes modelos" + " " + modelo.watts) 
    console.log(modelo.watts)
   
    console.log(modelo["precio"]);
    
    
}
let precioTotal = modelo(precio[0]) + modelo(precio[1]) + modelo(precio[2]) + modelo(precio[3]);
console.log(precioTotal)
carritoPrecio.sort();
console.log(carritoPrecio);

for (const modelo of carrito){
let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h6> ${carritoPrecio}</h6>`;
    document.body.appendChild(contenedor);
}


