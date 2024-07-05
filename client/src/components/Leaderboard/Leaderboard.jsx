import "./Leaderboard.scss";

import { LeaderboardProfiles } from "../LeaderboardProfiles/LeaderboardProfiles";

export const Leaderboard = () => {
    return (
        <section className="leaderboard">
            <aside className="leaderboard__header">
                <h2 className="leaderboard__heading">Leaderboard</h2>

                <div className="leaderboard__duration">
                    <button className="leaderboard__duration--button" onClick={()=> {}}>Daily</button>
                    <button className="leaderboard__duration--button" onClick={()=> {}}>Weekly</button>
                    <button className="leaderboard__duration--button" onClick={()=> {}}>Monthly</button>
                </div>
            </aside>
            <aside className="leaderboard__scores">
                <LeaderboardProfiles  />
            </aside>
        </section>
    )
}