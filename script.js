var operation = '';
var result = '';

// Check for a decimal in the operation
function decimal(){
  if (operation.indexOf('.') == -1){
    return false;
  }
  else {
    return true;
  }
}
// Check for open brackets
// function openBracket(){
//   let bracketCount = operation.split('(').length - 1;
//   if (bracketCount % 2 == 0){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// function closeBracket(){
//   let bracketCount = operation.split(')').length - 1;
//   if (bracketCount % 2 == 0){
//     return true;
//   }
//   else {
//     return false;
//   }
// }

function bracketCount (){
  let totalBracketCount = 0;
  //  regex for parentheses
   const regex = /\(|\)/;
   if (regex.test(operation)){
     totalBracketCount++;
   }
   else {
     totalBracketCount--;
   }
   console.log(totalBracketCount);
   if (totalBracketCount % 2 == 0){
     return true;
   }
   else {
     return false;
   }
}
// function changeSign()

// Read the inputs

function display(input){

    if (input == '()'){

      if (bracketCount() || (['+', '-', '*', '/'].includes(operation[operation.length - 1]))){
        operation += '(';
        document.getElementById('display').innerHTML = operation;
      }
      else if (!bracketCount()){
        operation += ')';
        document.getElementById('display').innerHTML = operation;
      }
    }
    else if (input == '.' && !decimal()){
      operation += '.';
      document.getElementById('display').innerHTML = operation;
    }
    else if (input == '.' && decimal()){
      return;
    }
    else if (input == 'C'){
      operation = '';
      document.getElementById('display').innerHTML = operation;
    }
    else if (input == '<-'){
      operation = operation.slice(0, -1);
      document.getElementById('display').innerHTML = operation;
    }
    else if (input == '+/-'){
      operation = operation.slice(0, -1);
      operation = '-' + operation;
      document.getElementById('display').innerHTML = operation;
    }
    else if (input == '%'){
      operation = operation.slice(0, -1);
      result = operation / 100;
      document.getElementById('view_ans').innerHTML = result;
      operation = '';
      document.getElementById('display').innerHTML = operation;
    }
    else if(input == '='){
      result = eval(operation);
      document.getElementById('view_ans').innerHTML = result;
      operation = '';
      document.getElementById('display').innerHTML = operation;
    }
    else if (['+', '-', '*', '/'].includes(input)){
      operation += input;
      document.getElementById('display').innerHTML = operation;
    }
    else if (operation[operation.length - 1] == ')'){
      operation += ('*' + input);
      document.getElementById('display').innerHTML = operation;
    }
    else {
      operation += input;
      document.getElementById('display').innerHTML = operation;
    }
    console.log(operation);
  }
  
  //  if (input == '(' && openBracket()){
  //    operation += '(';
  //    document.getElementById('display').innerHTML = operation;
  //  }
  //  else if (input == '(' && !openBracket()){
  //    operation += ')';
  //    document.getElementById('display').innerHTML = operation;
  //  }
