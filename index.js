// const CryptoJS = require("crypto-js");

// const MyPlainData = [
//   { name: "vikash", age: 24 },
//   { name: "vikash", age: 24 },
//   { name: "vikash", age: 24 },
// ];

//  const aesEncrypt = async (MyPlainData) => {
//   const customekey = CryptoJS.enc.Utf16.parse("c2tnb191v3aa");
//   const Iv = CryptoJS.enc.Utf16.parse("sinasinasisinaaaaa");
//   const cipherKey = CryptoJS.AES.encrypt(JSON.stringify(MyPlainData), customekey, {
//     iv: Iv,
//     mode: CryptoJS.mode.CBC,
//   });
//   console.log(cipherKey.toString());
//   return cipherKey.toString();
// };

// const DescriptionKey = aesEncrypt(MyPlainData);

//  const aesDencrypt = async (CipherKey) => {
//   const customekey = CryptoJS.enc.Utf16.parse("c2tnb191v3aa");
//   const Iv = CryptoJS.enc.Utf16.parse("sinasinasisinaaaaa");
//   const CipherData = await CryptoJS.AES.decrypt(CipherKey, customekey, {
//     iv: Iv,
//     mode: CryptoJS.mode.CBC,
//   });

//   console.log(CipherData.toString(CryptoJS.enc.Utf8));
//   return CipherData.toString(CryptoJS.enc.Utf8);
// };

// Promise.resolve(DescriptionKey).then((res) => {
//  const fi= aesDencrypt(res);
// Promise.resolve(fi).then((res1)=>{
//   console.log(res1)
// })
// });

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let number = target - nums[i];
//         let index = nums.findIndex(el=>(el==number)

//         )

//         if (index >= 0 && index != i) {
//             return [i, index];
//         }
//     }
// };
// let arr=[2,5,6]

// let result=twoSum(arr,11)
// console.log(result)

// var sortArrayByParity = (arr) => {

//   var newarr = [];
//   for (i = 0; i < 5; i++) {
//     if (arr[i] % 2 === 0) {
//         newarr.unshift(arr[i]);
//     } else {
//         newarr.push(arr[i]);
//     }
//   }
//   return newarr;
// };
// let arr = [5, 4, 8, 6, 11];

// const result = sortArrayByParity(arr);
// console.log(result);

// const MedianofArr=(arr)=>{
// let sum=0;
// let count=0;
//     let lenght=arr.length;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//             sum +=arr[i]
//             count++;
//         }
//     }
//     console.log(sum)
//     return sum/count;

// }

// const arr=[2,4,7,8,5]
//   const result=MedianofArr(arr)
//   console.log(result)

// const PalidromNumber=(nums)=>{
//     let result = 0;
//     let lastDigit;
//     let nums1=nums;
//     while(nums != 0){

//         lastDigit = nums % 10;
//       result = result * 10 + lastDigit;
//       nums = Math.floor(nums/10);
//     }
//     if(result===nums1){
//         return 1
//     }
//     else{
//         return 0
//     }
// }
// let nums=121;
// const result=PalidromNumber(nums)
// console.log(result)

// const SwapAlterNate = (arr) => {
//   let temp;
//   for (let i = 0; i < arr.length; i += 2) {
//     if (i + 1 < arr.length) {
//       temp = arr[i + 1];
//       arr[i + 1] = arr[i];
//       arr[i] = temp;
//     }
//   }
//   return arr;
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const result = SwapAlterNate(arr);
// console.log(result);

// const FreQuencyOfElement = (arr) => {
//   let newarr = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count = 1;
//     if (arr[i] != -1) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//           arr[j] = -1;
//           count++;
//         }
//       }
//       newarr[i] = count;
//       // console.log(newarr)
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != -1) {
//       console.log("frequency of " + arr[i], "is " + newarr[i] + " times ");
//     }
//   }
// };
// let arr = [1, 2, 3, 4, 3, 2, 3, 2, 2, 4, 2];
// let result = FreQuencyOfElement(arr);

// var uniqueOccurrences = function(arr) {
//     const map = new Map();
//     for (const n of arr){
//         const e = map.get(n);
//         map.set(n, e ? e + 1 : 1);
//     }
//     const set = new Set(map.values());
//     return set.size === map.size;
// };

// let arr=[1,2,2,1,1,3]
// const result=uniqueOccurrences(arr)
// console.log(result)

// const ReverseArray = (arr) => {
//   let start = 0;
//   let end = arr.length - 1;
//   let temp;
//   while (start < end) {
//     temp = arr[end];
//     arr[end] = arr[start];
//     arr[start] = temp;
//     start++;
//     end--;
//   }
//   return arr;
// };
// const arr = [1, 2, 3, 4, 5, 6,7,8,9];
// const result = ReverseArray(arr);
// console.log(result);

// const ArrangeZeroAndOne=(arr)=>{
//   let newarr=[]
// for(let i=0; i<arr.length-1;i++){

//     if(arr[i]==0){
//         newarr.unshift(arr[i])
//     }
//     else{
//         newarr.push(arr[i])
//     }
// }
// return newarr
// }

// const arr=[1,0,1,0,1,0,1,0,1]
// const result=ArrangeZeroAndOne(arr)
// console.log(result)

// const InterSectionOfArr = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         console.log(arr1[i]);
//         arr2[j] = -222222;
//         break;
//       }
//     }
//   }
// };
// const arr1 = [1, 2, 2, 3, 4, 6];
// const arr2 = [3, 8, 7, 2, 6];

// InterSectionOfArr(arr1, arr2);

// both array are in ascending order
/*
const InterSectionOfArr = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      console.log(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
};
const arr1 = [1, 2, 2, 3, 4, 5];
const arr2 = [2, 2, 3, 3, 5];

InterSectionOfArr(arr1, arr2);

*/

//Binary Serarch
/*
const BinarySearch = (arr) => {
  var start = 0;
  var end = arr.length - 1;
  let mid=Math.floor((start + end)/2);
  while (start <= end) {
    if (arr[mid] == key) {
        // console.log(key)
      return arr[mid]
    }
  else  if (key > arr[mid]) {
      start = mid + 1;
    //   console.log(start)
    } else {
      end = mid - 1;
    }
     mid=Math.floor((start + end)/2);
    // console.log(mid)
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const key = 8;
const result = BinarySearch(arr, key);
console.log(result);
*/

/*
const BinarySearch=(arr)=>{
  let start=0;
  let end=arr.length-1;
  // console.log(end)
let mid=Math.floor((start+end)/2)
// console.log(mid)
while(start<=end){
if(arr[mid]==key){
return key
}
else if(key>arr[mid]){
  start=mid+1;
}
else{
  end=mid-1;
}
mid=Math.floor((end+start)/2)
}
return -1;
}
const arr=[1,2,3,4,5,6,7,8,9]
const key=9;
const result=BinarySearch(arr,key)
console.log(result)

*/
const IndexOfFirstOccurence = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  // console.log(end)
  let ans = -1;
  let mid = Math.floor((start +end) / 2);
  while (start <= end) {
    if (arr[mid] == key) {
      ans = mid
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start+end) / 2);
   
  }
  return ans;
};
let arr = [1, 2, 2, 3, 3 , 4,4,4,5,5,5,6];
const key = 5;
const result = IndexOfFirstOccurence(arr, key);
console.log(result);
