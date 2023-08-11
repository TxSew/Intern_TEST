//1. Viết hàm kiểu ra một số có chia hết cho số còn lại không? Nếu có chia hết thì trả ra giá trị true, nếu không chia hết thì trả ra giá trị false 
 function checkRemainder(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
 const checkRemainderResult = checkRemainder(6)
  console.log(checkRemainderResult);
//2. Sử dụng hàm (1) để kiểm tra n1 có chia hết cho n2 không? Nếu n1 chia hết cho n2 thì xuất ra màn hình "{n1} chia hết cho {n2}" nếu không thì xuất ra "{n1} không chia hết cho {n2} 
  function checkn1_n2(n1, n2) {
    if (n1 % n2 == 0) {
         console.log( `${n1} chia het cho ${n2}`)
    } else {

         console.log( `${n1} khong chia het cho ${n2}`)
    }
}
//3. Viết hàm tính diện tích hình chữ nhật. Sử dụng hàm để tính diện tích hình chữ nhật có chiều dài/rộng là (10,20); (13,20)
  function area(width, height) {
    return width * height;
  }
  const areaResult = area(10, 20);
  console.log(areaResult);
//4. Viết hàm kiểm tra một chuỗi có hợp lệ hay không? Nếu chuỗi hợp lệ thì trả ra giá trị true, nếu chuỗi không hợp lệ thì trả ra giá trị false. Chuỗi hợp lệ phải thoả mãn tất cả các điều kiện sau
//- Chuỗi có độ dài tối thiểu là 5 
//- Chuối có đội dài tối đa là 20
//- Chuỗi không chứa mã độc = "script" 
 const checkString = (str) => {
     if (str.length <= 5 && str.length >= 20) {
         return false;
     }   
     if (str.includes("script")) {
         return false;
     }
      return true
 }
  const checkStringResult = checkString("script");
   console.log(checkRemainder);
   //5. Sử dụng hàm (4) để kiểm tra "xinchao", "javascript" có hợp lệ hay không? Nếu hợp lệ thì xuất ra màn hình "chuỗi {chuoi} hợp lệ" nếu không thì xuất ra màn hình "chuỗi {chuoi} không hợp lệ".  
  if(checkStringResult == true) {
     console.log(` chuoi hop le`)
  } 
   else {
     console.log(` chuoi khong hop le`)
   }