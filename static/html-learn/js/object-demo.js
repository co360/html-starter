console.log("object 'a' demo");
let a = {};
console.log(a);
a['foo'] = 'Hello';
a[123] = 'bar';
console.log(a);
console.log('object props for "a"');
for (let x in a){ console.log(x); }

console.log();
console.log("object 'f' demo");
let f = function() { return {'test': 99}; };
console.log(f);
f['foo'] = 'Hello';
f[123] = 'bar';
console.log(f);
console.log(f());
console.log('object props for "f"');
for (let x in f){ console.log(x); }
