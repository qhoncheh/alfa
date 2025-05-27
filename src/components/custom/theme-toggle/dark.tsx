'use client'
import { useEffect, useState } from 'react'

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('darkMode')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (saved !== null) {
            setIsDark(saved === 'true')
        } else {
            setIsDark(prefersDark)
        }
    }, [])

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('darkMode', isDark.toString())
    }, [isDark])

    return [isDark, setIsDark] as const
}

// استفاده:
// export function DarkModeToggle() {
//     const [isDark, setIsDark] = DarkMode()

//     return (
//         <button
//             onClick={() => setIsDark(!isDark)}
//             className="p-2 rounded bg-gray-200 dark:bg-gray-800"
//         >
//             {isDark ? 'Light Mode' : 'Dark Mode'}
//         </button>
//     )
// }