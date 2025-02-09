export enum Commands {
    neofetch = "neofetch",
    help = "help",
}

export type CommandsOutput = {
    [key in Commands]: JSX.Element;
};
