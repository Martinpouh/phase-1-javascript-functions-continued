// code your solution here
function saturdayFun(sF = 'roller-skate') {
    return `This Saturday, I want to ${sF}!`;

}

function mondayWork(mW = 'go to the office') {
    return `This Monday, I will ${mW}.`;

}

function wrapAdjective(x = "%") {
    return function(how = "special") {
        return `You are ${x}${how}${x}!`

    }
}