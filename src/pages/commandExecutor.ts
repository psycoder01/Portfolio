import commands from "@/pages/commands";
import { Commands } from "@/bin/types";

export const executeCommand = (command: String) => {
    const args = command.split(" ").map((c) => c.toLowerCase());
    const cmd = args[0];

    if (cmd in Commands) {
        const result = commands[cmd as Commands];
        console.log({ result });
    }
};
