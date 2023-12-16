import { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
}

const About: FC<Props> = () => {
  return (
    <div>
      About
      <Link to='/'>Home</Link>
    </div>
  )
}

export default About
