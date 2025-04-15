import pinMap from '../../assets/images/pin-map.svg'
import witch from '../../assets/images/witch.svg'

function Witch () {
  return (
    <div className='py-[40px] lg:pt-[70px]'>
      <img className='lg:w-[533px] z-9 relative lg:max-w-full animation-witch mx-auto mt-0 lg:mb-[-100px] mb-[-50px]' src={witch} />
      <img className='lg:w-[1160px] lg:max-w-full animation-pinmap mx-auto' src={pinMap} />
    </div>
  );
}

export default Witch