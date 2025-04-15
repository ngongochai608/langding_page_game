function CardGames ({name, description, img}) {
  return (
    <div className={`lg:pt-[384px] lg:px-[32px] lg:pb-[40px] bg-[url(${img})] shadow-[0px_4px_10px_rgba(0,0,0,0.3)] relative bg-cover object-cover px-[8px] pt-[104px] pb-[8px] rounded-[20px] overflow-hidden`}>
      <div className="absolute w-full h-full top-0 left-0 bg-linear-to-t from-[#0009E1] to-transparent opacity-[0.1]"></div>
      <h3 className="relative text-white mb-[3px]">{name}</h3>
      <p className='relative !text-white'>{description}</p>
    </div>
  )
}

export default CardGames