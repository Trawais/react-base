import React from 'react';

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
          item => this.props.renderItem ? this.props.renderItem(item, this.handleClick) : (
            // <li onClick={() => window.alert(item)}>{item}</li>
            <li onClick={() => this.handleClick(item)}>{item}</li>
          )
        )}
      </ul>
    ) 
  }
}

// () => {
//   return neco
// }

// vratit prazdny objekt
// () => ({}) 
export default List;
