let s = 0;
let result;

function R(num, zeroCount) {
    let out = num.toString();
    while (out.length < zeroCount) {
        out = '0' + out;
    }
    return out;
}

document.querySelector('button').addEventListener('click', () => {
    result = R(s, 4);
    result = result.split('').map(item => +item);
    s++;
    console.log(result);
})