/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export const handler: Handlers<Project> = {
    async GET(_req, ctx) {
  
      //get data
      const id = ctx.params.id
      const rawPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const post = await rawPost.json()
      return ctx.render(post);
    },
  };
export default function Post(props: PageProps) {
  return <div>
    <h1>{props.data.title}</h1>
    <p>{props.data.body}</p>
</div>;
}
