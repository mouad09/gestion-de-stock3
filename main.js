//  total 
 
 let title = document.getElementsByClassName('title');
//  let price = document.getElementsByClassName('price');
  let price = document.getElementsByClassName('price')[0];
 let taxes = document.getElementsByClassName('taxes')[0];
 let ads = document.getElementsByClassName('ads')[0];
 let discount = document.getElementsByClassName('discount')[0];
 let total = document.getElementsByClassName('total')[0];
 let count = document.getElementsByClassName('count');
 let catogorie = document.getElementsByClassName('catogorie');
 let submit = document.getElementsByClassName('submit');

console.log(title,price,taxes,ads,discount,total,count,catogorie);

// // console.log("ddd",price.value)
// function getTotal() {
//   console.log(price.value, "value changed");
//   if(price.value !== ''){
//             let result = (parseInt(price.value) + parseInt(taxes.value) + parseInt(ads.value) - parseInt(discount.value)) ;
//             total.innerHTML = result;
//             total.style.background = "#040";
//         }

// }
// // Add event listener to price element
// price.addEventListener('input', getTotal);

// function getTotal() {
//   // Check if all elements have numeric values
//   if (
//     !isNaN(parseFloat(price.value)) &&
//     !isNaN(parseFloat(taxes.value)) &&
//     !isNaN(parseFloat(ads.value)) &&
//     !isNaN(parseFloat(discount.value))
//   ) {
//     let result =
//       (parseInt(price.value) +
//         parseInt(taxes.value) +
//         parseInt(ads.value) -
//         parseInt(discount.value)) || 0;

//     // Set the total value and background color
//     total.innerHTML = result;
//     total.style.background = "#040";
//   } else {
//     console.error("Les valeurs ne sont pas valides.");
//   }
// }

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
