import Button from "../../components/button";
import Entry from "../../components/entry";
import { getProjects } from "../../components/utils";
import AppLayout from "../../components/app-layout";
import SpaceBetween from "../../components/space-between";

const Index = ({projects}) => {
  const items = [
    { text: "home", href: "/" },
    { text: "projects" },
  ];

  return (
    <AppLayout
      webTitle="tareq alyousef - projects"
      headerItems={items}
      title="projects"
      slim
      >
        <SpaceBetween size="medium">
          {getEntries(projects)}
          <Button text="back" href="/" />
        </SpaceBetween>
    </AppLayout>
  );
};

export const getStaticProps = async () => {
  return { 
    props: {
      projects: getProjects()
    }
  }
};

const getEntries = (projects) => {
  return (
    <SpaceBetween size="medium">
      {projects.map(project => {
        return (
          <div key={project.data.title}>
            <Entry project={project} />
          </div>
        );
      })}
    </SpaceBetween>
  );
};


export default Index;