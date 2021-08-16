import github from '../components/git.png'
import linkedin from '../components/lin.png'
import youtube from '../components/youtube.png'



const Intro = () => {
    return (
        <section className="hero">
            <div className="heroContainer">
           
            <div className="subheading">
                <p>Howdy,<br/><br/>I'm <span className="name"> Troy Domio</span>, a full-stack web developer based out of Dallas, Texas. 
                <br/>
                <a href="https://github.com/troydomio" target="_blank"><img className="git" src={github} ></img></a>
          <a href="https://www.linkedin.com/in/troydomio/" target="_blank"><img className="linkedin" src={linkedin} ></img></a>
          <a href="https://www.youtube.com/channel/UC6IohvICPLUWWUmaDadtF_w" target="_blank"><img className="youtube" src={youtube} ></img></a>
          </p>  
            </div>
            </div>
        </section>
    )
}

export default Intro
