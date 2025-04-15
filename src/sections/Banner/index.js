import bgBanner from '../../assets/images/background_banner.svg'
import Countdown from '../../components/CountDown'
import EmailForm from '../../components/EmailForm'
import Fairy from '../../assets/images/fairy.svg'
import { useLanguage } from '../../stores/state';

function Banner () {
  const {data} = useLanguage();
  return (
    <div className='lg:relative lg:mb-[120px]'>
      <div className={`lg:[clip-path:ellipse(90%_100%_at_50%_0%)] rela flex items-center justify-center bg-[url(${bgBanner})] bg-cover bg-no-repeat [clip-path:ellipse(190%_100%_at_50%_0%)]`}>
        <div className='px-[16px] pt-[140px] pb-[80px]'>
          <h1 className='text-white mb-[38px] text-center'>{data.banner.heading}</h1>
          <Countdown target='2025-04-29T10:00:00' />
          <div className='max-w-[560px] mx-auto'>
            <h5 className="text-white text-center text-[18px] font-normal mt-[40px] mb-[16px]">
            {data.banner.subheading}
            </h5>
            <EmailForm className='bg-white' />
          </div>
        </div>
      </div>
      <img className='lg:absolute lg:top-auto lg:bottom-[-50px] lg:left-[-80px] lg:w-[500px] lg:top-auto relative mx-auto top-[-50px]' src={Fairy} />
    </div>
  )
}

export default Banner