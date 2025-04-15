import { useState } from 'react'
import iconUS from '../../assets/images/united-states.svg'
import iconVN from '../../assets/images/vietnam.svg'
import iconChecked from '../../assets/images/checked.svg'
import { useLanguage } from "../../stores/state"

function ToggleLanguage ({className}) {
  const [toggle, setToggle] = useState(false);
  const {language, setLanguage} = useLanguage();

  return (
    <div className={`relative z-10 ${className}`}>
      <button className={`cursor-pointer has-dropdown-arrow ${toggle && 'open'}`} onClick={() => setToggle(!toggle)}>
        <img src={language == 'us' ? iconUS : iconVN} />
      </button>
      <div className='lg:right-0 lg:left-auto absolute top-[calc(100%+10px)] left-0 bg-[#F6F6F6] rounded-[8px] border border-[#AFAFAF]'>
        {toggle && 
          <ul className='w-max p-[8px]'>
            <li className='border-b border-[#C4C4C4]'>
              <button 
                onClick={() => setLanguage('vn')}
                className='cursor-pointer flex items-center gap-[8px] pl-[34px] relative'
              >
                {language == 'vn' && <img className='absolute left-0' src={iconChecked} />}
                <img src={iconVN} />
                <span className='text-[10px] font-bold'>Vietnamese</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => setLanguage('us')}
                className='cursor-pointer flex items-center gap-[8px] pl-[34px] relative'
              >
                {language == 'us' && <img className='absolute left-0' src={iconChecked} />}
                <img src={iconUS} />
                <span className='text-[10px] font-bold'>English</span>
              </button>
            </li>
          </ul>
        }
      </div>
    </div>
  )
}

export default ToggleLanguage