
function main() {
    let a = readLine();
    let b = readLine();
    console.log(anagram(a, b));
}
function anagram(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) < 0) {
            result.push(a[i]);
        }
    }
    for (let j = 0; j < b.length; j++) {
        if (a.indexOf(b[j]) < 0) {
            result.push(b[j]);
        }
    }
    return result.length;
}
