import { URL_EXTENSION, URL_MARVEL_CHARACTERS_BY_ID, extractObjectFromArray } from '@/helpers/constats'
import Link from 'next/link'
import React from 'react'
const fetchingPost = (id) => {
  const url = `${URL_MARVEL_CHARACTERS_BY_ID}${id}${URL_EXTENSION}`
  return fetch(url, {
    next: {
      revalidate: 60
    }
  }).then(res => res.json()).then(res => res.data.results).catch(e => console.log(e))
}

export default async function layout ({ children, params }) {
  const { id } = params
  const post = await fetchingPost(id)
  const character = extractObjectFromArray(post)
  return (
    <>
      <div className='text-lg font-semibold'>Informacion Precisa del Personaje</div>
      <article className='rounded-lg mt-4 bg-slate-700 text-white p-4'>
        <h1 className='text-lg font-semibold mb-4'>{character.name}</h1>
        <p>{character.description}</p>
        <br />
        <Link className='mt-4 p-2 rounded-lg bg-purple-600 hover:bg-purple-400' href={`/posts/${id}/commics`}>Ver Commics</Link>
      </article>
      {children}
    </>

  )
}
