var count = 0;

var add = function(num1, num2){
  count++;
  console.log("You called this function " + count + " time!");
  return num1+ num2;
};

add(10,8);
add(12,8);
add(14,3);
add(17, 9);
add(14, 6);