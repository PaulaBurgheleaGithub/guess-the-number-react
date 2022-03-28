export default function View(props) {
  return (
    <>
      <h1>Guess the number game</h1>
      <p>
        Welcome to the Guess the number game! Please press StartGame and follow
        the instruction.
      </p>
      <div>
        <input
          onChange={props.onChange}
          type="number"
          className="numberInp"
          placeholder="enter a number"
        />

        <button onClick={props.onClick} className="startBtn">
          Start Game
        </button>
        <button onGuess={props.onGuess} className="guessBtn">
          Guess
        </button>
        <button className="helpBtn">Help</button>
      </div>
    </>
  );
}
