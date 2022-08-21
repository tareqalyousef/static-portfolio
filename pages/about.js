import AppLayout from "../components/app-layout";
import Button from "../components/button";
import Content from "../components/content";
import SpaceBetween from "../components/space-between";
import { getAboutData } from "../components/utils";

const About = ({data}) => {
  const items = [
    { text: "home", href: "/" },
    { text: "about" },
  ];

  return (
    <AppLayout
      webTitle="tareq alyousef - about"
      headerItems={items}
      title="about"
      >
        <SpaceBetween size="medium">
          <Content content={data} />
          <Button text="back" href="/" />
        </SpaceBetween>
    </AppLayout>
  );
};

export const getStaticProps = async () => {
  return { 
    props: {
      data: getAboutData()
    }
  }
};

export default About;