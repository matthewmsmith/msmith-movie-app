const container = document.querySelector(".container");
const seats = document.querySelectorAll("row .seat:not(occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = parseInt(movieSelect.value);


function updateSeatSelected() {
const selectedSeats = document.querySelectorAll(".row .seat.selected");
selectedSeatCount = selectedSeats.length;

  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice;
}

movieSelect.addEventListener('change', e => {
  
 ticketPrice = parseInt(e.target.value);
 updateSeatSelected();
});


// Seat Click Event 
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSeatSelected();
  }
});
