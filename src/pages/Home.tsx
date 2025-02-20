import { useRef } from "react";

import { useHistory } from "@/hooks";
import { Commands } from "@/bin/types";
import { executeCommand } from "@/pages/commandExecutor";

import { InputPrompt, Information } from "@/components/derived";

export default function Home() {
    const ref = useRef<HTMLInputElement>(null);
    const { command, setCommand, history, setHistory, clearHistory } =
        useHistory([]);

    const handleEnterKey = (command: String) => {
        if (command === Commands.clear) {
            clearHistory();
        } else {
            const result = executeCommand(command);
            setHistory(result);
        }

        setCommand("");
    };

    const handleAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") return handleEnterKey(command);
    };

    return (
        <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
            {history.length === 0 && <Information />}
            <div className="overflow-y-auto h-full">
                {history.map((h) => (
                    <div key={h.id}>{h.output}</div>
                ))}
                <InputPrompt
                    ref={ref}
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleAction}
                />
            </div>
        </div>
    );
}
