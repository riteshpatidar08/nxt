
'use-client'

import React from 'react'
import Link from 'next/link'

function Product() {
  
  return (
    <div>
     <Link href='/product/1'>Go to product one</Link>
     <Link href='/product/2'>Go to product two</Link>

    </div>
  )
}

export default Product
