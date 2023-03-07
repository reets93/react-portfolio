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
                        {/* enter headshot here */}
                    </div>
                </div>
            </section>

            <section className="home-section">
                <div className="card blurb">
                    <div className="card-body">
                        <h5 className="card-text">I work on web design and development projects, to produce quality and unique websites.</h5>
                        <div className="btn-blurb">
                            <a href="www.google.com" class="btn btn-primary">Explore my Portfolio</a>
                            <a href="www.google.com" class="btn btn-primary">Get in Touch</a>
                            <a href="www.google.com" class="btn btn-primary">Check out my CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home