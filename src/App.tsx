import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import { subjectData } from './data/subjects'
import { useTheme } from './components/theme-provider'
import { Sun, Moon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function App() {
  const [facultySelected, setFacultySelected] = useState('Select Your Faculty')
  const [degreeSelected, setDegreeSelected] = useState(
    'Select Your Degree Program'
  )
  const [semSelected, setSemSelected] = useState('Select Your Semester')

  const [subjects, setSubjects] = useState<
    { code: string; name: string; credits: number }[]
  >([])
  const [grades, setGrades] = useState<Record<string, string>>({})

  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    if (facultySelected && degreeSelected && semSelected) {
      const subs =
        subjectData[facultySelected]?.[degreeSelected]?.[semSelected] || []
      setSubjects(subs)
      setGrades({})
    }
  }, [facultySelected, degreeSelected, semSelected])

  const faculties = [
    'Computing',
    'Geomatics',
    'Applied Sciences',
    'Management Studies',
    'Medicine',
    'Management Studies',
    'Technology',
    'Agricultural Sciences',
    'Social Sciences and Languages',
  ]

  const degrees = [
    'Computing and Information Systems',
    'Software Engineering',
    'Data Science',
    'Infomation Systems',
  ]

  const semesters = [
    'Semester 1',
    'Semester 2',
    'Semester 3',
    'Semester 4',
    'Semester 5',
    'Semester 6',
    'Semester 7',
    'Semester 8',
  ]

  const gradeOptions = [
    'A+',
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D',
    'F',
  ]

  const gradePoints: Record<string, number> = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D': 1.0,
    'F': 0.0,
  }

  const calculateGPA = () => {
    let totalCredits = 0
    let totalPoints = 0

    subjects.forEach((sub) => {
      const grade = grades[sub.code]
      const point = gradePoints[grade]

      if (point !== undefined) {
        totalCredits += sub.credits
        totalPoints += point * sub.credits
      }
    })

    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2)
  }
  const allGradesSelected = subjects.every((sub) => grades[sub.code])
  

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">GPA Cal</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border dark:border-gray-600"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="flex justify-end items-start gap-4">
        <div id="faculty">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-72 justify-between">
                <span className="truncate">{facultySelected}</span>
                <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[var(--radix-dropdown-menu-trigger-width)]">
              {faculties.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => {
                    setFacultySelected(option)
                  }}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div id="degree">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-72 justify-between">
                <span className="truncate">{degreeSelected}</span>
                <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-82">
              {degrees.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => {
                    setDegreeSelected(option)
                  }}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div id="sem">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="w-72 justify-between">
                <span className="truncate">{semSelected}</span>
                <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-72">
              {semesters.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => {
                    setSemSelected(option)
                  }}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        {subjects.length > 0 && (
          <div className="mt-6 w-full">
            <h2 className="text-xl font-semibold mb-4">Subjects</h2>
            <table className="w-full text-left border border-gray-200 dark:border-gray-700 rounded-md">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-2">Code</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Credits</th>
                  <th className="p-2">Your Grade</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((sub) => (
                  <tr
                    key={sub.code}
                    className="border-t border-gray-200 dark:border-gray-700"
                  >
                    <td className="p-2">{sub.code}</td>
                    <td className="p-2">{sub.name}</td>
                    <td className="p-2">{sub.credits}</td>
                    <td className="p-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button className="w-[105px] justify-between">
                            <span className="truncate">
                              {grades[sub.code] || 'Grade'}
                            </span>
                            <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[80px]">
                          {gradeOptions.map((grade) => (
                            <DropdownMenuItem
                              key={grade}
                              onSelect={() =>
                                setGrades((prev) => ({
                                  ...prev,
                                  [sub.code]: grade,
                                }))
                              }
                            >
                              {grade}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {subjects.length > 0 && allGradesSelected && (
        <div className="mt-4 text-lg font-semibold">GPA: {calculateGPA()}</div>
      )}
    </>
  )
}

export default App
