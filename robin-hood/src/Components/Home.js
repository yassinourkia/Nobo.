import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
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
        <header>
          <table className="table table-hover">
            {this.state.items.map((item, key) => (
              <tr className="warning">
                <td>
                  <Link to="/movie/{item.show.id}">{item.show.name}</Link>
                </td>
              </tr>
            ))}
          </table>
        </header>
      </div>
    );
  }
}
