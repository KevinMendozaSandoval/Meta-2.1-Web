const proceso1 = new Object();
proceso1.nombre = 'Proceso 1';
proceso1.codigo = ["a=1+2","console.log('1+2')","console.log(a)"];

proceso1.fn = function(a,b){
    return a+b;
}

console.log(proceso1);
console.log(proceso1["fn"](1,3));
console.log(proceso1.fn(1,3));
