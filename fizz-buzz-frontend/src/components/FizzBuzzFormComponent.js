import { useEffect, useState } from "react";
import fizzBuzzService from "../services/FizzBuzzService";
import Leaderboard from "./LeaderboardComponent";

const FizzBuzzComponent = () => {
  const [inputNum, setInputNum] = useState(0);
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [result, setResult] = useState(0);

  const onInputChange = (input) => {
    setInputNum(input);
  };

  const submitFizzBuzz = async (input) => {
    // can use useffect here to improve code quality
    const result = await fizzBuzzService.postFizzBuzz({ input: input });
    const leaderboardResponse = await fizzBuzzService.getLeaderboard({
      input: input,
    });
    setLeaderboardData(leaderboardResponse.data.result);
    setResult(result.data.result);
  };

  return (
    <div>
      <input
        value={inputNum}
        onChange={(e) => onInputChange(e.target.value)}
      ></input>
      <button onClick={() => submitFizzBuzz(inputNum)}>Submit</button>
      <p>Fizz buzz result: {result}</p>
      <Leaderboard leaderboard={leaderboardData} />
    </div>
  );
};

export default FizzBuzzComponent;
