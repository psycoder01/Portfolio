import React from "react";

import { Commands } from "@/bin/types";

interface History {
    id: number;
    date: Date;
    command: Commands | string;
    output: JSX.Element;
}

export const useHistory = (defaultValue: Array<History>) => {
    const [history, setHistory] = React.useState<Array<History>>(defaultValue);
    const [command, setCommand] = React.useState<Commands | string>("");

    return {
        history,
        command,
        setCommand,
        setHistory: (value: JSX.Element) => {
            const newHistory = {
                id: history.length,
                date: new Date(),
                command,
                output: value,
            };
            setHistory([...history, newHistory]);
        },
        clearHistory: () => setHistory([]),
    };
};
