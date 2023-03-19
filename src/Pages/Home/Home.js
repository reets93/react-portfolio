import './Home.css'

function Home() {
    return (
        <>
            <section className="bio">
                <div className="row">
                    <div className="col-sm-12 col-lg-5">
                        <h3>Hi, I'm Rita</h3>
                        <h2>A front-end web developer
                            {'\n'} & UX designer</h2>
                    </div>
                    <div className="col-sm-12 col-lg-7">
                        <img className='headshot' src={require('../../assets/headshot.png')} alt="headshot"/>
                    </div>
                </div>
            </section>

            <section className="home-section">
                <div className="card blurb">
                    <div className="card-body">
                        <h5 className="card-text">I work on web design and development projects, to produce quality and unique websites.</h5>
                        <div className="btn-blurb">
                            <a href="https://www.github.com/reets93" class="btn btn-primary">Github</a>
                            <a href="https://www.linkedin.com/in/ritafitchett" class="btn btn-primary">LinkedIn</a>
                            <a href="https://www.dropbox.com/s/5804tlhwykh7f7g/RitaFitchett%20ux_fewd.pdf?dl=0" class="btn btn-primary">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home