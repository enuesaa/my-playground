import React from 'react'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <section>
      <h1>Hello!</h1>
      <Link to="/about">About</Link>
    </section>
  )
}
