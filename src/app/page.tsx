"use client";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import {useState} from 'react';

export type UploadResult = {
    info: {
      public_id: string;
  };
  event: "success";
};

export default function Home() {
  const [imageId, setImageId] = useState("")
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <CldUploadButton 
      onUpload={(result) => {
        let res = result as UploadResult
        setImageId(res.info.public_id)
      }}
      uploadPreset="a3ckbpsx" />
      {imageId && (
      <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
      />
      )}
    </main>
  )
}
