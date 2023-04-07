const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  if (button.innerText === 'AM') {
    button.innerText = 'PM';
  } else {
    button.innerText = 'AM';
  }
});
