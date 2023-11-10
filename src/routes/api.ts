import { Router} from "express"
import * as galleryController from '../controllers/galleryController'
import multer from "multer"
//Multer
const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, './public/media')
  },
  filename: (req, file, cb)=>{
    let randomNamePhoto = Math.floor(Math.random()*9999999)
    cb(null, file.fieldname+randomNamePhoto+Date.now()+'.jpg')
  }
})


const upload = multer({
  storage,
  //Filter
  fileFilter:(req, file, cb)=>{
    const allowed: string[] =  ['image/jpg','image/jpeg', 'image/png']
    if(allowed.includes(file.mimetype)){
      cb(null, true)
    }
     else{ cb(null, false)
    return
  }
    
  }
})

const router = Router()


router.get('/list' , galleryController.list )

router.post('/add', upload.single('photo'), galleryController.add)

export default router