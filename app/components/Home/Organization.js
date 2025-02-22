import React from 'react'
import './Organization.scss'
import vin1 from '../../assets/images/vin-es-1.svg'
import vinfast from '../../assets/images/vinfast-2.svg'
import vinhomes from '../../assets/images/vinhomes.svg'
import vinmec from '../../assets/images/vinmec-1.svg'
import mb from '../../assets/images/mb.svg'
import tpbank from '../../assets/images/tpbank.svg'
import vib from '../../assets/images/vib.svg'
import bidv from '../../assets/images/bidv.svg'
import vpbank from '../../assets/images/vpbank.svg'
import viettel from '../../assets/images/viettel-2.svg'
import vnpt from '../../assets/images/vnpt-2.svg'
import mobifone from '../../assets/images/mobifone-1.svg'
import panasonic from '../../assets/images/panasonic.svg'
import gtel from '../../assets/images/gtel-1.svg'
import golden from '../../assets/images/golden-gate-2.svg'
import kafi from '../../assets/images/kafi.svg'
import ssi from '../../assets/images/ssi.svg'
import pvi from '../../assets/images/pvi.svg'
import { RightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function Organization() {
    const dataVin = [
        { link: vin1.src },
        { link: vinfast.src },
        { link: vinhomes.src },
        { link: vinmec.src },
    ]
    const dataBank = [
        { link: mb.src },
        { link: tpbank.src },
        { link: bidv.src },
        { link: vib.src },
        { link: vpbank.src },
    ]
    const dataNetwork = [
        { link: viettel.src },
        { link: vnpt.src },
        { link: mobifone.src },
        { link: panasonic.src },
        { link: gtel.src },
        { link: golden.src },
    ]
    const data = [
        { link: pvi.src },
        { link: ssi.src },
        { link: kafi.src },
    ]
    return (
        <div data-aos="fade-down" className='NFVUNVTBQU'>
            <div className='CDJKEDVSKP'>
                Được tín nhiệm bởi những tổ chức hàng đầu
                <p>EVOTEK Tự hào đưa ra thị trường những sản phẩm công nghệ xuất sắc. Được tin dùng cả trong và ngoài nước.  </p>
            </div>
            <div className='SYGJXTGMIU'>
                {dataVin?.map((item, index) => (
                    <div key={index} className='DIJPZHCFLN'>
                        <img src={item?.link} />
                    </div>
                ))}
            </div>
            <div className='DGGQJLYJHZ'>
                {dataBank?.map((item, index) => (
                    <div key={index} className='TRSXYNANNF'>
                        <img src={item?.link} />
                    </div>
                ))}
            </div>
            <div className='FOZIUMOLZZ'>
                {dataNetwork?.map((item, index) => (
                    <div key={index} className='CJYLGDAFDR'>
                        <img src={item?.link} />
                    </div>
                ))}
            </div>
            <div className='FOZIUMOLZZ'>
                {data?.map((item, index) => (
                    <div key={index} className='CJYLGDAFDR'>
                        <img src={item?.link} />
                    </div>
                ))}
            </div>
            <div className='VRGTHYVQOR'>
                <Button>Chúng tôi đã làm gì cho họ? <RightOutlined /></Button>
            </div>
        </div>
    )
}

export default Organization