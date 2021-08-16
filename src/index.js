module.exports = function toReadable (number) {
    var arr1 = ['zero','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    var arr2 = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    if (number < 20) {
       let word = arr1[number];
       return word;
    }
}




