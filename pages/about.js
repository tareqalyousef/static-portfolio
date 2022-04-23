import hljs from "highlight.js";
import { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Button from "../components/button";
import Content from "../components/content";
import Divider from "../components/divider";
import Header from "../components/header";
import { getAboutData } from "../components/utils";

const About = ({data}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const items = [
    { text: "home", href: "/" },
    { text: "about" },
  ];

  return (
    <>
      <title>
        tareq alyousef - about
      </title>
      <Header items={items} />
      <Divider size="large" />
      <div id="page-container">
        <p id="title">about</p>
        <Divider size="large" />
        <Content content={data} />
        <Divider size="medium" />
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
      data: getAboutData()
    }
  }
};

export default About;