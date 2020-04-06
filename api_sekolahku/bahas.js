var nama = ''

try{
    if(nama){
        console.log(nama)
    }else{
        throw {
            error : true,
            message : "variabel nama kosong"
        }
    }
    
}catch(bebas){
    console.log(bebas.message)
}



var angka = 10
try{
    if(angka < 5) throw 'kurang dari lima'
    if(angka > 5) throw 'lebih dari lima'

}catch(err){
    console.log(err)
}