//Esta es para nombre y apellidos ^[a-zA-ZÁ-ÿ\s]{1,40}$

//rela para numdoc y telefono ^\d{7,10}$

//regla correo ^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$

//Regla password ^(?=.+\d)(?=.*[#$%&!@])(?=*[a-z])(?=*[A-Z]).{8,}$

const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}$/, //solo letras
    numeros:/^\d{7,10}$/, //solo numeros
    correo:/^[a-zA-Z0-9_+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //correos
    password:/^(?=.+\d)(?=.*[#$%&!@])(?=*[a-z])(?=*[A-Z]).{8,}$/ //password 
}

let form=document.getElementById("frm-usuario");
let form=document.querySelectorAll("#frm-usuario input");

form.addEventListener('submit',e=>{
    e.preventDefault();
})

const ValidarCampos=(e)=>{
    console.log("Seguro genero un evento sobre el input");
    switch(e.target.name){
        case "numdoc":
            if(reglas.numeros.test(e.target.name)){
                document.getElementById('g-numdoc').classList.remove('error');
                document.getElementById('g-numdoc').classList.remove('sucess');
                document.getElementById('g-numdoc i').classList.remove('fa-circle-check');
                document.getElementById('g-numdoc i').classList.add('fa-circle-exclamation');
            }
            else{
                document.getElementById('g-numdoc i').classList.add('error');
                document.getElementById('g-numdoc i').classList.remove('success');
                document.getElementById('g-numdoc i').classList.remove('fa-circle-check');
                document.getElementById('g-numdoc i').classList.add('fa-circle-exclamation');
                document.getElementById('g-numdoc .msn-error').classList.add('msn-error-visible');
            }

        break;

        case "nombre":

        break;

        case "apellido":

        break;

        case "telefono":

        break;

        case "correo":

        break;

        case "password":

        break;
        default

            alert("No se recibio un evento sobre el input");
        break;
    }
}

campos.forEach((campo) => {
    
    campo.addEventListener("keyup", ValidarCampos);
    campo.addEventListener("blur", ValidarCampos);
    
});