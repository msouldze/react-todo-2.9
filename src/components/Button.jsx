export default function Button({addClass, onClick}) {
  return (
    <>
      <button className={`icon ${addClass}`} onClick={onClick}></button>
    </>
  )
}