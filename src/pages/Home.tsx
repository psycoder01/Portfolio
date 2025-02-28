import { useRef, useState, useEffect } from "react";

import { useHistory } from "@/hooks";
import { Commands } from "@/bin/types";
import { commandExecutable } from "@/utils";

import { executeCommand } from "@/pages/commandExecutor";
import { InputPrompt, Information, History } from "@/components/derived";

export default function Home() {
    const ref = useRef<HTMLInputElement>(null);
    const { command, setCommand, history, setHistory, clearHistory } =
        useHistory([]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleEnterKey = (command: String) => {
        if (command === Commands.clear) {
            clearHistory();
        } else {
            const result = executeCommand(command);
            setHistory(result);
        }

        setCommand("");
    };

    const handleArrowKey = (key: "up" | "down") => {
        let index = 0;

        if (key == "up") {
            if (currentIndex === 0) return;

            index = currentIndex - 1;
        }
        if (key == "down") {
            if (currentIndex === history.length - 1) return;

            index = currentIndex + 1;
        }

        const currentHistory = history[index];

        setCommand(currentHistory.command);
        setCurrentIndex(index);
    };

    const handleAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") return handleEnterKey(command);
        if (e.key === "ArrowUp") return handleArrowKey("up");
        if (e.key === "ArrowDown") return handleArrowKey("down");
    };

    useEffect(() => {
        setCurrentIndex(history.length);
    }, [history.length]);

    return (
        <div className="p-8 overflow-x-hidden overflow-y-auto h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
            {<Information />}
            {history.map((h) => (
                <div key={h.id} className="py-4">
                    <History command={h.command} output={h.output} />
                </div>
            ))}
            <InputPrompt
                ref={ref}
                value={command}
                executable={commandExecutable(command)}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleAction}
            />
        </div>
    );
}
