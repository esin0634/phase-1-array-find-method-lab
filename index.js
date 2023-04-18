// code your solution here


function superbowlWin(array){
    const result= array.find(element => element.result === "W")
    return result ? result.year : undefined
}
