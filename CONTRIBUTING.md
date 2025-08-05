# 🤝 Contributing to GPA Calculator

Thank you for your interest in contributing to the GPA Cal! This guide will help you get started with contributing to the project, especially for adding new faculties and subjects.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Adding New Faculties](#adding-new-faculties)
- [Code Standards](#code-standards)
- [Development Workflow](#development-workflow)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

## 🤗 Code of Conduct

This project follows a simple code of conduct:

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Keep discussions professional and on-topic

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- A code editor with TypeScript support (VS Code recommended)

### Development Setup

1. **Fork and clone the repository**

   ```bash
   git clone https://github.com/thewijay/gpa-cal.git
   cd gpa-cal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Verify TypeScript compilation**
   ```bash
   npx tsc --noEmit
   ```

## 📚 Adding New Faculties

This is the most common contribution type. Follow these steps carefully:

### Step 1: Create Faculty Data File

1. Navigate to `src/data/subjects/`
2. Create a new file: `yourFaculty.ts` (use camelCase, no spaces)
3. Use this template:

```typescript
import type { DegreeMap } from '../types'

/**
 * [Your Faculty Name] Faculty Subject Data
 *
 * Guidelines:
 * - All subject codes must be unique within each degree program
 * - Use suffixes (A, B, C) for duplicate codes when the same subject code appears across multiple electives (e.g., FM4152A, FM4152B)
 * - Ensure electiveCreditsRequired matches available elective credits
 * - Test your additions before submitting PR
 *
 * Last updated: [Current Date]
 * Contributors: [Your Name]
 */
export const yourFacultyData: DegreeMap = {
  'Your Degree Name': {
    'Semester 1': {
      core: [
        {
          code: 'FAC101',
          name: 'Subject Name',
          credits: 3,
        },
        // Add more core subjects
      ],
      electives: [
        {
          code: 'FAC201A',
          name: 'Elective Subject1',
          credits: 3,
        },
        {
          code: 'FAC201B',
          name: 'Elective Subject2',
          credits: 3,
        },
        // Add more electives
      ],
      electiveCreditsRequired: 3,
    },
    // Add more semesters
  },
  // Add more degrees
}
```

### Step 2: Ensure Unique Subject Codes

**⚠️ CRITICAL: All subject codes must be unique within each degree programs**

1. Check existing codes within your faculty's degree programs to avoid duplicates

2. If your codes conflict within the same degree program, append suffixes:
   ```typescript
   // If MATH101 already exists in the same degree, use:
   { code: 'MATH101A', name: 'Mathematics I', credits: 4 }
   { code: 'MATH101B', name: 'Advanced Mathematics', credits: 4 }
   ```

**Note**: The same subject code can exist in different faculties (e.g., CS101 in Computing and CS101 in Engineering), but must be unique within each degree program.

### Step 3: Register Your Faculty

1. Open `src/data/subjects/index.ts`
2. Import your faculty:

   ```typescript
   import { yourFacultyData } from './yourFaculty'
   ```

3. Add to the export:
   ```typescript
   export const subjectData: FacultyMap = {
     Computing: computing,
     'Applied Sciences': appliedSciences,
     'Management Studies': managementStudies,
     'Your Faculty Name': yourFacultyData, // Add this line
   }
   ```

### Step 4: Validation Checklist

Before submitting, verify:

- [ ] All subject codes are unique within each degree program
- [ ] Each subject has `code`, `name`, and `credits`
- [ ] `electiveCreditsRequired` ≤ total available elective credits
- [ ] TypeScript compiles without errors: `npx tsc --noEmit`
- [ ] App runs without errors: `npm run dev`
- [ ] Your faculty appears in the dropdown
- [ ] All semesters and subjects load correctly
- [ ] GPA calculation works for your subjects

### Step 5: Test Your Addition

1. **Start development server**: `npm run dev`
2. **Select your faculty** from the dropdown
3. **Navigate through all degrees and semesters**
4. **Add grades** for a complete semester
5. **Verify GPA calculation** is correct
6. **Test editing functionality**

## 📝 Code Standards

### TypeScript

- Use strict TypeScript (no `any` types)
- Import types with `import type { ... }`
- Add JSDoc comments for complex functions
- Follow existing naming conventions

### File Structure

```typescript
// ✅ Good
import type { DegreeMap } from '../types'

export const facultyData: DegreeMap = {
  // data here
}

// ❌ Bad
export const data = {
  // no types, unclear naming
}
```

### Subject Data Format

```typescript
// ✅ Good
{
  code: 'CS101',           // Short, descriptive, unique
  name: 'Programming I',   // Official subject name
  credits: 3               // Numeric value
}

// ❌ Bad
{
  code: 'VERY_LONG_CODE_NAME', // Too long
  name: 'prog',                // Too short
  credits: '3'                 // String instead of number
}
```

## 🔄 Development Workflow

### Branch Naming

- `feat/add-engineering-faculty` - Adding new faculty
- `fix/duplicate-subject-codes` - Fixing data issues
- `docs/update-contributing` - Documentation updates

### Commit Messages

Follow conventional commits:

```bash
# Features
feat(data): add Engineering faculty with CS and EE degrees

# Fixes
fix(data): resolve duplicate subject codes in Applied Sciences

# Documentation
docs: add contributing guidelines for new faculties
```

## 🧪 Testing

### Manual Testing Steps

1. **Faculty Selection**: Verify your faculty appears in dropdown
2. **Degree Selection**: All degrees load correctly
3. **Semester Navigation**: All semesters are accessible
4. **Subject Display**: Core and elective subjects show properly
5. **Grade Entry**: Can select grades for all subjects
6. **GPA Calculation**: Results are mathematically correct
7. **Data Persistence**: Grades save and reload correctly
8. **Edit Mode**: Can modify previously entered grades

### Automated Checks

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build verification
npm run build
```

## 🔀 Pull Request Process

### Before Submitting

1. **Test thoroughly** following the testing checklist
2. **Run all checks**: `npm run lint && npx tsc --noEmit`
3. **Update documentation** if needed
4. **Write clear commit messages**

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] New faculty addition
- [ ] Bug fix in existing data
- [ ] Documentation update

## Faculty/Degree Added

- Faculty: [Name]
- Degrees: [List]
- Total Subjects: [Count]

## Testing Checklist

- [ ] TypeScript compiles without errors
- [ ] All subjects have unique codes
- [ ] Faculty appears in dropdown
- [ ] GPA calculation works correctly
- [ ] Data persists correctly
```

### Review Process

1. Automated checks must pass
2. Manual review by maintainers
3. Testing of the new faculty data
4. Approval and merge

## 🆘 Common Issues and Solutions

### Duplicate Subject Codes

```bash
Error: Subject code 'MATH101' already exists in this degree program
Solution: Use 'MATH101A', 'MATH101B', etc. within the same degree
```

### TypeScript Errors

```bash
Error: Type 'string' is not assignable to type 'number'
Solution: Ensure credits are numbers, not strings
```

### Missing Faculty in Dropdown

```bash
Problem: Faculty doesn't appear
Solution: Check if you added it to src/data/subjects/index.ts
```

### GPA Calculation Issues

```bash
Problem: Wrong GPA calculated
Solution: Verify credit values and grade point mappings
```

## 📞 Getting Help

- **Documentation**: Check README.md and existing code
- **Issues**: Open a GitHub issue with the "question" label
- **Examples**: Look at existing faculty files for reference
- **Code Review**: Submit a draft PR for early feedback

## 🎯 Quick Reference

### File Locations

- **Subject data**: `src/data/subjects/[faculty].ts`
- **Types**: `src/data/types.ts`
- **Registration**: `src/data/subjects/index.ts`
- **Grading**: `src/data/grading.ts`

### Required Fields

```typescript
Subject {
  code: string     // Unique within each degree program
  name: string     // Official subject name
  credits: number  // Credit value
}
```

### Testing Commands

```bash
npm run dev          # Start development
npx tsc --noEmit     # Type check
npm run lint         # Code linting
npm run build        # Build verification
```

---

**Thank you for contributing to make this GPA Cal better for students! 🎓**
