import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ThemeContextProps {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

const initialTheme: ThemeContextProps = {
    theme: 'light',
    setTheme: () => {}
};

export const ThemeContext = createContext<ThemeContextProps>(initialTheme);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
