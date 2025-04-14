

function Card({ person }) {

  const { name, image, birth_year, nationality, biography, awards } = person


  return <li className="card">
    <h3>{name}</h3>
    <img src={image} alt={name} />
    <p>Born in {birth_year}</p>
    <p>{nationality}</p>
    <p>{biography}</p>
    <p>{awards}</p>
  </li>


}

export default Card