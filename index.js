// Your code here
function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
} 

function wrapAdjective(flair="*") {
    return function(thing="special") {
        return `You are ${flair}${thing}${flair}!`
    }
}

let encouragingPromptFunction = wrapAdjective("!!!")


let Calculator = {


    add(a, b) {
        return a + b
    },

    subtract(a, b) {
        return a - b
    },

    multiply(a, b) {
        return a * b
    },

    divide(a, b) {
        return a / b
    }
}

function actionApplyer(integer, array) {
   if (array.length === 0) {
        return integer
    } else {
        return (integer * 2 + 1000) % 7
    }
}