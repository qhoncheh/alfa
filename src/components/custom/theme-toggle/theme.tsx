'use client'
import { MdOutlineDarkMode } from 'react-icons/md'
import { Button } from '../index' 
import { useDarkMode } from './dark'
import { CiLight } from 'react-icons/ci'

export function ThemeToggle() {
    const [isDark, setIsDark] = useDarkMode()

    return (
        <Button
            onClick={() => setIsDark(!isDark)}
            className=" w-max border-gray-300 border-1 dark:b-black text-black dark:text-white transition-colors duration-300"
        >
            {isDark ? <MdOutlineDarkMode size={25} /> : <CiLight size={25} />}
        </Button>
    )
}