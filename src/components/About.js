export default function About({
  image="https://via.placeholder.com/215",
  aboutTxt
  }) {
  return (
    <aside>
      <img src={image} alt="blog logo"/>
      <p>{aboutTxt}</p>
    </aside>
  )
}
