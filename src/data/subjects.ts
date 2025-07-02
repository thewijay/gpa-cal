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
      'Semester 6': {
        core: [
          {
            code: 'IS6101',
            name: 'Industrial Training',
            credits: 6,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
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
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 3': {
        core: [
          {
            code: 'SE3101',
            name: 'Network Protocols',
            credits: 2,
          },
          { code: 'SE3102', name: 'Formal Methods', credits: 2 },
          {
            code: 'SE3103',
            name: 'Object Oriented Analysis and Design',
            credits: 2,
          },
          { code: 'SE3104', name: 'Requirements Validation ', credits: 2 },
          {
            code: 'SE3105',
            name: 'Software Design Concepts',
            credits: 2,
          },
          {
            code: 'SE3106',
            name: 'Web Systems and Technologies',
            credits: 2,
          },
          {
            code: 'SE3107',
            name: 'Software Engineering Foundations',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 4': {
        core: [
          {
            code: 'SE4101',
            name: 'Security Fundamentals',
            credits: 2,
          },
          {
            code: 'SE4102',
            name: 'Software Verification and Validation',
            credits: 2,
          },
          {
            code: 'SE4103',
            name: 'Software Configuration Management',
            credits: 2,
          },
          { code: 'SE4104', name: 'Software Project Management', credits: 2 },
          {
            code: 'SE4105',
            name: 'Human Computer Interaction Design',
            credits: 2,
          },
          {
            code: 'SE4106',
            name: 'Projects in Web Systems and Technologies',
            credits: 3,
          },
          {
            code: 'SE4107',
            name: 'Industrial Inspection',
            credits: 1,
          },
          {
            code: 'SE4108',
            name: 'Risk Management',
            credits: 2,
          },
          {
            code: 'SE4109',
            name: 'Communication Skills',
            credits: 2,
          },
          {
            code: 'SE4110',
            name: 'Management Information Systems',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 5': {
        core: [
          {
            code: 'SE5101',
            name: 'Computer and Network Security',
            credits: 2,
          },
          {
            code: 'SE5102',
            name: 'Software Testing',
            credits: 2,
          },
          {
            code: 'SE5103',
            name: 'Product Assurance',
            credits: 2,
          },
          { code: 'SE5104', name: 'Mini Project', credits: 3 },
          {
            code: 'SE5105',
            name: 'Evolution processes and activities',
            credits: 1,
          },
        ],
        electives: [
          {
            code: 'SE5106',
            name: 'IT Auditing',
            credits: 2,
          },
          {
            code: 'SE5107',
            name: 'Human Resource Management',
            credits: 2,
          },
          {
            code: 'SE5108',
            name: 'Geographic Information Systems',
            credits: 2,
          },
          {
            code: 'SE5109',
            name: 'Logistic System and Transportation Management',
            credits: 2,
          },
          {
            code: 'SE5110',
            name: 'Business Intelligence',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 4,
      },
      'Semester 6': {
        core: [
          {
            code: 'SE6101',
            name: 'Community Project',
            credits: 3,
          },
          {
            code: 'SE6102',
            name: 'Cloud Computing',
            credits: 2,
          },
          {
            code: 'SE6103',
            name: 'Parallel and Distributed Systems',
            credits: 2,
          },
          {
            code: 'SE6104',
            name: 'Advanced Database Management Systems',
            credits: 2,
          },
          {
            code: 'SE6105',
            name: 'Software Architecture',
            credits: 2,
          },
          {
            code: 'SE6106',
            name: 'Software Design Patterns',
            credits: 2,
          },
          {
            code: 'SE6107',
            name: 'Software Design Evaluation',
            credits: 2,
          },
          {
            code: 'SE6108',
            name: 'Current Topics in Software Engineering',
            credits: 1,
          },
        ],
        electives: [
          {
            code: 'SE6109',
            name: 'Enterprise Modeling Ontologies',
            credits: 2,
          },
          {
            code: 'SE6110',
            name: 'Software Engineering Economics',
            credits: 2,
          },
          {
            code: 'SE6111',
            name: 'Social Computing',
            credits: 2,
          },
          {
            code: 'SE6112',
            name: 'Semantic Web',
            credits: 2,
          },
          {
            code: 'SE6113',
            name: 'Robotics',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 4,
      },
      'Semester 7': {
        core: [
          {
            code: 'SE7101',
            name: 'Industrial Training',
            credits: 6,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 8': {
        core: [
          {
            code: 'SE8101',
            name: 'Research Project',
            credits: 8,
          },
          {
            code: 'SE8102',
            name: 'Research Methods',
            credits: 2,
          },
          {
            code: 'SE8103',
            name: 'Service Oriented Architecture',
            credits: 2,
          },
          {
            code: 'SE8104',
            name: 'Problem Analysis and Reporting',
            credits: 2,
          },
          {
            code: 'SE8105',
            name: 'Machine Learning',
            credits: 2,
          },
          {
            code: 'SE8106',
            name: 'Mobile Computing',
            credits: 2,
          },
          {
            code: 'SE8107',
            name: 'Refactoring',
            credits: 2,
          },
        ],
        electives: [
          {
            code: 'SE8108',
            name: 'Game Designing and Development',
            credits: 2,
          },
          {
            code: 'SE8109',
            name: 'Data Mining',
            credits: 2,
          },
          {
            code: 'SE8110',
            name: 'Big Data Analytics',
            credits: 2,
          },
          {
            code: 'SE8111',
            name: 'Artificial Intelligence',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 4,
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
          { code: 'DS2102', name: 'Data Structures', credits: 2 },
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
      'Semester 3': {
        core: [
          { code: 'DS3101', name: 'Probability Theory', credits: 2 },
          { code: 'DS3102', name: 'Regression Analysis', credits: 2 },
          { code: 'DS3103', name: 'Multivariate Calculus', credits: 2 },
          { code: 'DS3104', name: 'Real World Analytics', credits: 1 },
          {
            code: 'DS3105',
            name: 'Computer Networking',
            credits: 2,
          },
          { code: 'DS3106', name: 'Data Warehousing', credits: 2 },
          { code: 'DS3107', name: 'Web Programming II ', credits: 2 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 4': {
        core: [
          {
            code: 'DS4101',
            name: 'Advanced Database Management Systems',
            credits: 2,
          },
          {
            code: 'DS4102',
            name: 'Scientific Writing & Documentation',
            credits: 1,
          },
          { code: 'DS4103', name: 'Software Engineering', credits: 2 },
          { code: 'DS4104', name: 'Data Visualization', credits: 2 },
          {
            code: 'DS4105',
            name: 'Capstone Project in Data Science II',
            credits: 2,
          },
          { code: 'DS4106', name: 'Applied Data Mining', credits: 2 },
          {
            code: 'DS4107',
            name: 'Social and Professional Issues in Computing',
            credits: 2,
          },
          { code: 'DS4108', name: 'Business Intelligence', credits: 2 },
          { code: 'DS4109', name: 'Discrete Mathematics', credits: 2 },
          { code: 'DS4110', name: 'Artificial Intelligence', credits: 2 },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 5': {
        core: [
          {
            code: 'DS5101',
            name: 'Semantic Web',
            credits: 2,
          },
          {
            code: 'DS5102',
            name: 'Time Series Analysis and Forecasting',
            credits: 2,
          },
          { code: 'DS5103', name: 'Information Security', credits: 2 },
          { code: 'DS5104', name: 'Machine Learning', credits: 2 },
          {
            code: 'DS5105',
            name: 'Linear Programming',
            credits: 2,
          },
          { code: 'DS5106', name: 'Graph Theory', credits: 2 },
        ],
        electives: [
          { code: 'DS5107', name: 'Image Processing', credits: 2 },
          { code: 'DS5108', name: 'Mobile Computing', credits: 2 },
          {
            code: 'DS5109',
            name: 'Data Science for Bioinformatics',
            credits: 2,
          },
          { code: 'DS5110', name: 'Human Resource Management', credits: 2 },
          {
            code: 'DS5111',
            name: 'Parallel and Distributed Computing',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 4,
      },
      'Semester 6': {
        core: [
          {
            code: 'DS6101',
            name: 'Introduction to Deep Learning',
            credits: 1,
          },
          {
            code: 'DS6102',
            name: 'Bayesian Learning and Graphical Models',
            credits: 2,
          },
          { code: 'DS6103', name: 'Mathematical Optimization', credits: 2 },
          { code: 'DS6104', name: 'Industrial Training', credits: 6 },
        ],
        electives: [
          { code: 'DS6105', name: 'Web Services', credits: 2 },
          { code: 'DS6106', name: 'Cloud Computing', credits: 2 },
          { code: 'DS6107', name: 'Business Process Management', credits: 2 },
          { code: 'DS6108', name: 'Software Quality Assurance', credits: 2 },
          { code: 'DS6108', name: 'Fraud and Anomaly Detection', credits: 2 },
        ],
        electiveCreditsRequired: 2,
      },
      'Semester 7': {
        core: [
          {
            code: 'DS7101',
            name: 'Research Method',
            credits: 2,
          },
          {
            code: 'DS7102',
            name: 'Advanced Deep Learning',
            credits: 2,
          },
          {
            code: 'DS7103',
            name: 'Emerging Trends in Data Science',
            credits: 1,
          },
          { code: 'DS7104', name: 'Numerical Methods', credits: 2 },
          { code: 'DS7105', name: 'Natural Language Processing', credits: 2 },
        ],
        electives: [
          {
            code: 'DS7106',
            name: 'Entrepreneurship and Innovation',
            credits: 2,
          },
          { code: 'DS7107', name: 'Internet of Things', credits: 2 },
          {
            code: 'DS7108',
            name: 'Design Patterns and Anti-patterns',
            credits: 2,
          },
          { code: 'DS7109', name: 'Ontology Engineering', credits: 2 },
          { code: 'DS7110', name: 'Blockchain and Cryptocurrency', credits: 2 },
        ],
        electiveCreditsRequired: 4,
      },
      'Semester 8': {
        core: [
          {
            code: 'DS8101',
            name: 'Research Project in Data Science',
            credits: 8,
          },
          {
            code: 'DS8102',
            name: 'Information Retrieval and Web Analytics',
            credits: 2,
          },
          {
            code: 'DS8103',
            name: 'Reinforcement Learning',
            credits: 2,
          },
          { code: 'DS8104', name: 'Computational Intelligence', credits: 2 },
          {
            code: 'DS8105',
            name: 'Business Analytics and Applications',
            credits: 1,
          },
        ],
        electives: [
          {
            code: 'DS8106',
            name: 'Geographical Information Systems',
            credits: 2,
          },
          { code: 'DS8107', name: 'Digital Forensics', credits: 2 },
          { code: 'DS8108', name: 'Business Process Simulation', credits: 2 },
          { code: 'DS8109', name: 'Robotics', credits: 2 },
        ],
        electiveCreditsRequired: 2,
      },
    },
    'Information Systems': {
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
      'Semester 6': {
        core: [
          {
            code: 'IS6101',
            name: 'Industrial Training',
            credits: 6,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
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
  },

  'Applied Sciences': {
    'Food Science and Technology': {
      'Semester 1': {
        core: [
          {
            code: 'FST1101',
            name: 'Introduction to Food Science and Technology',
            credits: 2,
          },
          {
            code: 'FST1102',
            name: 'Food Biology and Practicum',
            credits: 2,
          },
          {
            code: 'FST1103',
            name: 'General Chemistry for Food Science',
            credits: 2,
          },
          {
            code: 'FST1104',
            name: 'Fundamentals of Organic Chemistry',
            credits: 2,
          },
          {
            code: 'FST1105',
            name: 'Laboratory in Elementary Inorganic Chemistry',
            credits: 1,
          },
          {
            code: 'FST1106',
            name: 'Introduction to Computer Fundamentals',
            credits: 2,
          },
          {
            code: 'FST1107',
            name: 'Application of Computer Fundamentals',
            credits: 1,
          },
          {
            code: 'FST1108',
            name: 'Principles of Mathematics',
            credits: 2,
          },
          {
            code: 'FST1109',
            name: 'Production of Agricultural Raw Materials for Better Food Quality',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 2': {
        core: [
          {
            code: 'FST1201',
            name: 'Fundamentals of Microbiology',
            credits: 2,
          },
          {
            code: 'FST1202',
            name: 'Fundamentals of Biochemistry',
            credits: 2,
          },
          {
            code: 'FST1203',
            name: 'Postharvest Technology',
            credits: 2,
          },
          {
            code: 'FST1204',
            name: 'Postharvest Pest and Disease Management',
            credits: 2,
          },
          {
            code: 'FST1205',
            name: 'Laboratory in Postharvest Handling of Food Sources',
            credits: 1,
          },
          {
            code: 'FST1206',
            name: 'Fundamentals of Analytical Chemistry',
            credits: 2,
          },
          {
            code: 'FST1207',
            name: 'Laboratory in Elementary Organic Chemistry',
            credits: 1,
          },
          {
            code: 'FST1208',
            name: 'Fundamentals of Statistics',
            credits: 2,
          },
          {
            code: 'FST1209',
            name: 'Fundamentals of Scientific and Technical Writing',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 3': {
        core: [
          {
            code: 'FST2101',
            name: 'Advanced Biochemistry',
            credits: 2,
          },
          {
            code: 'FST2102',
            name: 'Food Chemistry',
            credits: 2,
          },
          {
            code: 'FST2103',
            name: 'Laboratory in Biochemistry and Food Chemistry',
            credits: 1,
          },
          {
            code: 'FST2104',
            name: 'Principles of Human Nutrition',
            credits: 2,
          },
          {
            code: 'FST2105',
            name: 'Food Microbiology',
            credits: 2,
          },
          {
            code: 'FST2106',
            name: 'Food Preservation and Practicum',
            credits: 2,
          },
          {
            code: 'FST2107',
            name: 'Management Process',
            credits: 2,
          },
          {
            code: 'FST2108',
            name: 'Statistics for Experimental Analysis',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 4': {
        core: [
          {
            code: 'FST2201',
            name: 'Biotechnology for Food Science',
            credits: 2,
          },
          {
            code: 'FST2202',
            name: 'Laboratory in Food Microbiology and Biotechnology',
            credits: 1,
          },
          {
            code: 'FST2203',
            name: 'Food Process Engineering I and Practicum',
            credits: 2,
          },
          {
            code: 'FST2204',
            name: 'Livestock Production, Aquaculture Practices and Practicum',
            credits: 2,
          },
          {
            code: 'FST2205',
            name: 'Applied Human Nutrition and Practicum',
            credits: 2,
          },
          {
            code: 'FST2206',
            name: 'Food Toxicology',
            credits: 1,
          },
          {
            code: 'FST2207',
            name: 'Food Quality Management',
            credits: 2,
          },
          {
            code: 'FST2208',
            name: 'Statistical Methodology',
            credits: 2,
          },
          {
            code: 'FST2209',
            name: 'Food Marketing',
            credits: 1,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 5': {
        core: [
          {
            code: 'FST3101',
            name: 'Food Analysis and Practicum',
            credits: 2,
          },
          {
            code: 'FST3102',
            name: 'Dairy Science',
            credits: 2,
          },
          {
            code: 'FST3103',
            name: 'Food Process Engineering II and Practicum',
            credits: 2,
          },
          {
            code: 'FST3104',
            name: 'Food Packaging',
            credits: 2,
          },
          {
            code: 'FST3105',
            name: 'Food Regulations',
            credits: 1,
          },
          {
            code: 'FST3106',
            name: 'Food Safety, Risk Analysis, Food Hygiene and Sanitation',
            credits: 2,
          },
          {
            code: 'FST3107',
            name: 'Food Product Development',
            credits: 1,
          },
          {
            code: 'FST3108',
            name: 'Environmental Sustainability in Food Industries',
            credits: 2,
          },
          {
            code: 'FST3109',
            name: 'Human Resource Management',
            credits: 1,
          },
          {
            code: 'FST3110',
            name: 'Research Methodology and Scientific Communication',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
      'Semester 6': {
        core: [
          {
            code: 'FST3201',
            name: 'Aquatic Food Processing Technology',
            credits: 2,
          },
          {
            code: 'FST3202',
            name: 'Dairy Processing Technology',
            credits: 2,
          },
          {
            code: 'FST3203',
            name: 'Laboratory in Dairy Science and Dairy Processing Technology',
            credits: 1,
          },
          {
            code: 'FST3204',
            name: 'Beverage Processing Technology',
            credits: 1,
          },
          {
            code: 'FST3205',
            name: 'Sensory Evaluation of Foods and Practicum',
            credits: 2,
          },
          {
            code: 'FST3206',
            name: 'Functional Foods and Nutraceuticals',
            credits: 1,
          },
          {
            code: 'FST3207',
            name: 'Process Control and Automation in Food Industry',
            credits: 1,
          },
          {
            code: 'FST3208',
            name: 'Seminars in Trends and Current Issues in Food Science and Technology',
            credits: 1,
          },
        ],
        electives: [
          {
            code: 'FST3209',
            name: 'Instrumental Techniques in Food Science',
            credits: 1,
          },
          {
            code: 'FST3210',
            name: 'Food Plant Layout and Operations',
            credits: 2,
          },
          {
            code: 'FST3211',
            name: 'Statistics for Research',
            credits: 1,
          },
          {
            code: 'FST3212',
            name: 'Nutritional Aspects of Chronic Diseases',
            credits: 1,
          },
        ],
        electiveCreditsRequired: 3,
      },
      'Semester 7': {
        core: [
          {
            code: 'FST4101',
            name: 'Integrated Project in Food Science and Technology',
            credits: 2,
          },
          {
            code: 'FST4102',
            name: 'Chemistry and Technology of Cereals',
            credits: 2,
          },
          {
            code: 'FST4103',
            name: 'Chemistry and Technology of Fats and Oils',
            credits: 2,
          },
          {
            code: 'FST4104',
            name: 'Spice, Root and Tuber Processing Technology',
            credits: 1,
          },
          {
            code: 'FST4105',
            name: 'Pulse and Edible Nut Processing Technology',
            credits: 1,
          },
          {
            code: 'FST4106',
            name: 'Sugar and Confectionery Processing Technology',
            credits: 2,
          },
          {
            code: 'FST4107',
            name: 'Fruit and Vegetable Processing Technology',
            credits: 1,
          },
          {
            code: 'FST4108',
            name: 'Laboratory in Food Processing Technology (Cereals, Spices, Roots, Tubers, Pulses, Confectionery, Fruits, Vegetables)',
            credits: 1,
          },
          {
            code: 'FST4109',
            name: 'Meat and Egg Processing Technology',
            credits: 2,
          },
          {
            code: 'FST4110',
            name: 'Laboratory in Aquatic Food, Meat and Egg Processing Technology',
            credits: 1,
          },
          {
            code: 'FST4111',
            name: 'Advanced Food Quality Management',
            credits: 2,
          },
          {
            code: 'FST4112',
            name: 'Entrepreneurship in Food Technology',
            credits: 2,
          },
        ],
        electives: [
          {
            code: 'FST4113',
            name: 'Nanotechnology and its Applications in Food',
            credits: 2,
          },
          {
            code: 'FST4114',
            name: 'Technology and Innovation Management',
            credits: 1,
          },
          {
            code: 'FST4115',
            name: 'Food Culture and Traditional Foods',
            credits: 1,
          },
          {
            code: 'FST4116',
            name: 'Modern Food Supply and Distribution Systems and Sustainability',
            credits: 1,
          },
          {
            code: 'FST4117',
            name: 'Data Science and Informatics Applications in Food Science',
            credits: 1,
          },
        ],
        electiveCreditsRequired: 3,
      },
      'Semester 8': {
        core: [
          {
            code: 'FST4201',
            name: 'Research Project in Food Science and Technology',
            credits: 8,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
    },
  },


  
// Management Studies Informations ========================================================================================



'Management Studies': {
    
  
  'Financial Management ': {  // M - Financial Management -
      'Semester 1': {
        core: [
          {
            code: 'FM1113',
            name: 'Management Process',
            credits: 3,
          },
          {
            code: 'FM1123',
            name: 'Financial Accounting',
            credits: 3,
          },
          {
            code: 'FM1132',
            name: 'Micro Economics',
            credits: 2,
          },
          {
            code: 'FM1143',
            name: 'Business Mathematics ',
            credits: 3,
          },
          {
            code: 'FM1153',
            name: 'Information & Communication Technology and Computer Applications ',
            credits: 3,
          },
          {
            code: 'FM1162 ',
            name: 'Business English I ',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 2': {
        core: [
          {
            code: 'FM1213',
            name: 'Fundamentals of Financial Management',
            credits: 3,
          },
          {
            code: 'FM1223',
            name: 'Intermediate Financial Accounting',
            credits: 3,
          },
          {
            code: 'FM1232',
            name: 'Macro Economics ',
            credits: 2,
          },
          {
            code: 'FM1243',
            name: 'Business Statistics ',
            credits: 3,
          },
          {
            code: 'FM1253',
            name: 'Marketing Management ',
            credits: 3,
          },
          {
            code: 'FM1263',
            name: 'Human Resource Management',
            credits: 3,
          },
          {
            code: 'FM1272',
            name: 'Business English II ',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 3': {
        core: [
          {
            code: 'FM2113',
            name: 'Advanced Financial Management',
            credits: 3,
          },
          {
            code: 'FM2123',
            name: 'Managerial Economics',
            credits: 3,
          },
          {
            code: 'FM2132',
            name: 'Organizational Behaviour',
            credits: 2,
          },
          {
            code: 'FM2143',
            name: 'Commercial Law',
            credits: 3,
          },
          {
            code: 'FM2151',
            name: 'Industry Exposure Programme',
            credits: 1,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 4': {
        core: [
          {
            code: 'FM2213',
            name: 'Investment Analysis & Portfolio Management',
            credits: 3,
          },
          {
            code: 'FM2223',
            name: 'Cost & Management Accounting',
            credits: 3,
          },
          {
            code: 'FM2232',
            name: 'Monetary Economics',
            credits: 2,
          },
          {
            code: 'FM2243',
            name: 'Operations Management ',
            credits: 3,
          },
          {
            code: 'FM2252',
            name: 'Taxation',
            credits: 2,
          },
          {
            code: 'FM2263',
            name: 'Company & Banking Law',
            credits: 3,
          },
          {
            code: 'FM2272',
            name: 'Business Communication I ',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 5': {
        core: [
          {
            code: 'FM3112',
            name: 'Financial Derivatives',
            credits: 2,
          },
          {
            code: 'FM3123',
            name: 'Advanced Financial Accounting',
            credits: 3,
          },
          {
            code: 'FM3132',
            name: 'Computerized Accounting Systems',
            credits: 2,
          },
          {
            code: 'FM3143',
            name: 'Auditing & Assurance Services',
            credits: 3,
          },
          {
            code: 'FM3153',
            name: 'Management Information Systems',
            credits: 3,
          },
          {
            code: 'FM3163',
            name: 'Research Methodology',
            credits: 3,
          },
          {
            code: 'FM3172',
            name: 'Business Communication II ',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 6': {
        core: [
          {
            code: 'FM3211',
            name: 'Finance Literature',
            credits: 1,
          },
          
          {
            code: 'FM3223',
            name: 'Behavioural Finance',
            credits: 3,
          },
          {
            code: 'FM3233',
            name: 'Strategic Management',
            credits: 3,
          },
          {
            code: 'FM3243',
            name: 'Operations Research',
            credits: 3,
          },
          {
            code: 'FM3262',
            name: 'Introductory Econometrics',
            credits: 2,
          },
          {
            code: 'FM3272',
            name: 'Personality & Professional Development',
            credits: 2,
          },
        ],
        electives: [
          {
            code: 'FM3253',
            name: 'Entrepreneurship & Small Business Management',
            credits: 3,
          },
          {
            code: 'FM3253',
            name: 'Innovations and Intellectual Property Management',
            credits: 3,
          },
        ],
        electiveCreditsRequired: 3,
      },

      'Semester 7': {
        core: [
          {
            code: 'FM4113',
            name: 'Strategic Financial Management',
            credits: 3,
          },
          {
            code: 'FM4123',
            name: 'International Trade & Finance',
            credits: 3,
          },
          {
            code: 'FM4133',
            name: 'Financial Statement Analysis',
            credits: 3,
          },
          {
            code: 'FM4142',
            name: 'Public Sector Finance',
            credits: 2,
          },
          {
            code: 'FM4162',
            name: 'Advanced Econometrics',
            credits: 2,
          },
        ],
        electives: [
          {
            code: 'FM4152',
            name: 'Modelling Eco Business',
            credits: 2,
          },
          {
            code: 'FM4152',
            name: 'Development Economics',
            credits: 2,
          },
        ],
        electiveCreditsRequired: 2,
      },

      'Semester 8': {
        core: [
          {
            code: 'FM4216',
            name: 'Thesis',
            credits: 6,
          },
          {
            code: 'FM4223',
            name: 'Internship',
            credits: 3,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
    },


    'Banking and Insurance': {  // M - Banking and Insurance -
      'Semester 1': {
        core: [
          {
            code: 'BI1113',
            name: 'Management Process',
            credits: 3,
          },
          {
            code: 'BI1123',
            name: 'Financial Accounting',
            credits: 3,
          },
          {
            code: 'BI1132',
            name: 'Micro Economics',
            credits: 2,
          },
          {
            code: 'BI1143',
            name: 'Business Mathematics ',
            credits: 3,
          },
          {
            code: 'BI1153',
            name: 'Information & Communication Technology and Computer Applications ',
            credits: 3,
          },
          {
            code: 'BI1162',
            name: 'Business English I ',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 2': {
        core: [
          {
            code: 'BI1213',
            name: 'Principles of Banking & Insurance',
            credits: 3,
          },
          {
            code: 'BI1223',
            name: 'Financial Management',
            credits: 3,
          },
          {
            code: 'BI1232',
            name: 'Macro Economics ',
            credits: 2,
          },
          {
            code: 'BI1243',
            name: 'Business Statistics ',
            credits: 3,
          },
          {
            code: 'BI1253',
            name: 'Marketing Management ',
            credits: 3,
          },
          {
            code: 'BI1263',
            name: 'Human Resource Management',
            credits: 3,
          },
          {
            code: 'BI1272',
            name: 'Business English II',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 3': {
        core: [
          {
            code: 'BI2112',
            name: 'Financial Clients Management',
            credits: 2,
          },
          {
            code: 'BI2123',
            name: 'Risk Management',
            credits: 3,
          },
          {
            code: 'BI2133',
            name: 'Monitory Economics',
            credits: 3,
          },
          {
            code: 'BI2143',
            name: 'Commercial Law',
            credits: 3,
          },
          {
            code: 'BI2151',
            name: 'Industry Exposure Programme',
            credits: 1,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 4': {
        core: [
          {
            code: 'BI2213',
            name: 'Bank Lending and Credit Management',
            credits: 3,
          },
          {
            code: 'BI2223',
            name: 'Commercial Property Insurance',
            credits: 3,
          },
          {
            code: 'BI2234',
            name: 'Life Insurance ',
            credits: 4,
          },
          {
            code: 'BI2243',
            name: 'Investment Analysis and Portfolio Management',
            credits: 3,
          },
          {
            code: 'BI2253',
            name: 'Cost & Management Accounting',
            credits: 3,
          },
          {
            code: 'BI2262',
            name: 'Taxation',
            credits: 2,
          },
          {
            code: 'BI2272',
            name: 'Business Communication I',
            credits: 2,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 5': {
        core: [
          {
            code: 'BI3113',
            name: 'Liability & Miscellaneous Insurance',
            credits: 3,
          },
          {
            code: 'BI3123',
            name: 'Domestic & International Banking',
            credits: 3,
          },
          {
            code: 'BI3132',
            name: 'Micro Finance',
            credits: 2,
          },
          {
            code: 'BI3143',
            name: 'Auditing & Assurance Services',
            credits: 3,
          },
          {
            code: 'BI3153',
            name: 'Research Methodology',
            credits: 3,
          },
          {
            code: 'BI3162',
            name: 'Business Communication II',
            credits: 2,
          },
          {
            code: 'BI3171',
            name: 'Personality & Professional Development I',
            credits: 1,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 6': {
        core: [
          {
            code: 'BI3212',
            name: 'Assets & Liability Management',
            credits: 2,
          },
          
          {
            code: 'BI3222',
            name: 'Marine & Aviation Insurance',
            credits: 2,
          },
          {
            code: 'BI3232',
            name: 'Contemporary Issues in Banking and Insurance',
            credits: 2,
          },
          {
            code: 'BI3243',
            name: 'Strategic Management',
            credits: 3,
          },
          {
            code: 'BI3253',
            name: 'Operations Research', 
            credits: 3,
          },
          {
            code: 'BI3272',
            name: 'Introductory Econometrics',
            credits: 2,
          },
        ],
        electives: [
          {
            code: 'BI3263',
            name: 'Innovations & Intellectual Property Management',
            credits: 3,
          },
          {
            code: 'BI3263',
            name: 'Entrepreneurship & Small Business Management',
            credits: 3,
          },
        ],
        electiveCreditsRequired: 3,
      },

      'Semester 7': {
        core: [
          {
            code: 'BI4112',
            name: 'Digital Banking and Finance',
            credits: 2,
          },
          {
            code: 'BI4123',
            name: 'Actuarial Science',
            credits: 3,
          },
          {
            code: 'BI4133',
            name: 'Underwriting and Claims Management',
            credits: 3,
          },
          {
            code: 'BI4143',
            name: 'Reinsurance',
            credits: 3,
          },
          {
            code: 'BI4152',
            name: 'Advanced Econometrics',
            credits: 2,
          },
          {
            code: 'BI4161',
            name: 'Personality & Professional Development II',
            credits: 1,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },

      'Semester 8': {
        core: [
          {
            code: 'BI4213',
            name: 'Thesis',
            credits: 6,
          },
          {
            code: 'BI4226',
            name: 'Internship',
            credits: 3,
          },
        ],
        electives: [],
        electiveCreditsRequired: 0,
      },
    },
  },
}

export type { Subject, SemesterSubjects, SemesterMap, DegreeMap, FacultyMap }
