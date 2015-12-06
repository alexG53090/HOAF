//write a for each loop that takes a string and captializes every letter

var numbers = [[1,2,3],[4,5,6],[7,8,9]];

numbers.forEach(function(element, index, array){
    element = element + 10;
    index = index + 10;
    // console.log(index, element);
});

// wirte a for each reduce function that does something

var sequence = numbers.reduce(function(a,b){
  return a.concat(b);
}, []);
// console.log(sequence);

var array1 = [10,2,3,44,5,96,7,7];

array1.forEach(function(element, index, array){
  element = element * 2;
  // console.log(element);
})

var addUp = array1.reduce(function(previous, current){
  var array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  for(i=0;i<array1.length;i=i+1){
    // console.log(array2[i])
  }
})
// console.log(addUp)

var transForm = array1.forEach(function(element, index, array){
  var array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  for(i=0;i<=array2.length;i=i+1){
    // console.log(array2[i] + array1[i]);
  }
});
// console.log(transForm)

// write a map function that takes an array and returns the origional array plus 1 for every array item


var ourMap = [1, 'a', 2, 'b', 3, 'c', 4, 'd'];

var newMap = ourMap.map(function(element, index, array){
  return (index + element);
})

// console.log(newMap)

// write a filter function


var anArray = [1, 34, 42, 2345, 2315, 457, 23];

var newArray = anArray.filter(function(element, index, array){
  return element > 1000;
})

// console.log(newArray)
