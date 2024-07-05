
import "./LeaderboardProfiles.scss";

export const LeaderboardProfiles = ({ leaderboard }) => {
  console.log(leaderboard)
  return (
    <>
      {leaderboard.map((value, index) => (
        <aside className="profile" key={value.id}>
          <div className="profile__details">
            <p className={`profile__details--rank ${index === 0 && `profile__details--firstRank`} ${index === 1 && `profile__details--secondRank`} ${index === 2 && `profile__details--thirdRank`}`}>{index + 1}</p>

            <div className="profile__info">
              <h2 className="profile__info--name">{value.name}</h2>
              <span className="profile__info--location">{value.location}</span>
            </div>
          </div>
          <div className="profile__item">
            <span className="profile__item--score">{value.score}</span>
          </div>
        </aside>
      ))}
    </>
  );
};
