const myLink = document.getElementById('nego-link');
console.log(myLink.id);
var size = document.getElementById('size');
var info=document.getElementById('info');

// Get the selected option element

size.addEventListener("change", function() {
    var outputElement = size.value;
    console.log(outputElement)
  });
setInterval(getValue, 1000);

function getValue() {
    // Get the value of the element you want to track
    
    var quantity=document.getElementById('quantity').value;
    var sizev = document.getElementById('size').value;
    console.log(quantity)
    if (quantity > 4 && sizev != 'nosize'){
        info.style.display = "none";
        myLink.classList.remove('disabled');
    }
    else{
      myLink.classList.add('disabled');
    }
  }

  