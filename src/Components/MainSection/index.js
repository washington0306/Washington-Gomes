import { React, forwardRef, useEffect } from "react";
import * as C from "./styles";
import foto from "../../Assets/banner-ls.png";
import {
  LogoGithub,
  LogoLinkedin,
  LogoInstagram,
  LogoWhatsapp
} from "react-ionicons";
import ExternalLink from "../Elements/ExternalLink";

const MainSection = forwardRef(({ animate, setAnimate }, ref) => {
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <C.MainSection ref={ref} animate={animate}>
      <C.Column1 className={animate ? "MainSectionCol1" : null}>
        <img src={foto} alt="Washington Gomes Developer" />
      </C.Column1>
      <C.Column2 className={animate ? "MainSectionCol2" : null}>
        <C.InitialTitle>
          <h2>olá, me chamo</h2>
        </C.InitialTitle>
        <C.MainTitle>
          <h1>José Washington Gomes</h1>
        </C.MainTitle>
        <C.MainSubtitle>
          <h2>Desenvolvedor Full-Stack</h2>
        </C.MainSubtitle>
        <C.SocialLinks>
          <li>
            <ExternalLink href="https://github.com/washington0306/">
              <LogoGithub cssClasses="icons" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/in/jos%C3%A9-washington-a53428184/">
              <LogoLinkedin cssClasses="icons" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.facebook.com/jose.washigton.1">
              <LogoInstagram cssClasses="icons" />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://wa.me/5583999704113">
              <LogoWhatsapp cssClasses="icons" />
            </ExternalLink>
          </li>
        </C.SocialLinks>
      </C.Column2>
    </C.MainSection>
  );
});

export default MainSection;
