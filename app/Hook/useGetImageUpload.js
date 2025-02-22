import { useCallback } from 'react'
import API from '../Service/API'

const useGetImageUpload = () => {
  const getImageOne = useCallback(async (imageFetch) => {
    const formImages = new FormData();
    let image_link = null;
    if (imageFetch?.originFileObj) {
      formImages.append('files[]', imageFetch.originFileObj);
      const resImage = await API.UploadFile.uploadFile(formImages);
      if (resImage.status === 200) {
        image_link = resImage.data
      }
    } else {
      image_link = imageFetch;
    }
    return image_link
  }, [])

  const getImageMultiple = useCallback(async (imageFetch) => {
    const listCheck = [];
    const formImages = new FormData();
    let image_link = null;
    if (imageFetch && imageFetch.length > 0) {
      imageFetch.map((item) => {
        if (item?.originFileObj) {
          listCheck.push(item?.originFileObj)
          formImages.append('files[]', item.originFileObj);
        }
        return true
      })
      if (listCheck.length > 0) {
        const resImage = await API.UploadFile.uploadMultipleFile(formImages);
        if (resImage.status === 200) {
          image_link = resImage.data
        }
      } else {
        image_link = imageFetch;
      }
    } else {
      image_link = imageFetch;
    }

    return image_link
  }, []);

  return { getImageOne, getImageMultiple }
}

export default useGetImageUpload
