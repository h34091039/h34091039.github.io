function max(numbers)
{
    let target=numbers[0];
    for (let i = 1 ; i < numbers.length ; i++)
    {
        if(target<numbers[i])
        {
            target=numbers[i];
        }
    }
    return target;
}

function findPosition(numbers,target)
{
    let index=0
    while (index < numbers.length)
    {
        if(numbers[index]==target)
        {
            break;
        }
        index++;
    }
    return (index==numbers.length) ? -1 : index;
}


console.log(max([1,2,4,5]));
console.log(max([5,2,7,1,6]));

console.log(findPosition([5,2,7,1,6],5));
console.log(findPosition([5,2,7,1,6],7));
console.log(findPosition([5,2,7,7,7,1,6],7));
console.log(findPosition([5,2,7,1,6],8));