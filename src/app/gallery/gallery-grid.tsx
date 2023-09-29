"use client"

import { CloudinaryImage } from "../../components/cloudinary-image";
import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";

export default function GalleryGrid({images}: {images:SearchResult[]}) {
    return(
        <ImageGrid 
        images={images}
        getImage={(imageData: SearchResult)=>{
            return(
            <CloudinaryImage 
                    key={imageData.public_id}
                    imageData={imageData}
                    alt="something"
                    width="400"
                    height="300"
                />
            )
        }}
        />
)}