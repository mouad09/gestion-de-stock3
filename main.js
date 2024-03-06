//  total 
 
 let title = document.getElementsByClassName('title');
//  let taman = document.getElementsByClassName('taman');
  let taman = document.getElementsByClassName('taman')[0];
 let taxese = document.getElementsByClassName('taxese')[0];
 let adss = document.getElementsByClassName('adss')[0];
 let discounte = document.getElementsByClassName('discounte')[0];
 let totale = document.getElementsByClassName('totale')[0];
 let count = document.getElementsByClassName('count');
 let catogorie = document.getElementsByClassName('catogorie');
 let submit = document.getElementsByClassName('submit');

// console.log(title,taman,taxese,adss,discounte,totale,count,catogorie);

// // console.log("ddd",taman.value)
// function getTotal() {
//   // console.log(taman.value, "value changed");
//   if(taman.value !== ''){
//             let result = (parseInt(taman.value) + parseInt(taxese.value) + parseInt(adss.value) - parseInt(discounte.value)) ;
//             totale.innerHTML = result;
//             totale.style.background = "#040";
//         }

// }
// Add event listener to taman element
taman.addEventListener('input', getTotal);

function getTotal() {
  // Check if all elements have numeric values
  if (
    !isNaN(parseFloat(taman.value)) &&
    !isNaN(parseFloat(taxese.value)) &&
    !isNaN(parseFloat(adss.value)) &&
    !isNaN(parseFloat(discounte.value))
  ) {
    let result =
      (parseInt(taman.value) +
        parseInt(taxese.value) +
        parseInt(adss.value) -
        parseInt(discounte.value)) || 0;

    // Set the total value and background color
    totale.innerHTML = result;
    totale.style.background = "#040";
  } else {
    console.error("Les valeurs ne sont pas valides.");
  }
}

// Your other code for creating, reading, updating, deleting, searching, clearing input, and clearing data
// function getTotal(){
//     if(price.value !== ''){
//         let result = (parseInt(price.value) + parseInt(taxes.value) + parseInt(ads.value) - parseInt(discount.value)) ;
//         total.innerHTML = result;
//         total.style.background = "#040";
//     }
//     if (price.value !== '' && !isNaN(parseFloat(price.value)) &&
//     taxes.value !== '' && !isNaN(parseFloat(taxes.value)) &&
//     ads.value !== '' && !isNaN(parseFloat(ads.value)) &&
//     discount.value !== '' && !isNaN(parseFloat(discount.value))) {
    
//     let result = (+price.value + +taxes.value + +ads.value) - +discount.value;

//     total.innerHTML = result;
//     total.style.background = "#040";
//     // console.log(price,taxes,ads,discount,total,count,catogorie);
// } else {
//     console.error("Les valeurs ne sont pas valides.");
// }
// }

  
  // create product 
  // save localstorige
  // clear input 
// read 
// count 
// delete 
// update 
// search 
// clear data
