type Subject = {
  code: string
  name: string
  credits: number
}

type SemesterMap = {
  [semester: string]: Subject[]
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
      'Semester 1': [
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
        { code: 'IS1104', name: 'Theories of Information Systems', credits: 2 },
        { code: 'IS1105', name: 'Computer System Organization', credits: 2 },
        { code: 'IS1106', name: 'Foundations of Web Technologies', credits: 2 },
        {
          code: 'IS1107',
          name: 'Personal Productivity with Information Technology',
          credits: 1,
        },
        { code: 'IS1108', name: 'Fundamentals of Mathematics', credits: 2 },
        { code: 'IS1109', name: 'Statistics & Probability Theory', credits: 2 },
      ],
      'Semester 2': [
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
      'Semester 3': [
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
        { code: 'IS3107', name: 'Management Information Systems', credits: 2 },
        { code: 'IS3108', name: 'E-Business', credits: 1 },
        {
          code: 'IS3109',
          name: 'Digital Innovation',
          credits: 2,
        },
      ],
      'Semester 4': [
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
    },
    'Software Engineering': {
      'Semester 1': [
        { code: 'SE101', name: 'Programming Fundamentals', credits: 3 },
        { code: 'SE102', name: 'Software Design', credits: 2 },
      ],
    },
  },
}
