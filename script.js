const cedula = document.querySelector("#Cedula")
const boton = document.querySelector("#boton")

cedula.addEventListener('keypress', Guiones)
boton.addEventListener("click", Exito)

//Añadir guiones de la cedula.
function Quitarguiones(cedula){
    let arrayCedula = Array.from(cedula.value)
    arrayCedula = arrayCedula.filter(c => c != '-');
    let cedSinGiones = '';
    arrayCedula.forEach( num => {
        cedSinGiones += num
    });
    return cedSinGiones
}
function Exito(){
    alert("Registro satisfactorio!")

    setTimeout(() => 1250);
}
function Guiones(e){
    let key = window.event ? e.which : e.keyCode
    if(key < 48 || key > 57) {
        if(key != 46 && key !=45)
        {
            e.peventDefault();
        }
    }
    e.target.value.length === 3 ? e.target.value += '-' : e.target.value 
    e.target.value.length === 11 ? e.target.value += '-': e.target.value 
    e.target.value === '-' ? e.preventDefault() : e.target.value 
    e.target.value.length===13 ? e.preventDefault() : e.target.value
}