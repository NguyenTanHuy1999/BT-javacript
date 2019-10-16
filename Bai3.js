// map
var arr=[2,4,8,12];
const map1=arr.map(x=>x*2)//tao ra mot mang moi voi cac phan tu la ket qua tu viec thu thi mot ham len tung phan tu duoc goi

// some
var even=function(element)
{
    return element % 2==1;
}
//find
var array1 = [5, 12, 8, 130, 44];

var found = array1.find((item)=>{
    return item>7;// tra ve gia tri dau tien tim thay trong mang thoa dieu kien cho truoc. Neu k co tra ve underfined
});

//filter : tao ra 1 mang moi giong nhu loc ra cac ptu trong mang thoa dk cho truoc

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result=words.filter((item)=>{
    return item.length>6;
});
//reduce:dung de thuc thi mot ham len tung phan tu cua mang tu trai sang phai voi mot bien tich luy de thu ve ket qua duy nhat

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array2.reduce(reducer));
// 1->3->6->10
console.log(array2.reduce(reducer, 5));
//6->8->11->15

//includes: kiem tra ptu co ton tai trong mang hay khong tra ve true or false


var array3 = [1, 2, 3];

console.log(array3.includes(2));

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));

//indexOf:tra ve vi tri cua ptu trong mang, khong co tra ve -1

var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2));

console.log(beasts.indexOf('giraffe'));

console.log(map1);
console.log(arr.some(even));//kiem tra trong mang co 1 phan tu thoa dk tra ve true, nguoc lai false
console.log(found);
console.log(result);