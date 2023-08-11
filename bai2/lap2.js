//1. (1 điểm) Viết hàm xuất ra số finbonaci tại vị trí n 
//- finbonaci(n): number
//- Đầu vào là vị trí n
//- Đầu ra là giá trị số finbonaci tại vị trí n
//- Ví dụ: Day finbonaci la: 1 1 2 3 5 8 thì finbonaci(5) = 5
const fibonacci = n => {
    if (n <= 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    }

    let prevPrev = 1;
    let prev = 1;
    let current = 0;

    for (let i = 3; i <= n; i++) {
        current = prevPrev + prev;
        prevPrev = prev;
        prev = current;
    }

    return current;
};

console.log(fibonacci(1)); // 1
//2. (1 điểm) Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
//- giaiThua(n): number
const giaiThua = n => {
    if (n === 0 || n === 1) {
        return 1;
    }

    let tich = 1;

    for (let i = 2; i <= n; i++) {
        tich *= i;
    }

    return tich;
};

console.log(giaiThua(10)); // 3628800
//3. (1 điểm) Viết thuật toán sắp xếp bubble sort
//- function bubbleSort(arr: number[]): number[]
//- Đầu vào là một mảng các số
//- Đầu ra là một mảng các số đã được sắp xếp

function bubbleSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Hoán đổi giá trị của arr[j] và arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
const mang = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(mang)); // [11, 12, 22, 25, 34, 64, 90]
//4. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm bubbleSort để sắp xếp lại và trả ra kết quả
 const bubbleSortArr = [5,4,2,7,6]
 console.log(bubbleSort(bubbleSortArr))
//5. (1 điểm) Viết thuật toán tìm kiếm tuần tự 
//- function linearSearch(arr, soCanTim): number
//- Đầu vào là một mảng các số & số cần tìm
//- Đầu ra là vị trí số cần tìm
function linearSearch(arr, soCanTim) {
    const length = arr.length;
    
    for (let i = 0; i < length; i++) {
        if (arr[i] === soCanTim) {
            return i; // Trả về vị trí nếu tìm thấy số cần tìm
        }
    }

    return -1; // Trả về -1 nếu không tìm thấy số trong mảng
}

   
//6. (1 điểm) Cho mang [5,4,2,7,6] sử dụng hàm linearSearch để tìm vị trí số 6 trong mảng
console.log(linearSearch([1,2,4,5,6,78,4,3,2,], 6))
//7. (2 điểm) Viết thuật toán tìm kiếm nhị phân
 //   - function binarySearch(arr, soCanTim): number
  //  - Đầu vào là một mảng các số & số cần tìm
   // - Đầu ra là vị trí số cần tìm
function binarySearch(arr, soCanTim) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === soCanTim) {
            return mid; // Trả về vị trí nếu tìm thấy số cần tìm
        } else if (arr[mid] < soCanTim) {
            left = mid + 1; // Tìm phía bên phải của mid
        } else {
            right = mid - 1; // Tìm phía bên trái của mid
        }
    }

    return -1; // Trả về -1 nếu không tìm thấy số trong mảng
}

//8. (1 điểm) Cho mang [5,4,2,7,6] 
//- Sử dụng hàm bubbleSort để sắp xếp lại
//- Sử dụng hàm binarySearch để tìm ra vị trị số 7 trong mảng
 const mang8=[5,4,2,7,6] 
 console.log(bubbleSort(mang8))
 console.log(binarySearch(mang8,7))
 //9. (1 điểm) Tạo ra mảng từ 1 -> 1048576 tăng dần từ nhỏ tới lớn. 
  //  - Sử dụng hàm binarySearch để tìm ra vị trị số 1048576 trong mảng, in ra màn hình số lần so sánh của thuật toán
   // - 1048576 = 2 ^ 20 => Kiểm tra xem số lần so sánh có phải bằng 20 không?
   function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let comparisons = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        comparisons++;

        if (arr[mid] === target) {
            return { comparisons, index: mid };
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return { comparisons, index: -1 };
}

// Tạo mảng từ 1 đến 1048576
const arr = Array.from({ length: 1048576 }, (_, i) => i + 1);

const target = 1048576;
const { comparisons, index } = binarySearch(arr, target);

console.log("Số lần so sánh:", comparisons);
if (index !== -1) {
    console.log(`Số ${target} được tìm thấy tại vị trí ${index}.`);
} else {
    console.log(`Số ${target} không tồn tại trong mảng.`);
}

const expectedComparisons = 20;
console.log("Số lần so sánh có phải bằng 20?", comparisons === expectedComparisons);
