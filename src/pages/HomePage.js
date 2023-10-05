import { PostCard } from '../components';

export const HomePage = () => {
  const posts = [
    { id: 1, title: "Lorem ipsum dolor sit amet", description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet", author: "Dipesh"},
    { id: 2, title: "Lorem ipsum", description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet", author: "Gyawali"}
  ]

  return (
    <section>
      { posts.map((post) => ( 
         <PostCard key={post.id} post={post} />

      ))}
    </section>
  )
}
