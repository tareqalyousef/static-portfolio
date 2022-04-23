import Button from "../../components/button";
import Entry from "../../components/entry";
import Header from "../../components/header";
import Divider from "../../components/divider";
import { getProjects } from "../../components/utils";
import { BrowserView, MobileView } from "react-device-detect";

const Index = ({projects}) => {
  const items = [
    { text: "home", href: "/" },
    { text: "projects" },
  ];

  return (
    <>
      <title>
        tareq alyousef - projects
      </title>
      <Header items={items} />
      <Divider size="large" />
      <div id="page-container" style={{maxWidth: "550px"}}>
        <h1 id="title">projects</h1>
        <Divider size="large" />
        {projects.map(project => {
          return (
            getEntry(project)
          );
        })}
        <BrowserView>
          <Button text="back" href="/" />
        </BrowserView>
        <MobileView>
          <div className="btn-container-mobile">
            <Button text="back" href="/" />
          </div>
        </MobileView>
        <Divider size="medium" />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return { 
    props: {
      projects: getProjects()
    }
  }
};

const getEntry = (project) => {
  return (
    <div key={project.data.title}>
      <Entry project={project} />
      <Divider size="medium" />
    </div>
  );
};


export default Index;