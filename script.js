 //  a.odd number using IIFE 

 (function(array){
    for(var i=0;i<array.length;i++){
      if(array[i]%2!=0){
        console.log(array[i])
      }
    }
  })
  ([1,2,3,4,5,6,7,8,9,10])

  OUTPUT: (5) [1, 3, 5, 7, 9]
//..................................................................
// a.odd number using anonyomus 
     var arr =[ 1,2,3,4,5,6,7,8,9,10]
     var odd =function(){
      var odd = arr.filter(num=>num%2==1);
      console.log(odd);
     }
     odd() 
     OUTPUT: (5) [1, 3, 5, 7, 9]
     //.......................................

//b. convert strings using IIFE

  (function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  console.log(str.join(' '));
  })("how are you")
   OUTPUT: How Are You

 
//b. convert strings using anonyomus

  var str = function () {
  var  arr = " how are you"
  var titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(titlecase)
}
str()

OUTPUT: How Are You


 
//c. sum of all numbers using IIFE

 (function () {
  var  sum = [11, 12, 13, 14].reduce(add, 15);
  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log(sum);
})() 

//OUTPUT: 65

// c. sum of all numbers using anonyomus

var func = function () {
    
  var arr = [11, 12, 13, 14, 15]
  var sum = arr.reduce(function(a, b){
      return a + b;
  });
  console.log(sum);
}
func()

OUTPUT: 65 
// PRIME NUMBER USING ANONYOMUS

var num  = function (arr) {
  return arr.filter(function(n){
    for ( var i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(num([2,3,4,5,6,7,8,9,10]));

OUTPUT: (4) [2, 3, 5, 7] 

//prime numbers using IIFE

(function (){
  var num = [2,3,4,5,6,7,8,9,10]
  num = num.filter(function(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log(num);
  })()


  OUTPUT: (4) [2, 3, 5, 7] 
//PALINDROME USING ANONYOMUS

var  newarray = function () {
  var myArray = ['dad', 'mom', 'honda', 'bike'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}
newarray()
OUTPUT:
dad
mom 
// palondrome using IIFE;
( function () {
  var myArray = ['dad', 'mom', 'honda', 'bike'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})()
OUTPUT:
dad
mom 
//duplicate using anonyomus
var   myarray = function () {
  var yourArray = [1, 2, 2, 3, 4, 5, 5]
  var result = []
  var tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      result.push(tempArray[i])
    }
  }
  console.log(result) 
}
myarray()
OUTPUT: (2)[2, 5] 

//duplicate using IIFE
(function () {
  
  let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
  
  let result = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(result);
})()
OUTPUT: (2)[2, 5] 
//................................................................
// rotate an array using anonyomus function
  var rotate = function(a,k){
    for( var i=0;i<k;i++){
    a.unshift(a.pop())
 }
 return a;
}
 console.log(rotate([1,2,3,4,5],4))

 OUTPUT: [2, 3, 4, 5, 1]

//IIFE;
(function(A, K) {
  
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],4)
 OUTPUT: [2, 3, 4, 5, 1]
//..............................................................





  
//  ODD NUMBER USING ARROW:
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log( arr.filter((num) => {

    return num % 2 !== 0

}))
OUTPUT: (4) [1, 3, 5, 7, 9] 

// CONVERT STRINGS USING ARROW:

var arr = ["how are you"]

arr = arr.map((result) => {

    return result.toUpperCase()

})
console.log(arr)
OUTPUT:['HOW ARE YOU'] 

 //sum off all numbers ;
var num =[11,12,13,14]
var  sum = num.reduce((accumulator, a) => {

    return accumulator + a

}, 15)

console.log(sum)

OUTPUT: 65 

//PRIME NUMBERS USING ARROW;
 var arr = [ 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr.filter((num) => {

        for (var i = 2; i < num; i++) {
            if (num % i === 0)
                return false;
        }
        return num > 1;

    }))
    OUTPUT:(4) [2, 3, 5, 7] 
//PALLINDROME USING ARROW;

var newarray = ["mom","dad","happy", "king", "malayalam"]

console.log(newarray.filter((result) => {

        var myarray = result ;

        if (myarray.split('').reverse().join('') === result)
            return true;

        return false;

    }))
    OUTPUT: (3) ['mom', 'dad', 'malayalam']
    //....................................................