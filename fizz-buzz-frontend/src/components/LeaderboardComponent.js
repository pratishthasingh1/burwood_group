import React from "react";

const LeaderboardComponent = ({ leaderboard }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colspan="2">Top 3 most common inputs</th>
        </tr>
      </thead>
      <tbody>
        {leaderboard?.map((el) => (
          <tr>
            <td>{el[0]}</td>
            <td>{el[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderboardComponent;
