const test = 'Mary had a little lamb.'

const reverseTextOrder = (test) => {
    return test.split('').reverse('').join('');
}

console.log(reverseTextOrder(test));