import React, { useEffect, useState } from 'react'
import './Blog.scss';
import Slider from 'react-slick';
import anh1 from '../../../assets/images/anh1.jpg'
import API from '../../../Service/API';

function Blog() {
    const [data, setData] = useState([]);

    const [params, setParams] = useState({
        pretty: true,
        skip: 0,
        limit: 12,
        read_key: '8bhBZUOcR3C3Y5Ef0VKlXFNzANhFWk6nvMxKZTYD5NBlsJexLr',
        depth: 1,
        props: 'slug,title,metadata',
        query: JSON.stringify({
            type: "blogs"
        })
    });
    const fetch = async () => {
        try {
            const res = await API.News.getList(params);
            if (res?.status === 200) {
                setData(res?.data);
            }
        } catch (error) {
            console.error('Failed to fetch news:', error);
        } finally {
        }
    };

    useEffect(() => {
        fetch();
    }, [params]);
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div data-aos="fade-up" className="JDAAYITYQP">
            <div className='DAPTAOKXXY'>
                Evotek viết
            </div>
            <div className='RHWXZUCLCS'>
                Cập nhật những công nghệ thông tin mới nhất cùng EVOTEK
            </div>
            <div className='LNOXZQGPQK'>
                <div className='NWSTSCAEDA'>
                    <span>ĐỌC THÊM CÁC BÀI VIẾT</span>
                </div>

            </div>
            <Slider {...settings}>
                {data?.objects?.map((item, index) => (
                    <div key={index} className="ZCIQSKRLLH">
                        <img src={item?.metadata?.anh?.url} />
                        <div className='XSNSBQAYUL'>
                            <div className='DMBHFRCTYN'>
                                <span>{item?.metadata?.danh_muc_tin_tuc?.title}</span>
                            </div>
                            <div className='FQOLIAVYGG'>
                                {item?.title}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Blog