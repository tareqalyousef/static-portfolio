import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import hljs from "highlight.js";

const renderer = {
  hr() {
    return `<hr class="md-hr" />`;
  },
  heading(text, level) {
    return `<h${level} class="md-h${level}">${text}</h${level}>`;
  },
  paragraph(text) {
    return `<p class="md-p">${text}</p>`;
  },
  codespan(code) {
    return `<span class="md-codespan">${code}</span>`
  },
  code(code, infostring, escaped) {
    let lang = hljs.highlightAuto(code);
    let compiled = hljs.highlight(code, { language: infostring }).value;
    return `<div class="md-blockcode-parent"><pre class="hljs md-pre md-blockcode"><code class="language-${lang}">${compiled}</code></pre></div>`
  },
  link(href, title, text) {
    return `<Link><a class="glow-link" href="${href}" target="_blank">${text}</a></Link>`
  },
  strong(text) {
    return `<span class="md-strong">${text}</span>`
  },
  image(href, title, text) {
    return `<div class="md-img-parent"><img src=${href}></img></div>`
  }
};

marked.use({ renderer });

export const getProjects = () => {
  const files = fs.readdirSync(path.join("public", "data", "projects"));

  return files.map(fileName => {
    const data = fs.readFileSync(path.join("public", "data", "projects", fileName)).toString();
    const markdown = matter(data);
    
    return {
      fileName: fileName,
      slug: fileName.replace(".md", ""),
      data: markdown.data,
      content: markdown.content
    };
  });
};

export const getProjectFromSlug = (slug) => {
  return getProjects().find(project => {
    return project.slug == slug;
  });
};

export const parseMarkdown = (data) => {
  return marked.parse(data);
};

export const getAboutData = () => {
  return fs.readFileSync(path.join("public", "data", "about.md")).toString();
};