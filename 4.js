function ganti_kata(string, search, replace) {
    let result = "";
    let arrString = string.split("");

    for(let n = 0; n < arrString.length; n++) {
        if(arrString[n] === search) {
            arrString.splice(n, 1, replace);
        }

        result += arrString[n];
    }

    return console.log(result);
}

ganti_kata("Tuban", "a", "u");