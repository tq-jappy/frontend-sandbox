import React, { PropTypes } from 'react'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  } else {
    return <a href="#" onClick={e => { onClick() }}>{children}</a>
  }
}

export default FilterLink