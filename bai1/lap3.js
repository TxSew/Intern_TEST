// 1. Viết hàm xuất ra tin nhắn n lần: xuatTinNhan(noiDung, soLan): void
  function xuatTinNhan(noiDung, soLan) {
     for (let index = 0; index < soLan; index++) {
        console.log(noiDung +"so lan" + index); 
     }
  }
 // 2. Viết hàm tính tổng tất cả các số nhỏ hơn n: tinhTong(n)
 function tinhTong(n) {
    let tong = 0;
    for (let i = 0; i < n; i++) {
        tong += i;
    }
    return tong;
}

console.log(tinhTong(5)); // Kết quả: 0 + 1 + 2 + 3 + 4 = 10
// 3. Viết hàm tính tính tổng tất cả những số nhỏ hơn n và chia hết cho cả 2; 3
//      - tinhTongChiaHetCho2Va3(n): number
function tinhTongChiaHetCho2Va3(n) {
    let tong = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            tong += i;
        }
    }
    return tong;
}

console.log(tinhTongChiaHetCho2Va3(20)); // Kết quả: 0 + 6 + 12 + 18 = 36 (số chia hết cho cả 2 và 3 nhỏ hơn 20)
// 4. Viết hàm tính tính tổng tất cả những số nhỏ hơn n và chia hết cho cả a; b
//      - tinhTongChiaHet(n,a,b): number
    function tinhTongChiaHet(n, a, b) {
        let tong = 0;
        for (let i = 0; i < n; i++) {
            if (i % a === 0 && i % b === 0) {
                tong += i;
            }
        }
        return tong;
    }
// 5. Viết hàm tính tổng n số lẻ nhỏ nhất
//      - tinhTongSoLe(n)
//      Ví dụ: tinhTongSoLe(5) = 1+3+5+7+9

function tinhTongSoLe(n) {
    let tong = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 === 0) {
            tong += i;
        }
    }
    return tong;
}
// 6. Viết hàm tính tổng n số nhỏ nhất chia hết cho cả 2 và 3
//      tinhTongNSoNhoNhatChiaHetCho2Va3(n)
  function tinhTongNSoNhoNhatChiaHetCho2Va3(n) {
    let tong = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            tong += i;
        }
    }
    return tong;
}
// 7. Viết hàm tính tổng n số nhỏ nhất chia hết cho cả a và b
//      - tinhTongNSoNhoNhatChiaHet(n,a,b)
  function tinhTongNSoNhoNhatChiaHet(n, a, b) {
    let tong = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 && i % b === 0) {
            tong += i;
        }
    }
    return tong;
}
// 8. Viết hàm kiểm tra xem một số có phải số nguyên tố không. Nếu đúng là số nguyên tố thì trả ra true, nếu không thì trả ra false
//      - isPrime(n): boolean 
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// 9. Viết hàm xuất ra n số nguyên tô nhỏ nhất 
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

   