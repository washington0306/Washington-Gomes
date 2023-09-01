import { React, forwardRef, useEffect, useState } from "react";
import * as C from "./styles";
import * as L from "../Elements/Button/styles";
import Title from "../Elements/Title";
import Subtitle from "../Elements/Subtitle";
import Button from "../Elements/Button";
import InternalLink from "../Elements/InternalLink";

const About = forwardRef(({ LinkButton }, ref) => {
  const [activeMenu, setActivemenu] = useState(false);
  const [scrollAnimate, setScrollAnimate] = useState(null);

  useEffect(() => {
    function handleScroll() {
      const sectionPosition = ref.current.getBoundingClientRect().top - 200;

      if (sectionPosition < 0) {
        setScrollAnimate(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [ref]);

  return (
    <C.About ref={ref} className={scrollAnimate ? "scrollRight" : "none"}>
      <Title title="Sobre" />
      <C.TextAboutArea>
        <p>
          Me chamo José Washington, sou desenvolvedor Full-Stack.
        </p>
        <p>
        Programador apaixonado por tecnologia e programação. Graduando em Ciências da Computação pela UEPB. Busco pôr em prática o que aprendi e continuo aprendendo no mundo da programação para criar códigos inovadores para os clientes da Empresa.{" "}
        </p>
        <p>
          Meu interesse na área de programação começou em 2019, quando fiquei
          curioso em como funcionava um website e como ele é feito. Quando criei
          meu primeiro site, a vontade em me aprofundar pela área foi só
          aumentando!{" "}
        </p>
        <p>
          Atualmente, trabalho como Desenvolvedor Full-Stack.{" "}
        </p>
      </C.TextAboutArea>
      <Subtitle subtitle="Técnologias que trabalho:" />
      <ul>
        <div>
          <li>React</li>
          <li>JavaScript (ES6)</li>
          <li>TypesCrypt</li>
         
        </div>
        <div>
          <li>Node</li>
          <li>Express</li>
          <li>SQL</li>
          <li>MySQL</li>
        </div>
   
      </ul>
      <InternalLink
        href="#projects"
        activeMenu={activeMenu}
        setActivemenu={setActivemenu}
        linkRef={LinkButton}
      >
        Veja meus projetos
      </InternalLink>
    </C.About>
  );
});

export default About;
