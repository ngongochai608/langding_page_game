function HeadingSub ({heading, subheading, className}) {
  return (
    <div className={className}>
      {heading && <h2 className='mb-[16px]'>{heading}</h2>}
      {subheading && <p className='mb-[40px] text-[#757575]'>{subheading}</p>}
    </div>
  )
}

export default HeadingSub