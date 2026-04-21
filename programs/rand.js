// Install the @stdlib/random-iter-uniform with the following command
// npm install @stdlib/random-iter-uniform

import iterator from "@stdlib/random-iter-uniform";

let iter = iterator(0., 1., {"seed": 26_04_20});  // Group B
// let iter = iterator(0., 1., {"seed": 26_04_17});  // Group C

let rand_num = [];
const num_of_students = 33;
for (let i = 0; i < num_of_students; i++) {
  rand_num.push(iter.next().value)
}

// console.log(rand_num);
for (let i = 0; i < num_of_students; i++) {
  console.log(rand_num[i]);
}
