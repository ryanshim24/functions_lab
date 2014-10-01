var add = function(num1, num2){
  return num1+ num2;
  
};

var sub = function(num1, num2) {
  return  num1 - num2;
};

var combine = function(num1, num2, bool) {
  if (bool === true) {
    return add(num1, num2);
  } else {
    return sub(num1,num2);
  }
};

combine(10, 8, false);
