import axios from 'axios';
import { getUrlDevLinkV3 } from './helpFunction';

let myInterceptor = axios

myInterceptor.interceptors.request.use(function (config) {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined' && localStorage) {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }


  return config;
});

export async function axiosPOST(type = '', Url, param = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  return myInterceptor.post(URL_BASE_ADMIN + Url, param).then(res => {
    return res;
  }).catch(err => {
    return err?.response;
  })
}

export async function axiosGET(type, Url) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  return (myInterceptor.get(URL_BASE_ADMIN + Url).then(res => {
    return res;
  }).catch(err => {
    return err?.response;
  }));
}

export async function axiosPUT(type = '', Url, param = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  return myInterceptor.put(URL_BASE_ADMIN + Url, param).then(res => {
    return res;
  }).catch(err => {
    return err?.response;
  })
}

export async function axiosDelete(type = '', Url, param = {}) {
  let URL_BASE_ADMIN = getUrlDevLinkV3(type)
  return myInterceptor.delete(URL_BASE_ADMIN + Url, param).then(res => {
    return res;
  }).catch(err => {
    return err?.response;
  })
}