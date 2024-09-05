let repetir = function (n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}
repetir(3, console.log);