import { Detail, IDetailProps } from "@/components/common";

export interface ISummaryProps {
    title: string;
    titleIcon: JSX.Element;
    details: IDetailProps[];
}

export const Summary = (props: ISummaryProps) => {
    const { title, titleIcon, details } = props;

    return (
        <div>
            <Detail icon={titleIcon} detail={title.toUpperCase()} />
            -------------------------
            <br />
            {details.map((detail) => (
                <Detail
                    key={detail.detail}
                    icon={detail.icon}
                    detail={detail.detail}
                    href={detail.href}
                />
            ))}
        </div>
    );
};
