import commands from "@/pages/commands";
import { Commands } from "@/bin/types";

import UnknownCommand from "./commands/UnknownCommand";

export const executeCommand = (command: String) => {
    const args = command.split(" ").map((c) => c.toLowerCase());
    const cmd = args[0];

    if (cmd in Commands) {
        return commands[cmd as Commands];
    }

    return UnknownCommand();
};
