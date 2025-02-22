import React, { useEffect, useState } from 'react'
import './Project.scss'
import { Button } from 'antd'
import anh1 from '../../../assets/images/anh1.jpg'
import API from '../../../Service/API';
function Project() {
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        pretty: true,
        skip: 0,
        limit: 6,
        read_key: '8bhBZUOcR3C3Y5Ef0VKlXFNzANhFWk6nvMxKZTYD5NBlsJexLr',
        depth: 1,
        props: 'slug,title,metadata',
        query: JSON.stringify({
            type: "products"
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

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className='QKKGZZBIAY'>
            <div className='PRXCIZCPMI'>
                Các dự án tiêu biểu
            </div>
            <div className='IEECHTIDTB'>
                Những dự án đầy tâm huyết, đáp ứng các nhu cầu về bài toán kinh tế, kỹ thuật, sản xuất của các đối tác.
            </div>
            <div className='LNOXZQGPQK'>
                <div className='NWSTSCAEDA'>
                    <span>các dự án khác</span>
                </div>
                <div className='ETFLZRIATI'>
                    <Button>Nhận Tư vấn</Button>
                </div>
            </div>
            <div className='RXKVJOJBXS'>
                {data?.objects?.map((item, index) => (
                    <div key={index} className='BWYOVGHHRJ'>
                        <div className='JAPIABGJIY'>
                            <img src={item?.metadata?.image?.url} />
                        </div>
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
            </div>
        </div>
    )
}

export default Project