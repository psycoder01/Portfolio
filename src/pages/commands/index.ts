import { CommandsOutput } from "@/bin/types";

import Help from "./Help";
import Welcome from "./Welcome";
import Clear from "./Clear";
import Repo from "./Repo";

const commandsMap: CommandsOutput = {
    neofetch: Welcome,
    help: Help,
    clear: Clear,
    repo: Repo,
};

export default commandsMap;
