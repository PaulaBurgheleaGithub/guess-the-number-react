import { Component } from "react";
import View from "./View.js";
import { randomInteger } from "./random.js";

class App extends Component {
  static LEVELS = {
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
    guess: "",
  };

  get attemptsRemaining() {
    return this.state.maxTries - this.state.attempts.length;
  }

  render() {
    return (
      <View
        guess={this.state.guess}
        difficulty={this.state.difficulty}
        lower={this.state.lower}
        upper={this.state.upper}
        attempts={this.state.attempts}
        attemptsLeft={this.attemptsRemaining}
        onInit={({ target: { options, selectedIndex } }) => {
          this.init(options[selectedIndex].value);
        }}
        guessBtn={() => this.guess(parseInt(this.state.guess))}
        helpBtn={() => this.help()}
        onInput={({ target }) => {
          this.setState({
            guess: target.value,
          });
        }}
      />
    );
  }
  init(difficulty = "easy") {
    const {
      lower = 1,
      upper = 100,
      tries: maxTries = 10,
    } = App.LEVELS[difficulty];

    this.setState({
      difficulty,
      lower,
      upper,
      maxTries,
      target: randomInteger(lower, upper),
    });
  }

  guess(num = 1) {
    this.setState({
      guess: "",
    });
    if (this.attemptsRemaining === 0) {
      alert("You have run out of tries :( .Restart the game!");

      this.setState({
        difficulty: null,
      });
    }
    /**check to see if the number has been already entered **/
    if (this.state.attempts.includes(num))
      return alert("You have already enterd this number!");

    const { target, lower, upper, attempts } = this.state;
    /*** wining + reset game ***/
    if (num === target) {
      alert("You have won the game!");

      this.setState({
        difficulty: null,
      });
    }
    if (num < lower || num > upper) {
      alert("Chose a number BETWEEN the bounds.");
    } else {
      this.setState({
        attempts: [...attempts, num],
      });
      if (num < target) {
        alert("Try a higher number!");
      }
      if (num > target) {
        alert("The number is too hight!");
      }
      if (this.attemptsRemaining === 0) {
        alert("You have run out of tries :( .Restart the game!");

        this.setState({
          difficulty: null,
        });
      }
    }
  }

  help() {
    const lastGuess = this.state.attempts.at(-1);

    if (isNaN(lastGuess)) alert("Please make a guess first.");

    let distance = Math.ceil(Math.abs(this.state.target - lastGuess) / 10) * 10;
    alert(`You are within ${distance} from the target.`);
  }
}

export default App;
