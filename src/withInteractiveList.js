import React from 'react'

const withInteractiveList = (Component) => {
  return class InteractiveList extends React.PureComponent {
    handleClick(item) {
      window.alert(item)
    }
  
    render() {
      // const {items} = this.props;
      return (
        <ul>
          {this.props.items.map(
            item => <Component handleClick={() => this.handleClick(item)} item={item} />
          )}
        </ul>
      ) 
    }
  }
} 

export default withInteractiveList