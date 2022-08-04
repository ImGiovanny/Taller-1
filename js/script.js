console.log("Hola mundo");

let numero=25;

console.log("El numero es ", numero);
console.log(`El numero es ${numero}`);

let nombre="Giovanny";

console.log(`El nombre es ${nombre}`);

/*let res=numero+5;
console.log("El resultado es"+res);
console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+5}`);
*/
//window.alert("Esto es una alerta");
/*
let estado=window.confirm("Estas seguro de que quieres que aparezca esata alerta");
console.log(`La ventana arrojo ${estado}`);

let num1=prompt("Digite el primer numero");
let num2=prompt("Digite el segundo numero");
let res=numero+parseInt(num2);+parseInt(num1);
console.log(`El resultado es ${res}`);

//Condicionales
if(num1>num2){
    console.log(`El numero mayor es ${num1}`)
}
else{
    console-log(`El numero mayor es ${num2}`)
}

//operador ternario
let nummayor=(num>num2)
?"El numero mayor es el primero"
: "El numero es el segundo"

console.log(nummayor);
*/

//Con condicionales con condicion compuesta

let user=prompt("Digite su usuario");
let password=prompt("Digite su password");

if(user == "gio" && password == "12345"){
    alert('Bienvenido');
}else if(user == "gio" || password == "123456"){
    alert('Verifique su contraseña');
}else if(user == "gioss" || password == "12345"){
    alert('Verifique su usuario');
}else{
    alert('Credenciales de acceso incorrectas');
}
