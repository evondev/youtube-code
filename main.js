// ------------------------- //
// 1. Viết 1 function để tạo ra 1 mảng với số lượng và chuỗi truyền vào.
// Ví dụ `repeatValueArr(3, 'a')` trả ra kết quả là mảng như sau: ['a','a','a']
// ------------------------- //
function repeatValueArr(num, string) {
  const repeatArr = [];
  for (let index = 0; index < num; index++) {
    repeatArr.push(string);
  }
  return repeatArr;
}
console.log("1. repeatValueArr: ");
console.log(repeatValueArr(4, "test"));

// ------------------------- //
// 2. Viết 1 function để đảo ngược mảng truyền vào.
// Ví dụ `reverseArr([1,2,3,4,5])` sẽ có kết quả là [5,4,3,2,1]
// ------------------------- //
function reverseArrFunc(reverseArr) {
  return reverseArr.reverse();
}
console.log("2. reverseArr: ");
console.log(reverseArrFunc([1, 4, 6, 2, 5]));

// ------------------------- //
// 3. Viết 1 function để loại ra các phần tử là Falsy Values trong mảng.
// Ví dụ `removeFalsyArr([0, 1, false, 2, undefined, '', 3, null])` kết quả trả về sẽ là [1,2,3]
// ------------------------- //
function removeFalsyArr(falsyArr) {
  return falsyArr.filter((value) => Boolean(value));
}
console.log("3. removeFalsyArr: ");
console.log(removeFalsyArr([0, 1, false, 2, undefined, "", 3, null]));

// ------------------------- //
// 4. Viết 1 function để loại ra các phần tử trùng nhau ở trong mảng.
// Ví dụ `removeDuplicate([1,2,3,1,2,3,4,5])` sẽ có kết quả là [1,2,3,4,5]
// ------------------------- //
function removeDuplicateArr(duplicateArr) {
  return duplicateArr.filter(
    (value, index) => duplicateArr.indexOf(value) === index
  );
}
console.log("4. removeDuplicateArr: ");
console.log(removeDuplicateArr([1, 2, 3, 1, 2, 3, 4, 5]));

// ------------------------- //
// 5. Viết 1 function để tạo ra 1 mảng mới chứa nhiều mảng con theo số lượng truyền vào.
// Ví dụ `chunkArr([1, 2, 3, 4, 5], 2)` sẽ có kết quả trả về là [[1, 2], [3, 4], [5]]
// ------------------------- //
function chunkArr(chunkArr, size) {
  const newArr = [];
  for (let i = 0; i < chunkArr.length; i += size) {
    newArr.push(chunkArr.slice(i, i + size));
  }
  return newArr;
}
console.log("5. chunkArr: ");
console.log(chunkArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// ------------------------- //
// 6. Viết 1 function chỉ trả ra các số là số chẵn từ mảng.
// Ví dụ `isEvenArr([13,23,12,45,22,48,66,100])` -> [12,22,48,66,100]
// ------------------------- //
function isEvenFunc(isEvenArr) {
  const evenArr = isEvenArr.filter((value) => value % 2 == 0);
  return evenArr;
}
console.log("6. EvenArr: ");
console.log(isEvenFunc([13, 23, 12, 45, 22, 48, 66, 100]));

// ------------------------- //
// 7. Viết 1 function tìm ra số lớn nhất trong mảng.
// Ví dụ `largestNumber([2, 45, 3, 67, 34, 567, 34, 345, 123])` kết quả là 567
// ------------------------- //
function largestNumFunc(numberArr) {
  return numberArr.reduce((num1, num2) => Math.max(num1, num2));
}
console.log("7. largestNumber: ");
console.log(largestNumFunc([2, 45, 3, 67, 34, 567, 34, 345, 123]));

// ------------------------- //
// 8. Viết 1 function có tên là `capitalize(str)` để biến tất cả chữ thành IN HOA.
// Ví dụ: capitalize("evondev") có kết quả là EVONDEV
// ------------------------- //
function capitalizeFunc(str) {
  return str.toUpperCase();
}
console.log("8. capitalizeString: ");
console.log(capitalizeFunc("evondev"));

// ------------------------- //
// 9.
// ------------------------- //
const people = [
  { name: "Charlie", age: 28, city: "Chicago" },
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 32, city: "Los Angeles" },
];

// ------------------------- //
// 9.1 Viết 1 hàm có tên là `filterByAge(people, age)` để trả về 1 mảng những người có độ tuổi lớn hơn 1 giá trị nhất định
// ------------------------- //

function filterByAge(people, age) {
  return people.filter((obj) => obj.age > age);
}
console.log("9.1. filterByAge: ");
console.log(filterByAge(people, 25));

// ------------------------- //
// 9.2 Viết 1 hàm có tên là `sortByNames(people)` để sắp xếp tên người theo thứ tự tăng dần
// ------------------------- //
function sortByNames(people) {
  // copy an array to sort
  let copyArr = JSON.parse(JSON.stringify(people));
  return copyArr.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
}
console.log("9.2. sortByNames: ");
console.log(sortByNames(people));

// ------------------------- //
// 9.3 Viết 1 hàm có tên là `findPeopleByCity(people, city)` để trả ra đối tượng thuộc thành phố nào đó
// ------------------------- //
function findPeopleByCity(people, city) {
  return people.find((value) => value.city === city);
}
console.log("9.3. findPeopleByCity: ");
console.log(findPeopleByCity(people, "Los Angeles"));

// ------------------------- //
// 9.4 Viết 1 hàm có tên là `deletePeopleById(people, id)` để xóa 1 người nào đó trong mảng people
// ------------------------- //
function deletePeopleById(people, id) {
  // copy an array to sort
  let copyDeleteArr = JSON.parse(JSON.stringify(people));
  // find index of element wanna delete by id or age,..
  const index = copyDeleteArr.findIndex((value) => value.age === id);
  if (index > -1) {
    copyDeleteArr.splice(index, 1);
  }
  return copyDeleteArr;
}
console.log("9.4. deletePeopleById: ");
console.log(deletePeopleById(people, 32));

// ------------------------- //
// 9.5 Viết 1 hàm có tên là `getAverageAge(people)` để tính ra số tuổi trung bình.
// ------------------------- //
function getAverageAge(people) {
  return (
    people.reduce((averageAge, value) => averageAge + value.age, 0) /
    people.length
  );
}
console.log("9.5. getAverageAge: ");
console.log(getAverageAge(people));

// ------------------------- //
// 10. Viết 1 hàm có tên là `countLetters(str)` để đếm các kí tự trong chuỗi và trả ra 1 object chứa các từ đó.
// ------------------------- //
function countLetters(str) {
  let splitArr = str.split("");
  console.log(splitArr);
  return splitArr.reduce((obj, key) => {
    obj[key] = obj[key] + 1 || 1;
    return obj;
  }, {});
}
console.log("10. countLetters: ");
console.log(countLetters("abbcbc"));
