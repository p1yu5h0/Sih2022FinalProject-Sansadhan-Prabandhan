import React from 'react'

const FilterCheckbox = ({title}) => {
  return (
    <div className='flex  gap-3 items-center'>
        <div className=''><input type='checkbox' className='appearance-none border-[1px] checked:bg-primary checked:border-secondary w-[16px] h-[16px] border-gray-500 rounded-sm'/></div>
        <div className='font-[500] text-black relative -top-1 text-sm'>{title}</div>
    </div>
  )
}

export default FilterCheckbox