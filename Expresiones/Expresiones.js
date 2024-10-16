// let palabra = "Lorem ipsum DOLOR  sit ressete ODIO amet ODIO odio odio consectetur,RESSETETE adipisicing elit. Facere sed cumque, fugiat sequi incidunt resseta sint qui, asperiores illo, itaque vel velit architecto quo nulla cupiditate dolorum ipsa exercitationem consequuntur nemo?";

// // let expresion = /odio/gi;
// // let expresion = /odio{1,3}/gi;
// // let expresion = /[a-zA-Z]/gi;
// // let expresion = /[0-9]/gi;
// // let expresion = /[\d]/gi; // \d => significa que al menos tenga un número
// // let expresion = /[\D]/gi; // \d => significa que al menos tenga una letra


// console.log(expresion.test(palabra));


let correo = "hernandcardona@sena.edu.co";

let exp = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+(\.[a-zA-Z]{2,4}){1,2}/;

console.log(exp.test(correo));
//-----------------------------
let show = function (){}
(function (){})(
    console.log("anonima")
)

(function(c, w, c){
    console.log(d);
    
})(document, window, console);