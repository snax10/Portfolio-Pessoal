import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2022"
          title="Dev. Front-end"
          description="Desenvolvimento e manutenção de aplicações web, utilizando ReactJs, NextJs e React Native."
        />
        <ExperienciaItem
          year="2021"
          title="Dev. Front-end"
          description="Desenvolvimento e manutenção de aplicações web, utilizando ReactJs."
        />
        <ExperienciaItem
          year="2020"
          title="Analista de sistemas"
          description="Analista com vivência em equipes de suporte, para atuar como técnico`
          funcional de um sistema customizado em java"
        />
        <ExperienciaItem
          year="2020"
          title="Dev. Estagiário"
          description="Efetuar a migração dos conteúdos em Flash e adaptá-los em HTML, Css,
          JavaScript e Xml."
        />
      </section>
    </Container>
  );
}

export default Experiencias;
