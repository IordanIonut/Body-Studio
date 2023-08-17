import React from 'react'
import './card.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({food, index}) => {
  console.log(food);
  return (
    <section className={`card-card`}>
      <div className="card-icon">
        <FontAwesomeIcon icon={food?.svg}  size="2xl" />
      </div>
      <main className="card-content">
        <h1 className="card-header">{food?.type || food?.core_type}</h1>
        <div className="card-button">
          <Link href="asdasdad" target="_blank" rel="noreferrer noopener" className="card-link">
            <p className="card-text">View</p>
          </Link>
        </div>
      </main>
    </section>
  )
}

export default Card
