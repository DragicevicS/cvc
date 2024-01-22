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
    id: 0,
    jobTitle: "",
    companyName: "",
    companyLocation: "",
    jobFrom: "",
    jobTo: "",
    jobDescription: "",
  },
];

export type WorkExperience = {
  id: number;
  jobTitle: string;
  companyName: string;
  companyLocation: string;
  jobFrom: string;
  jobTo: string;
  jobDescription: string;
}[];

export const initialEducationValues = [
  {
    id: 0,
    degree: "",
    institutionName: "",
    institutionLocation: "",
    educationFrom: "",
    educationTo: "",
    educationDescription: "",
  },
];

export type Education = {
  id: number;
  degree: string;
  institutionName: string;
  institutionLocation: string;
  educationFrom: string;
  educationTo: string;
  educationDescription: string;
}[];

export type Skills = { id: number; skill: string }[];
