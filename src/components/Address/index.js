import locationIcon from '../../assets/images/location.svg'
import mobileIcon from '../../assets/images/mobile.svg'
import { useLanguage } from '../../stores/state';

function Address () {
  const {data} = useLanguage();
  return (
    <div className="relative lg:mt-0 my-[68px] lg:max-w-[410px]">
      <h4 className='text-white mb-[20px]'>{data.footer.address.heading}</h4>
      <ul className='flex flex-col gap-[20px]'>
        <li className='flex items-start gap-[8px]'>
          <img src={locationIcon} />
          <p>{data.footer.address.list.map(e => <span>{e}</span>)}</p>
        </li>
        <li className='flex items-center gap-[8px]'>
          <img src={mobileIcon} />
          <p><a href="">(+1) 555-0108-000</a> or <a href="#">(+236) 555-0108</a></p>
        </li>
      </ul>
    </div>
  )
}

export default Address