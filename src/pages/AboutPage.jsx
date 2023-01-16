import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <div>
      <Card>
        <h1>About this project</h1>
        <p>this is a react app to leave feedbvack for a product or service</p>
        <p>Version 1.1.1</p>
        <Link to='/'>Back to Home</Link>
      </Card>
    </div>
  )
}

export default AboutPage
