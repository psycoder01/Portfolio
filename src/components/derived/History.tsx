import { ChevronRight } from "@/assets/Icons";

import { commandExecutable } from "@/utils";

interface IHistory {
    command: String;
    output: React.FC;
}

export const History = (props: IHistory) => {
    const { command, output: Output } = props;
    const textColor = commandExecutable(command)
        ? "text-dark-green"
        : "text-dark-red";

    return (
        <>
            <div className={"flex flex-row items-center"}>
                <ChevronRight />
                <span className={textColor}>{command}</span>
            </div>
            <div>
                <Output />
            </div>
        </>
    );
};
