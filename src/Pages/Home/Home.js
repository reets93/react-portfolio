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
                        <img className="headshot" src="https://uc1f267cac7da5a02f8c18c0c461.previews.dropboxusercontent.com/p/thumb/AB2wzPU5KuciXAKhRH5jY1pEMfDxUGa9hAWfEGR3Cz-zGU_XCcm2iMtgPMBZMM52HOktg3dlJ8_n8Lqbtev5Yo3zkq27r1KntDiFDajiTf-ZAqsfvjUed4z8gWMXKMc5VcBG1TynRiHKvKalyvqk3rFckEUbjlbnDmU_34C4LE0DO1k8CMmTNPF2tnl99unf8qC4bPqAtAJOnZEllBO97uNKT0N-7iS8-FCe7_VNDdKJz5dMzKHdQpf6P_-ZE06qo5pvtx9N2EO58PSZK9uShd36lLMUosJGC9Mb_ms5RndJE2CianC7BgjQTDF2Xdn4tagaLDM4JsQ-2Be2eBHkl2rpacgwmikwUT757RBBTQcpbY3JlLEzFY4_zD2vpkoO4gIdCK7dgFOVUOXy5jOBj1fsha0sclDAJnfDtubrOTjOCg/p.png" alt="headshot" />
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