import React from 'react'

import PropTypes from 'prop-types'

import './article.css'

const Article = (props) => {
  return (
    <section className={`article-card ${props.rootClassName} `}>
      <main className="article-content">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="article-image"
        />
      </main>
      <div className="article-container">
        <header className="article-header">
          <h1 className="article-header1">{props.Header}</h1>
        </header>
        <div className="article-button">
          <a
            href={props.ButtonLink}
            target="_blank"
            rel="noreferrer noopener"
            className="article-link"
          >
            <p className="article-text">{props.Button}</p>
          </a>
        </div>
      </div>
    </section>
  )
}

Article.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1689249876759-10ff4bc9f189?ixid=M3w5MTMyMXwwfDF8YWxsfDJ8fHx8fHwyfHwxNjg5ODUyNjQ1fA&ixlib=rb-4.0.3&w=1500',
  ButtonLink: '',
  image_alt: 'image',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  Button: 'View ->',
  Header: 'sadsadasdad',
}

Article.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  ButtonLink: PropTypes.string,
  image_alt: PropTypes.string,
  Description: PropTypes.string,
  Button: PropTypes.string,
  Header: PropTypes.string,
}

export default Article
