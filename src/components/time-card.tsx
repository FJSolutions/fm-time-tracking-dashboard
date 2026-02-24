export type TimeCardType =
  "Work"
  | "Play"
  | "Study"
  | "Exercise"
  | "Social"
  | "SelfCare"

export interface TimeProps {
  type: TimeCardType
  currentHours: number
  previousHours: number
}

interface CardDetails extends TimeProps {
  title: string
  image: string
  colour: string
}

const getCardDetails = (props: TimeProps): CardDetails => {
  switch (props.type) {
    case "Work":
      return {...props, title: "Work", image: "/images/icon-work.svg", colour: "var(--orange-300)"}
    case "Play":
      return {...props, title: "Play", image: "/images/icon-play.svg", colour: "var(--blue-300)"}
    case "Study":
      return {...props, title: "Study", image: "/images/icon-study.svg", colour: "var(--pink-400)"}
    case "Exercise":
      return {...props, title: "Exercise", image: "/images/icon-exercise.svg", colour: "var(--green-400)"}
    case "Social":
      return {...props, title: "Social", image: "/images/icon-social.svg", colour: "var(--purple-700)"}
    case "SelfCare":
      return {...props, title: "Self Care", image: "/images/icon-self-care.svg", colour: "var(--yellow-300)"}
    default:
      throw new Error(`${props.type} has not been implemented for the time-card!`)
  }
}

export function TimeCard(props: TimeProps) {
  const details = getCardDetails(props)

  return (
    <article className="card">
      <picture class="time-icon" style={{backgroundColor: details.colour}}>
        <img src={details.image} alt={details.title}/>
      </picture>
      <section class="time-card">
        <h2 class="time-title">{details.title}</h2>
        <p class="time-current">{details.currentHours}hrs</p>
        <p class="time-previous">Last Week - {details.previousHours}hrs</p>
        <a href="#" class="time-ellipsis">
          <img src="/images/icon-ellipsis.svg" alt="..."/>
        </a>
      </section>
    </article>
  )
}