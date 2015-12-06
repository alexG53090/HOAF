function myFunc(){
  return new Promise(function(resolve, reject){
    resolve(2 + 2);
  });
};

myFunc().then(function(){
  console.log('everything is great!')
}).catch(function(err){
  console.log('everything is not great: ', error)
})
