import { useEffect, useState } from "react"
import arrowIcon from '../../assets/images/arrow_icon.svg'

function ButtonScroll () {

  const [scrolled, setScrolled] = useState(false)

  const checkScrolled = () => {
    setScrolled(window.scrollY > 0);
  }

  const scrollTo = () => {
    window.scrollTo({
      top: scrolled ? 0 : window.innerHeight,
      behavior: 'smooth'
    });
  }

  useEffect (() => {
    window.addEventListener("scroll", checkScrolled);
    return () => {
      window.removeEventListener("scroll", checkScrolled);
    };
  }, [])

  return (
    <>
      <button 
        onClick={scrollTo}
        className={`shadow-[0px_4px_10px_rgba(41,45,50,0.3)] z-9 bg-white fixed right-[20px] bottom-[20px] rounded-[50%] p-[20px] w-[65px] h-[65px]`}
      >
        <img className={`${scrolled && 'rotate-180'} transition-transform duration-[100ms] ease-linear`} src={arrowIcon} />
      </button>
    </>
  )
}

export default ButtonScroll