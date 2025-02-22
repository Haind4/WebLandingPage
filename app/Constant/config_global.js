import Head from "next/head";
import Header from "../components/Header";
import { urlBaseGetImage } from "../Helper/helpFunction";

// const originPath = window.location.origin.split('//')[1]
let origin =
  typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : '';
origin = origin.replace('https://', '')
origin = origin.replace('http://', '')
const URL = `${origin}`;
//domain name becatambinh.com
export const APP_URL = process?.env?.NEXT_PUBLIC_DOMAIN_BASE || URL

export const URL_CATEGORY_LIST = {
  linkTrading: 'https://wetrade.dsc.com.vn/bang-gia?utm_source=wepro&utm_medium=header&utm_campaign=button_banggia',
  trang_chu: '/',
  gioi_thieu: '/gioi-thieu',
  chinh_sach: '/chinh-sach',
  lien_he: '/lien-he',
  hinh_thuc_thanh_toan: '/hinh-thuc-thanh-toan',
  khuyen_mai: '/khuyen-mai',
  huong_dan_mua_hang: '/huong-dan-mua-hang',
  gio_hang: '/gio-hang',
  thanh_toan: '/thanh-toan',
  search: (slug = '') => {
    if (slug) {
      return `/ket-qua-tim-kiem/${slug}`
    } else {
      return `/ket-qua-tim-kiem`
    }
  },
  chi_tiet_sp: (slug = '') => {
    if (slug) {
      return `/chi-tiet-san-pham/${slug}`
    } else {
      return `/chi-tiet-san-pham`
    }
  },
  chi_tiet_dm: (slug = '') => {
    if (slug) {
      return `/chi-tiet-danh-muc/${slug}`
    } else {
      return `/chi-tiet-danh-muc`
    }
  },
  chi_tiet_bai_viet: (slug = '') => {
    if (slug) {
      return `/chi-tiet-bai-viet/${slug}`
    } else {
      return `/chi-tiet-bai-viet`
    }
  },
  danh_muc: (slug = '') => {
    if (slug) {
      return `/danh-muc${slug}`
    } else {
      return `/danh-muc`
    }
  },
}


export const headWeb = (InformationWeb, url, detail = null) => {
  let title = InformationWeb?.[0]?.title
  let description = InformationWeb?.[0]?.description
  let favicon = './logo-evotek.svg'
  let image = '/logo-evotek.svg'

  if (detail) {
    title = detail?.title
    description = detail?.description
    image = detail?.image ? JSON.parse(detail?.image)[0] : null
  }

  return <Head>
    <title>{title}</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <link rel="shortcut icon" href={favicon ? favicon : null} />
    <link rel="icon" href={favicon ? favicon : null} />
    <meta name="keywords" content={description} />
    <meta name="author" content={url} />
    <meta property="og:url" content={`${url}`} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image ? urlBaseGetImage(image) : null} />
    {InformationWeb?.code_web_header ? parse(InformationWeb?.code_web_header) : null}
    
    <div id="fb-root"></div>
    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0" nonce="rNaf1h3v"></script>
    <Header InformationWeb={InformationWeb} url={url} detail={detail} />
    
  </Head>
}

export const footWeb = (InformationWeb) => {

  return <>

    {InformationWeb?.code_web_footer ? parse(InformationWeb?.code_web_footer) : null}
  </>
}