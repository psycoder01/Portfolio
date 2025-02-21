import { ChevronRight } from "@/assets/Icons";

import { commandExecutable } from "@/utils";

interface IHistory {
    command: String;
    output: JSX.Element;
}

export const History = (props: IHistory) => {
    const { command, output } = props;
    const textColor = commandExecutable(command)
        ? "text-dark-green"
        : "text-dark-red";

    return (
        <>
            <div className={"flex flex-row items-center"}>
                <ChevronRight />
                <span className={textColor}>{command}</span>
            </div>
            <div>{output}</div>
        </>
    );
};
