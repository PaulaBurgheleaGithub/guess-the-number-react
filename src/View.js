export default function View({
  difficulty,
  guess,

  lower,
  upper,

  attemptsLeft,

  onInit,
  guessBtn,
  helpBtn,
  attempts,
  onInput,
}) {
  if (difficulty) {
    return (
      <div className="step2">
        <p>dificulty level : {difficulty}</p>
        <p>
          guess a number between {lower} and {upper}
        </p>
        <p>tries left: {attemptsLeft} </p>
        <input
          className="numberInp"
          type="number"
          placeholder="enter a number"
          value={guess}
          onChange={onInput}
        />
        <div>
          <button onClick={guessBtn} className="guessBtn">
            guess
          </button>
          <button onClick={helpBtn} className="helpBtn">
            help
          </button>
        </div>
        <ol>
          {attempts.map((num) => (
            <li>guessed number: {num}</li>
          ))}
        </ol>
      </div>
    );
  } else {
    return (
      <div className="step1">
        <h1>guess the number</h1>
        <p>welcome! please select a dificulty level to begin:</p>
        <select onChange={onInit} className="level-select">
          <option>select level</option>
          <option value="easy">easy</option>
          <option value="medium">medium</option>
          <option value="hard">hard</option>
        </select>
      </div>
    );
  }
}
