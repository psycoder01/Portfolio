export enum Commands {
    neofetch = "neofetch",
    help = "help",
    clear = "clear",
    repo = "repo",
}

export type CommandsOutput = {
    [key in Commands]: React.FC;
};
