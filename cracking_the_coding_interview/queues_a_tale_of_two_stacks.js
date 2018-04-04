function processData(input) {
    //Enter your code here
    let source = input.split('\n');
    let queue = [];
    for (let i = 1; i <= source[0]; i++) {
        let type = source[i].split(' ')[0];
        if (type === '1') {
            queue.push(source[i].split(' ')[1]);
        }
        if (type === '2') {
            queue.shift();
        }
        if (type === '3') {
            console.log(queue[0]);
        }
    }
} 