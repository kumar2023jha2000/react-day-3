import React, { useRef } from 'react'
import Card from './Card'

function Forground() {
    const ref = useRef(null)
    const data = [
        {
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam?",
          fileSize:"1mb",
          color:"green"
        },
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam?",
            fileSize:"1mb",
            color:"green"
          },
          {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, aliquam?",
            fileSize:"1mb",
            color:"green"
          }
      ]
  return (
    <>
        <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
        {
            data.map((item,index)=>(
                <Card data={item} reference={ref}/>
            ))
        }
        </div>
    </>
  )
}

export default Forground
