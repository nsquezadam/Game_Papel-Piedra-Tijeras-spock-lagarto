// mpodal
const modal = document.getElementById("modal");
// boton que abre modal
const btn = document.getElementById("btnModal");
// boton que cierra modal
const span = document.getElementsByClassName("close")[0];
//variables  juego  
let papel =  document.getElementById('papel');
let tijera =  document.getElementById('tijera');
let piedra =  document.getElementById('piedra');
let lagarto =  document.getElementById('lagarto');
let spock =  document.getElementById('spock');
//variable  nombre 
let name = document.getElementById('name');
const btnName =  document.getElementById("btnName")

btnName.addEventListener('click', (e) => {
e.preventDefault();    
console.log('escucho');

})

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  btn.style.display="none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  btn.style.display="block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   
  }
}





