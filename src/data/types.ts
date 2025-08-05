export type Subject = {
  code: string
  name: string
  credits: number
}

export type SemesterSubjects = {
  core: Subject[]
  electives?: Subject[]
  electiveCreditsRequired: number
}

export type SemesterMap = {
  [semester: string]: SemesterSubjects
}

export type DegreeMap = {
  [degree: string]: SemesterMap
}

export type FacultyMap = {
  [faculty: string]: DegreeMap
}
