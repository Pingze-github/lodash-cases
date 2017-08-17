# lodash-cases
 Lodash库用例记录

## CASE 1

### #1 [{id:xxx}] 转 {xxx:{}}
> 常用于转换数据库取出的数据。

``` javascript
let a1 = [
  {id:1, ext:'ext1'},
  {id:2, ext:'ext2'}
];
let o1 = _.keyBy(a1, 'id');

// output
{ '1': { id: 1, ext: 'ext1' }, '2': { id: 2, ext: 'ext2' } }
```

#### #1.1 只保留一项需要的数据

``` javascript
let o11 = _(a1).keyBy('id').mapValues(v => v.ext).value();

// output
{ '1': 'ext1', '2': 'ext2' }
```

#### #1.2 保留多项需要的数据
``` javascript
let o12 = _(a1).keyBy('id').mapValues(v => _.pick(v, ['ext','more'])).value();

// output
{ '1': { ext: 'ext1', more: {} },
  '2': { ext: 'ext2', more: {} } }
```

#### #1.3 保留一些项其外的数据
``` javascript
let o13 = _(a1).keyBy('id').mapValues(v => _.omit(v, 'id')).value();

// output
{ '1': { ext: 'ext1', more: {} },
  '2': { ext: 'ext2', more: {} } }
```

### #2 从对象中取部分值生成新对象
> 常用于对象重建，参数提取等

``` javascript
let o2 = {a:1, b:2, c:3, d:4};
let o2n = _.pick(o2, ['a','b','c']);

// output
{ a: 1, b: 2, c: 3 }
```

#### #2.1 同时增加新属性
``` javascript
let o21n = _(o2).pick(['a','b','c']).assign({e:5}).value();

// output
{ a: 1, b: 2, c: 3, e: 5 }
```
