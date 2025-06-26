// Utility functions for data export/import
export const exportGPAData = () => {
  const gpaData = localStorage.getItem('gpaData') || '[]'
  const lockedFaculty = localStorage.getItem('lockedFaculty') || ''
  const lockedDegree = localStorage.getItem('lockedDegree') || ''

  const exportData = {
    gpaData: JSON.parse(gpaData),
    lockedFaculty,
    lockedDegree,
    exportDate: new Date().toISOString(),
    version: '1.0',
  }

  const dataStr = JSON.stringify(exportData, null, 2)
  const dataUri =
    'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)

  const exportFileDefaultName = `gpa-data-${
    new Date().toISOString().split('T')[0]
  }.json`

  const linkElement = document.createElement('a')
  linkElement.setAttribute('href', dataUri)
  linkElement.setAttribute('download', exportFileDefaultName)
  linkElement.click()
}

export const importGPAData = (file: File): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string
        const importData = JSON.parse(content)

        // Validate structure
        if (!importData.gpaData || !Array.isArray(importData.gpaData)) {
          throw new Error('Invalid data format')
        }

        // Backup existing data
        const existingData = localStorage.getItem('gpaData')
        if (existingData) {
          localStorage.setItem('gpaData_backup', existingData)
        }

        // Import new data
        localStorage.setItem('gpaData', JSON.stringify(importData.gpaData))
        if (importData.lockedFaculty) {
          localStorage.setItem('lockedFaculty', importData.lockedFaculty)
        }
        if (importData.lockedDegree) {
          localStorage.setItem('lockedDegree', importData.lockedDegree)
        }

        resolve(true)
      } catch (error) {
        reject(error)
      }
    }
    reader.readAsText(file)
  })
}
