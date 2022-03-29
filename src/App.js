import { Component } from "react";
import View from "./View.js";
import { randomInteger } from "./random.js";

class App extends Component {
  static DIFFICULTY = {
    easy: {
      tries: 10,
      upper: 25,
    },
    medium: {
      tries: 7,
      upper: 50,
    },
    hard: {
      tries: 5,
      upper: 100,
    },
  };

  state = {
    difficulty: null,
    lower: null,
    upper: null,
    maxTries: null,
    target: null,
    attempts: [],
    guess: null,
  };

  render() {
    return (
      <View
        difficulty={this.start.difficulty}
        onChange={(e) => this.onChange(e)}
        start={() => this.start}
        guess={() => this.guess}
        help={() => this.help}
        onInput={({ target: { value: guess } }) => {
          this.setState({ guess });
        }}
      />
    );
  }
  init(difficulty = "easy") {
    const {
      lower = 1,
      upper = 100,
      tries: maxTries = 10,
    } = App.DIFFICULTY[difficulty] || {};
    this.setState({
      lower,
      upper,
      maxTries,
      target: randomInteger(lower, upper),
    });
  }

  onChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  start() {
    /* we should alert the range(lower and upper) to the user */
    alert("Please enter a number between ... and ... and click Guess");
    /* generate a random number and store it in the */
  }

  guess(number = 1) {
    alert(number);
  }

  /*** STEPS:
   * generate a random number
   * get the value passed on from the state number
   * compare the generated value with the value entered by the user
   * inform the user if the value is too low or too high
   *
   *
   *
   * ****/
  help() {
    alert("Help");
  }
}

export default App;
