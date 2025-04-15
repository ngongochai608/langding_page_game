import FeatureList from "../../components/FeatureList"
import HeadingSub from "../../components/HeadingSub"
import CountNumber from "../../components/CountNumber"
import { useLanguage } from '../../stores/state';

function AboutUs () {
  const {data} = useLanguage();
  return (
    <div id="aboutus" className="lg:flex px-[16px] lg:max-w-[1280px] lg:gap-[40px] lg:mx-auto">
      <div className="lg:flex-1 pb-[40px]">
        <HeadingSub 
          heading={data.aboutus.heading}
          subheading={data.aboutus.subheading}
        />
        <div className="flex lg:flex-col gap-[16px]">
          {data.aboutus.count_number.map((e, i) => 
            <div key={i} className="flex-1">
              <CountNumber 
                number={e.number} 
                label={e.label} 
                unit={e.unit} 
              />
            </div>)
          }
        </div>
      </div>
      <div className="lg:flex-1">
        <FeatureList
          lists={data.aboutus.list}
        />
      </div>
    </div>
  )
}

export default AboutUs