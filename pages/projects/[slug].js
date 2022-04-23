import React from "react";
import Header from "../../components/header";
import { getProjectFromSlug, getProjects } from "../../components/utils";
import Button from "../../components/button";
import Divider from "../../components/divider";
import Content from "../../components/content";
import { useEffect } from "react";
import hljs from "highlight.js";
import { BrowserView, MobileView } from "react-device-detect";

const Project = ({project}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const items = [
    { text: "home", href: "/" },
    { text: "projects", href: "/projects" },
    { text: project.slug }
  ];

  return (
    <>
      <title>
        tareq alyousef - {project.data.title}
      </title>
      <Header items={items} />
      <Divider size="large" />
      <div id="page-container">
        <h1 id="title">{project.data.title}</h1>
        <Divider size="large" />
        <Content content={project.content} />
        <Divider size="medium" />
        <BrowserView>
          <Button text="back" href="/projects" />
        </BrowserView>
        <MobileView>
          <div className="btn-container-mobile">
            <Button text="back" href="/projects" />
          </div>
        </MobileView>
        <Divider size="medium" />
      </div>
    </> 
  );
};

export const getStaticPaths = async () => {
  const paths = getProjects().map(project => ({
    params: {
      slug: project.slug
    }
  }));
  
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({params: {slug}}) => {
  return { 
    props: {
      project: getProjectFromSlug(slug),
    }
  }
};

export default Project;