import { useNavigate } from 'react-router-dom'
import { useTheme } from '../components/theme-provider'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

type Grade = {
  gpa: number
  semester: string
  subjects: string[]
}

const MainPage = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [semesters, setSemesters] = useState<Grade[]>([])

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('gpaData') || '[]')
    setSemesters(savedData)
  }, [])

  const calculateGPA = () => {
    let totalGPA = 0
    let semCount = 0

    semesters.forEach((sem) => {
      const GPA = sem.gpa
      if (GPA !== undefined) {
        totalGPA += GPA
        semCount += 1
      }
    })

    return semCount === 0 ? 0 : (totalGPA / semCount).toFixed(3)
  }

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all GPA data?')) {
      localStorage.removeItem('gpaData')
      setSemesters([])
    }
  }

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 md:px-10 py-2">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Button */}
        <div className="flex justify-center w-full mb-6">
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

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          GPA Summary
        </h1>

        {/* GPA Table */}
        <div className="w-full overflow-x-auto rounded-lg border border-border shadow-sm mb-6">
          <table className="min-w-full text-left bg-card text-sm sm:text-base">
            <thead>
              <tr className="bg-muted border-b border-border">
                <th className="font-semibold p-3 min-w-[120px] sm:min-w-[200px] border">
                  Semester
                </th>
                <th className="font-semibold p-3 min-w-[100px] sm:min-w-[150px] text-center border">
                  GPA
                </th>
                <th className="font-semibold p-3 min-w-[100px] sm:min-w-[150px] text-center border">
                  Subjects
                </th>
              </tr>
            </thead>
            <tbody>
              {semesters.map((s, index) => (
                <tr key={index}>
                  <td className="p-4 font-mono text-sm sm:text-base text-center sm:text-left border">
                    {s.semester}
                  </td>
                  <td className="p-4 font-mono text-sm sm:text-base text-center border">
                    {s.gpa}
                  </td>
                  <td className="p-4 font-mono text-sm sm:text-base text-center border">
                    {s.subjects}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-evenly gap-4 sm:gap-16 mt-4 mx-2 sm:mx-8">
          <button
            onClick={handleClearData}
            className="flex-1 bg-red-600 text-sm text-white px-4 py-2 rounded hover:bg-red-700 transition text-center"
          >
            Clear All Data
          </button>

          <button
            onClick={() => navigate('/addGrades')}
            className="flex-1 bg-blue-600 text-sm text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            + Add Semester Marks
          </button>
        </div>

        {/* GPA Box */}
        {semesters.length > 0 && (
          <div className="mt-8 p-4 sm:p-4 bg-card border border-border rounded-lg shadow-sm w-full max-w-[220px] mx-auto">
            <div className="text-center">
              <h3 className="text-sm sm:text-base font-medium text-muted-foreground mb-2">
                Your GPA
              </h3>
              <div className="text-2xl sm:text-3xl font-bold text-primary">
                {calculateGPA()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainPage
