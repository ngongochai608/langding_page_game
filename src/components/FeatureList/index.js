function FeatureList ({lists}) {
  return (
    <div className='lg:py-[113px] lg:px-[75px] flex flex-col gap-[40px] w-[calc(100%+32px)] ml-[-16px] bg-[#EEEEEE] py-[40px] px-[16px]'>
      {lists.map((e, i) => (
        <div className='flex gap-[20px]'>
          <div className='lg:w-[50px] lg:h-[50px] flex items-center justify-center w-[40px] h-[40px] rounded-[50%] bg-[#E3FCFF]'>
            <img src={e.icon} />
          </div>
          <div className='flex-1'>
            <h4 className='mb-[10px]'>{e.label}</h4>
            <p className='text-[#757575]'>{e.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeatureList