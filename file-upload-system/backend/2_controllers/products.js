const db = require('./../3_databases/mysql')
const fileUpload = require('./../helpers/fileUpload')
const fs = require('fs')



const getAllProducts = (req,res) => {
    const sql = `select p.id as product_id, name, price, created_at, i.id as image_id, image_url 
    from products p 
    left join product_images i 
    on p.id  = i.id_product;`

    db.query(sql, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}


getProductById = (req,res) => {
    const sql = `select p.id as product_id, name, price, created_at, i.id as image_id, image_url 
    from products p 
    left join product_images i 
    on p.id  = i.id_product where p.id = ?;`
    db.query(sql,req.params.id, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result[0]
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}


const postNewProduct = (req,res) => {
    console.log('masuk')
    const upload =  fileUpload.array('product-images')
    upload(req,res,(err) => {
        try{
            let isFailed = false
            if(err) throw err
            req.files.forEach((file) => {
                // check each file size
                if(file.size > 1000000){
                    isFailed = true
                }

                // check each file type
                if(!file.mimetype.includes('image')){
                    isFailed = true
                }
            })

            if(isFailed){
                // delete all failed file
                req.files.forEach((file) => {
                    fs.unlinkSync(file.path)
                })
                throw {error : true , message : "all file must be image and below 1 mb"}
            }else{
                console.log(req.files)

            }


            

        }catch(err){
            res.json(err)
            console.log(err)
        }
    })
    // post multiple image to api
    // post ke dua table ==> product & product_image
}

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct
}