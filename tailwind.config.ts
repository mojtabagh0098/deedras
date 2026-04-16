/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#1c39ba",
        accent: "#FF6700",
        "background-light": "#f8f9fb",
        "background-dark": "#111421",
        "text-main": "#0e111b",
        "text-muted": "#505d95",
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        truncate: '#505d95',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        rating: {
          good: '#22c55e',
          average: '#eab308',
          bad: '#ef4444',
        },
        didars: {
          blue: '#1e3a8a', // Deep blue
          light: '#f3f4f6',
          accent: '#3b82f6',
        },
        "background-light": "#f8fafc", 
        "background-dark": "#0f172a", 
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
        "text-light": "#1e293b",
        "text-dark": "#f1f5f9",
        "text-muted-light": "#64748b",
        "text-muted-dark": "#94a3b8",
        "border-light": "#e2e8f0",
        "border-dark": "#334155",
        "text-main-light": "#1f2937",
        "text-main-dark": "#f9fafb",
        "text-sub-light": "#6b7280",
        "text-sub-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151"
      },
      borderRadius: {
        "DEFAULT": "0.5rem", 
        "lg": "0.5rem", 
        "xl": "0.75rem", 
        "full": "9999px"
      },
      boxShadow: {
        'card': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'card-hover': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      spacing: {
        '4.5': '1.125rem',
      },
      width: {
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '3/3': '100%',
      }
    },
  },
  safelist: [
    'w-1/3',
    'w-2/3',
    'w-3/3',
  ],
  plugins: [],
}