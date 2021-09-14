import React from "react";
import SortableComponent from './SortableComponent';
class SortableList extends React.Component {

  state = {
    items: this.props.items
  };
  onSortItems = (items) => {
    this.setState({
      items: items
    });
  }

  render() {
    const { items } = this.state;
    var listItems = items.map((item, i) => {
      return (
        <SortableComponent
          key={i}
          onSortItems={this.onSortItems}
          items={items}
					title={items[i].title}
					hint={items[i].hint}
          sortId={i}>{item}</SortableComponent>
      );
    });

    return (
      <ul className='sortable-list'>
        {listItems}
      </ul>
    )
  }
};
export default SortableList;