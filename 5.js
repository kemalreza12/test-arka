function fibo(col, row) {
    let a = -1, b = 1;

    for(i = 0; i < row; i++) {
        let hasil = '';
        for(j = 0; j < col; j++) {
            hasil += (a + b) + ',';
            c = a;
            a = b;
            b = b + c;
        }

        console.log(hasil)
    }
}

fibo(4,3);