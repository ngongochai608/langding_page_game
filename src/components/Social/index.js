import facebookIcon from '../../assets/images/social/facebook_icon.svg'
import linkedinIcon from '../../assets/images/social/linkedin_icon.svg'
import twitterIcon from '../../assets/images/social/twitter_icon.svg'

function Social () {
  return (
    <div className='relative'>
      <ul className='flex gap-[24px] justify-center mt-[40px]'>
        <li><a href="#"><img src={facebookIcon} /></a></li>
        <li><a href="#"><img src={linkedinIcon} /></a></li>
        <li><a href="#"><img src={twitterIcon} /></a></li>
      </ul>
    </div>
  )
}

export default Social