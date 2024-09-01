import { useRef } from "react";

import { useHistory } from "@/hooks";
import { InputPrompt } from "@/components/derived/Input";

import { executeCommand } from "@/pages/commandExecutor";

export default function Home() {
    const ref = useRef<HTMLInputElement>(null);
    const { command, setCommand } = useHistory([]);

    const handleEnterKey = (command: String) => {
        executeCommand(command);
    };

    const handleAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") return handleEnterKey(command);
    };

    return (
        <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
            <div className="overflow-y-auto h-full">
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
