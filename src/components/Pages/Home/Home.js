// import Header from "../Header";
// import '../../assets/rita-headshot.png'
import Assets from "../../Assets/Assets"
import './Home.css'

function Home() {
    return (
        <section className="bio">
        <div className="row">
            <div className="col-sm-12 col-lg-5">
                <h3>Hi, I'm Rita</h3>
                <h2>A front-end web developer
                {'\n'} & UX designer</h2>
            </div>
            <div className="col-sm-12 col-lg-7">
                <Assets />
            </div>
        </div>
        </section>
    )
}

export default Home