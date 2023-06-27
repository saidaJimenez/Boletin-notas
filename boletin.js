let notas = [7,4,2,9,6];

function ListadoNotas () {
    let lista = document.getElementById("listaNotas");

    for(let nota of notas) {
        let item= document.createElement("li");
        item.innerText = nota;
        lista.appendChild(item);
    }
}

function calcularPromedio(){
    let suma = 0 ;
    for(i = 0; i < 5; i++) {
        suma += notas[i];

    }
    let promedio = (suma/ 5)
    document.getElementById("promedio").textContent= promedio;

}

function notaMasAlta(){
let notaAlta= 0 ;
let i = 0;
while( i  < 5) {
    if( notas[i] > notaAlta) {
        notaAlta = notas[i]
    } 
    i++;
}
document.getElementById("nota").textContent = notaAlta;
}


function hayAplazo() {
    let aplazo = "No";
    let i = 0;
    do{
        if(notas[i] < 4){
            aplazo = "Si"
            break;
        }
        i++;
    } while ( i < 5 )
    document.getElementById("aplazo").textContent = aplazo
}