import EmailForm from "../EmailForm"
import { useLanguage } from '../../stores/state';

function Subscribe () {
  const {data} = useLanguage();
  return (
    <div className="relative lg:max-w-[410px]">
      <h4 className="text-white mb-[20px]">{data.footer.subscriber.heading}</h4>
      <p className="mb-[17px]">{data.footer.subscriber.content}</p>
      <EmailForm className='bg-[transparent] border border-[#fff]' />
    </div>
  )
}

export default Subscribe