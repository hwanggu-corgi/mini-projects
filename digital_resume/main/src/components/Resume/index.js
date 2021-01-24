import styled from 'styled-components';
import { data } from '../../data';

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

    const Ul = styled.ul`
        padding-left: 20px;
    `;

    return (
      <article>
        <header>
            <div>
                <h3>{props.name}</h3>
                <a href={props.url}>{props.url}</a>
            </div>
            <div>
                <p>{props.date}</p>
            </div>
        </header>
        <Ul>
            {props.details.map(detail => <li>{detail}</li>)}
        </Ul>
      </article>
    );
}

export function WorkExpItem(props) {

    const Ul = styled.ul`
        padding-left: 20px;
    `;

    return (
      <article>
        <header>
            <div>
                <h3>{props.title}</h3>
                <p>{props.location}</p>
            </div>
            <div>
              <p>{props.date}</p>
            </div>
        </header>
        <Ul>
          {props.details.map(detail => <li>{detail}</li>)}
        </Ul>
      </article>
    );
}


export function ResumeHeader(props) {
    return (
        <header className="resume-header">
            <h1>Hyungmo (Moe) Gu</h1>
            <p>Calgary, AB, Canada</p>
            <ul>
                <li>Web: <a href={data.info.web.url}>{data.info.web.label}</a></li>
                <li>LinkedIn: <a href={data.info.linkedIn.url}>{data.info.linkedIn.label}</a></li>
                <li><a href={'mailto:' + data.info.email}>{data.info.email}</a></li>
                <li>T: {data.info.tel}</li>
            </ul>
            <hr></hr>
        </header>
    );
}