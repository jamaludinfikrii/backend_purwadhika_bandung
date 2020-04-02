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