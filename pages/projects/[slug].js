import React from "react";
import { getProjectFromSlug, getProjects } from "../../components/utils";
import Button from "../../components/button";
import Content from "../../components/content";
import { useEffect } from "react";
import hljs from "highlight.js";
import AppLayout from "../../components/app-layout";
import SpaceBetween from "../../components/space-between";

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
    <AppLayout
      webTitle={`tareq alyousef - ${project.data.title}`}
      headerItems={items}
      title={project.data.title}
      >
        <SpaceBetween size="medium">
          <Content content={project.content} />
          <Button text="back" href="/projects" />
        </SpaceBetween>
    </AppLayout>
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