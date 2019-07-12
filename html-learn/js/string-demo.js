var s = "one";
var s2 = new String("two");
var s3 = String("three");  // This is actually a string literal!

console.log('s, s2, s3:', s, s2, s3);
console.log('s2, s2.toString():', s2, s2.toString());

console.log('typeof s:', typeof s);
console.log('typeof s2:', typeof s2);
console.log('typeof s2.toString():', typeof s2.toString());
