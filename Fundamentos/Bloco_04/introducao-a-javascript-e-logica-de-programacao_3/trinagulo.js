let n = 13;

let triangle = []

let limit = 1;

for (let index = 0; index < limit; index += 1) {
    triangle.push('*');
    console.log(triangle.join(''));
    if (limit === n) {
        break;
    } else {
        limit += 1
    }
}
