function CountNumber ({number, label, unit, className}) {
  return (
    <div className={className}>
      <h5 className="lg:text-[80px] text-[44px] tracking-[-1px] font-bold text-[#079BEE]">
        <span>{number}</span>
        {unit && <span className="text-[20px]">{unit}</span>}
        <span>+</span>
      </h5>
      <h4>{label}</h4>
    </div>
  )
}

export default CountNumber