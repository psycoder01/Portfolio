import { Username } from "@/components/common";

export const Information = () => (
    <div className="my-4">
        <Username />
        <pre>
            Type <span className="font-bold">help</span> to see list of
            available commands.
        </pre>
        <pre>
            Type <span className="font-bold">neofetch</span> to display summary.
        </pre>
        <pre>
            Type <span className="font-bold">repo</span> to go to my GitHub.
        </pre>
    </div>
);
