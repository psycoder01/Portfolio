import { Commands } from "@/bin/types";

const Help = () => {
    return (
        <>
            <div>Available commands : </div>
            {Object.values(Commands).map((cmd) => (
                <span className="mr-4 font-bold">{cmd}</span>
            ))}
        </>
    );
};

export default Help;
