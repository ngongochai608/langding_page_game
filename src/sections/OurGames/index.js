import CardGames from '../../components/CardGames'
import HeadingSub from "../../components/HeadingSub"
import { useLanguage } from '../../stores/state';

import {
  espace,
  aborigines,
  biratech,
  blueFire,
  cinderella,
  egyptGame,
  gdragon,
  kingland,
  magic_tree,
  rocky,
  theLastGame,
  witchParty,
} from '../../assets/images/cart_game'

function OurGames () {
  const {data} = useLanguage();
  return (
    <div id='games' className="px-[20px] py-[40px] max-w-[1920px] mx-auto">
      <HeadingSub 
        className='text-center max-w-[860px] mx-auto'
        heading={data.our_games.heading}
        subheading={data.our_games.subheading}
      />
      <div className='flex flex-wrap gap-[15px]'>
        <div className='lg:flex-row flex flex-col gap-[20px] w-[calc(50%-calc(15px/2))]'>
          <div className='flex flex-col gap-[20px]'>
            <CardGames name="E-Space" img={espace} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Pirates" img={biratech} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Magic tree" img={magic_tree} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
          <div className='flex flex-col gap-[20px] lg:mt-[118px]'>
            <CardGames name="Kingland" img={kingland} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Witch Party" img={witchParty} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Aborigines" img={aborigines} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
        </div>
        <div className='lg:flex-row lg:mt-0 flex flex-col gap-[20px] w-[calc(50%-calc(15px/2))] mt-[36px]'>
          <div className='flex flex-col gap-[20px]'>
            <CardGames name="The Last Game" img={theLastGame} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Rocky" img={rocky} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Cinderella" img={cinderella} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
          <div className='flex flex-col gap-[20px] lg:mt-[118px]'>
            <CardGames name="G-Dragon" img={gdragon} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Blue Fire" img={blueFire} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <CardGames name="Egypt Game" img={egyptGame} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurGames