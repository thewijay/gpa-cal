# 🎓 GPA Calculator Web App

A clean and user-friendly GPA calculator that simplifies the process of tracking academic progress — no backend, no login, just a smooth in-browser experience.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">

  <a href="https://postimg.cc/G49KG2mP" target="_blank">
    <img src="https://i.postimg.cc/wjQrKRKr/Screenshot-20250602-180908.png" width="200" />
  </a>

  <a href="https://postimg.cc/TLjJf5tx" target="_blank">
    <img src="https://i.postimg.cc/B6kY5xDj/Screenshot-20250602-180721.png" width="200" />
  </a>

  <a href="https://postimg.cc/QHfSF5hx" target="_blank">
    <img src="https://i.postimg.cc/cLSz5MzY/Screenshot-20250602-180939.png" width="200" />
  </a>

  <a href="https://postimg.cc/rDYWkNcx" target="_blank">
    <img src="https://i.postimg.cc/VNzFXKVG/Screenshot-20250602-181514.png" width="200" />
  </a>

  <a href="https://postimg.cc/2Vk2jTpK" target="_blank">
    <img src="https://i.postimg.cc/8PW3HnZN/Screenshot-20250602-181206.png" width="200" />
  </a>

  <a href="https://postimg.cc/bdHmjW5n" target="_blank">
    <img src="https://i.postimg.cc/qBWS2dX1/Screenshot-20250602-181242.png" width="200" />
  </a>

  <a href="https://postimg.cc/ZvcBDrV9" target="_blank">
    <img src="https://i.postimg.cc/3WMXN1GZ/Screenshot-20250602-181447.png" width="200" />
  </a>

</div>

---

## ✨ Features

- 📚 **Pre-filled subjects and credit values** for supported faculties and degree programs
- 🎯 **Select your faculty, degree, and semester** — and only enter your grades
- ⚡ **Instant GPA calculation** (semester-wise and cumulative)
- 🔒 **No user account required** — data is saved locally in the browser
- 📱 **Responsive UI** built with a focus on accessibility and ease of use
- ✏️ **Edit functionality** - Edit previously entered semesters with full grade history
- 🌙 **Dark/Light theme** support with system preference detection
- 📊 **Animated transitions** and smooth user interactions
- 🔄 **Backward compatibility** for legacy data formats
- 💾 **Robust data persistence** with localStorage backup and recovery

---

## 🆕 Recent Updates

### v2.0 - Enhanced Edit Functionality

- ✅ **Full edit support**: Edit any previously entered semester
- ✅ **Grade preservation**: All grades are saved and restored during editing
- ✅ **Legacy data handling**: Graceful migration for old data formats
- ✅ **Visual indicators**: Clear UI feedback for editable vs non-editable data
- ✅ **Improved UX**: Better error handling and user messaging

### Performance & Architecture

- ✅ **TypeScript strict mode**: Enhanced type safety
- ✅ **Code splitting**: Optimized bundle size with chunk splitting
- ✅ **Error boundaries**: Robust error handling and recovery
- ✅ **Accessibility**: ARIA labels and keyboard navigation

---

## 🔧 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: Framer Motion, React CountUp
- **Routing**: React Router DOM v7
- **State Management**: React hooks with localStorage persistence
- **Build**: Vite with code splitting and optimization
- **Deployment**: Vercel with SPA routing support

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/thewijay/gpa-cal.git
cd gpa-cal

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

```bash
# Run with host access (for mobile testing)
npm run dev -- --host

# Lint code
npm run lint

# Type checking
npx tsc --noEmit
```

---

## 📱 Usage Guide

### Adding Your First Semester

1. **Select Faculty**: Choose your faculty from the dropdown
2. **Select Degree**: Pick your degree program
3. **Select Semester**: Choose the semester you want to add
4. **Enter Grades**: Select grades for each subject
5. **Choose Electives**: Pick electives if required
6. **Save**: Your GPA is calculated and saved automatically

### Editing Existing Semesters

1. **Navigate to Main Page**: View your GPA summary
2. **Click Edit Button**: Click the edit icon next to any semester
3. **Modify Grades**: Update any grades as needed
4. **Save Changes**: Your updated GPA will be recalculated

### Data Management

- **Export Data**: Use browser developer tools to backup localStorage
- **Clear All Data**: Use the "Clear All Data" button (with confirmation)
- **Theme Toggle**: Switch between light and dark themes

---

## 🏗️ Architecture Overview

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── theme-provider.tsx
├── data/               # Static data and types
│   ├── subjects/       # Modular subject data by faculty
│   │   ├── index.ts    # Combines all faculty data
│   │   ├── computing.ts         # Computing faculty subjects
│   │   ├── appliedSciences.ts   # Applied Sciences subjects
│   │   └── managementStudies.ts # Management Studies subjects
│   ├── subjects.ts     # Main entry point (re-exports)
│   ├── types.ts        # TypeScript type definitions
│   └── grading.ts      # Grade options and point mappings
├── pages/              # Route components
│   ├── MainPage.tsx    # GPA summary and management
│   └── addGrades.tsx   # Grade entry and editing
└── lib/                # Configuration
    └── utils.ts        # Tailwind utilities
```

### Data Flow

1. **Subject Data**: Modular data loaded from `data/subjects/` (combined via `data/subjects.ts`)
2. **Grade Entry**: User input collected in `addGrades.tsx`
3. **GPA Calculation**: Real-time calculation with validation
4. **Persistence**: Data saved to localStorage with versioning
5. **Display**: Summary shown in `MainPage.tsx` with animations

### State Management

- **Local State**: React hooks for component state
- **Persistent State**: localStorage for data persistence
- **Theme State**: Context provider for theme management
- **Navigation State**: React Router for SPA routing

---

## 🔧 Configuration

### Customizing Grades

Modify `src/data/grading.ts` for different grading systems. This file contains both grade options and their corresponding point values.

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Deployment

```bash
# Build the project
npm run build

# Upload the dist/ folder to your hosting service
```

The app includes `vercel.json` for proper SPA routing support.

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for detailed information on adding new faculties, development setup, and best practices.

### Quick Start

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Submit a Pull Request

---
