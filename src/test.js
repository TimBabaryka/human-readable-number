function toReadable(number) {


    var arr1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var arr2 = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
   
    let word3 = '';
    if (number <= 999 && number > 99) {
        let hundreds = Math.floor(number / 100);
        let hundredStr = arr1[hundreds];
        word3 = hundredStr + ' hundred ';
        
        if ( number % 100 >= 20 ) {
         let dozens = Math.floor((number % 100) / 10);
         let dozensStr = arr2[dozens];
         word3 += dozensStr;
        
         if( number % 10 !== 0)
         word3 += ' ' + arr1[number % 10];
  
        } else {
            word3 += arr1[number % 100];
        }
      }
  //    word3 += ' ' + arr1[number % 100];
     return word3;
    }

    console.log(toReadable(5));
      

//     for (let i = 0; i < 3; i++) {
//         if (number < 999 && number > 99) {
//             let word3 = '';
//             let hundreds = Math.floor(number / 100);
//             let hundredsStr = arr1[hundreds];
//             word3 = hundredStr + 'hundred';


//         let word2 = ' ';
//         let dozens = Math.floor((number % 100) / 10);
//         let dozensStr = arr2[dozens];
//         word3 += dozensStr;
//         word3 += ' ' + arr1[number % 10];



//         } else if (number < 99 && number > 20) {
//             for (let i = 0; i < 2; i++)
//            word2 = ' ';
//          let dozens = Math.floor((number % 100) / 10);
//          let dozensStr = arr2[dozens];
//          word3 += dozensStr;

//         word3 += ' ' + arr1[number % 10];

//         } if (number < 20) {
//             word3 += ' ' + arr1[number % 100];

//         };
//         return word3 ;
//     }
// }
    

    




