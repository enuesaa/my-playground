import React from 'react'
import { Link } from 'gatsby'
import Header from '@/components/header'

export default function Home() {
  return (
    <section>
      <h1>Hello!</h1>
      <Header />
      <Link to={'/common/about'}>About</Link>
    </section>
  )
}
