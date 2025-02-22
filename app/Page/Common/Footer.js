import React from 'react'
import './Footer.scss';
import { Button, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import logowhite from '../../assets/images/logo-evotek-white.svg';
import bannerfooter from '../../assets/images/banner-footer.png';
function Footer() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    return (
        <>
            <div className='QZZDNENHCE'>
                <div class="ux-shape-divider ux-shape-divider--top ux-shape-divider--style-curve-invert">
                    <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill='white'>
                        <path class="ux-shape-fill" d="M500 47.0297C184.4 47.0297 -26 100 -26 100H1026C1026 100 815.6 47.0297 500 47.0297ZM1026 -5.94059H-26V-7H1026V-5.94059Z"></path>
                    </svg>
                </div>
                <div className='KYXTFEMAOP'>
                    <div className='MTVQRPYLNC'>
                        Cần xây dựng Giải pháp Phần mềm?
                        EVOTEK có thể giúp bạn!
                    </div>
                    <div className='NUZCLNIBHA'>
                        Tự hào phục vụ hơn 100 doanh nghiệp từ năm 2018, với các sản phẩm đạt tiêu chuẩn quốc tế
                        CMMI Level 3 | ISO 27001:2013 | ISO 9001:2015
                    </div>
                    <Form >
                        <div className='OORYOHWLLC'>
                            <Form.Item className='DHOUYPYUDN'>
                                <p className='SFWLMVVRUI'>Bạn cần giúp đỡ về?</p>
                                <Select
                                    defaultValue="1"
                                    style={{
                                        width: '100%'
                                    }}
                                    onChange={handleChange}
                                    options={[
                                        {
                                            value: '1',
                                            label: 'Phát triển phần mầm',
                                        },
                                        {
                                            value: '2',
                                            label: 'Tích hợp hệ thống',
                                        },
                                        {
                                            value: '3',
                                            label: 'Cơ sở dữ liệu',
                                        },
                                        {
                                            value: '4',
                                            label: 'Điện toán đám mây',
                                        },
                                        {
                                            value: '5',
                                            label: 'Giải pháp blockchain',
                                        },
                                        {
                                            value: 'other',
                                            label: 'Khác',
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item className='DHOUYPYUDN'>
                                <p className='SFWLMVVRUI'>Tên của bạn</p>
                                <Input placeholder='Ví dụ example' />
                            </Form.Item>
                            <Form.Item className='DHOUYPYUDN'>
                                <p className='SFWLMVVRUI'>Email công việc của bạn</p>
                                <Input placeholder='Ví dụ example@gmail.com' />
                            </Form.Item>
                        </div>
                        <Form.Item required className='DHOUYPYUDN'>
                            <p className='SFWLMVVRUI'>Mô tả về vấn đề bạn đang gặp phải, dự án cần xây dựng</p>
                            <TextArea autoSize={{ minRows: 10 }} />
                        </Form.Item>
                        <Form.Item className='DHOUYPYUDN'>
                            <p className='SFWLMVVRUI'>Điện thoại của bạn</p>
                            <Input type='number' placeholder='Hãy để lại điện thoại để chúng tôi giúp đỡ bạn nhanh hơn' autoSize={{ minRows: 10 }} />
                        </Form.Item>
                        <button className='FGSWITJGPY'>Xác nhận</button>
                    </Form>
                </div>
                <div class="footer">
                    <div class="footer-section company-info">
                        <img src={logowhite.src} alt="EVOTEK Logo" class="logo" />
                        <p>IT solutions that EVOLVE YOUR BUSINESS.</p>
                        <p>© 2025 EVOTEK JSC. All rights reserved.</p>
                        <p>hello@evotek.vn</p>
                        <p>(+84) 8.2468.9999</p>
                    </div>
                    <div class="footer-section address">
                        <h3>Văn phòng Hà Nội</h3>
                        <p>Tầng 7, Tòa nhà Kim Hoàn, Ngõ 19 Duy Tân, Q. Cầu Giấy, Hà Nội.</p>
                        <h3>Văn phòng Hà Quốc</h3>
                        <p>3F, 122, Mapo-daero, Mapo-gu, Seoul, Republic of Korea.</p>
                    </div>
                    <div class="footer-section company">
                        <h3>Công ty</h3>
                        <ul>
                            <li>Về EVOTEK</li>
                            <li>Đội ngũ</li>
                            <li>Tuyển dụng</li>
                            <li>Bài viết</li>
                        </ul>
                    </div>
                    <div class="footer-section services">
                        <h3>Dịch vụ</h3>
                        <ul>
                            <li>Phát triển phần mềm</li>
                            <li>Tích hợp hệ thống</li>
                            <li>Cơ sở dữ liệu & Điện toán đám mây</li>
                            <li>Giải pháp BlockChain</li>
                        </ul>
                    </div>
                    <div class="footer-section products">
                        <h3>Sản phẩm</h3>
                        <ul>
                            <li>EVO MES</li>
                            <li>Open City</li>
                            <li>DreamJobs.vn</li>
                        </ul>
                    </div>
                </div>
                <div className='footer-banner'>
                    <img src={bannerfooter.src} />

                </div>
            </div>

        </>
    )
}

export default Footer