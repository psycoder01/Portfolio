import { useRef } from "react";

import { useHistory } from "@/hooks";
import { InputPrompt } from "@/components/derived/Input";

import { executeCommand } from "@/pages/commandExecutor";

export default function Home() {
    const ref = useRef<HTMLInputElement>(null);
    const { command, setCommand, history, setHistory } = useHistory([]);

    const handleEnterKey = (command: String) => {
        const result = executeCommand(command);
        setHistory(result);
        setCommand("");
    };

    const handleAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") return handleEnterKey(command);
    };

    return (
        <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
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
