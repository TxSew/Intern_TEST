//1. Viết hàm tính chu vi hình chữ nhật
const tinhChuviChunhat = (w, h) => {
  return w + h * 2;
};
//2. Viết hàm tính diện tích hình chữ nhật
const dienTichChunhat = (w, h) => {
  return w * h;
};
//3. Viết hàm xuất ra n số lẻ nhỏ nhất
function xuatNSoLeNhoNhat(n) {
  let soLuongSoLe = 0;
  let i = 1; // Bắt đầu từ số lẻ đầu tiên là 1

  while (soLuongSoLe < n) {
    console.log(i);
    soLuongSoLe++;
    i += 2; // Tăng lên 2 để duyệt qua các số lẻ
  }
}
// 4. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ n.
function xuatNSoLeGanNhat(m, n) {
  let soLuongSoLe = 0;
  let i = n; // Bắt đầu từ số lẻ đầu tiên là 1

  while (soLuongSoLe < m) {
    console.log(i);
    soLuongSoLe++;
    i += 2; // Tăng lên 2 để duyệt qua các số lẻ
  }
}
//5. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
function laSoNguyenTo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//6.  Viết hàm xuất ra n số nguyên tố nhỏ nhất.
function laSoNguyenTo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function xuatNSoNguyenToNhoNhat(n) {
  let soLuongSoNguyenTo = 0;
  let i = 2; // Bắt đầu từ số nguyên tố đầu tiên là 2

  while (soLuongSoNguyenTo < n) {
    if (laSoNguyenTo(i)) {
      console.log(i);
      soLuongSoNguyenTo++;
    }
    i++;
  }
}

xuatNSoNguyenToNhoNhat(10); // Xuất ra 10 số nguyên tố nhỏ nhất
//7. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
//- getLessThan(n): number[]
//- Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
function getLessThan(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  return result;
}
console.log(getLessThan(3)); // [0, 1, 2]
//8. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng
//- find(arr, chuoiCanTim): number
//- Ví dụ find([1,2,3,2,5], 2) sẽ trả ra vi tri 1
function find(arr, chuoiCanTim) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === chuoiCanTim) {
      return i;
    }
  }
  return -1; // Trả về -1 nếu không tìm thấy phần tử trong mảng
}

//9.Viết hàm tìm ra tất cả vị trí phần tử nằm trong mảng
//- filter (arr, chuoiCanTim): number
//- Ví dụ filter([1,2,3,2,5], 2) sẽ trả ra vi tri [1, 3]
function filter(arr, chuoiCanTim) {
    const viTri = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === chuoiCanTim) {
            viTri.push(i);
        }
    }
    return viTri;
}

const mang = [1, 2, 3, 2, 5];
console.log(filter(mang, 2)); // [1, 3]
//10. Định nghĩa một mảng nhân viên gồm 2 thông tin: họ tên, tuổi bao gồm 5 nhân viên
const nhanVien = [
  {
    name: "do quang thanh",
    age: 20,
  },
  {
    name: "nguyen thi quynh",
    age: 27,
  },
  {
    name: "tran trung tien",
    age: 25,
  },
  {
    name: "nguyen van  b",
    age: 29,
  },
];
//11. Viết hàm sắp xếp tuổi nhân viên giảm dần
   // - sortDesc(arr): arr
    //- Ví dụ sortDesc([{name: 'hieu', age: 30}, {name:'tuan', age: 40}]) sẽ trả ra kết quả [{name:'tuan', age: 40}, {name: 'hieu', age: 30}]

    const sortDesc = nhanVien.sort((a,b) => {
        return b.age - a.age;
    })
     console.log(nhanVien);


     //12. Tìm trong mảng nhân viên có tuổi = x 
    //- find(arr, age: number): nhan_vien
    //- Ví dụ find([{name: 'hieu', age: 30}, {name:'tuan', age: 40}], 40) => sẽ trả ra kết quả {name:'tuan', age: 40}
   
     function findAge(age) {
         for (let i = 0; i < nhanVien.length; i++) {
             if (nhanVien[i].age === age) {
                 return nhanVien[i];
             }
         }
     }
      