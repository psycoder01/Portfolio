import { CommandInfo, Commands } from "@/bin/types";

interface ICommandsListProps {
    command: Commands;
    info: string;
}

const cmdInfo: CommandInfo = {
    help: "List all the available executable commands.",
    clear: "Clear the history from the terminal.",
    repo: "Shows the repositories from the GitHub with provided links.",
    neofetch: "Shows the tools stack, social links and resume.",
};

const CommandList = (props: ICommandsListProps) => {
    const { command, info } = props;

    return (
        <>
            <span>{command}</span>
            <span>{info}</span>
        </>
    );
};
const Help = () => {
    return (
        <>
            <span>Commands : </span>
            <br />
            <div className="ml-4 grid grid-cols-[1fr_2fr] max-w-[60%]">
                {Object.values(Commands)
                    .sort()
                    .map((cmd) => (
                        <CommandList
                            key={cmd}
                            command={cmd}
                            info={cmdInfo[cmd]}
                        />
                    ))}
            </div>
        </>
    );
};

export default Help;
