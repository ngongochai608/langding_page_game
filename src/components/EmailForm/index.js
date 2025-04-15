import {useLanguage} from '../../stores/state'

function EmailForm ({className}) {
  const {data} = useLanguage();
  return (
    <div className={`max-w-[100%] mx-auto text-center`}>
      <form className={`relative rounded-[8px] px-[14px] ${className}`}>
        <input className="w-[100%] leading-[56px] outline-none" autocomplete="off" type="email" placeholder={data.input_form.placeholder} />
        <button className="absolute right-[20px] top-[50%] translate-y-[-50%] text-back">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default EmailForm