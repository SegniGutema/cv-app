import { v4 as uuidv4 } from "uuid";
const data = {
  personalInfo: {
    id: "personalInfo",
    name: "segni",
    position: "web dev",
    email: "segnigutema9@gmail.com",
    tel: "+251935969017",
    address: "Addis Ababa, Ethiopia",
    company: "self employed",
  },
  education: {
    id: "education",
    list: [
      {
        id: uuidv4(),
        school: "school/university",
        fieldOfStudy: "field of study",
        startDate: "Present",
        endDate: "Present",
      },
    ],
  },
  experience: {
    id: "experience",
    list: [
      {
        id: uuidv4(),
        company: "company",
        position: "position",
        startDate: "Present",
        endDate: "Present",
      },
    ],
  },
  skills: {
    id: "skills",
    list: [],
  },
};
export default data;
