import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

interface Snackbar {
    msg: string;
    type?: 'success' | 'error' | '';
}

interface useContextInterface {
    snackbar: Snackbar;
    setSnackbar: Dispatch<SetStateAction<Snackbar>>;
}

interface SnackbarComponent {
    children: ReactNode;
}

const SnackbarContext = createContext<any>({});

export default function SnackbarProvider({ children }: SnackbarComponent) {

    const [snackbar, setSnackbar] = useState<Snackbar>({ msg: '', type: '' });

    return (
        <SnackbarContext.Provider value={{ snackbar, setSnackbar }}> {children} </SnackbarContext.Provider>
    )
}

export function useSnackbar() {
    const context = useContext<useContextInterface>(SnackbarContext);
    if (!context) throw new Error("Error must be used within a SnackbarProvider")
    const { snackbar, setSnackbar } = context;
    return { snackbar, setSnackbar };
}