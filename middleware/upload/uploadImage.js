const multer  = require('multer')
const mkdirp = require('mkdirp')

const uploadImage = (type) => {
    const storage = multer.diskStorage({
        //đặt đường dẫn file
        destination: (req, file, cb) => {
            cb(null, (`./public/${type}`))
        },
        //đặt tên cho file
        filename: (req, file, cb) => {
            cb(null, Date.now() + '_' + file.originalname)
        }
    })
    const upload = multer({ 
        storage: storage ,
        //validate cho file
        fileFilter: (req, file, cb) => {
            const extensionImagelist = [".png", ".jpg"]
            const extension = file.originalname.slice(-4)
            const check = extensionImagelist.includes(extension)
            if(check){
                cb(null, true)
            }else{
                cb(new Error('extension file invalid'))
            }
        }
    })
    return upload.single(type)
}

module.exports = {
    uploadImage,
}