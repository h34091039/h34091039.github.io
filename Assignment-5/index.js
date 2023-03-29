function count(input)
{
    const arr = input.filter((a,b)=> (input.indexOf(a)!== input.lastIndexOf(a) && input.indexOf(a)===b) || input.indexOf(a)=== input.lastIndexOf(a))
    let dict ={};
    arr.forEach(key => {
        let counter = 0;
        input.forEach((elements)=>{
            counter = (elements===key) ? counter+1 : counter
        })
        dict[key] = counter;
    })
    return dict
}
let input1 = ["a","b","c","a","c","a","x"];
console.log(count(input1));

function groupByKey(input)
{
    let result = {}
    for (let i in Object.keys(input))
    {
        result[input[i].key] = 0
        input.forEach((index) =>(
            result[index.key] = (input[i].key===index.key) ? result[index.key]+index.value : result[index.key]
        ))
    } 
    return result 
}

let input2 = [
    {key: "a", value: 3},
    {key: "b", value: 1},
    {key: "c", value: 2},
    {key: "a", value: 3},
    {key: "c", value: 5},
]
console.log(groupByKey(input2));