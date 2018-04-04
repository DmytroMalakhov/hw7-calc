
document.getElementById('elem_0').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '0';
});

document.getElementById('elem_1').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '1';
});

document.getElementById('elem_2').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '2';
});

document.getElementById('elem_3').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '3';
});

document.getElementById('elem_4').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '4';
});

document.getElementById('elem_5').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '5';
});

document.getElementById('elem_6').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '6';
});

document.getElementById('elem_7').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '7';
});

document.getElementById('elem_8').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '8';
});

document.getElementById('elem_9').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '9';
});

document.getElementById('elem_c').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value = '';
});

document.getElementById('elem_dot').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '.';
});

document.getElementById('elem_d').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '/';
});

document.getElementById('elem_mp').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '*';
});

document.getElementById('elem_min').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '-';
});

document.getElementById('elem_p').addEventListener('click', function(e) {
  document.getElementById('calcScreen').value += '+';
});

document.getElementById('elem_eq').addEventListener('click', (function(e) {
    document.getElementById('calcScreen').value = eval(document.getElementById('calcScreen').value);
}));