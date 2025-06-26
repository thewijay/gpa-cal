# Testing Setup for GPA Calculator

## Recommended Testing Libraries

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event vitest jsdom
```

## Test Structure

```
src/
  __tests__/
    utils/
      gpaCalculations.test.ts
    components/
      MainPage.test.tsx
      addGrades.test.tsx
    integration/
      gpaFlow.test.tsx
```

## Sample Test Cases

### Unit Tests

- GPA calculation accuracy
- Grade validation
- Data persistence
- Edge cases (empty data, invalid inputs)

### Integration Tests

- Complete GPA entry flow
- Edit functionality
- Data migration from legacy format
- Theme switching

### E2E Tests (with Playwright)

- Full user journey
- Cross-browser compatibility
- Mobile responsiveness
