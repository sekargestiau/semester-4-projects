const form = document.querySelector('.form')
let ErrorMessage = []

// function subTotal(nilaiMatkul11, nilaiMatkul22, nilaiMatkul33, nilaiMatkul44, nilaiMatkul55){
//     total = nilaiMatkul11 + nilaiMatkul22 + nilaiMatkul33 + nilaiMatkul44 + nilaiMatkul55
//     return total
// }

function ipk_result(){
    nilaiMatkul11 = parseInt(document.getElementById("nilai1").value);
    nilaiMatkul22 = parseInt(document.getElementById("nilai2").value);
    nilaiMatkul33 = parseInt(document.getElementById("nilai3").value);
    nilaiMatkul44 = parseInt(document.getElementById("nilai4").value);
    nilaiMatkul55 = parseInt(document.getElementById("nilai5").value);

    numSKS6 = parseInt(document.getElementById('sks1').value);
    numSKS7 = parseInt(document.getElementById('sks2').value);
    numSKS8 = parseInt(document.getElementById('sks3').value);
    numSKS9 = parseInt(document.getElementById('sks4').value);
    numSKS10 = parseInt(document.getElementById('sks5').value);

    result = ((nilaiMatkul11*numSKS6) + (nilaiMatkul22*numSKS7) + (nilaiMatkul33*numSKS8) + (nilaiMatkul44*numSKS9) + (nilaiMatkul55*numSKS10))/(numSKS6 + numSKS7 + numSKS8 +numSKS9 + numSKS10);

    //result = (nilaiMatkul11 + nilaiMatkul22 + nilaiMatkul33 + nilaiMatkul44 + nilaiMatkul55)/5

    document.getElementById('ipk').value = result;
}

function cekPredikat(){
    let predikat2
    grade1 = parseInt(document.getElementById("nilai1").value);
    grade2 = parseInt(document.getElementById("nilai2").value);
    grade3 = parseInt(document.getElementById("nilai3").value);
    grade4 = parseInt(document.getElementById("nilai4").value);
    grade5 = parseInt(document.getElementById("nilai5").value);
    
    numSKS6 = parseInt(document.getElementById('sks1').value);
    numSKS7 = parseInt(document.getElementById('sks2').value);
    numSKS8 = parseInt(document.getElementById('sks3').value);
    numSKS9 = parseInt(document.getElementById('sks4').value);
    numSKS10 = parseInt(document.getElementById('sks5').value);

    ipk2 = ((grade1*numSKS6) + (grade2*numSKS7) + (grade3*numSKS8) + (grade4*numSKS9) + (grade5*numSKS10))/(numSKS6 + numSKS7 + numSKS8 +numSKS9 + numSKS10);


    if(ipk2 == 0 ){
        predikat2='E';
    }else if(ipk2 > 0 && ipk2 <= 1){
        predikat2='D';
    }else if(ipk2 > 1 && ipk2 <= 2){
        predikat2='C';
    }else if(ipk2 > 2 && ipk2 <= 3.9){
        predikat2='B';
    }else if(ipk2 == 4){
        predikat2='A';
    }else{
        predikat2='Invalid';
    }

    document.getElementById('predikat').value = predikat2;
}

function cekPredikatMatkul1(){
    let predikat3
    grade = parseInt(document.getElementById('nilai1').value);
    if(grade == 0 ){
        predikat3='E';
    }else if(grade > 0 && grade <= 1){
        predikat3='D';
    }else if(grade > 1 && grade <= 2){
        predikat3='C';
    }else if(grade > 2 && grade <= 3.9){
        predikat3='B';
    }else if(grade == 4){
        predikat3='A';
    }else{
        predikat3='Invalid';
    }

    document.getElementById('pnilai1').value = predikat3;
}

function cekPredikatMatkul2(){
    let predikat4
    grade2 = parseInt(document.getElementById('nilai2').value);
    if(grade2 == 0 ){
        predikat4='E';
    }else if(grade2 > 0 && grade2 <= 1){
        predikat4='D';
    }else if(grade2 > 1 && grade2 <= 2){
        predikat4='C';
    }else if(grade2 > 2 && grade2 <= 3){
        predikat4='B';
    }else if(grade2 > 3 && grade2 <= 4){
        predikat4='A';
    }else{
        predikat4='Invalid';
    }

    document.getElementById('pnilai2').value = predikat4;
}

function cekPredikatMatkul3(){
    let predikat5
    grade3 = parseInt(document.getElementById('nilai3').value);
    if(grade3 == 0 ){
        predikat5='E';
    }else if(grade3 > 0 && grade3 <= 1){
        predikat5='D';
    }else if(grade3 > 1 && grade3 <= 2){
        predikat5='C';
    }else if(grade3 > 2 && grade3 <= 3){
        predikat5='B';
    }else if(grade3 > 3 && grade3 <= 4){
        predikat5='A';
    }else{
        predikat5='Invalid';
    }

    document.getElementById('pnilai3').value = predikat5;
}

function cekPredikatMatkul4(){
    let predikat6
    grade4 = parseInt(document.getElementById('nilai4').value);
    if(grade4 == 0 ){
        predikat6='E';
    }else if(grade4 > 0 && grade4 <= 1){
        predikat6='D';
    }else if(grade4 > 1 && grade4 <= 2){
        predikat6='C';
    }else if(grade4 > 2 && grade4 <= 3){
        predikat6='B';
    }else if(grade4 > 3 && grade4 <= 4){
        predikat6='A';
    }else{
        predikat6='Invalid';
    }

    document.getElementById('pnilai4').value = predikat6;
}

function cekPredikatMatkul5(){
    let predikat7
    grade5 = parseInt(document.getElementById("nilai5").value);
    if(grade5 == 0 ){
        predikat7='E';
    }else if(grade5 > 0 && grade5 <= 1){
        predikat7='D';
    }else if(grade5 > 1 && grade5 <= 2){
        predikat7='C';
    }else if(grade5 > 2 && grade5 <= 3){
        predikat7='B';
    }else if(grade5 > 3 && grade5 <= 4){
        predikat7='A';
    }else{
        predikat7='Invalid';
    }

    document.getElementById('pnilai5').value = predikat7;
}

function totalSKS(){
    numSKS1 = parseInt(document.getElementById('sks1').value);
    numSKS2 = parseInt(document.getElementById('sks2').value);
    numSKS3 = parseInt(document.getElementById('sks3').value);
    numSKS4 = parseInt(document.getElementById('sks4').value);
    numSKS5 = parseInt(document.getElementById('sks5').value);

    total = numSKS1 + numSKS2 + numSKS3 + numSKS4 + numSKS5
    document.getElementById('total_sks').value = total;
}

function validation(namamatkul1, namamatkul2, namamatkul3, namamatkul4, namamatkul5, jumlahsks1, jumlahsks2, jumlahsks3, jumlahsks4, jumlahsks5,
    nilaimatkul1, nilaimatkul2, nilaimatkul3, nilaimatkul4, nilaimatkul5){
    if(namamatkul1 | namamatkul2 | namamatkul3 | namamatkul4 | namamatkul5 == ''){
        ErrorMessage.push('Nama Mata Kuliah harus diisi!')
    }
}

form.addEventListener('submit', (event) =>{
    let namaMatkul1 = document.getElementById('nama1').value;
    let namaMatkul2 = document.getElementById('nama2').value;
    let namaMatkul3 = document.getElementById('nama3').value;
    let namaMatkul4 = document.getElementById('nama4').value;
    let namaMatkul5 = document.getElementById('nama5').value;
    let nilaiMatkul1 = document.getElementById('nilai1').value;
    let nilaiMatkul2 = document.getElementById('nilai2').value;
    let nilaiMatkul3 = document.getElementById('nilai3').value;
    let nilaiMatkul4 = document.getElementById('nilai4').value;
    let nilaiMatkul5 = document.getElementById('nilai5').value;
    let jumlahSKS1 = document.getElementById('sks1').value;
    let jumlahSKS2 = document.getElementById('sks2').value;
    let jumlahSKS3 = document.getElementById('sks3').value;
    let jumlahSKS4 = document.getElementById('sks4').value;
    let jumlahSKS5 = document.getElementById('sks5').value;

    validation(namaMatkul1, namaMatkul2, namaMatkul3, namaMatkul4, namaMatkul5, jumlahSKS1, jumlahSKS2, jumlahSKS3, jumlahSKS4, jumlahSKS5,
    nilaiMatkul1, nilaiMatkul2, nilaiMatkul3, nilaiMatkul4, nilaiMatkul5)
    
    // const total = subTotal(nilaiMatkul1, nilaiMatkul2, nilaiMatkul3, nilaiMatkul4, nilaiMatkul5)
    // const result = ipk_result(total)
    // const predikat_cek = cekPredikat(total)
    // const sksfull = totalSKS(jumlahSKS1, jumlahSKS2, jumlahSKS3, jumlahSKS4, jumlahSKS5) 
    cekPredikatMatkul1();
    cekPredikatMatkul2();
    cekPredikatMatkul3();
    cekPredikatMatkul4();
    cekPredikatMatkul5();
    ipk_result();
    cekPredikat();
    totalSKS();
})
