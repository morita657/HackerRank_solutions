function main() {
    var arr = [];
    for (arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }
    console.log(test(arr));
}
function test(arr) {
    let result;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (j + 2 === 6 || i + 2 === 6) break;
            current = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
                + arr[i + 1][j + 1]
                + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (i === 0 && j === 0) result = current;
            if (current > result) {
                result = current;
            }
        }
    }
    return result;
}