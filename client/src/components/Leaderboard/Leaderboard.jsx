import "./Leaderboard.scss";
import { useState } from "react";
import { leaderboard } from "../../lib/leaderboard";
import { LeaderboardProfiles } from "../LeaderboardProfiles/LeaderboardProfiles";

export const Leaderboard = () => {
  const [duration, setDuration] = useState(0); 

  const filterLeaderboard = (duration) => {
    const now = new Date();
    return leaderboard.filter((profile) => {
      const profileDate = new Date(profile.dt);
      const diffInDays = (now - profileDate) / (1000 * 60 * 60 * 24);
      return diffInDays <= duration;
    });
  };

  const sortedLeaderboard = filterLeaderboard(duration).sort(
    (a, b) => a.score - b.score
  );

  console.log(sortedLeaderboard)

  return (
    <section className="leaderboard">
      <aside className="leaderboard__header">
        <h2 className="leaderboard__heading">Leaderboard</h2>
        <div className="leaderboard__duration">
          {[1, 7, 30].map((dur, index) => (
            <button
              key={index}
              className="leaderboard__duration--button"
              data-id={String(dur)}
              onClick={() => setDuration(dur)}
            >
              {dur === 1 && "Daily"}
              {dur === 7 && "Weekly"}
              {dur === 30 && "Monthly"}
            </button>
          ))}
        </div>
      </aside>
      <aside className="leaderboard__profiles">
        <LeaderboardProfiles leaderboard={sortedLeaderboard} />
      </aside>
    </section>
  );
};
