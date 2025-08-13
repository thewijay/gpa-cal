import type { FacultyMap } from '../types'
import { computing } from './computing'
import { appliedSciences } from './appliedSciences'
import { managementStudies } from './managementStudies'
import { agriculturalSciences } from './agriculturalSciences'

export const subjectData: FacultyMap = {
  Computing: computing,
  'Applied Sciences': appliedSciences,
  'Management Studies': managementStudies,
  'Agricultural Sciences': agriculturalSciences,
}

// Re-export types for convenience
export type {
  Subject,
  SemesterSubjects,
  SemesterMap,
  DegreeMap,
  FacultyMap,
} from '../types'
