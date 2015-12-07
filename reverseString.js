// how many ways can you reverse a string??

function reverse(s){
return s.split('').reverse().join('');
}
// console.log(reverse(string));

var string = 'awww yeah'


// function reverse2(s){
//   string.forEach(function(element, index, array){
//     console.log(element);
//   })
// }
//
// reverse2(string);



// reverse2(string);

//
var string = 'string';
function reverse3(s){
  var bin = [];
  for (j = 0;j < s.length;j=j+1){
    var char = s[j];
    bin.push(char);
  }
  bin.reverse();
  console.log(bin);
}
reverse3(string);
