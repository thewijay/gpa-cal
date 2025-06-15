type Subject = {
  code: string
  name: string
  credits: number
}

type SemesterSubjects = {
  core: Subject[]
  electives?: Subject[]
  electiveCreditsRequired: number
}

type SemesterMap = {
  [semester: string]: SemesterSubjects
}

type DegreeMap = {
  [degree: string]: SemesterMap
}

type FacultyMap = {
  [faculty: string]: DegreeMap
}

export const subjectData: FacultyMap = {
  Computing: {
    'Computing and Information Systems': {
      'Semester 1': {
        core: [
          {
            code: 'IS1101',
            name: 'Fundamentals of Information Systems',
            credits: 2,
          },
          {
            code: 'IS1102',
            name: 'Structured Programming Techniques',
            credits: 2,
          },
          {
            code: 'IS1103',
            name: 'Structured Programming Practicum',
            credits: 1,
          },
          {
            code: 'IS1104',
            name: 'Theories of Information Systems',
            credits: 2,
          },
          { code: 'IS1105', name: 'Computer System Organization', credits: 2 },
          {
            code: 'IS1106',
            name: 'Foundations of Web Technologies',
            credits: 2,
          },
          {
            code: 'IS1107',
            name: 'Personal Productivity with Information Technology',
            credits: 1,
          },
          { code: 'IS1108', name: 'Fundamentals of Mathematics', credits: 2 },
          {
            code: 'IS1109',
            name: 'Statistics & Probability Theory',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 2': {
        core: [
          { code: 'IS2101', name: 'Object Oriented Programming', credits: 2 },
          {
            code: 'IS2102',
            name: 'Object Oriented Programming Practicum',
            credits: 1,
          },
          { code: 'IS2103', name: 'Emerging IS Technologies', credits: 1 },
          { code: 'IS2104', name: 'Database Systems', credits: 2 },
          {
            code: 'IS2105',
            name: 'Database Management Systems Practicum',
            credits: 1,
          },
          { code: 'IS2106', name: 'System Analysis & Design', credits: 1 },
          { code: 'IS2107', name: 'Social & Professional Issues', credits: 1 },
          { code: 'IS2108', name: 'Human Computer Interaction', credits: 2 },
          {
            code: 'IS2109',
            name: 'Information Assurance & Security',
            credits: 2,
          },
          {
            code: 'IS21010',
            name: 'Software Project Initiation & Planning',
            credits: 1,
          },
          { code: 'IS21011', name: 'Advanced Mathematics', credits: 2 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 3': {
        core: [
          {
            code: 'IS3101',
            name: 'Object Oriented Analysis & Design',
            credits: 2,
          },
          {
            code: 'IS3102',
            name: 'Data Structures & Algorithms',
            credits: 2,
          },
          { code: 'IS3103', name: 'IT Governance', credits: 2 },
          { code: 'IS3104', name: 'Software Engineering', credits: 2 },
          {
            code: 'IS3105',
            name: 'IS Risk Management',
            credits: 2,
          },
          { code: 'IS3106', name: 'IS Sustainability', credits: 1 },
          {
            code: 'IS3107',
            name: 'Management Information Systems',
            credits: 2,
          },
          { code: 'IS3108', name: 'E-Business', credits: 1 },
          {
            code: 'IS3109',
            name: 'Digital Innovation',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 4': {
        core: [
          {
            code: 'IS4101',
            name: 'IT Auditing',
            credits: 2,
          },
          {
            code: 'IS4102',
            name: 'Web Application Development',
            credits: 2,
          },
          { code: 'IS4103', name: 'Operating Systems', credits: 2 },
          {
            code: 'IS4104',
            name: 'System Administration and Maintenance',
            credits: 2,
          },
          {
            code: 'IS4105',
            name: 'IT Procurement Management',
            credits: 1,
          },
          { code: 'IS4106', name: 'Software Architecture', credits: 2 },
          {
            code: 'IS4107',
            name: 'Professionalism & Ethics in Computing',
            credits: 1,
          },
          { code: 'IS4108', name: 'IS Strategies', credits: 1 },
          {
            code: 'IS4109',
            name: 'Agile Software Development',
            credits: 2,
          },
          {
            code: 'IS4110',
            name: 'Capstone Project',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 5': {
        core: [
          {
            code: 'IS5101',
            name: 'Entrepreneurship & Innovation',
            credits: 1,
          },
          {
            code: 'IS5102',
            name: 'Enterprise Architecture',
            credits: 1,
          },
          { code: 'IS5103', name: 'High Performance Computing', credits: 2 },
          {
            code: 'IS5104',
            name: 'Software Process Management',
            credits: 1,
          },
          {
            code: 'IS5105',
            name: 'Business Process Management',
            credits: 2,
          },
          { code: 'IS5106', name: 'UI/UX Practicum', credits: 1 },
          {
            code: 'IS5107',
            name: 'Project Management Practicum',
            credits: 1,
          },
          { code: 'IS5108', name: 'Business Intelligence', credits: 2 },
          {
            code: 'IS5109',
            name: 'IS Project for Community',
            credits: 1,
          },
        ],
        electives: [
          {
            code: 'IS5110',
            name: 'Advanced Database Systems',
            credits: 2,
          },
          {
            code: 'IS5111',
            name: 'Data Communication & Networks',
            credits: 2,
          },
          {
            code: 'IS5112',
            name: 'Design Patterns & Anti-patterns',
            credits: 2,
          },
          {
            code: 'IS5113',
            name: 'Software Quality Assurance',
            credits: 2,
          },
          {
            code: 'IS5114',
            name: 'Data Mining & Analytics',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 6,
      },
      'Semester 7': {
        core: [
          {
            code: 'IS7101',
            name: 'Research Methodologies',
            credits: 2,
          },
          {
            code: 'IS7102',
            name: 'IT Law',
            credits: 1,
          },
          { code: 'IS7103', name: 'Business Process Simulation', credits: 2 },
          {
            code: 'IS7104',
            name: 'Enterprise Modelling Ontologies',
            credits: 2,
          },
          {
            code: 'IS7105',
            name: 'Organizational Behavior & Management',
            credits: 1,
          },
          { code: 'IS7106', name: 'Cloud Computing', credits: 2 },
        ],
        electives: [
          {
            code: 'IS7107',
            name: 'Mobile Application Development',
            credits: 1,
          },
          {
            code: 'IS7108',
            name: 'Web Service Technologies',
            credits: 2,
          },
          {
            code: 'IS7109',
            name: 'Geographical Information Systems',
            credits: 2,
          },
          {
            code: 'IS7110',
            name: 'Statistical Distribution & Inferences',
            credits: 1,
          },
          {
            code: 'IS7111',
            name: 'Advanced Programming Practicum',
            credits: 1,
          },
          {
            code: 'IS7112',
            name: 'Machine Learning',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 4,
      },
      'Semester 8': {
        core: [
          {
            code: 'IS8101',
            name: 'Research Project in IS',
            credits: 8,
          },
          {
            code: 'IS8102',
            name: 'Business/IT Alignment',
            credits: 2,
          },
          { code: 'IS8103', name: 'Human Resource Management', credits: 2 },
          {
            code: 'IS8104',
            name: 'Scientific Communication ',
            credits: 1,
          },
          {
            code: 'IS8105',
            name: 'IS Economics',
            credits: 2,
          },
          { code: 'IS8106', name: 'Computer System Security', credits: 2 },
        ],
        electives: [
          {
            code: 'IS8107',
            name: 'Supply Chain Management',
            credits: 2,
          },
          {
            code: 'IS8108',
            name: 'Advanced Computer Networks',
            credits: 2,
          },
          {
            code: 'IS8109',
            name: 'Process Mining',
            credits: 2,
          },
          {
            code: 'IS8110',
            name: 'Digital Business Model',
            credits: 1,
          },
          {
            code: 'IS8111',
            name: 'Game Development',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 4,
      },
    },
    'Software Engineering': {
      'Semester 1': {
        core: [
          { code: 'SE1101', name: 'Computer Organization', credits: 2 },
          { code: 'SE1102', name: 'Programming Fundamentals', credits: 2 },
          { code: 'SE1103', name: 'Requirements Fundamentals', credits: 2 },
          { code: 'SE1104', name: 'Software Process Concepts', credits: 2 },
          {
            code: 'SE1105',
            name: 'Social and Professional Issues',
            credits: 2,
          },
          { code: 'SE1106', name: 'Fundamentals of Mathematics', credits: 2 },
          { code: 'SE1107', name: 'Fundamentals of Statistics', credits: 2 },
          { code: 'SE1108', name: 'Communication Skills I', credits: 1 },
          { code: 'SE1109', name: 'Academic Integrity', credits: 1 },
          { code: 'SE-EGP-1101', name: 'General English I', credits: 2 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 2': {
        core: [
          {
            code: 'SE2101',
            name: 'Algorithms, Data structures, and Complexity',
            credits: 2,
          },
          { code: 'SE2102', name: 'Database Management Systems', credits: 2 },
          { code: 'SE2103', name: 'Operating Systems Basics', credits: 2 },
          { code: 'SE2104', name: 'Object Oriented Programming', credits: 2 },
          {
            code: 'SE2105',
            name: 'Requirement Specification and Documentation',
            credits: 2,
          },
          {
            code: 'SE2106',
            name: 'Software Process Implementation',
            credits: 2,
          },
          { code: 'SE2107', name: 'Analysis Fundamentals', credits: 2 },
          { code: 'SE2108', name: 'Advanced Mathematics', credits: 2 },
          { code: 'SE2109', name: 'Communication Skills II', credits: 1 },
          { code: 'SE-EGP-1201', name: 'General English II', credits: 2 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
    },
    'Data Science': {
      'Semester 1': {
        core: [
          { code: 'DS1101', name: 'Introduction to Data Science', credits: 1 },
          { code: 'DS1102', name: 'Programming Fundamentals', credits: 2 },
          { code: 'DS1103', name: 'Calculus', credits: 2 },
          { code: 'DS1104', name: 'Introduction to Statistics', credits: 2 },
          { code: 'DS1105', name: 'Database Management Systems', credits: 2 },
          { code: 'DS1106', name: 'Computer System Organization', credits: 2 },
          { code: 'DS1107', name: 'Data and Society', credits: 1 },
          { code: 'DS1108', name: 'Web Programming I', credits: 2 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 2': {
        core: [
          { code: 'DS2101', name: 'Operating Systems', credits: 2 },
          { code: 'DS2102', name: 'Data Structures ', credits: 2 },
          { code: 'DS2103', name: 'Linear Algebra', credits: 2 },
          { code: 'DS2104', name: 'Object Oriented Programing', credits: 2 },
          {
            code: 'DS2105',
            name: 'Capstone Project in Data Science I',
            credits: 2,
          },
          { code: 'DS2106', name: 'Analysis of Algorithms', credits: 2 },
          { code: 'DS2107', name: 'System Analysis and Design', credits: 2 },
          { code: 'DS2108', name: 'Data Pre-Processing', credits: 1 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
    },
  },
}

export type { Subject, SemesterSubjects, SemesterMap, DegreeMap, FacultyMap }
