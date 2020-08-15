function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(task="go to the office") {
    return `This Monday, I will ${task}.`
}

let wrapAdjective = function(style="*"){
    return function(single="special"){
        return `You are ${style}${single}${style}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a+b;
    }, 
    subtract: function(a,b) {
        return a-b;
    }, 
    multiply: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    }
}

const actionApplyer = function(start, aFunc){
    let a = start
    for (let i = 0; i < aFunc.length; i++){
        a = aFunc[i](a)
    }
    return a 
}