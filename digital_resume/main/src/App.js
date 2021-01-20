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
            <article>
                <header>
                    <div>
                        <h3>Simple Publish</h3>
                        <a href="https://github.com/hyungmogu/simple-publish">https://github.com/hyungmogu/simple-publish</a>
                    </div>
                    <div>
                        <p>January 2021</p>
                    </div>
                </header>
                <ul>
                    <li>Developed pixel perfect clone of GitHub’s create new repository page using React and SASS</li>
                    <li>Used React components to reduce repeating codes and improve app’s modularity</li>
                    <li>Utilized SASS for-loop to mock bootstrap’s grid system involving paddings and margins</li>
                    <li>Leveraged 7-1 SASS’s architecture to improve readability and maintainability of style codes</li>
                </ul>
            </article>
            <article>
                <header>
                    <div>
                        <h3>hyungmogu.com</h3>
                        <a href="https://www.hyungmogu.com">https://www.hyungmogu.com</a>
                    </div>
                    <div>
                        <p>November 2020</p>
                    </div>
                </header>
                <ul>
                    <li>Created a React and SASS based portfolio website from design to publishing</li>
                    <li>Engineered typewriter effect on homepage using CSS animations, React DOM and ES6 Javascript</li>
                    <li>Utilized media queries and flexbox properties for full responsiveness of the website </li>
                    <li>Iterative design of template through prototypes using Adobe Illustrator and Bootstrap</li>
                </ul>
            </article>
            <article>
                <header>
                    <div>
                        <h3>Web App Dashboard</h3>
                        <a href="https://github.com/hyungmogu/web-app-dashboard">https://github.com/hyungmogu/web-app-dashboard</a>
                    </div>
                    <div>
                        <p>January 2018</p>
                    </div>
                </header>
                <ul>
                    <li>Crafted the front-end of interactive dashboard app from mockup using HTML5, SASS and Chart.js</li>
                    <li>Leveraged BEM methodology to ensure naming consistency of over 500 lines of style codes</li>
                    <li>Utilized CSS animations on SVG icons to improve loading speed and user interactivity</li>
                </ul>
            </article>
        </section>
        <section class="education">
            <h2><u>Education</u></h2>
            {data.education.map(item => <EducationItem {...item} />)}
        </section>
    </section>
  );
}

export default App;
