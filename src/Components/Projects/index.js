import { React, useState, forwardRef, useEffect } from "react";
import * as C from "./styles";
import AltTitle from "../Elements/AltTitle";
import Project from "../Project";
import ModalProject from "../ModalProject";

const projects = [
  {
    id: "0",
    name: "Dino Flix",
    description:
      "Projeto com de Consumo API com intuito de mostrar filmes em cartaz.",
    linkRepository: "https://github.com/washington0306/Site-filmes",
    linkProject: "https://site-filmes-dusky.vercel.app/",
    tecnologies: ["React", "Ghibli-API"],
    image: "https://i.postimg.cc/9MV1X4zm/2da5bf26-4451-4770-bbd2-5a6c663e04f6.jpg"
  },
  {
    id: "1",
    name: "Whatsapp Web",
    description:
      "Clone de Whatsapp web com intuito de aprimorar meus conhecimentos em React, Node e SQL. Full-Stack",
    linkRepository: "https://github.com/washington0306/Whatsapp-Web",
    linkProject: "",
    tecnologies: ["React", "Router-Dom", "Styled-Components", "Node", "Sql"],
    image: "https://i.postimg.cc/PNG5Q10Y/whatsapp.jpg"
  },
  {
    id: "2",
    name: "Dados da Covid19",
    description:
      "Aplicação cujo objetivo é apresentar os dados da Covid19 no Brasil em tempo real. Utilizando API, o projeto mostra as estatísticas do país e de cada estado individualmente. Foi desenvolvida com React e Typescript.",
    linkRepository: "https://github.com/washington0306/my-app",
    linkProject: "https://my-app-lime-phi.vercel.app/",
    tecnologies: ["React", "Styled-components", "axios"],
    image: "https://i.postimg.cc/sxD70skf/covid.jpg"
  },
  {
    id: "3",
    name: "React project spider-man",
    description:
      "Projeto pessoal produzido em React, com o objetivo de praticar os conceitos gerais da framework, como Hooks, criação de rotas com a biblioteca externa React-Router-Dom e estilização com a biblioteca Styled-Components.",
    linkRepository: "https://github.com/washington0306/Spider-Man",
    linkProject: "https://spider-man-pink.vercel.app/",
    tecnologies: ["React", "Router-Dom", "Styled-Components"],
    image: "https://i.imgur.com/BirB4x4.png?1"
  },
  {
    id: "4",
    name: "Pokemon",
    description:
      "Projeto Utilizando API de Pokemom. Utilizei React",
    linkRepository: "https://github.com/washington0306/Pokemon",
    linkProject: "https://pokemon-flax-ten.vercel.app/",
    tecnologies: ["React"],
    image: "https://i.postimg.cc/xdckxmvc/pokemon.jpg"
  },
  {
    id: "5",
    name: "Jogo da Memória",
    description:
      "Projeto Utilizando API de Pokemom. Utilizei React",
    linkRepository: "https://github.com/washington0306/JogoDaMemoria",
    linkProject: "https://jogo-da-memoria-azure.vercel.app/",
    tecnologies: ["React"],
    image: "https://i.postimg.cc/KvGsKc70/jogo-da-mem-ria.jpg"
  },

];

const Projects = forwardRef(({ setActiveModal }, ref) => {
  const [scrollAnimate, setScrollAnimate] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const sectionPosition = ref.current.getBoundingClientRect().top - 400;

      if (sectionPosition < 0) {
        setScrollAnimate(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [ref]);
  return (
    <C.Projects ref={ref} className={scrollAnimate ? "scrollLeft" : "none"}>
      <AltTitle title="projetos" />
      <C.ListProjects>
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              setActiveModal={setActiveModal}
            />
          );
        })}
      </C.ListProjects>
    </C.Projects>
  );
});

export default Projects;
