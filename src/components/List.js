import React from 'react';
import Card from './Card';
import '../styles/List.scss';

class List extends React.Component {
  render() {
    return (
        <div className="gardens_container">
        {this.props.gardens.map((item, id) => (
          <Card key={id} data={item} />
        ))}
        </div>
    );
  }
}

export default List;