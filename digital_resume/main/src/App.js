import './App.scss';
import styled from 'styled-components';

import { WorkExpItem, ProjectExpItem, EducationItem, ResumeHeader } from './components/Resume';
import { data } from './data';

const Resume = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
`;

const Ul = styled.ul`
    padding-left: 20px;
`;


function App() {
  return (
    <section className="resume">
        <ResumeHeader/>
        <section className="qualification">
            <h2><u>Highlights of Qualification</u></h2>
            <Ul>
              {data.highlights.map(item => <li>{item}</li>)}
            </Ul>
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
