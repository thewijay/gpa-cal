export const gradeOptions = [
  'A+',
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'E',
] as const

export const gradePoints: Record<string, number> = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  E: 0.0,
}

export type Grade = (typeof gradeOptions)[number]

export const getGradePoint = (grade: Grade): number => {
  return gradePoints[grade] ?? 0.0
}

export const isValidGrade = (grade: string): grade is Grade => {
  return gradeOptions.includes(grade as Grade)
}
