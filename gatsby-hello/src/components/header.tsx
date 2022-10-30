import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>top</Link>
          </li>
          <li>
            <Link to={'/common/about'}>about</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
