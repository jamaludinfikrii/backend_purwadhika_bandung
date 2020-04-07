const db = require('./../3_databases/mysql')


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
    console.log(req.file)
    console.log(req.files)
    // post multiple image to api
    // post ke dua table ==> product & product_image
}

module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct
}