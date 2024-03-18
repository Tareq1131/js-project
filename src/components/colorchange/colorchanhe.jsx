import React from 'react';
import './ColorChanger.css'; // Importing CSS file

class ColorChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: 'white' };
  }

  changeBackgroundColor = (color) => {
    this.setState({ backgroundColor: color });
  }

  render() {
    return (
      <div className="color-changer-container" style={{ backgroundColor: this.state.backgroundColor }}>
        <div className="buttons-container">
          <button className="button" id="grey" onClick={() => this.changeBackgroundColor('grey')}>Grey</button>
          <button className="button" id="white" onClick={() => this.changeBackgroundColor('white')}>White</button>
          <button className="button" id="blue" onClick={() => this.changeBackgroundColor('blue')}>Blue</button>
          <button className="button" id="yellow" onClick={() => this.changeBackgroundColor('yellow')}>Yellow</button>
        </div>
        {/* Content */}
      </div>
    );
  }
}

export default ColorChanger;
