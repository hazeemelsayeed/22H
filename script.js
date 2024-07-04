function changeQuantity(change) {
  var quantityInput = document.getElementById("quantity");
  var currentQuantity = parseInt(quantityInput.value);
  var newQuantity = currentQuantity + change;

  if (newQuantity < 1) {
    newQuantity = 1;
  }

  quantityInput.value = newQuantity;
}
