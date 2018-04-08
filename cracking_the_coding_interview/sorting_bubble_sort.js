function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    console.log(bubbleSort(a, n));
}

function bubbleSort(a, len) {
    let c = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                swap(a[j], a[j + 1], a);
                c++;
            }
        }
    }
    return `Array is sorted in ${c} swaps.
First Element: ${a[0]}
Last Element: ${a[a.length - 1]}`;
}

function swap(first, second, sor) {
    let firstIndex = sor.indexOf(first);
    let secondIndex = sor.indexOf(second);
    let counter = 0;
    sor[firstIndex] = second;
    sor[secondIndex] = first;
    return sor;
}