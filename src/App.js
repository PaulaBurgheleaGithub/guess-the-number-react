import { Component } from "react";
import View from "./View.js";

class App extends Component {
  state = {
    query: "",
  };

  render() {
    return (
      <View
        lower={() => {}}
        upper={() => {}}
        onClick={() => this.startGame()}
        onChange={(e) => this.onChange(e)}
        onGuess={() => this.guessNumber()}
      />
    );
  }
  onChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  startGame() {
    /* we should alret the range(lower and upper) to the user */
    alert("Please enter a number between ... and ... and click Guess");
  }

  guessNumber() {
    alert(this.state.query);
  }
}

export default App;
