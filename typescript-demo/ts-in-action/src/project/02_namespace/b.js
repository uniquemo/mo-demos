/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.cricle(2));
console.log(Shape.square(2));
// 命名空间属性别名：
var cricle = Shape.cricle;
console.log(cricle(2));
