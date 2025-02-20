import { useRef } from "react";

import { useHistory } from "@/hooks";
import { InputPrompt } from "@/components/derived/Input";

import { executeCommand } from "@/pages/commandExecutor";
import { Commands } from "@/bin/types";

const Information = () => (
    <div className="my-4">
        <pre>
            Type <span className="font-bold">help</span> to see list of
            available commands.
        </pre>
        <pre>
            Type <span className="font-bold">neofetch</span> to display summary.
        </pre>
        <pre>
            Type <span className="font-bold">repo</span> to go to my GitHub.
        </pre>
    </div>
);

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
