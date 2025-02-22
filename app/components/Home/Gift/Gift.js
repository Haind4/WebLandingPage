import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Gift.scss";
import anh1 from '../../../assets/images/anh1.jpg'
import API from "../../../Service/API";

function Gift() {
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        pretty: true,
        skip: 0,
        limit: 12,
        read_key: '8bhBZUOcR3C3Y5Ef0VKlXFNzANhFWk6nvMxKZTYD5NBlsJexLr',
        depth: 1,
        props: 'slug,title,metadata',
        query: JSON.stringify({
            type: "awardnews"
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


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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

    useEffect(() => {
        fetch();
    }, [params]);

    return (
        <>
            <div className="JDAAYITYQP">
                <div className='DAPTAOKXXY'>
                    Phần thưởng cho những nỗ lực không ngừng
                </div>
                <div className='QSBYHTSSCW'>
                    Sự ghi nhận của các tổ chức giải thưởng lớn trong nước qua nhiều năm.
                </div>
                <Slider {...settings}>
                    {data?.objects?.map((item, index) => (
                        <div key={index} className="ZCIQSKRLLH">
                            <img src={item?.metadata?.image?.url} />
                            <div className='XSNSBQAYUL'>
                                <div className='DMBHFRCTYN'>
                                    <span>{item?.metadata?.danh_muc?.title}</span>
                                </div>
                                <div className='FQOLIAVYGG'>
                                    {item?.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>

    );
}

export default Gift;
