import { FormDataFile } from "./utilities/deps.ts";
import { imageJpegSchema, imagePngSchema } from "./utilities/schema.ts";

export const ProcessFormData = (file: FormDataFile) : {status: string, message: string, type: string} => {
    const contentType: string = file.contentType;
    const isPng = imagePngSchema.safeParse(contentType);
    const isJpeg = imageJpegSchema.safeParse(contentType);
    if(!isPng.success && !isJpeg.success){
        return {
            status: 'failed.',
            message: 'incorrect file type.',
            type: 'fail'
        }
    }
    const path = file.filename;
    if(!path) {
        return {
            status: 'failed.',
            message: 'no file.',
            type: 'no file.'
        }
    }
    
    return {
        status: 'success.',
        message: path,
        type: isPng.success? "png": "jpeg"
    }
}