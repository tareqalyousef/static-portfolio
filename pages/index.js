import Link from "next/link";
import LandingTitle from "../components/landing-title";

const Home = () => {
  return (
    <>
      <title>
        tareq alyousef - home
      </title>
      <div id="focused">
        <LandingTitle />
        <hr id="rule" />
        <div className="link-area">
            <Link href="/about">
              <a className="slim-link">ABOUT</a>
            </Link>
            <Link href="/projects">
              <a className="slim-link">PROJECTS</a>
            </Link>
            <Link href="https://www.linkedin.com/in/tareq-alyousef-462930209/">
              <a className="slim-link" target="_blank" rel="noreferrer">LINKEDIN</a>
            </Link>
            <Link href="/resume.pdf">
              <a className="slim-link" target="_blank" rel="noreferrer">RESUME</a>
            </Link>
        </div>
      </div>
    </>
  )
};

export default Home;