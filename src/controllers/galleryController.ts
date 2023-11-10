import { Request,Response } from "express"
import { Photo } from '../models/Gallery'
require('dotenv').config()

  //List gallery
  export const list = async (req: Request, res: Response) => {
    try {
      const photos = await Photo.findAll();
      
      res.json(photos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error when listing photos' });
    }
  };

  
export const add = async (req:Request, res:Response) =>{
  
  //Types img
  interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    destination: string;
    filename: string;
    path: string;
    size: number;
  }

  //Accpts only image
if(req.file){
 const file = req.file as UploadedFile
}else{
  res.status(404).json({error: 'File not sent'})
  return
}


  try{
    const description: string = req.body.description
  const photo: string = `${process.env.BASE}/media/${req.file?.filename}`
  if(!description || !photo){
    console.log(description, photo)
    res.json({error: 'Photo and description mandatory'})
    return
  }else{
    
    await Photo.create({description, photo})
    res.json({success: 'Photo add success'})
  }
  } catch{
    res.json({error:'Error internal'})
  }
}




