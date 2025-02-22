import React from 'react'
import './Ecosystem.scss'
import evoManu from '../../../assets/images/evomanu-logo.svg'
import openCity from '../../../assets/images/open-city-logo-horizontal.svg'
import dreamJob from '../../../assets/images/dream-jobs-logo-horizontal.svg'
import { Button } from 'antd'
function Ecosystem() {
    const data = [
        { link: evoManu.src, title: 'Giải pháp quản lý sản xuất EVO MES', content: 'Giải thưởng sao khuê 2023 Giải thưởng chuyển đối số xuất sắc 2021' },
        { link: openCity.src, title: 'Giải pháp quản lý vận hành Khu phức hợp và khu đô thị – OpenCity', content: 'Với OpenCity, việc quản lý các tòa nhà sẽ trở nên thông minh và tiện nghi hơn bao giờ hết' },
        { link: dreamJob.src, title: 'Carrer Suscess Platform - DreamJobs.vn', content: 'Giải pháp hoàn hảo cho mọi doanh nghiệp trong việc tìm kiếm và tuyển dụng nhân sự chất lượng' }

    ]
    return (
        <div data-aos="zoom-in" className='VEKEXFPLHI'>
            <div className='GDWVDZCQBA'>
                Hệ sinh thái các sản phẩm EVOTEK
                <div className='ISZPRMLRXQ'>
                    Hệ sinh thái công nghệ của chúng tôi gồm các ứng dụng ERP, CRM, HRM và MES được phát triển trên nền tảng công nghệ tiên tiến, AI và Big Data. Chúng tôi tích hợp chặt chẽ các ứng dụng này để mang lại trải nghiệm liền mạch, thuận tiện cho người dùng. Mục tiêu của chúng tôi là cung cấp cho khách hàng những công cụ công nghệ hiệu quả, giúp tối ưu hóa quy trình, nâng cao năng suất và thúc đẩy đổi mới sáng tạo trong thời đại 4.0.
                </div>
            </div>
            <div className='KVFXLVVAKI'>
                {data?.map((item) => (
                    <div className='ICFYBDOCRI'>
                        <div><img src={item?.link} /></div>
                        <div className='RVIRXRKTOL'>{item?.title}</div>
                        <div className='DYJRYVPNUE'>{item?.content}</div>
                        <div className='FOQMMGRUEM XPGPGBELWU'>
                            <div className='NWSTSCAEDA'>
                                <span>các dự án</span>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Ecosystem