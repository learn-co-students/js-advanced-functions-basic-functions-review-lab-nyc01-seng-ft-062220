// Your code here

function saturdayFun(activity= "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(string = "*") {
    return function(input = "special"){
        return `You are ${string}${input}${string}!`
    }
}

let Calculator = {
    add: function(num1, num2){
        return num1 + num2
    },

    subtract: function (num1, num2) {
        return num1 - num2
    },

    multiply: function (num1, num2) {
        return num1 * num2
    },

    divide: function (num1, num2) {
        return num1 / num2
    }
}

function actionApplyer(integer, array) {
    if (array.length === 0) {
        return integer
    } else {

        /*function(integer){ return integer * 2 }
        function(integer){ return integer + 1000}
        function(integer){ return a % 7 }*/
        array.forEach()
    }

}

let array = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
    ]


console.log(actionApplyer(5, array))

