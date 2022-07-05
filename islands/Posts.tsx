/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface RProps {
  posts: any[];
}

export default function Posts(props: RProps) {
  const [posts, setPosts] = useState(props.posts);
  const[form, setForm] = useState({title:'', body:''});

  const handlChange = (e) =>{
    const[name, value] = e.target

    setForm ({
        ...form,
        [name]: value
    })
  }

  const handlSubmit = async (e) =>{
    e.preventDefault()

    const newPost = await fetch("https://jsonplaceholder.typicode.com/posts",
      {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(form)
      })

    const newPostJson = await newPost.json()
    setPosts([...posts, newPostJson])
  }
  return (
    <div class={tw`flex gap-2 w-full`}>
      <ul>
        {posts.map(post =>{
          return<li><a href={`/posts/${post.id}`}>{post.title}</a></li>
        })}
      </ul>
      <form onSubmit={handlSubmit}>
          <input value={form.title} onChange={handlChange} name="title" />
          <textarea value={form.body} onChange={handlChange} name= "body" />
          <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
