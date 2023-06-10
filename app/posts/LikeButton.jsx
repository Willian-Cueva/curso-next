'use client'

import React, { useState } from 'react'

export default function LikeButton () {
  const [like, setLike] = useState(false)

  const handleClick = () => {
    setLike(prevLike => !prevLike)
  }

  return (
    <button onClick={handleClick}>
      {like ? 'No me gusta' : 'Me gusta'}
    </button>
  )
}
