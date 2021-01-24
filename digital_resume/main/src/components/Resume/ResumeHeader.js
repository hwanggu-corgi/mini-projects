import './App.scss';
import styled from 'styled-components';

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


function ResumeHeader() {
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

export default ResumeHeader;
