import React from 'react'
import { Category as StyledCategory } from '../../styles/Styles';

export default function Category(props) {
    const { image, favicon, name } = props
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
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
            <div className="content">
              <p className="text-center">{name}</p>
            <i class={favicon}></i>
            </div>
          </StyledCategory>
        </div>
      </div>
    )
}
