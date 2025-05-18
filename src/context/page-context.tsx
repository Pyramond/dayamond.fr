'use client'

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

type PageContextType = {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
};

const defaultContext: PageContextType = {
    value: "presentation",
    setValue: () => {},
};

export const PageContext = createContext<PageContextType>(defaultContext);

export default function PageProvider({ children }: { children: ReactNode }) {

    const [value, setValue] = useState("presentation");

    return (
        <PageContext.Provider value={{ value, setValue }}>
            {children}
        </PageContext.Provider>
    );
}