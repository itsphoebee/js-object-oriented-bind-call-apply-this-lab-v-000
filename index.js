function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, variable, argument){
  return fn.call(variable, argument);
}
