'use client'

import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

type PageContextType = {
    value: number;
    setValue: Dispatch<SetStateAction<number>>;
};

const defaultContext: PageContextType = {
    value: 0,
    setValue: () => {},
};

export const PageContext = createContext<PageContextType>(defaultContext);

export default function PageProvider({ children }: { children: ReactNode }) {

    const [value, setValue] = useState(0);

    return (
        <PageContext.Provider value={{ value, setValue }}>
            {children}
        </PageContext.Provider>
    );
}