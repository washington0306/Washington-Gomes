import styled from "styled-components";

export const About = styled.section`
  visibility: hidden;
  padding: 50px 160px;

  @media only screen and (max-width: 992px) {
    padding: 50px 80px;
  }

  @media only screen and (max-width: 768px) {
    padding: 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 50px 30px 30px 30px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 500px;
    margin-left: 1rem;

    div {
      margin-top: 2rem;
    }
  }

  li {
    margin-bottom: 0.3rem;
    list-style-type: circle;

    &::marker {
      color: var(--cyan);
    }
  }

  a {
    margin-top: 2.5rem;
    background: var(--cyan);
    padding: 1.24rem 4rem;
    text-transform: capitalize;
    font-weight: 500;
    display: inline-block;
    transition: 0.5s ease-in-out;
    border: none;
    color: var(--white);
    font-size: 1.1rem;
    cursor: pointer;

    &:hover {
      transform: scale(0.935);
    }
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;

export const TextAboutArea = styled.section`
  margin-bottom: 40px;

  p {
    max-width: 60%;

    &:first-child::before {
      content: "<p> ";
    }
    &:last-child::after {
      content: " </p>";
    }
    &:first-child::before,
    &:last-child::after {
      color: var(--cyan);
    }

    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
  }
`;
