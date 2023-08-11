// 1. Định nghĩa một mảng gồm các phần tử: 5,6,4,3,2,5, 7, 8, 9
  const arrays = [5,6,4,3,2,5, 7, 8, 9
  ]
   // 2. add to array element 5,9,1
    arrays.push(5,9,1)
     console.log(arrays)
//3  Xuất ra màn hình gía trị các số tại vị trí số 1,3,5 => kết quả là: 6,3,5 
  console.log(arrays[1],arrays[3],arrays[5])
   // 4. Cập nhật giá trị tại vị trí số 2 trong mảng thành 60
  arrays[2] = 60
  console.log(arrays)
  // 5. xuat do dai cua mang
 console.log(arrays.length)
 // 6. Xoá các phần tử ở vị trí 6,7,8 và 0,1,2 trong mảng 
 arrays.splice(6,3)
  console.log('arr remove',arrays)
 arrays.splice(0,3)
  console.log(arrays);
// 7. Xuất ra tất cả các số trong mảng theo cú pháp 
//          - Giá trị tại vị trí thứ {i} là {a[i]}
arrays.map((e,i) => {
     console.log(` Giá trị tại vị trí thứ ${i} là ${e}`);
})
// 8. Viết hàm trả ra danh sách tất cả các số nhỏ hơn n và chia hết cho 6
//      - danhSachChiaHetCho6(n):[]
//      - Ví dụ: danhSachChiaHetCho6(15) sẽ trả ra một mảng [0,6,12]
   const danhSachChiaHetCho6 = (n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
      if (i % 6 === 0) {
        arr.push(i)
      }
    }
    return arr
  }


  //9. Viết hàm trả ra danh sách tất cả các số nhỏ hơn n và chia hết cho m
//      - danhSachChiaHet(n,m):[]
//      - Ví dụ: danhSachChiaHet(10,4) sẽ trả ra một mảng [0,4,8]
  const danhSachChiaHet = (n,m) => {
    let arr = []
    for (let i = 0; i < n; i++) {
      if (i % m === 0) {
        arr.push(i)
      }
    }
    return arr
  }

  // 10. Viết hàm cộng tất c ả các phần tử trong mảng với n 
//      - congMang(arr, n): []
//      - Đầu vào là một mảng và n 
//      - Đầu ra là một mảng mà tất cả các số được cộng với n
//      - Ví dụ: arr = [1,2,3]; n=3
// - Kết quả trả ra của hàm: [4,5,6]
  const congMang = (arr, n) => {
    return arr.map((e) => e + n)
  }

  console.log(congMang([1,2,3],3))

   

