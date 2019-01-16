import React from "react";

class Layout extends React.Component {
  render() {
    return (
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
