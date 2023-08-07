'use client'

import React, { useState } from 'react'

export default function LikeButton () {
  const [like, setLike] = useState(false)

  const handleClick = () => {
    setLike(prevLike => !prevLike)
  }

  return (
    <button className='rounded-md bg-green-400 px-4 py-2 border border-black' onClick={handleClick}>
      {like ? 'No me gusta' : 'Me gusta'}
    </button>
  )
}
