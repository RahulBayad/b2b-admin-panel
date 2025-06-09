import { Atom, Search } from 'lucide-react'
import React from 'react'

const SearchBar = ({startIcon:StartIcon = true ,endIcon:EndIcon = true, className, placeholder}) => {
  return (
    <div className='relative border border-gray-200 rounded-full  px-3 text-xs flex items-center'>
        {
            StartIcon && <Search size={16} className='text-gray-600 stroke-1'/>
        }
        <input 
            type='text' 
            className={`search-bar focus:outline-0 px-2 ${className}`}
        />
        <label className='typing-animate text-nowrap flex absolute left-9 pointer-events-none overflow-hidden'>{placeholder}</label>
        {
            EndIcon && <Atom size={16} className='text-gray-600 stroke-1'/>
        }
    </div>
  )
}

export default SearchBar