import styled from 'styled-components';
import { data } from '../../data';


const div = styled.div`
  &:first-child {
    flex-grow: 1;
  }
`;

const h1 = styled.h1`
  margin-bottom: 0.5em;
  margin-top: 0;
`;

const p = styled.p`
  &:first-child {
    flex-grow: 1;
  }
`;

export function EducationItem(props) {
    return (
      <article>
        <header>
          <div>
            <h3>{props.name}</h3>
            <p>{props.location}</p>
          </div>
          <div>
            <p>{props.date}</p>
          </div>
        </header>
      </article>
    );
}


export function ProjectExpItem(props) {
    const Header = styled.header`
      @media only screen and (min-width: 660px) {
        display: flex;
      }
    `;

    const Ul = styled.ul`
      padding-left: 20px;
    `;

    return (
      <article>
        <Header>
          <div>
            <h3>{props.name}</h3>
            <a href={props.url}>{props.url}</a>
          </div>
          <div>
              <p>{props.date}</p>
          </div>
        </Header>
        <Ul>
          {props.details.map(detail => <li>{detail}</li>)}
        </Ul>
      </article>
    );
}

export function WorkExpItem(props) {
    const Header = styled.header`
      @media only screen and (min-width: 660px) {
        display: flex;
      }
    `;

    const Ul = styled.ul`
      padding-left: 20px;
    `;

    return (
      <article>
        <Header>
          <div>
            <h3>{props.title}</h3>
            <p>{props.location}</p>
          </div>
          <div>
            <p>{props.date}</p>
          </div>
        </Header>
        <Ul>
          {props.details.map(detail => <li>{detail}</li>)}
        </Ul>
      </article>
    );
}


export function ResumeHeader(props) {
    const Header = styled.header`
      @media only screen and (min-width: 730px) {
        text-align: center;
      }
    `;

    const Ul = styled.ul`
      list-style: none;
      padding: 0;

      @media only screen and (min-width: 730px) {
        display: flex;
      }
    `;

    const Li = styled.li`
      flex-grow: 1;

      &:last-child {
        border-right: none;
      }

      @media only screen and (min-width: 730px) {
        flex-grow: 1;
        border-right: black solid 1px;
      }
    `;

    return (
        <Header>
          <h1>Hyungmo (Moe) Gu</h1>
          <p>Calgary, AB, Canada</p>
          <Ul>
            <Li>Web: <a href={data.info.web.url}>{data.info.web.label}</a></Li>
            <Li>LinkedIn: <a href={data.info.linkedIn.url}>{data.info.linkedIn.label}</a></Li>
            <Li><a href={'mailto:' + data.info.email}>{data.info.email}</a></Li>
            <Li>T: {data.info.tel}</Li>
          </Ul>
          <hr></hr>
        </Header>
    );
}