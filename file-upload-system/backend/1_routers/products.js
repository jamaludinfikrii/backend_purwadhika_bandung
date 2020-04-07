const Router = require('express').Router()
const controllers = require('./../2_controllers/products')
const multer = require('multer')
// const storageOptions = multer.diskStorage({
//     destination : (req,file,cb) => {
//         cb(null,'./../public/')
//     },
//     filename : (req,file,cb) => {
//         cb(null,'PROD-IMG' + '-' + Date.now())
//     }
// })
// const upload = multer({ dest: './../uploads/' }).single('product-image')

const storageConfig = multer.diskStorage({
    // FILE MAU DISIMPAN DIMANA
    destination : (req,file,cb) => {
        // console.log(req.file)
        cb(null , './uploads')
    } ,
    // NAMA FILE
    filename : (req,file,cb) => {
        cb(null , 'PRD-' + Date.now() + '.' + file.mimetype.split('/')[1])
    } 
})

const filterConfig = (req, file, cb) => {
    if(file.mimetype.split('/')[1] === 'png' || file.mimetype.split('/')[1] === 'jpeg'){
        cb(null, true)
    }else{
        req.validation = {error : true , msg : 'File must be image'}
        cb(null, false)
    }
}


// STORAGE UNTUK MENGATUR PENYIMPANAN DAN NAMA FILE
// UNTUK FILTERING JENIS FILE
// UKURAN
var upload = multer({storage : storageConfig , fileFilter : filterConfig})



Router.get('/' , controllers.getAllProducts) 
Router.get('/:id',controllers.getProductById)
Router.post('/',upload.single('product') ,controllers.postNewProduct)


module.exports = Router