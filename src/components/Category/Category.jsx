import React from 'react'
import { Link } from 'react-router-dom'

import { Category as StyledCategory } from '../../styles/Styles';

export default function Category(props) {
    const { image, favicon, name, path } = props
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 p-0">
        <div className="card mb-4">
          <StyledCategory
            className="view overlay"
            style={{
              backgroundImage:
                `linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${image})`
            }}
          >
            <Link to={path}>
              <div className="mask rgba-white-slight" />
            </Link>
            <div className="content">
              <p className="text-center">{name}</p>
            <i className={favicon}></i>
            </div>
          </StyledCategory>
        </div>
      </div>
    )
}
