import React from 'react'
import './RoadTripPage.scss';
import { Button } from 'antd';
import CountUp from 'react-countup';
function RoadTripPage() {
    const data = [
        { title: 5, content: 'Năm hoạt động' },
        { title: 20, content: 'Khách hàng VNR500' },
        { title: 250, content: 'Nhân sự' },
        { title: 30, content: 'Chuyên gia trên 10 năm kinh nghiệm' },
        { title: 100, content: 'Kỹ sư từ 5-10 năm kinh nghiệm' },
        { title: 2, content: 'Văn phòng Hà Nội & TP.Hồ Chí Minh' },

    ]
    return (
        <div data-aos="fade-up-right" className='ZISLOBEAGL'>
            <div className='IWGTCCAQFH'>
                <h2>Chặng đường EVOTEK</h2>
                <div className='FDMTBKDWSE'>
                    Công ty Cổ phần Công nghệ EVOTEK Việt Nam thành lập năm 2018 với sứ mệnh cung cấp các giải pháp công nghệ phần mềm thông minh và dịch vụ tùy chỉnh, phù hợp với từng khách hàng và đối tác. Với đội ngũ giàu kinh nghiệm, chúng tôi cung cấp các sản phẩm và dịch vụ phần mềm chất lượng cao bao gồm phát triển, triển khai và bảo trì.
                </div>
                <div className='LNOXZQGPQK'>
                    <div className='NWSTSCAEDA'>
                        <span>các dự án</span>
                    </div>
                    <div className='ETFLZRIATI'>
                        <Button>Nhận Tư vấn</Button>
                    </div>
                </div>
            </div>
            <div className='BOBLKESJYD'>
                {data?.map((item) => (
                    <div className='XWATHRKKRA'>
                        <CountUp
                            className='NTJHBDLQGD'
                            start={0}
                            end={item?.title}
                            duration={3}
                            separator=""
                            suffix="+"
                        >
                        </CountUp>
                        <div className='WQNMAAADEB'>
                            {item?.content}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default RoadTripPage