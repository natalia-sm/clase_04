//Funcion variadica

function foo(a,b){
    var copia = Array.prototype.slice.call(arguments);
    

    a = 10;
    arguments[1] = 20;

    console.log(arguments);
    
}

foo(1,2);

// Sync vs Async

/*
Javascript es un lenguaje sincronico:
V8(stack+heap) + Web APIs + Task Queue = Javascript frontend

V8 + libuv (controla el event loop) + modulos nativos(javascript) + librerias de c + bindings = Javascript backend

*/

//EVENT LOOP EN NODE

/*

Timers + IO Network + IO FS + Process

setTimeout()
setInterval()
setInmediate()

XHR
Promise
fetch


process.nextTick()

*/


///patron modulo

(function(){

})();
