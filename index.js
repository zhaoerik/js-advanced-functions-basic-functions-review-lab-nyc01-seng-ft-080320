<<<<<<< HEAD
// Your code here
=======
>>>>>>> da1857c98cc5490dee9a15b99614e43141e3abd0
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

<<<<<<< HEAD

let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function (adj = "special") {
=======
let mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
>>>>>>> da1857c98cc5490dee9a15b99614e43141e3abd0
        return `You are ${flair}${adj}${flair}!`
    }
}

const Calculator = {
    add: function () {
        return 1 + 3
    },
    subtract: function () {
        return 1 - 3
    },
    multiply: function() {
        return 1 * 3
    },
    divide: function() {
<<<<<<< HEAD
        return 10 / 5 
=======
      return 10 / 5
    },
    actionApplyer: function(int, arr){
        
>>>>>>> da1857c98cc5490dee9a15b99614e43141e3abd0
    }
}

const actionApplyer = function(int, arr) {
    if (arr.length === 0) {return int}
<<<<<<< HEAD
    else {return 4}
=======
    else{return 4}
>>>>>>> da1857c98cc5490dee9a15b99614e43141e3abd0
}