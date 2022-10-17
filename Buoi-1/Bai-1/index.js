const arr = [44, 90, 80, 72, 52, 89, 90, 94, 99, 23, 29, 21, 86, 87, 84, 60, 49, 37, 94];
let count = 0;

// Đếm số lần xuất hiện
function countNumber() {
    for (let i = 0; i < arr.length; i++) {
        for (let m = 0; m < arr.length; m++) {
        if (arr[i] == arr[m]) {
            count += 1;
        }
    }
    console.log(`Số ${arr[i]} xuất hiện ${count} lần`);
    count = 0;
}
}
countNumber();


// Đếm số khác nhau trong mảng
function countDifNumber() {
    let result = 0;
    const arr2 = arr.sort((a, b) => {
        return a - b;
   })
   for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] != arr2[i+1]) {
        result += 1;
    }
   }
   console.log(result);
}
countDifNumber();