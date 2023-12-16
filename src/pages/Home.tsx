import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
}

const Home: FC<Props> = () => {
  return (
    <div>
      Home
      <Link to='/about'>About</Link>
    </div>
  )
}

export default Home
