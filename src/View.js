export default function View(props) {
  if (props.difficulty) {
    return (
      <div>
        <input
          onChange={props.onInit}
          type="number"
          className="numberInp"
          placeholder="enter a number"
        />

        <button onClick={props.start} className="startBtn">
          Start Game
        </button>
        <button onClick={props.guess} className="guessBtn">
          Guess
        </button>
        <button onClick={props.help} className="helpBtn">
          Help
        </button>
      </div>
    );
  } else {
    return (
      <>
        <h1>Guess the number game</h1>
        <p>
          Welcome to the Guess the number game! Please select the dificulty
          level and
        </p>
        <select onChange={props.init}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </>
    );
  }
}
