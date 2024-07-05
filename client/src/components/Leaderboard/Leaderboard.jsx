import "./Leaderboard.scss";

export const Leaderboard = () => {
    return (
        <section className="leaderboard">
            <aside className="leaderboard__header">
                <h1 className="leaderboard__heading">Leaderboard</h1>

                <div className="leaderboard__duration">
                    <button onClick={()=> {}}>Daily</button>
                    <button onClick={()=> {}}>Weekly</button>
                    <button onClick={()=> {}}>Monthly</button>
                </div>
            </aside>
            <aside className="leaderboard__scores">
                
            </aside>
        </section>
    )
}