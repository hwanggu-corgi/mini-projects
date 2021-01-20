import logo from './logo.svg';
import './App.css';
import { ProjectExpItem, EducationItem } from './components/Resume';
import { data } from './data';

function App() {
  return (
    <section class="resume">
        <header class="resume-header">
            <h1>Hyungmo (Moe) Gu</h1>
            <p>Calgary, AB, Canada</p>
            <ul>
                <li>Web: <a href="https://www.hyungmogu.com">hyungmogu.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/hyungmo-gu/"> /in/hyungmo-gu/</a></li>
                <li><a href="mailto:guhyungm7@gmail.com">guhyungm7@gmail.com</a></li>
                <li>T: 1-825-365-1143</li>
            </ul>
            <hr></hr>
        </header>
        <section class="qualification">
            <h2><u>Highlights of Qualification</u></h2>
            <ul>
                <li>Emerging web developer with over 2 years of hands-on experience</li>
                <li>Developed HTML templates from mockups that are both pixel-perfect and responsive</li>
                <li>Strong skills in HTML5, CSS3 and ES6 JavaScript and comfort in React</li>
                <li>Strong ability to work independently and in collaboration with team members</li>
                <li>Committed to refining front-end skills through Codecademy’s Learn Typescript Course</li>
            </ul>
        </section>
        <section>
            <h2><u>Technical Skills</u></h2>
            <p>Python, HTML5, CSS3, SASS, React, ES6 JavaScript, Typescript, AngularJS, Angular, Bootstrap, Ionic Framework, Bash, Unit Testing, Kanban, Git, Mac, Linux, Windows</p>
        </section>
        <section class="work-experience">
            <h2><u>Work Experience</u></h2>
            <article>
                <header>
                    <div>
                        <h3>Junior Developer</h3>
                        <p>SiteMax Systems Inc., Vancouver, BC, Canada</p>
                    </div>
                    <div>
                        <p>January 2018 - December 2019</p>
                    </div>
                </header>
                <ul>
                    <li>Contributed to company’s growth by delivering over 300 AngularJS applications</li>
                    <li>Maintained company’s 2000 web based apps with tasks including fixing bugs and improving UI</li>
                    <li>Developed libraries of HTML, Bash and Python snippets to boost production speed and quality</li>
                    <li>Assisted with developing company’s SiteMax 3.5 mobile application using Ionic Framework, Angular, SASS and Postman</li>
                </ul>
            </article>
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
