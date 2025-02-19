export enum Commands {
    neofetch = "neofetch",
    help = "help",
    clear = "clear",
}

export type CommandsOutput = {
    [key in Commands]: JSX.Element;
};
