import { URL_MARVEL_CHARACTERS } from '@/helpers/constats'
import LikeButton from './LikeButton'
import Link from 'next/link'

const fetchPosts = () => {
  return fetch(URL_MARVEL_CHARACTERS, {
    'Content-Type': 'application/json; charset=utf-8',
    Date: Date.now(),
    cache: 'no-store'
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data)
      return res.data.results
    })
}

export default async function PostsPage () {
  const posts = await fetchPosts()
  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article className='border p-4 m-4 rounded-lg' key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2>{post.name}</h2>
            <LikeButton />
          </Link>
        </article>
      ))}
    </section>
  )
}
