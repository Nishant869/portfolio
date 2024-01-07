import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { IExperience } from '@app/shared/interfaces/experiences.interface';

@Component({
  selector: 'nishant-companies',
  standalone: true,
  imports: [CommonModule, MatStepperModule],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  experiences!: IExperience[];

  ngOnInit(): void {
    this.experiences = [
      {
        company: {
          name: 'FordPro- Electriphy',
          location: 'Bangalore',
        },
        doj: 'January 2023',
        endDate: 'Till Date',
        recognition: [
          'Received a shout out for being a quick learner and getting involved in major initiatives.',
          'Received the Best Debut Performer award',
        ],

        work: {
          role: 'Member of Technical Staff - 2 (MTS-II)',
          responsiblities: [
            'Working as a full stack JavaScript developer with toolkit as Nest JS, Node and Angular 14.',
            'Work closely with product owner, identify new requirements, analyze, break those into sub-tasks.',
            'Develop requirements into feature following best coding and agile practice. Write meaningful test cases to perform both e2e and unit test.',
          ],
        },
      },

      {
        company: {
          name: 'Oracle Corporation',
          location: 'Bangalore',
        },
        doj: 'April 2020',
        endDate: 'January 2023',
        recognition: [
          'Received recognition and award for creating POC for Oracle’s converged DB.',
          'Winner of Oracle’s global hackathon (MadHacks) for consecutive years 2020 and 2021 and runner up in year 2022.',
          'Received recognition and award for creating Oracle APEX application to manage Joint execution documents.',
        ],
        work: {
          role: 'Staff Solution Engineer',
          responsiblities: [
            'Working as staff solution engineer.',
            'Full stack developer and Consultant for GoldenGate for Big data, GoldenGate Stream analytics.',
            'Building application using Oracle application express.',
          ],
        },
      },

      {
        company: {
          name: 'Quinnox Consultancy Services',
          location: 'Mumbai',
        },
        doj: 'March 2018',
        endDate: 'April 2020',
        recognition: [
          'Received star performer award.',
          'Awarded for outstanding contribution in creating platform for collaboration and idea sharing (TORQ).',
        ],
        work: {
          role: 'Software Engineer',
          responsiblities: [
            'Direct client communication to understand new requirements.',
            'Working on estimates and creating JIRA backlog along with feasibility study.',
            'Working on JAVA application enhancements and development and performing initial round of Unit testing.',
            'Handing production issues.',
          ],
        },
      },

      {
        company: {
          name: 'ABIBA Systems',
          location: 'Bangalore',
        },
        doj: 'February 2017',
        endDate: 'August 2017',
        recognition: [],
        work: {
          role: 'Software Trainee',
          responsiblities: [
            '6 Month Paid Internship',
            'Worked on migrating companies existing product to new and advance technology.',
          ],
        },
      },
    ];
  }
  trackByFunction(index: number) {
    return index;
  }
}
