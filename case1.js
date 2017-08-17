
const _ = require('lodash');

// #1
let a1 = [
  {id:1, ext:'ext1',more:{}},
  {id:2, ext:'ext2',more:{}}
];
let o1 = _.keyBy(a1, 'id');
console.log(o1);

// #1.1
let o11 = _(a1).keyBy('id').mapValues(v => v.ext).value();
console.log(o11);

// #1.2
let o12 = _(a1).keyBy('id').mapValues(v => _.pick(v, ['ext','more'])).value();
console.log(o12);

// #1.3
let o13 = _(a1).keyBy('id').mapValues(v => _.omit(v, 'id')).value();
console.log(o13);

// #2
let o2 = {a:1, b:2, c:3, d:4};
let o2n = _.pick(o2, ['a','b','c']);
console.log(o2n);

// #2.1
let o21n = _(o2).pick(['a','b','c']).assign({e:5}).value();
console.log(o21n);