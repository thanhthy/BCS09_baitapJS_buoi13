// 1. BÀI TẬP TÍNH TIỀN LƯƠNG NHÂN VIÊN 
const tienLuong = 100000;
var btnTinhLuong = document.getElementById('btnTinhLuong').onclick = function () {
var soNgayLam = document.getElementById('soNgayLam').value * 1; 
var tongTien= 0; 

tongTien = soNgayLam * tienLuong;

console.log(tongTien);

document.getElementById('ketQuaLuong').innerHTML = `TIỀN LƯƠNG CỦA BẠN LÀ ${tongTien}`;
}


// 2. BÀI TẬP TÍNH GIÁ TRỊ TRUNG BÌNH 
document.getElementById('btntinhTrungBinh').onclick = function () {
    var so1 = document.getElementById('txt-so1').value * 1;
    var so2 = document.getElementById('txt-so2').value * 1;
    var so3 = document.getElementById('txt-so3').value * 1;
    var so4 = document.getElementById('txt-so4').value * 1;
    var so5 = document.getElementById('txt-so5').value * 1;

    var giaTriTrungBinh = 0;
    var tongGiaTri = so1 + so2 + so3 + so4 + so5;
    var giaTriTrungBinh = tongGiaTri / 5;

    console.log(giaTriTrungBinh);

    document.getElementById('ketQuaTrungBinh').innerHTML = `GIÁ TRỊ TRUNG BÌNH LÀ ${giaTriTrungBinh}`;
}


// 3. BÀI TẬP QUY ĐỔI TIỀN 
const tienUSD = 23500;
document.getElementById('btnQuyDoiTien').onclick = function () {
    var nhapSoTienUSD = document.getElementById('txt-soTienUSD').value * 1; 

    var QuyDoiTien = 0;
    QuyDoiTien = nhapSoTienUSD * tienUSD; 
    console.log(QuyDoiTien);

    document.getElementById('ketQuaQuyDoiTien').innerHTML = `SỐ TIỀN QUY ĐỔI LÀ ${QuyDoiTien.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
    })}`;
}


// 4. BÀI TẬP TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT

// - TÍNH CHU VI 
document.getElementById('btnTinhChuVi').onclick = function () {
    var chieuDai = document.getElementById ('txt-chieuDai').value * 1;
    var chieuRong = document.getElementById('txt-chieuRong').value * 1;

    var chuVi = 0;
    chuVi = (chieuDai + chieuRong) * 2; 
    console.log(chuVi);

    document.getElementById ('ketQuaChuVi').innerHTML = `CHU VI HÌNH CHỮ NHẬT LÀ ${chuVi}`;

}

// - TÍNH DIỆN TÍCH 
document.getElementById('btnTinhDienTich').onclick = function () {
    var chieuDai = document.getElementById ('txt-chieuDai').value * 1;
    var chieuRong = document.getElementById('txt-chieuRong').value * 1;

    var dienTich = 0;
    dienTich = chieuDai * chieuRong;
    console.log(dienTich);

    document.getElementById ('ketQuaDienTich').innerHTML = `DIỆN TÍCH HÌNH CHỮ NHẬT LÀ ${dienTich}`;

}


// 5. BÀI TẬP TÍNH TỔNG 2 KÝ SỐ 
document.getElementById('btnTinhtong2kyso').onclick = function () {
    var nhap2KySo = document.getElementById('txt-2KySo').value * 1;

    var tongKySo = 0;
    var hangChuc = Math.floor(nhap2KySo / 10);
    var hangDonVi = Math.floor(nhap2KySo % 10);

    tongKySo = hangChuc + hangDonVi; 

    document.getElementById('ketQua2KySo').innerHTML = `KẾT QUẢ 2 KÝ SỐ LÀ ${tongKySo}`;

}



