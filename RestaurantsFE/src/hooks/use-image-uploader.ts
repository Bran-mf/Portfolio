import React from 'react'

interface IImageUploaderProps {
    setImage: (image: string) => void
}
export const useImageUploader = (
    {  setImage }: IImageUploaderProps
) => {
    const handleImageChange = (file: File) => {
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return {
        handleImageChange
    }
    

 
}
