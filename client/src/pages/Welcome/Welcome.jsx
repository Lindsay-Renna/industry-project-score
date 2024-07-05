import './Welcome.scss';

const Welcome = () => {
    return (
        <section className='welcome'>
            <div className='welcome__main'>
                <h2 className='welcome__text'>Today you have 4 questions to answer!</h2>
                <button className="welcome__button">
                    <span>Get Started</span>
                </button>
            </div>
        </section>
    );
};

export default Welcome;