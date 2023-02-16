//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
// 

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

//SETTING UP MODAL
 
// Get the modal
var modal = document.getElementById("myModal");
 
// Get the button that opens the modal
var btn = document.getElementById("modalButton");
 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
 
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//SETTING UP MODAL 2nd button
 
// Get the modal
var modal = document.getElementById("myModal2");
 
// Get the button that opens the modal
var btn = document.getElementById("modalButton2");
 
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];
 
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
 
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

