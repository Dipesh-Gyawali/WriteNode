import { useEffect, useState } from 'react';
import { PostCard, SkeletonCard } from '../components';
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useRef } from 'react';

export const HomePage = () => {
  const [posts, setPosts] = useState(new Array(2).fill(false));
  const [toggle, setToggle] = useState(false);
  const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postsRef.current);
      // console.log(data);
      setPosts(data.docs.map((document) => (
        {...document.data(), id: document.id}
      )));
    }
    console.log("---");
    getPosts();
  }, [postsRef, toggle]);


  return (
    <section>
      { posts.map((post, index) => ( 
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <SkeletonCard key={index} />
        )
      ))}
    </section>
  )
}
