function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn){
  let bob = fn.call();
}