/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const sequence = [];
    for (let i = 0; i <= n; i++) {
        sequence.push(i);
    }

    if (sequence.length !== n) {
        for (let i = 1; i < n; i++) {
            if (i % 3) {
                console.log(sequence[i])
                console.log("Sequence: " + i)
            }
            else if (i % 3) {
                console.log('Fizz');
            }
            else if (i % 5) {
                console.log('Buzz');
            }
        }
    }
    //console.log(sequence);
};

fizzBuzz(6)
//if i (% 3 && 5); == fizzbuzz
//if i (% 3)
/* if i (% 5)

else 
return = String(answer{choices: [FizzBuzz,Fizz,Buzz]})
param(N) = int ...eg (n=3). LENGTH


return string-array = answer


if >> 
for >>  answer[i] "string" (.. % by n && n )



*/