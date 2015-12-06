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

addUp().then(function(data){
  console.log(data);
  return subtract(data).then(function(data){
    console.log(data);
    return divide(data).then(function(data){
      console.log(data, 'done!')
    })
  })
})

function func1(){
  return new Promise(function(resolve, reject){
    resolve(3 + 8);
  });
};

function func2(){
  return new Promise(function(resolve, reject){
    resolve(2 + 7);
  });
};

function func3(){
  return new Promise(function(resolve, reject){
    resolve(1 + 4);
  });
};

Promise.all([func1, func2, func3]).then(function(values){
  console.log(values)
});
