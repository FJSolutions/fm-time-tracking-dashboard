import { AuthorCard, type AuthorProps } from "./components/author-card.tsx";
import type { JSX } from "preact";
import { TimeCard, type TimeProps } from "./components/time-card.tsx";

interface AppProps {
  author: AuthorProps
  time: TimeProps[]
}

function App(): JSX.Element {
  const data: AppProps = {
    author: {
      name: "Jeremy Robson",
      image: "/images/image-jeremy.png"
    },
    time: [
      {type: "Work", currentHours: 32, previousHours: 36},
      {type: "Play", currentHours: 10, previousHours: 8},
      {type: "Study", currentHours: 4, previousHours: 7},
      {type: "Exercise", currentHours: 4, previousHours: 5},
      {type: "Social", currentHours: 5, previousHours: 10},
      {type: "SelfCare", currentHours: 2, previousHours: 2},
    ]
  }

  return (
    <main>
      <AuthorCard {...data.author} />
      {data.time.map((t) => <TimeCard {...t} />)}
    </main>
  )
}

export default App
