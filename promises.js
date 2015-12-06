function myFunc(){
  return new Promise(function(resolve, reject){
    resolve(x + 2);
  });
};

myFunc().then(function(){
  console.log('everything is great!')
}).catch(function(error){
  console.log('everything is not great: ', error)
})

function addUp(){
  return new Promise(function(resolve, reject){
    resolve(3 + 5);
  });
};

function subtract(){
  return new Promise(function(resolve, reject){
    resolve(20 - 3);
  });
};

function divide(){
  return new Promise(function(resolve, reject){
    resolve(60 / 5);
  });
};

addUp().then(function(){
  return subtract().then(function(){
    return divide().then(function(){
      console.log('done!')
    })
  })
})
