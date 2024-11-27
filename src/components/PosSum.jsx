import { useState, useEffect } from "react";

const PosSum = () => {
  const [result, setResult] = useState("");
  const [answer, setAnswer] = useState(0);
  const [h, setH] = useState(0);
  const [z, setZ] = useState(0);
  const [ee, setEe] = useState(0);

  useEffect(() => {
    reset();
  }, []);

  function check(e) {
    e.preventDefault();

    let calcAns = h * 100 + z * 10 + ee;
    if (calcAns === Number(answer)) {
      setResult("Correct");
    } else {
      setResult(`InCorrect. Answer is: ${calcAns}`);
    }
  }

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function reset() {
    setH(randomIntFromInterval(0, 11));
    setZ(randomIntFromInterval(0, 25));
    setEe(randomIntFromInterval(0, 99));
    setAnswer(0);
    setResult("");
  }

  return (
    <div className="pos-area">
      <form className="pos-sum" onSubmit={check}>
        <h3>{h} H</h3>
        <h3>{z} Z</h3>
        <h3>{ee} E</h3>
        <input
          type="number"
          value={answer}
          min={0}
          max={2000}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button>check</button>
      </form>
      <h2>{result}</h2>
      <button onClick={reset}>New Numbers</button>
    </div>
  );
};

export default PosSum;
