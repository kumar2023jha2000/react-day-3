import React from 'react'
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}className='relative w-48 h-56 rounded-[20px] bg-zinc-900 overflow-hidden '>
      <h1 className='text-white p-5'>1</h1>
      <p className='text-white p-5 text-sm leading-tight -mt-7
      font-semibold'>{data.desc}</p>

      <div className='w-full flex justify-between item-center '> 
        <h5 className='text-white p-5'>{data.fileSize}</h5>
        <h5 className='text-white p-5'>now</h5>
        </div>

       

      <div className={`tag w-full py-4 ${data.color==="green"?" bg-green-600": "bg-green-600"} flex item-center justify-center`}>
      
 
      </div>
      </motion.div>
     

    
  )
}

export default Card