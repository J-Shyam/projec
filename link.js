function sentenceA()
{
    console.log("You have been hacked!!")
}
function sentenceB()
{
    console.log("You are safe now")
}
function add(trap)
{
    
    trap()
}
add(sentenceA)

const arr = [1,3,6,9,12]

arr.forEach( function(val){
    console.log(val)
})

function abc(){
    console.log("Type your password")
}

console.log ("password isn't correct")

let intervel = setInterval(abc, 1000)

console.log("your account has been locked")

function clear(){
    clearInterval (intervel)
}
setTimeout(clear,4000)

console.log("destructure check !..")

let array =[2,4,6,8]

let [ele1,ele2,ele3,ele4] = arr

console.log(ele1,ele2,ele3,ele4)