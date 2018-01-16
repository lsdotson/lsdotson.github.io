  $(function() {
      $("#convertButton")[0].onclick = function () {
        ConvertToCel();
      }
  });
  
  function ConvertToCel ()
  {
    var fahrTemp, celTemp;
    fahrTemp = document.getElementById('fahrBox').value;
    fahrTemp = parseFloat(fahrTemp);
    celTemp = (fahrTemp - 32) * 5 / 9;
    document.getElementById('celBox').value = celTemp;
  
    if (celTemp < 0) {
        alert('Brrr!'); 
    } else {
        alert('Warm!'); 
    }

  }