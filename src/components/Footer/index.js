import logo from '../../assets/images/logo_header.svg'
import bgImage from '../../assets/images/bg_footer.jpeg'
import Address from '../Address'
import Social from '../Social'
import Subscribe from '../Subscribe'

function Footer () {
  return (
    <footer className='text-white'>
      <div className={`lg:py-[100px] relative bg-[url(${bgImage})] bg-cover px-[16px] py-[40px]`}>
        <div className='lg:flex lg:gap-[40px] max-w-[1480px] mx-auto'>
          <div className='absolute -z left-0 top-0 w-full h-full bg-linear-to-b from-[#000AFF] to-[#000] opacity-[0.8]'></div>
          <div className='lg:flex-1 lg:items-start flex flex-col items-center'>
            <img className='relative' src={logo} />
            <Social />
          </div>
          <Address />
          <Subscribe />
        </div>
      </div>
      <div className='bg-black py-[30px]'>
        <p className='text-center'>2017 Copyright. Policy.</p>
      </div>
    </footer>
  )
}

export default Footer