
function main() {
    let n_temp = readLine().split(' ');
    let n = parseInt(n_temp[0]);
    let k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    console.log(leftRotation(k, a).join(' '));
}

function leftRotation(k, a) {
    for (let i = 0; i < k; i++) {
        let elem = a.shift();
        a.push(elem);
    }
    return a;
}