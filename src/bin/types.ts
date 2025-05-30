export enum Commands {
    neofetch = "neofetch",
    help = "help",
    clear = "clear",
    repo = "repo",
}

export type CommandInfo = {
    [key in Commands]: string;
};

export type CommandsOutput = {
    [key in Commands]: React.FC;
};
