import "./Leaderboard.scss";
import { useState } from "react";
import { leaderboard } from "../../lib/leaderboard";
import { LeaderboardProfiles } from "../LeaderboardProfiles/LeaderboardProfiles";
import ScoreLogo from "../../assets/Score-logo.svg";

export const Leaderboard = () => {
  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  return (
    <section className="leaderboard">
      <aside className="leaderboard__header">
        <h2 className="leaderboard__heading">
          <img src={ScoreLogo} alt="Score Logo" height="20" />
          <span className="leaderboard__heading--animation">Leaderboard</span>
        </h2>
        <div className="leaderboard__duration">
          <button
            onClick={handleClick}
            data-id="7"
            className="leaderboard__duration--button"
          >
            Weekly
          </button>
          <button
            onClick={handleClick}
            data-id="30"
            className="leaderboard__duration--button"
          >
            Monthly
          </button>
          <button
            onClick={handleClick}
            data-id="0"
            className="leaderboard__duration--button"
          >
            All-Time
          </button>
        </div>
      </aside>
      <aside className="leaderboard__profiles">
        <LeaderboardProfiles
          leaderboard={filterLeaderboard(leaderboard, period)}
        />
      </aside>
    </section>
  );
};

function filterLeaderboard(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between == 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with ascending order
  return filter.sort((a, b) => {
    if (a.score === b.score) {
      return b.score - a.score;
    } else {
      return b.score - a.score;
    }
  });
}
