function emailValidity(username) {
    var regex = /^([a-z]) {5,9}$/;
    return regex.test(username);
}
if(emailValidity("kemalreza")) {
    console.log(true);
} else {
    console.log(false);    
}

function passwordValidity(password) {
    var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,}$/;
    return regex.test(password);
}
if(passwordValidity("Kemal.reza12")) {
    console.log(true);
} else {
    console.log(false);    
}
