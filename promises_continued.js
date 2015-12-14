function basicFunc(){
  return new Promise(function(resolve, reject){
    resolve (10 * 10);
  })
};

function subtract(){
  return new Promise(function(resolve, reject){
    resolve(200-99);
  })
}

basicFunc().then(function(data){
  console.log(data);
  return subtract().then(function(data){
    console.log(data);
  })
});
