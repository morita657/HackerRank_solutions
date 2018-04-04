
function main() {
    var t = parseInt(readLine());
    for (var a0 = 0; a0 < t; a0++) {
        var expression = readLine();
    }
    console.log(matcher(expression));
}

function matcher(expression) {
    const obj = {
        '{': '}',
        '(': ')',
        '[': ']'
    };
    let parenthesis = [];
    for (let i = 0; i < expression.length; i++) {
        if (isOpenPrenthesis(expression[i], obj)) {
            parenthesis.push(expression[i]);
        }
        if (isClosePrenthesis(expression[i], obj)) {
            //             check the last element in parenthesis array match with the expression[i]
            if (isMatched(expression[i], parenthesis, obj)) {
                parenthesis.pop();
            }
            else {
                return 'NO';
            }
        }
    }
    return (parenthesis.length > 0) ? 'NO' : 'YES';
}
function isOpenPrenthesis(sign, samples) {
    let key = Object.keys(samples);
    return key.includes(sign);
}
function isClosePrenthesis(sign, samples) {
    let val = Object.values(samples);
    return val.includes(sign);
}
function isMatched(sign, sample, samples) {
    let target = sample[sample.length - 1];
    return samples[target] === sign;
}