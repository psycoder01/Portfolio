import { CommandsOutput } from "@/bin/types";

import Help from "./Help";
import Welcome from "./Welcome";

const commandsMap: CommandsOutput = {
    neofetch: Welcome,
    help: Help,
};

export default commandsMap;
