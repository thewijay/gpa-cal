import { useNavigate } from 'react-router-dom'
import { useTheme } from '../components/theme-provider'
import { Sun, Moon, Trash2, Edit3, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'

type Grade = {
  gpa: number
  semester: string
  credits: number
  grades?: Record<string, string>
  faculty?: string
  degree?: string
}

const MainPage = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()
  const [semesters, setSemesters] = useState<Grade[]>([])

  useEffect(() => {
    const toastMessage = localStorage.getItem('showToast')
    if (toastMessage) {
      toast.success(toastMessage)
      localStorage.removeItem('showToast')
    }
  }, [])

  useEffect(() => {
    const savedData = JSON.parse(
      localStorage.getItem('gpaData') || '[]'
    ) as Grade[]
    const sortedData = [...savedData].sort((a, b) => {
      const semesterA = parseInt(a.semester.split(' ')[1])
      const semesterB = parseInt(b.semester.split(' ')[1])
      return semesterA - semesterB
    })
    setSemesters(sortedData)
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

    return semCount === 0 ? 0 : parseFloat((totalGPA / semCount).toFixed(3))
  }

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all GPA data?')) {
      localStorage.removeItem('gpaData')
      localStorage.removeItem('lockedFaculty')
      localStorage.removeItem('lockedDegree')
      localStorage.removeItem('gpaSelections')
      setSemesters([])
    }
  }

  const handleEditSemester = (semester: Grade) => {
    // Check if the semester has grades stored
    if (!semester.grades || Object.keys(semester.grades).length === 0) {
      // Show a warning for old data
      if (
        window.confirm(
          `This semester was saved before the edit feature was available. ` +
            `You can still edit it, but you'll need to re-enter all the grades. ` +
            `Do you want to continue?`
        )
      ) {
        // Store the semester data for editing
        localStorage.setItem('editingSemester', JSON.stringify(semester))
        navigate('/addGrades')
      }
    } else {
      // Store the semester data for editing
      localStorage.setItem('editingSemester', JSON.stringify(semester))
      navigate('/addGrades')
    }
  }

  const handleDeleteSemester = (semesterToDelete: string) => {
    if (
      window.confirm(`Are you sure you want to delete ${semesterToDelete}?`)
    ) {
      const updatedSemesters = semesters
        .filter((sem) => sem.semester !== semesterToDelete)
        .sort((a, b) => {
          const semesterA = parseInt(a.semester.split(' ')[1])
          const semesterB = parseInt(b.semester.split(' ')[1])
          return semesterA - semesterB
        })
      localStorage.setItem('gpaData', JSON.stringify(updatedSemesters))
      setSemesters(updatedSemesters)
      toast.success(`${semesterToDelete} has been deleted`)
    }
  }

  const rowVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        mass: 1,
        duration: 0.6,
        opacity: {
          duration: 0.6,
          ease: 'easeInOut',
        },
        y: {
          type: 'spring',
          stiffness: 70,
          damping: 12,
          duration: 0.6,
        },
        scale: {
          duration: 0.6,
          ease: 'easeOut',
        },
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground p-0 mt-0">
      <main className="flex-grow">
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
                    <th className="font-semibold p-2 sm:p-3 min-w-[100px] sm:min-w-[200px] border">
                      Semester
                    </th>
                    <th className="font-semibold p-2 sm:p-3 min-w-[80px] sm:min-w-[150px] text-center border">
                      GPA
                    </th>
                    <th className="font-semibold p-2 sm:p-3 min-w-[60px] sm:min-w-[150px] text-center border">
                      Credits
                    </th>
                    <th className="font-semibold p-2 sm:p-3 w-[80px] sm:w-[120px] text-center border">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence mode="popLayout">
                    {semesters.map((s) => (
                      <motion.tr
                        key={s.semester}
                        variants={rowVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        layout
                      >
                        <td className="p-2 sm:p-4 font-mono font-medium text-sm sm:text-base text-left border truncate">
                          {s.semester}
                        </td>
                        <td className="p-2 sm:p-4 font-mono font-semibold text-sm sm:text-base text-center border">
                          {s.gpa}
                        </td>
                        <td className="p-2 sm:p-4 font-mono font-semibold text-sm sm:text-base text-center border">
                          {s.credits}
                        </td>
                        <td className="p-1 sm:p-4 text-center border">
                          <div className="flex justify-center gap-1 sm:gap-2">
                            <button
                              onClick={() => handleEditSemester(s)}
                              className={`p-1 sm:p-2 transition-colors ${
                                s.grades && Object.keys(s.grades).length > 0
                                  ? 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                                  : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400'
                              }`}
                              title={
                                s.grades && Object.keys(s.grades).length > 0
                                  ? 'Edit semester (grades available)'
                                  : 'Edit semester (grades will need to be re-entered)'
                              }
                            >
                              <Edit3 className="w-4 h-4 sm:w-[21px] sm:h-[21px]" />
                            </button>
                            <button
                              onClick={() => handleDeleteSemester(s.semester)}
                              className="p-1 sm:p-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                              title="Delete semester"
                            >
                              <Trash2 className="w-4 h-4 sm:w-[21px] sm:h-[21px]" />
                            </button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-8 p-4 sm:p-4 bg-card border border-border rounded-lg shadow-sm w-full max-w-[220px] mx-auto"
              >
                <div className="text-center">
                  <h3 className="text-sm sm:text-base font-medium text-muted-foreground mb-2">
                    Your GPA
                  </h3>
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <CountUp end={calculateGPA()} decimals={3} duration={1.5} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* GitHub Section - Above footer border */}
      <div className="w-full text-center bg-background py-3">
        <div className="flex items-center justify-center">
          <a
            href="https://github.com/thewijay/gpa-cal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md transition-all duration-200 text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            title="Star us on GitHub & contribute!"
          >
            <Github className="w-4 h-4" />
            <span>Contribute on GitHub</span>
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-3 opacity-60">
          Open source • Help us improve this project
        </p>
      </div>

      <footer className="w-full text-center bg-background py-3 border-t border-border z-50">
        <div className="text-xs text-muted-foreground opacity-50">
          Developed by Toran
        </div>
      </footer>
    </div>
  )
}

export default MainPage
