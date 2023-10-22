import React, { useState } from 'react';

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function flipCoinAndCountHeads(headsCount, attempts, resolve, reject) {
  let result = tossCoin();
  console.log(`${result} was flipped`);
  attempts++;

  if (result === "heads") {
      headsCount++;
      if (headsCount === 5) {
          resolve(`It took ${attempts} tries to flip five "heads"`);
      } else {
          flipCoinAndCountHeads(headsCount, attempts, resolve, reject);
      }
  } else {
      headsCount = 0;
      if (attempts >= 100) {
          reject("It took more than 100 tries to flip five 'heads'");
      } else {
          flipCoinAndCountHeads(headsCount, attempts, resolve, reject);
      }
  }
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
      flipCoinAndCountHeads(0, 0, resolve, reject);
  });
}

fiveHeads()
  .then((res) => {
      console.log(res);
      console.log("This is run after the fiveHeads function completes");
  })
  .catch((err) => console.log(err));


function App() {
    const [result, setResult] = useState(null);

    const startSimulation = () => {
        fiveHeads()
            .then((res) => {
                setResult(res);
            })
            .catch((err) => {
                setResult(err);
            });
    };

    return (
        <div>
            <h1>Coin Flipping Simulation</h1>
            <button onClick={startSimulation}>Start Simulation</button>
            {result && <p>{result}</p>}
            <p>When does this run now?</p>
        </div>
    );
}

export default App;
