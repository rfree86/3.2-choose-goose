

document.querySelector('#update-button').addEventListener('click', function(){
  var thimbles = Number(document.querySelector('#thimbles').value);
  var swords = Number(document.querySelector('#swords').value);
  var total = thimbles + (swords * 37);

  if (total === 1) {
    document.querySelector('#the-total').textContent = total + " money";
  }
  else {
    document.querySelector('#the-total').textContent = total + " monies";
  }
});
