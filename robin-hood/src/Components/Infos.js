import React from "react";

export default class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=robin%20hood")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <header className="App-header">
          <table className="table table-hover">
            {this.state.items.map((item, key) => (
              <tr className="success">
                <td className="danger">{item.show.id}</td>
                <td>{item.show.name}</td>
                <td>{item.show.summary}</td>
                <td>{item.show.language}</td>
                <td>
                  <img src="{item.show.image.medium}" />
                </td>
              </tr>
            ))}
          </table>
        </header>
      </div>
    );
  }
}
