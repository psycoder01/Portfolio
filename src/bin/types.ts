export enum Commands {
    neofetch = "neofetch",
    help = "help",
}

export type CommandsOutput = {
    [key in Commands]: React.FC;
};
