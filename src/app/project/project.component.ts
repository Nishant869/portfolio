import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { IProject } from "@app/shared/interfaces/project.interface";
import { Skills } from "@app/shared/enums/skills.enum";
import { MatChipsModule } from "@angular/material/chips";

@Component({
  selector: "nishant-project",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent {
  readonly projects: IProject[] = [
    {
      projectHeading: `VISITOR'S APPLICATION`,
      teamSize: 3,
      description: `Visitor portal is a digital log book to track visitors to office area. It capture all the information about the visitor both planned and adhoc. It was integrated along with the office space booking so that if there is a planned visit meeting areas can be allocated without any conflict`,
      skillsUsed: [Skills.ANGULAR, Skills.MONGO, Skills.NODE],
    },
    {
      projectHeading: `TORQ`,
      teamSize: 3,
      description: `TORQ is a website to brand company internal achivements and initiative, to discuss any upcoming idea, collobrate and team building.`,
      skillsUsed: [Skills.ANGULAR, Skills.MONGO, Skills.NODE],
    },
    {
      projectHeading: `HASHO`,
      teamSize: 4,
      description: `NFT marketplace for enterprises.`,
      skillsUsed: [
        Skills.ANGULAR,
        Skills.ORACLE_DB,
        Skills.NODE,
        Skills.BLOCKCHAIN,
      ],
    },
    {
      projectHeading: `INTEROPERABILITY`,
      teamSize: 4,
      description: `A EHR application which brings the distributed participants of healthcare industry on to a common platform.`,
      skillsUsed: [
        Skills.ANGULAR,
        Skills.ORACLE_DB,
        Skills.NODE,
        Skills.BLOCKCHAIN,
        Skills.GOLDEN_GATE,
      ],
    },
    {
      projectHeading: `AERO`,
      teamSize: 4,
      description: `POAP based event management portal.`,
      skillsUsed: [
        Skills.REACT,
        Skills.NODE,
        Skills.BLOCKCHAIN,
        Skills.ORACLE_DB,
      ],
    },
    {
      projectHeading: `JEP PORTAL`,
      teamSize: 2,
      description: `JEP PORTAL is an application built using Oracle APEX to create a JEP (Joint execution plan) document and track the progress, Some of the features to highlight are - Email notification system, approval hierarchy, restricted access.`,
      skillsUsed: [Skills.JS, Skills.CSS, Skills.ORACLE_APEX],
    },
  ];
}
