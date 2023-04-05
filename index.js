function saturdayFun(doSomething = "roller-skate") {
    return `This Saturday, I want to ${doSomething}!`
}
saturdayFun();
saturdayFun("hike");

const mondayWork = function (mondayActivity = "go to the office") {
    return `This Monday, I will ${mondayActivity}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(star) {
    return function (adjective1 = "special") {
        return `You are ${star}${adjective1}${star}!`;
    }
}
wrapAdjective("*")("a dedicated programmer");