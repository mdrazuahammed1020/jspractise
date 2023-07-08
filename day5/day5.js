

// -------------- js function ----------


// function sumMachine(a, b) {
//     let sum = a + b;
//     return sum;
// }

// console.log(sumMachine(10, 20));


// function fullName(firstName, lastName) {
//     let name = firstName + lastName;
//     return name;
// }

// console.log(fullName("Razu ", "Ahammed"));


// function sumArr(a, b, c, d) {
//     let sum = a + b + c + d;
//     return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(sumArr(...arr));

// let age = 24;
// function dateOfBirth(myAge, currentYear) {
//     console.log('my birth date is: '+ (currentYear - myAge));
// } 

// dateOfBirth(age, 2023);


// console.log('another section');

// ------- asynchronous ---------------


// function getVar() {
//     var x;
//     setTimeout(function() {
//         x = 12;

//     }, 3000)
//     return x;
// }

// var value = getVar();
// console.log('The value is: ' + value);

// var value;

// setTimeout(function() {
//     value = 12;
// }, 3000);

// console.log('the value is: ' + value);



// ------------ callback function ---------

// const getVar = () => {
//     setTimeout(() => {
//         console.log(`A function that takes some time`);
//     }, 3000);
// }

// const printSomething = () => {
//     console.log(`another functioin`);
// }

// getVar();
// printSomething();

// const getVarC = (callback) => {
//     setTimeout(() => {
//         console.log(`A function that take some time`);
//         callback();
//     }, 3000);

// }

// const printSomethingC = () => {
//     console.log(`Another Function`);
// }

// getVarC(printSomethingC);


// ---------- Promise  ===>  custom promise ----

// const aPromise = control => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(control) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 3000);
//     })
// }

// console.log(aPromise(true));


// const bPromise = myControl => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(myControl) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 3000);
//     })
// }

// console.log(bPromise(true));

// aPromise(false)
//     .then(() => {
//         console.log('This is a success');
//     })
//     .catch(() => {
//         console.log('This is failure')
//     })

// const aPromiseWithData = control => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(control) {
//                 resolve('Simple data success');
//             } else {
//                 reject('simple error data');
//             }
//         }, 3000);
//     })
// }


// aPromiseWithData(false)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// --------------- more than one promise handle -----------

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) {
//             resolve('Promise 1 resolved');
//         } else {
//             reject('Promise 1 error');
//         }
//     }, 3000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) {
//             resolve('promise 2 resolve');
//         } else {
//             reject('promise 2 error');
//         }
//     }, 3000);
// })



// Promise.all([promise1, promise2]).then((dataArr) => {
//     console.log(dataArr);
// })

//   -----------  async await ----------------

// --------- for es5 

// async fuunction asyncCode() {
//     //code will write here
// }


// const asyncCode6 = async() => { code will execute here}

// const aPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) {
//             resolve('I am here');
//         } else{
//             reject('No, it is an error');
//         }
//     }, 4000);
// })

// const promiseHandle = async() => {
//     const data = await aPromise1;
//     console.log(data);
// }

// promiseHandle();


// const aPromisRejection = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) {
//             reject('No, it is an error');
//         } else {
//             resolve('I am here');
//         }
//     }, 4000);
// })

// const promiseWithErrorHandle = async() => {
//     try {
//         const data = await aPromisRejection;
//         console.log(data);
//     } catch(err) {
//         console.log(err);
//     }
// }

// promiseWithErrorHandle();

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) {
//             resolve('Promise 1 resolved');
//         } else {
//             reject('Promise 1 error');
//         }
//     }, 4000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(true) {
//             resolve('Promise 2 resolved');
//         } else {
//             reject('Promise 2 error');
//         }
//     }, 4000);
// })

// console.log('Promise all returns:', Promise.all([promise1, promise2]));

// const multiplesPromise = async() => {
//     const data = await Promise.all([promise1, promise2]);
//     console.log(data);
// }

// multiplesPromise(); 

const getMyName = new Promise((resolve) => {
    return resolve('Zonayed');
})

const getAge = (name) => {
    return new Promise((resolve, reject) => {
        if(name === 'Zonayed') {
            resolve(21);
        } else {
            reject('Not find');
        }
    })
}

// getMyName.then((name) => {
//     getAge(name).then((age) => {
//         console.log('My name is ' + name + ' i am ' +age + ' years old');
//     })
// })

const getMyDetails = async() => {
    const name = await getMyName;
    const age = await getAge(name);
    console.log(`My name is ${name} and i am ${age} years old`)
}
getMyDetails();