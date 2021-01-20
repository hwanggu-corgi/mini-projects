import './App.sass';
import { WorkExpItem, ProjectExpItem, EducationItem } from './components/Resume';
import { data } from './data';

function App() {
  return (
    <section class="resume">
        <header class="resume-header">
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
        <section class="qualification">
            <h2><u>Highlights of Qualification</u></h2>
            <ul>
              {data.highlights.map(item => <li>{item}</li>)}
            </ul>
        </section>
        <section>
            <h2><u>Technical Skills</u></h2>
            <p>{data.techSkills.join(", ")}</p>
        </section>
        <section class="work-experience">
            <h2><u>Work Experience</u></h2>
            {data.workExp.map(item => <WorkExpItem {...item} />)}
        </section>
        <section class="project-experience">
            <h2><u>Project Experience</u></h2>
            {data.projectExp.map(item => <ProjectExpItem {...item} />)}
        </section>
        <section class="education">
            <h2><u>Education</u></h2>
            {data.education.map(item => <EducationItem {...item} />)}
        </section>
    </section>
  );
}

export default App;
