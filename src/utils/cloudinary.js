import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath)return null;
        // upload file to cloudinary
        const responese=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // file uploaded successfully
        console.log("File uploaded successfully on cloudinary",responese.url);
        return responese;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        // remove file from local storage
        return null;
        
    }
}

console.log(uploadResult);
export { uploadOnCloudinary };
//  