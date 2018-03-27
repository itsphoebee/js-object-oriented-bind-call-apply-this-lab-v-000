function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, variable, argument){
  return fn.call(variable, argument);
}

function setThisWithApply(fn, variable, [argument1, argument2]){
  return fn.apply(variable, [argument1, argument2])
}

function returnNewFunctionOf(fn){
  let newFn = fn.bind(this)
}
