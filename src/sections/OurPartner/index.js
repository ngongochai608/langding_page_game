import Carousel from '../../components/Carousel'
import HeadingSub from "../../components/HeadingSub"
import {default as logos} from '../../assets/images/logo_game'
import { useLanguage } from '../../stores/state';

function OurPartner () {
  const {data} = useLanguage();
  return (
    <div id='partners' className="lg:py-[110px] py-[40px] px-[16px] bg-[#F6F6F6]">
      <HeadingSub 
        className='text-center lg:mb-[70px]'
        heading={data.our_partner.heading}
      />
      <Carousel items={logos} slidePerviewMobile={3} slidePerview={5} />
    </div>
  )
}

export default OurPartner