import React from 'react'
import { 
  TwitterLogo, 
  LinkedinLogo, 
  GitBranch, 
  WhatsappLogo 
} from 'phosphor-react'

const SocialIcons = () => {
  return (
    <div className='flex items-center gap-3 mt-5 ml-1 mb-2 max-md:mt-4'>
      <TwitterLogo 
        size={34} 
        weight="fill" 
        className="transition-colors duration-300 text-[#cbc3c3] hover:text-gray-700 transform hover:scale-110 cursor-pointer" 
      />
      <LinkedinLogo 
        size={34} 
        weight="fill" 
        className="transition-colors duration-300 text-[#1e17ea] hover:text-blue-600 transform hover:scale-110 cursor-pointer" 
      />
      <GitBranch 
        size={34} 
        weight="fill" 
        className="transition-colors duration-300 text-[#e01d1d] hover:text-red-600 transform hover:scale-110 cursor-pointer" 
      />
      <WhatsappLogo 
        size={34} 
        weight="fill" 
        className="transition-colors duration-300 text-[#0fc865] hover:text-green-500 transform hover:scale-110 cursor-pointer" 
      />
    </div>
  )
}

export default SocialIcons
