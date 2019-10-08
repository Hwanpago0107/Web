//node.js는 서버상에서 동작하는 자바스크립트
//node.demo.js 불러오는(로드) 주체

var circle = require('./node.circle.js');  // require를 통해 node.circle.js를 불러와 서클에 저장

console.log('The area of a circle of radius 4 is ' + circle.area(4)); //서클에서 area를 불러 결과값 출력