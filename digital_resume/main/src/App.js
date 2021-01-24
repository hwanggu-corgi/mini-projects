import './App.scss';
import styled from 'styled-components';

import { WorkExpItem, ProjectExpItem, EducationItem } from './components/Resume';
import { data } from './data';

function App() {
  const Resume = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
  `;

  return (
    <section className="resume">
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
        <section className="qualification">
            <h2><u>Highlights of Qualification</u></h2>
            <ul>
              {data.highlights.map(item => <li>{item}</li>)}
            </ul>
        </section>
        <section>
            <h2><u>Technical Skills</u></h2>
            <p>{data.techSkills.join(", ")}</p>
        </section>
        <section className="work-experience">
            <h2><u>Work Experience</u></h2>
            {data.workExp.map(item => <WorkExpItem {...item} />)}
        </section>
        <section className="project-experience">
            <h2><u>Project Experience</u></h2>
            {data.projectExp.map(item => <ProjectExpItem {...item} />)}
        </section>
        <section className="education">
            <h2><u>Education</u></h2>
            {data.education.map(item => <EducationItem {...item} />)}
        </section>
    </section>
  );
}

export default App;
