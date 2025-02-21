import { Commands } from "@/bin/types";

export const commandExecutable = (command: String) =>
    Object.values(Commands).some((cmd) => cmd === command);
