import { Commands } from "@/bin/types";

const Help = () => {
    return (
        <>
            <div>All commands : </div>
            {Object.values(Commands).map((cmd) => (
                <span key={cmd} className="mr-4 font-bold">
                    {cmd}
                </span>
            ))}
        </>
    );
};

export default Help;
