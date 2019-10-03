import { useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (darkMode === false) {
            document.querySelector('body').classList.remove('dark-mode');
        } else {
            document.querySelector('body').classList.add('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}