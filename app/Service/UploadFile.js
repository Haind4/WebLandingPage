import {axiosPOST} from "../Helper/TypeAxios";

export default class UploadFile {
    uploadFile(data) {
        return axiosPOST(`/upload/file`, data, {})
    }

    uploadMultipleFile(data) {
        return axiosPOST(`/upload/file/multiple`, data, {})
    }
}
