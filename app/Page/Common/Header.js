import React, { useEffect, useState } from 'react'
import LogoEvoWhite from '../../assets/images/logo-evotek-white.svg'
import logo from '../../assets/images/logo-evotek.svg'
import './HeaderHome.scss'
import { DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import TitleBanner from '../../components/Home/TitleBanner/TitleBanner'
import AOS from 'aos';
import 'aos/dist/aos.css';
function HeaderHome() {
    const [selectedLanguage, setSelectedLanguage] = useState('vi');
    const [activeMenu, setActiveMenu] = useState("Trang chủ")
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(true);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const isBottom =
                window.innerHeight + window.scrollY <= document.body.offsetHeight;
            setIsScrolledToBottom(isBottom);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const dataMenu = [
        { name: "Trang chủ", id: 1 },
        {
            name: 'Công ty ', parent: [
                { nameChild: 'Về EVOTEK' },
                { nameChild: 'Đội ngũ' },
                { nameChild: 'Chứng chỉ' },
                { nameChild: 'Giải thưởng' }
            ]
        },
        {
            name: 'Sản phẩm', parent: [
                { nameChild: 'EVO MES - Quản trị nhà máy thông minh' },
                { nameChild: 'Easy SMS - Giải pháp tổ chức đại hội đồng cổ đông' },
            ]
        },
    ]
    const dataLanguage = [{ name: 'Việt Nam', 'local': 'vi' }, { name: "English", 'local': 'en' }]
    const [activeDropdowns, setActiveDropdowns] = useState(new Set());
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = (index, e) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveDropdowns(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };
    return (
        <>
            <div className={`  ${isScrolledToBottom ? 'TABFTPANOA' : 'NKRZIHAAHT'}`}>
                <div className="PQTOZXZDYK">
                    <div className='SYAYGPEFHF'>
                        {isScrolledToBottom ? <img src={LogoEvoWhite.src} /> : <img src={logo.src} />}
                    </div>
                    <div className='FYZUYSHZEA'>
                        <div className='NYFNUZOMYP'>
                            {dataMenu.map((item, index) => (
                                <div
                                    key={index}
                                    className='GIMJCKORAB'
                                    onClick={() => setActiveMenu(item.name)}
                                    style={{
                                        cursor: 'pointer',
                                        color: isScrolledToBottom
                                            ? (activeMenu === item.name ? '#fff' : 'hsla(0, 0%, 100%, .8)')
                                            : (activeMenu === item.name ? 'black' : 'hsla(0, 0.00%, 11.80%, 0.80)')
                                    }}
                                >
                                    <div className='GYCZRLSATG'>
                                        <div>{item.name}</div>
                                        {item?.parent && (
                                            <div className='CDNEUILYCQ'>
                                                <DownOutlined style={{ fontWeight: 'bolder', fill: isScrolledToBottom ? 'black' : 'white   ' }} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Submenu */}
                                    {item?.parent && (
                                        <div className='OVRFNEVBSK'>
                                            {item.parent.map((child, childIndex) => (
                                                <div key={childIndex} className='TZLIGWHGDT'>
                                                    <span>{child.nameChild}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className='RYMRXLWHZT'>
                        <div className='CUNLFCAZBG'>
                            <div className='LRHQWZQVAN'>
                                <SearchOutlined style={{ fontSize: '24px', color: isScrolledToBottom ? 'white' : 'black' }} />
                                <div className='DRFTVYHOJF'>
                                    <div className='JCPESMZNNF'>
                                        <div>
                                            <Input type='search' placeholder='Tìm kiếm...' />
                                        </div>
                                        <div className='JAJXETJGUX'>
                                            <SearchOutlined style={{ fontSize: '24px', color: 'gray' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='HVKGYSVAKM'>
                            <button>LIÊN HỆ</button>
                        </div>
                    </div>
                    <div className="hamburger-menu">
                        <input
                            id="menu__toggle"
                            type="checkbox"
                            checked={menuOpen}
                            onChange={() => setMenuOpen(!menuOpen)}
                        />
                        <label className="menu__btn" htmlFor="menu__toggle">
                            <span></span>
                        </label>
                        <ul className="menu__box">
                            {dataMenu?.map((item, index) => (
                                <li
                                    key={index}
                                    className={`${item?.parent ? "has-dropdown" : ""} ${activeDropdowns.has(index) ? "active" : ""
                                        }`}
                                >
                                    <a
                                        className="menu__item"
                                        href="#"
                                        onClick={(e) => item?.parent && toggleDropdown(index, e)}
                                    >
                                        {item?.name}
                                        {item?.parent && (
                                            <DownOutlined
                                                className={`dropdown-icon ${activeDropdowns.has(index) ? 'open' : ''
                                                    }`}
                                            />
                                        )}
                                    </a>
                                    {item?.parent && item?.parent?.length > 0 && (
                                        <ul className="dropdown">
                                            {item.parent.map((child, childIndex) => (
                                                <li key={childIndex}>
                                                    <a className="menu__item" href="#">
                                                        {child.nameChild}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <TitleBanner />
        </>
    )
}

export default HeaderHome