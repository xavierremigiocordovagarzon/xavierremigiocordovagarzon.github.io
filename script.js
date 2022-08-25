let nombre;
let pass;
let security;
let minCheck;
let mayCheck;
let numCheck;
let simCheck;
let regexNum = /(\d)/;
let regexLower = /([a-z])/;
let regexUpper = /[A-Z]/;
let regexSim = /(\W)/;

let datos = {
  usuario: "",
  password: "",
  parameters: {
    lowerCase: false,
    upperCase: false,
    numbers: false,
    symbols: false,
  },
};

function validar() {
  nombre = String(document.getElementById("name").value);
  pass = String(document.getElementById("pass").value);
  minCheck = document.getElementById("min").checked;
  mayCheck = document.getElementById("may").checked;
  numCheck = document.getElementById("num").checked;
  simCheck = document.getElementById("sim").checked;

  if (nombre != "" && pass != "") {
    datos.usuario = nombre;
    datos.password = pass;
    datos.parameters.lowerCase = minCheck;
    datos.parameters.upperCaseCase = mayCheck;
    datos.parameters.numbers = numCheck;
    datos.parameters.symbols = simCheck;
    registers.push(datos);
    window.alert("REGISTRADO CON EXITO!") ;
    window.alert(JSON.stringify(datos));
  } else {
    window.alert("CAMPOS VACIOS");
  }
}

function checkPass() {
  nombre = String(document.getElementById("name").value);
  pass = String(document.getElementById("pass").value);
  security = document.getElementById("security");
  minCheck = document.getElementById("min");
  mayCheck = document.getElementById("may");
  numCheck = document.getElementById("num");
  simCheck = document.getElementById("sim");

  regexLower.test(pass)
    ? (minCheck.checked = true)
    : (minCheck.checked = false);
  regexUpper.test(pass)
    ? (mayCheck.checked = true)
    : (mayCheck.checked = false);
  regexNum.test(pass) 
    ? (numCheck.checked = true) 
    : (numCheck.checked = false);
  regexSim.test(pass) 
    ? (simCheck.checked = true) 
    : (simCheck.checked = false);

  if (
    pass.length <= 4 ||
    (regexLower.test(pass) &&
      !regexUpper.test(pass) &&
      !regexNum.test(pass) &&
      !regexSim.test(pass))
  ) {
    security.style.color = "red";
    security.innerHTML = "INSEGURA";
  } else if (
    pass.length > 4 &&
    regexLower.test(pass) &&
    regexUpper.test(pass) &&
    regexNum.test(pass) &&
    !regexSim.test(pass)
  ) {
    security.style.color = "yellow";
    security.innerHTML = "MEDIANAMENTE SEGURA";
  } else if (
    pass.length >= 12 &&
    regexLower.test(pass) &&
    regexUpper.test(pass) &&
    regexNum.test(pass) &&
    regexSim.test(pass)
  ) {
    security.style.color = "lightgreen";
    security.innerHTML = "MUY SEGURA";
  }
}
