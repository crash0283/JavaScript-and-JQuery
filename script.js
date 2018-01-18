// const multiplier = (factor) => {
//     return (num) => {
//         return num * factor;
//     }
// }

// const test = multiplier(2);
// console.log(test(5));

// let numstring = '10';

// console.log(typeof numstring);

// let numNumber = parseInt(numstring);

// console.log('Total: ', numNumber + numNumber);

// const zeropad = (num,pad) => {
//     let numStr = num.toString();
//         while (numStr.length < pad) {
//             numStr = '0' + numStr;
//         }
//         return numStr;
// }

// console.log(zeropad(4,2));

// const myMin = (num1, num2) => num1 < num2 ? num1 : num2;

// console.log(myMin(100,101));

const countBy = (num, end, count) => {
    if (typeof num == 'number') {
        let last = num + end;
        while (num <= last) {
            if (num % count == 0) {
                console.log(num);
            }
            num++;
        }
    } else {
        console.log('Please input a number!')
    }
}

// countBy(10,100,2);

let myStr = "Hello World";

// console.log(myStr.charAt(4));

const countBs = (str, find_letter = 'b') => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == find_letter) {
            count += 1;
        }
    }
    return "There are " + count + " " + "\"" + find_letter + "\" letters in this string";
}

//console.log(countBs('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet diam enim, et suscipit nunc dictum eget. Aenean fermentum rhoncus augue sit amet auctor. Etiam maximus erat nisi, et luctus magna pretium sed. Sed vehicula lacus hendrerit, sodales odio et, tincidunt purus. Ut in risus sed ligula commodo venenatis eget eget dui. Etiam tellus est, iaculis sed rutrum ut, suscipit in velit. Morbi eleifend pretium porttitor.', 'c'));

const myRange = (start, end) => {
    let myArr = [];
    for (let i=start; i <= end; i++) {
        myArr.push(i);
    }
    return myArr;
}

const mySum = (rangeArr) => {
    let sum = 0;
    rangeArr.map((item) => {
        sum = item + sum;
    })
    return sum;
}

console.log(mySum(myRange(0,6)));
