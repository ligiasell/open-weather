import React from 'react'
import PropTypes from 'prop-types'

import './header.css'

const Header = ({ location, onChange, onClick }) => (
  <header className="header" data-testid="header">
    <h1 className="visually-hidden">Weather App</h1>
    <input className="header-input" type="text" value={location} placeholder="Enter location" onChange={onChange} />
    <button className="header-button" type="button" onClick={onClick} disabled={!location}>
      Search
    </button>
  </header>
)

Header.propTypes = {
  location: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

Header.defaultProps = {
  location: '',
  onChange: () => {},
  onClick: () => {},
}

export default Header
