/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
export const handler: Handlers<Project> = {
  async GET(_req, ctx) {

    //get data
    const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await rawPosts.json()
    return ctx.render(posts);
  },
  async POST(req, ctx) {
    console.log(req.body);
    //get data
    const rawPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await rawPosts.json()
    return ctx.render(posts);
  },
};

export default function Home(props) {
  console.log(props.data);
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <ul>
        {props.data.map(post =>{
          return<li><a href={`/posts/${post.id}`}>{post.title}</a></li>
        })}
      </ul>

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

      <form method="POST">
          <input name="title" />
          <textarea name= "body" />
          <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
