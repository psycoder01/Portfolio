import { CommandsOutput } from "@/bin/types";

import Help from "./Help";
import Welcome from "./Welcome";
import Clear from "./Clear";

const commandsMap: CommandsOutput = {
    neofetch: Welcome(),
    help: Help(),
    clear: Clear(),
};

export default commandsMap;
