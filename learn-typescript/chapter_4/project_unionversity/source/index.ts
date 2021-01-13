import courses from './courses';
import studyGroups from './studyGroup';

type Course = {
    id: string,
    studyGroupId: number,
    title: string,
    keywords: string[],
    eventType: string
};

type StudyGroup = {

};