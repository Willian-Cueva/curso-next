import { URL_EXTENSION, URL_MARVEL_CHARACTERS_BY_ID } from '@/helpers/constats'
import Image from 'next/image'
import React from 'react'
const fetchingPost = (id) => {
  const url = `${URL_MARVEL_CHARACTERS_BY_ID}${id}/comics${URL_EXTENSION}`
  return fetch(url, {
    next: {
      revalidate: 60
    }
  })
    .then((res) => res.json())
    .then((res) => res.data.results)
    .catch((e) => console.log(e))
}

export default async function CommicsPage ({ params }) {
  const { id } = params
  const posts = await fetchingPost(id)
  return (
    <div className='flex flex-col'>
      <div className='p-4'>
        {posts.map((post) => (
          <article
            key={post.id}
            className='rounded-lg mt-4 bg-cyan-400 text-gray-900 p-4'
          >
            <h1 className='text-lg font-semibold mb-4'>{post.title}</h1>
            <Image className='mx-auto rounded-md mb-4' width={150} height={150} alt={post.title} src={`${post.thumbnail.path}.${post.thumbnail.extension}`} />
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
