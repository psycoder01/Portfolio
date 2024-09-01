import { ps1Configs } from "@/config";

export const PS1 = () => {
    return (
        <div>
            <span className="text-light-yellow dark:text-dark-yellow">
                {ps1Configs.username}
            </span>
            <span className="text-light-gray dark:text-dark-gray">@</span>
            <span className="text-light-green dark:text-dark-green">
                {ps1Configs.hostname}
            </span>
            <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
        </div>
    );
};
