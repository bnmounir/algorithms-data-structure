const testBalance = (
    str,
    stack = [],
    unMatchedClosingBracket = false,
    open = '({[',
    close = ')}]'
) => {
    const evaluateEachCharacter = str.split('');
    console.log(evaluateEachCharacter);
    evaluateEachCharacter.forEach(x => {
        console.log('the element is: ', x);
        console.log('stack array is: ', stack);
        return open.includes(x)
            ? stack.push(x)
            : close.includes(x) &&
              close.indexOf(x) === open.indexOf(stack.slice(-1))
            ? stack.pop()
            : (unMatchedClosingBracket = true);
    });
    return !unMatchedClosingBracket && stack.length === 0;
};

console.log('testA is: ', testBalance('{}{(())[[]][({})]()}'));
console.log('testB is: ', testBalance('{}{(())[[]][({})]()(}'));
