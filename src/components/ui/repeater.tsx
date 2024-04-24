
export const Repeater = ({count}:{count: number}) => {
  return (
    <div>{Array.from({length: count}, (_, i) => {
      return <div key={i}>Test</div>
    })}</div>
  )
}