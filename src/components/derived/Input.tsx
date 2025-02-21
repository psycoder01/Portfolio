import { PS1 } from "@/components/common";

interface IInputPromptProps {
    ref: React.RefObject<HTMLInputElement>;
    value: string;
    executable: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputPrompt = (props: IInputPromptProps) => {
    const { ref, value, executable = false, onChange, onKeyDown } = props;

    const textColor = executable ? "text-dark-green" : "text-dark-red";

    return (
        <div className="flex flex-row space-x-2">
            <label htmlFor="prompt" className="flex-shrink">
                <PS1 />
            </label>
            <input
                ref={ref}
                id="prompt"
                type="text"
                className={`bg-light-background dark:bg-dark-background focus:outline-none flex-grow ${textColor}`}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                autoFocus
                autoComplete="off"
                spellCheck="false"
            />
        </div>
    );
};
