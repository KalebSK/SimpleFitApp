import { FormDataFile } from "./utilities/deps.ts";
import { imageTypeSchema } from "./utilities/schema.ts";

export const ProcessFormData = (file: FormDataFile) : {status: string, message: string} => {
    const contentType: string = file.contentType;
    const result = imageTypeSchema.safeParse(contentType);
    if(!result.success){
        return {
            status: 'failed.',
            message: 'incorrect file type.'
            
        }
    }
    const path = file.filename;
    if(!path) {
        return {
            status: 'failed.',
            message: 'no file.'
        }
    }
    
    return {
        status: 'success.',
        message: path
    }
}