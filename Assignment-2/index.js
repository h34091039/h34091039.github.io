function countAandB(input) {
    let totalA = 0
    let totalB = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a') {
            totalA++;
        } else if (input[i] === 'b') {
            totalB++;
        }
    }
    console.log(`total=${totalA + totalB}\n totalA=${totalA}\n totalB=${totalB}`)
    return totalA + totalB
}
//charCodeAt()
function toNumber(input) {
    let array = input.map((x)=> {return x.charCodeAt(0)-96})

    return array
}

let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
countAandB(input1)
console.log(toNumber(input1))

let input2 = ['e','d','c','d','e']
countAandB(input2)
console.log(toNumber(input2))