function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, value, argument){
  return fn.call(value, argument);
}

function setThisWithApply(fn, value, [argument1, argument2]){
  return fn.apply(value, [argument1, argument2])
}

function returnNewFunctionOf(fn, value){
  let newFunction = fn.bind(value)
}
