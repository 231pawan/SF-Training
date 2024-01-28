const pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");

function showNext(element) {
    var c = element.parentNode;
    c.style.display = "none";
    var ns = next(c);
    if(ns.id === "genderItem" || ns.id === "passwordItem"){
        ns.style.display = "block";
    }
    else{
        ns.style.display = "flex";
    }
}

function borderChange(element){
    if(element.value.length < 8){
        element.style.border = "3px solid red";
    }
    else if(element.value.length >= 8 && element.value.length <= 10){
        element.style.border = "3px solid orange";
    }
    else{
        element .style.border = "3px solid green";
    }
}

function showNextElement(element) {
    var c = element.parentNode;
    var pc = c.parentNode;
    var ppc = pc.parentNode;
    ppc.style.display = "none";
    var ns = next(ppc);
    ns.style.display = "block";
}

function next(elem) {
    do {
        elem = elem.nextSibling;
    } while (elem && elem.nodeType !== 1);
    return elem;
}

function setName(element){
    let empName = document.getElementById("fname").value;
    
    if(/\d/.test(empName) || empName.length <=2){
        alert("Invalid Name");
    }
    else{
        document.getElementById("genderInput").innerHTML = "Hi, " + empName + "! Can i know your gender";
        showNext(element);
    }
}

function showPass(element){
    let empMail = document.getElementById("email").value;
    
    if(empMail.includes("@") && empMail.length >=3){
        showNext(element);
    }
    else{
        alert("Invalid E-mail ID");
    }
}

function showContact(element){
    let empPass = document.getElementById("password").value;
    let empCPass = document.getElementById("cpassword").value;

    if(pattern.test(empPass) && empPass===empCPass){
        showNext(element);
    }
    else if(!pattern.test(empPass)){
        alert("Password should contain atleast: \n one Uppercase character,\n atleast one  Lowercase character,\n atleast one Numeric value,\n atleast one Alphanumeric character \n\nAnd minimum length should be 8");
    }
    else if(empPass!=empCPass){
        alert("Passwords don't match");
    }
}

function showVehicle(element){
    let contact = document.getElementById("number").value;

    if(/^\d+$/.test(contact) && contact.length >= 8)
        showNextElement(element);
    else
        alert("Invalid Number");
}

function setVehicle(element){
    selectElement = document.querySelector('#veh-type');
    output = selectElement.value;
    switch (output){
        case("cycle"):
            document.getElementById("cycle-price").style.display = "block";
            break;
        case("motor-cycle"):
            document.getElementById("motor-cycle-price").style.display = "block";
            break;
        case("car"):
            document.getElementById("car-price").style.display = "block";
            break;
    }
    showNext(element);
}

var price;

function setPrice(element){
    price = element.value;
    document.getElementById("pricing-div").style.display = "none";
    document.getElementById("pass").style.display = "block";
    document.getElementById("pass-price").innerHTML = "Amount: Rs " + price;
}

function currencyChange(element){
    if(element.id === "inr-btn"){
        document.getElementById("pass-price").innerHTML = "Amount: Rs " + price;
        document.getElementById("usd-btn").style.display = "block";
        document.getElementById("yen-btn").style.display = "block";
        document.getElementById("inr-btn").style.display = "none";
    }
    else if(element.id === "usd-btn"){
        document.getElementById("pass-price").innerHTML = "Amount: " + (price/81.79).toFixed(2) + "$";
        document.getElementById("usd-btn").style.display = "none";
        document.getElementById("yen-btn").style.display = "block";
        document.getElementById("inr-btn").style.display = "block";
    }
    else if(element.id === "yen-btn"){
        document.getElementById("pass-price").innerHTML = "Amount: " + (price/0.58).toFixed(2) + " Yen";
        document.getElementById("usd-btn").style.display = "block";
        document.getElementById("yen-btn").style.display = "none";
        document.getElementById("inr-btn").style.display = "block";
    }
}

function complete(){
    document.getElementById("pass").style.display = "none";
    document.getElementById("final").style.display = "block";
}