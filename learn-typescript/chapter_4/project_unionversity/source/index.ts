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
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string
};

type SearchEventsOptions = {
    query: string | number,
    eventType: 'courses' | 'groups'
};

function searchEvents(options: SearchEventsOptions) {
    let events = options.eventType;
}