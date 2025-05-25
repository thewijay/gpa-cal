import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import { subjectData } from './data/subjects'
import { gradeOptions } from './data/grades'
import { faculties } from './data/faculties'
import { degrees } from './data/degrees'
import { gradePoints } from './data/gradePoints'
import { semesters } from './data/semesters'
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

    return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(3)
  }
  const allGradesSelected = subjects.every((sub) => grades[sub.code])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">GPA Cal</h1>
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border border-border bg-card hover:bg-accent transition-colors duration-200 shadow-sm"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-start gap-4 mb-8">
          <div id="faculty">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-full sm:w-72 justify-between bg-muted border-border hover:bg-accent text-muted-foreground">
                  <span className="truncate">{facultySelected}</span>
                  <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full sm:w-72 min-w-[var(--radix-dropdown-menu-trigger-width)] bg-popover border-border">
                {faculties.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => {
                      setFacultySelected(option)
                    }}
                    className="hover:bg-accent focus:bg-accent"
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
                <Button className="w-full sm:w-72 justify-between bg-muted border-border hover:bg-accent text-muted-foreground">
                  <span className="truncate">{degreeSelected}</span>
                  <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-82 bg-popover border-border">
                {degrees.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => {
                      setDegreeSelected(option)
                    }}
                    className="hover:bg-accent focus:bg-accent"
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
                <Button className="w-full sm:w-72 justify-between bg-muted border-border hover:bg-accent text-muted-foreground">
                  <span className="truncate">{semSelected}</span>
                  <ChevronDown className="h-4 w-4 ml-2 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-popover border-border">
                {semesters.map((option) => (
                  <DropdownMenuItem
                    key={option}
                    onSelect={() => {
                      setSemSelected(option)
                    }}
                    className="hover:bg-accent focus:bg-accent"
                  >
                    {option}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Subjects Table */}
        {subjects.length > 0 && (
          <div className="mt-6 w-full">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Subjects
            </h2>
            <div className="w-full overflow-x-auto rounded-lg border border-border shadow-sm">
              <table className="min-w-full text-left bg-card text-sm sm:text-base">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="text-sm sm:text-base font-semibold text-muted-foreground p-3 min-w-[100px]">
                      Code
                    </th>
                    <th className="p-3 min-w-[160px] text-sm sm:text-base font-semibold text-muted-foreground hidden sm:table-cell">
                      Name
                    </th>
                    <th className="p-3 min-w-[60px] text-sm sm:text-base font-semibold text-muted-foreground">
                      Credits
                    </th>
                    <th className="p-3 min-w-[120px] text-sm text-center sm:text-base font-semibold text-muted-foreground">
                      Your Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((sub, index) => (
                    <tr
                      key={sub.code}
                      className={`border-b border-border hover:bg-accent/50 transition-colors ${
                        index % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                      }`}
                    >
                      <td className="p-4 sm:text-base font-mono text-sm">
                        {sub.code}
                      </td>
                      <td className="p-4 text-sm sm:text-base hidden sm:table-cell">
                        {sub.name}
                      </td>
                      <td className="p-4 text-sm font-semibold sm:text-base text-center">
                        {sub.credits}
                      </td>
                      <td className="p-4 text-sm sm:text-base">
                        <td className="p-4">
                          <div className="flex items-center justify-between w-[105px] px-3 py-2 rounded-md bg-muted border border-border text-gray-900 dark:text-white">
                            <span className="truncate">
                              {grades[sub.code] || 'Grade'}
                            </span>

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="ml-2">
                                  <ChevronDown className="h-4 w-4 opacity-70" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent className="w-[80px] bg-popover border-border">
                                {gradeOptions.map((grade) => (
                                  <DropdownMenuItem
                                    key={grade}
                                    onSelect={() =>
                                      setGrades((prev) => ({
                                        ...prev,
                                        [sub.code]: grade,
                                      }))
                                    }
                                    className="hover:bg-accent focus:bg-accent"
                                  >
                                    {grade}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </td>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* GPA Result */}
        {subjects.length > 0 && allGradesSelected && (
          <div className="mt-8 p-6 bg-card border border-border rounded-lg shadow-sm max-w-sm mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                Your GPA
              </h3>
              <div className="text-4xl font-bold text-primary">
                {calculateGPA()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
