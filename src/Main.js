function Main() {
    return(
        <main id="main--container">
            <div className="main--header">
                <h1 className="main--name">Brendon Jackson</h1>
                <h3 className="main--title">Frontend Developer</h3>
                <a href="https://jacksondynamics.github.io/MyPortfolio/">jacksondynamics.MyPortfolio</a>
            </div>
            <div id="buttons">
                <button className="email"><i className="fa-sharp fa-solid fa-envelope"></i>Email</button>
                <button className="linkedIn"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
            <div id="primary--info">
                <div className="about">
                    <h3>About</h3>
                    <h4 className="main--about">Experienced professional with comprehensive understanding in key industry programming languages and Frontend web development. I have a particular interest in making things simple when automating daily tasks. In additon to my IT skills, I also possess strong backgrounds from years of working in both architectural and financial industry. I consider myself industrious and teachable with a proven track record for quickly grasping concepts, and am always looking for new things to learn.
                    </h4>
                </div>
                <div className="interests">
                    <h3>Interests</h3>
                    <h4 className="main--interests">A little more about me as a person. I have lived abroad in the Philippines for 2 years, and speak Tagalog fluently. I am an Eagle Scout, swing dance instructor, artist, and have played the guitar for over 20 years. I enjoy traveling, camping, hiking, swimming, racquetball, astronomy, aeronautics, history and am basically the epitome of nerd when it comes to board games, movies and cultural trivia. My goal in life is to become the best I can be and continuously work to improve myself in every area that I dedicate my time and energy to!</h4>
                </div>
            </div>

        </main>
    )
}

export default Main