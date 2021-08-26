let n = 20;

let triangle = [];

let limit = n;
for (let indexTriangle = 0; indexTriangle < n; indexTriangle += 1) {

    for (let index = 0; index < n; index += 1) {
        if (index < limit - 1) {
            triangle.push(' ');
        } else {
            triangle.push('*');
        }
    }
    console.log(triangle.join(''))
    limit -= 1;
    triangle = [];
}

