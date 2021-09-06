index.js
function getIMC(){
  var peso=parcefloat(document.getElementByID(´peso´).value);
  var altura=parcefloat(document.getElementByID(´altura´).value);
  var imc=peso/(altura*altura);
  document.getElementByID("imc").innerHTML=imc;
