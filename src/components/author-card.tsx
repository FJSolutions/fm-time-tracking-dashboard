import type { JSX } from "preact";

export interface AuthorProps {
  name: string;
  image: string;
}

export function AuthorCard(props: AuthorProps): JSX.Element {
  return (
    <article class="card author-card">
      <section>
        <img src={props.image} alt={props.name}/>
        <h1>
          <p>Report for</p>
          <p class="name">{props.name}</p>
        </h1>
      </section>
      <ul>
        <li>Daily</li>
        <li class="active">Weekly</li>
        <li>Monthly</li>
      </ul>
    </article>
  )
}
