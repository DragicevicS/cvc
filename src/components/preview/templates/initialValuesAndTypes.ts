export const initialPersonalInfo = {
  firstLastName: "",
  occupationalTitle: "",
  currentLocation: "",
  phoneNumber: "",
  email: "",
  linkedin: "",
  github: "",
  personalWebsite: "",
  about: "",
  resumePhoto: null,
};

export type PersonalInfo = {
  firstLastName: string;
  occupationalTitle: string;
  currentLocation: string;
  phoneNumber: string;
  email: string;
  linkedin: string;
  github: string;
  personalWebsite: string;
  about: string;
  resumePhoto: string | ArrayBuffer | null;
};

export const initialWorkExperienceValues = [
  {
    index: 0,
    jobTitle: "",
    companyName: "",
    companyLocation: "",
    jobFrom: "",
    jobTo: "",
    jobDescription: "",
  },
];

export type WorkExperience = {
  index: number;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  jobFrom: string;
  jobTo: string;
  jobDescription: string;
}[];

export const initialEducationValues = [
  {
    index: 0,
    degree: "",
    institutionName: "",
    institutionLocation: "",
    educationFrom: "",
    educationTo: "",
    educationDescription: "",
  },
];

export type Education = {
  index: number;
  degree: string;
  institutionName: string;
  institutionLocation: string;
  educationFrom: string;
  educationTo: string;
  educationDescription: string;
}[];

export type Skills = { id: number; skill: string }[];
