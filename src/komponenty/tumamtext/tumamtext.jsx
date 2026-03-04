import React from 'react'
import { div } from 'three/src/nodes/math/OperatorNode.js'

const Tumamtext = ({hore,data}) => {
  return (
    <div className='flex flex-col gap-3'>
<span className='text-[12px] text-sivaTmava '>{hore}</span>

<div>
{data.map((item,prev) => 
<div className='text-[19px] text-blackCustom font-medium'>
    {item.text}
</div>
)}

</div>
    </div>
  )
}

export default Tumamtext
