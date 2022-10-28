var concepto = {
    id_concepto : "",
    mo_concepto : "",
    de_concepto : "",
    ti_concepto : ""
}

var empleado = {
    nombre : "",
    apellido : "",
    cedula : "",
    cargo : "",
    concepto : []
}

const cargo = [
    { de_cargo : "director", sa_cargo : 5000 },
    { de_cargo : "gerente", sa_cargo : 2500 },
    { de_cargo : "empleado", sa_cargo : 1000 },
]

const dataB = [];
var n = 0, t = 0;


const proc = (e) => {
    /* Descripcion de cada variable de entrada
        cargo i1, nombre i2, apellido i3, cedula i4, tipo de op i5
    */
    let i1 = document.getElementById("input1").options[input1.selectedIndex].text;
    let i2 = document.getElementById("input2").value;
    let i3 = document.getElementById("input3").value;
    let i4 = document.getElementById("input3").value;
    let i5 = document.getElementById("input5").options[input5.selectedIndex].text;

    n += 1;

    const calc = () => {
        if (i5 == "bonificacion") {
            t -= concepto.mo_concepto;  //la empresa pierde pero los empleados ganan
        } 
        else if (i5 == "deduccion") {
            t += concepto.mo_concepto;  //la empresa gana pero los empleados pierden
        }
    }

    const concept = () => {
        switch (i1) {
            case "director":
                return concepto = {
                    id_concepto : n,
                    mo_concepto : cargo[0].sa_cargo*0.55,
                    de_concepto : "Salario del director",
                    ti_concepto : i5
                }; break;
    
            case "gerente":
                return concepto = {
                    id_concepto : n,
                    mo_concepto : cargo[1].sa_cargo*0.35,
                    de_concepto : "Salario del gerente",
                    ti_concepto : i5
                }; break;
            
            case "empleado":
                return concepto = {
                    id_concepto : n,
                    mo_concepto : cargo[2].sa_cargo*0.15,
                    de_concepto : "Salario del empleado",
                    ti_concepto : i5
                }; break;
        
            default: console.log("error"); break;
        }
    };

    const employee = () => {

        empleado = { 
            nombre : i2, 
            apellido : i3, 
            cedula : i4,
            cargo : cargo[input1.selectedIndex],
            concepto : concept()
        }
        dataB.push(empleado)
    };

    concept();
    calc();
    employee();
    /* Otra forma de hacer desaparecer el texto en input
        const empty = document.getElementById("input2");
        empty.value = '';
    */
}

const show = (e) => {
    const showbox = document.createElement("div");
    showbox.className = "showbox";
    document.querySelector(".container").appendChild(showbox);
    

    for (let i = 0; i < dataB.length; i++) {
        const text = document.createElement("p");
       
        text.innerHTML = dataB[i].concepto.id_concepto + ". " + dataB[i].nombre + " " + dataB[i].apellido + ", " + dataB[i].cargo.de_cargo 
        + "<br/> con un salario de " + dataB[i].cargo.sa_cargo + ".Bs del cual maneja<br/>"
        + " un total de " + dataB[i].concepto.mo_concepto + ".Bs por " + dataB[i].concepto.ti_concepto.toString();

        showbox.appendChild(text);
    }
    /* .innertTEXT vs .innerHTML
        En este caso particular opte por usar .innerHTML para poder usar el salto de linea (breakpoint) <br/>
        el cual luego se convierte en un String para poder ser visualizada la nomina por HTML
    */
    
    const text = document.createElement("p");
    text.innerText = "Balance de la empresa: " + t;
    showbox.appendChild(text);
}