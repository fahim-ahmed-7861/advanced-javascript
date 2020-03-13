function stopwatch()
{
    let count =0;

    return function()
    {
        count++;

        return count;
    }
}

const clock=stopwatch();

const clock1=stopwatch();

console.log(clock());

console.log(clock());
console.log(clock());

console.log(clock1());
console.log(clock1());
console.log(clock());

