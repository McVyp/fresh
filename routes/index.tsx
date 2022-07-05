/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Posts from '../islands/Posts.tsx';
export const handler: Handlers<Project> = {
  async GET(_req, ctx) {

    //get data
    const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await rawPosts.json()
    return ctx.render(posts);
  },
  async POST(req, ctx) {
    const a = req.body.getReader()
    const b = await a.read()
    const c = new TextDecoder().decode(b.value);
    const body =  Object.fromEntries(new URLSearchParams(c))

    //create Post
    
  

    //get data
    const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await rawPosts.json()
    return ctx.render(posts);
  },
};

export default function Home(props) {
  
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Posts posts= {props.data}/>

      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class={tw`my-6`}>
        Welcome to `fresh`. Try update this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />

   
    </div>
  );
}
