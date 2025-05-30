export interface IDetailProps {
    detail: string;
    icon: JSX.Element;
    href?: string;
    download?: boolean;
}

export const Detail = (props: IDetailProps) => {
    const { detail, icon, href, download = false } = props;

    const renderLink = (href: string | undefined) => {
        if (href)
            return (
                <a
                    href={href}
                    className="mx-4 underline"
                    download={download}
                    target="_blank"
                >
                    {detail}
                </a>
            );

        return <span className="mx-4">{detail}</span>;
    };

    return (
        <div className="flex flex-row items-center">
            <span>{icon}</span>
            {renderLink(href)}
        </div>
    );
};
