import { Skills } from "../enums/skills.enum";

export interface IProject{
    projectHeading:string;
    teamSize:number;
    description:string,
    skillsUsed: Skills[]
}