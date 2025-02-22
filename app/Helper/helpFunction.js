import { axiosGET } from "./TypeAxios";

export function validateEmail(email) {
    let re = /^(([^<>()\\,;:\s@"]+(\.[^<>().,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
export function validatePhone(phone) {
    return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(phone);
}
function removeAscent(str) {
    if (str === null || str === undefined) return str;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
}
export function validateFullName(string) {
    var re = /^[a-zA-Z ]{2,}$/g;
    return re.test(removeAscent(string))
}

export function convertSize(sizeInBytes) {
    var sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
    return sizeInMB
}

export function urlParseParams(objectParse = {}) {
    const str = [];
    for (const p in objectParse)
        if (objectParse.hasOwnProperty(p)) {
            if (objectParse[p]) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(objectParse[p]));
            }
        }
    return str.join("&");
}

export function formatMoney(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



export function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '' + match[1] + '.' + match[2] + '.' + match[3]
    }
    return null
}

export function urlBaseGetImage(url) {
    if (url) {
        const urlBase = process?.env?.NEXT_PUBLIC_URL_BASE
        if (url && typeof url === 'string' && urlBase && url?.indexOf(urlBase) > -1 || url?.indexOf('http') > -1) {
            return url
        } else {
            return urlBase + url
        }
    } else {
        return null
    }
}

export function getUrlDevLinkV3(type) {
    let URL_GET_FROM_ENV = "https://api.cosmicjs.com/v3/buckets/backend-dev-production";
    if (type === 'api_dash') {
        URL_GET_FROM_ENV = process?.env?.NEXT_PUBLIC_URL_BASE
    }
    return URL_GET_FROM_ENV;
}

export function isJsonString(str) {
    try {
        return JSON.parse(str);
    } catch (e) {
        return [];
    }
}
