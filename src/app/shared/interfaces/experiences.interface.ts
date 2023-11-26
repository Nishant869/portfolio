interface Company {
  name: string;
  location: string;
}

interface Work {
  role: string;
  responsiblities: string[];
}

export interface IExperience {
  company: Company;
  doj: string;
  work: Work;
  endDate: string;
  recognition: string[];
}
