/**
 * khối 1:input
 * chieuDai,chieuRong
 * 
 * 
 * khối 2:
 * b1: khai báo các biến
 * chieuDai,chieuRong,dienTich, chuVi
 * b2 : a)tính diện tích HCN:
 * CT: dài * rộng => dienTich = chieuDai * chieuRong
 * b) tính chu vi
 * CT: (dài + rộng) * 2 => chuVi = (chieuDai + chieuRong) * 2
 * b3 : hiển thị kết quả lên => log
 * 
 * 
 * khối 3:output
 * dienTich, chuVi
 */

var chieuDai = 5;
var chieuRong = 3;
var dienTich = 0;
var chuVi = 0;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2

console.log("Diện tích hình chữ nhật là : " + dienTich);
console.log("Chu vi hình chữ nhật là : " + chuVi);

