import './App.css';
import { WorkExpItem, ProjectExpItem, EducationItem } from './components/Resume';
import { data } from './data';

function App() {
  return (
    <section class="resume">
        <header class="resume-header">
            <h1>Hyungmo (Moe) Gu</h1>
            <p>Calgary, AB, Canada</p>
            <ul>
                <li>Web: <a href="https://www.hyungmogu.com">hyungmogu.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/hyungmo-gu/">/in/hyungmo-gu/</a></li>
                <li><a href="mailto:guhyungm7@gmail.com">guhyungm7@gmail.com</a></li>
                <li>T: 1-825-365-1143</li>
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
            <p>Python, HTML5, CSS3, SASS, React, ES6 JavaScript, Typescript, AngularJS, Angular, Bootstrap, Ionic Framework, Bash, Unit Testing, Kanban, Git, Mac, Linux, Windows</p>
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
