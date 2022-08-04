import PropTypes from 'prop-types'
import Button from './Button';
const Header = ({title, onAdd}) => {

    
    
  return (
    <header className = 'header' >
      <h1 >{title}</h1>
      <Button color = 'green' text = 'Add' onClick = {onAdd} />
      <Button color = 'red' text = 'Delete' onClick = {onAdd} />

    </header>
  )
}

Header.defaultProps = {

    title: 'Place your order'
}

Header.propTypes = {

    title: PropTypes.string
}
export default Header
