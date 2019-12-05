import React from 'react';
import PropTypes from 'prop-types';

// const List = ({ items }) => (
//   <ul>
//     {items.map(
//       item => (
//         <li onClick={handleClick}>{item}</li>
//       )
//     )}
//   </ul>
// );

class List extends React.PureComponent {
  handleClick(item) {
    window.alert(item)
  }

  render() {
    // const {items} = this.props;
    return (
      <ul>
        {this.props.items.map(
          item => this.props.renderItem(item, this.handleClick)
        )}
      </ul>
    ) 
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func
}

List.defaultProps = {
  renderItem: (item, handleClick) => (
    <li onClick={() => handleClick(item)}>{item}</li>
  )
}

// () => {
//   return neco
// }

// vratit prazdny objekt
// () => ({}) 
export default List;
