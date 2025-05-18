import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { ChevronDown } from 'lucide-react'
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
  const [degreeSelected, setDegreeSelected] = useState('Select Your Degree Program')
  const [semSelected, setSemSelected] = useState('Select Your Semester')
  const faculties = [
    'Computing',
    'Geomatics',
    'Applied Sciences',
    'Management Studies',
    'Medicine',
    'Management Studies',
    'Technology',
    'Agricultural Sciences',
    'Social Sciences and Languages'
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

  return (
    <>
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
    </>
  )
}

export default App
