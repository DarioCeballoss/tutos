function myFunction(idButton) {
  var producto1 = document.getElementById('producto1');
  var producto2 = document.getElementById('producto2');
  var producto3 = document.getElementById('producto3');



 switch(idButton) {
 case 1:

          producto1.style.display = 'block';
          producto2.style.display = 'none';
          producto3.style.display = 'none';
    break;

 case 2:
          producto1.style.display = 'none';
          producto2.style.display = 'block';
          producto3.style.display = 'none';
    break;

 case 3:
          producto1.style.display = 'none';
          producto2.style.display = 'none';
          producto3.style.display = 'block';
    break;

default:
          alert("hay un problema: No existe el producto.")
        }

   }