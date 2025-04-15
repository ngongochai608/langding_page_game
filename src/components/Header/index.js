import { useState, useEffect } from "react"
import logoHeader from "../../assets/images/logo_header.svg"
import ToggleLanguage from "../ToggleLanguage"
import { useLanguage } from "../../stores/state"

function Header () {
  const { data } = useLanguage();
  const [toggleMenu, setToggleMenu] = useState(false)

  const [scrolled, setScrolled] = useState(false)

  const checkScrolled = () => {
    setScrolled(window.scrollY > 0);
  }

  useEffect (() => {
    window.addEventListener("scroll", checkScrolled);
    return () => {
      window.removeEventListener("scroll", checkScrolled);
    };
  }, [])

  return (
    <header className={`${scrolled && 'bg-black'} flex justify-center fixed top-0 left-0 w-full z-10`}>
      <div className="flex justify-between items-center p-[20px] w-[1920px] h-[84px]">
        <div className={`${toggleMenu && 'hidden'} flex-1`}>
          <img src={logoHeader} />
        </div>
        <nav className={`${!toggleMenu && 'hidden'} lg:flex lg:items-center lg:w-max lg:relative lg:bg-transparent lg:block lg:p-0 pt-[100px] fixed top-0 left-0 bg-white z-9 w-full h-full`}>
          <ul className="flex flex-col lg:gap-[84px] lg:flex-row gap-[24px] text-center px-[16px]">
            {data.menu.map((item, i) => 
              <li key={i}>
                <a className="text-[#000] lg:text-white text-[14px] leading-[17.5px] font-bold" href={item.link}>{item.name}</a>
              </li>
            )}
          </ul>
        </nav>
        <ToggleLanguage className={`${!toggleMenu && 'hidden'} lg:block`} />
        <button 
          className={`${toggleMenu && 'active'} lg:hidden hamburger-btn z-10 flex flex-col justify-between`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header