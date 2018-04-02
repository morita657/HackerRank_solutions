function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    console.log(ransomCheck(m, n, magazine, ransom));
}

function ransomCheck(m, n, magazine, ransom) {
    if (n > m) return 'No';
    let obj = {};
    for (let j = 0; j < ransom.length; j++) {
        if (!(ransom[j] in obj)) {
            obj[ransom[j]] = 1;
        }
        else {
            obj[ransom[j]] += 1;
        }
    }
    for (let i = 0; i < magazine.length; i++) {
        if (magazine[i] in obj) {
            obj[magazine[i]] -= 1;
        }
    }
    return (!Object.values(obj).some(element => element > 0)) ? 'Yes' : 'No';
}