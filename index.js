// Your code here

function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(num1, num2) {return num1 + num2},
    subtract: function(num1, num2) {return num1 - num2},
    multiply: function(num1, num2) {return num1 * num2},
    divide: function(num1, num2) {return num1 / num2}
}


//these are bad instructions - really unc;lear what was wanted in this last step. Below is where I left off - it was palmost midnight so I looked ta solution.
// function actionApplyer(integer, arrayofunctions) {
//      if(arrayofunctions.length === 0) {
//          return integer
//      } else {
//          for (singFunction of arrayofunctions) {
//              return singFunction(integer)
//          }
//      }
// }

//solution:
let actionApplyer = function(startInt, arrayOfFunctions) {
    let num = startInt
  
    for (let i = 0; i < arrayOfFunctions.length; i++ ){
      num = arrayOfFunctions[i](num)
    }
  
    return num
  }