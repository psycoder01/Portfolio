export interface IDetailProps {
    detail: string;
    icon?: JSX.Element;
    href?: string;
    download?: boolean;
}

export const Detail = (props: IDetailProps) => {
    const { detail, icon, href, download = false } = props;

    const renderIcon = (icon: JSX.Element | undefined) => {
        if (icon) return <span>{icon}</span>;
    };

    const renderLink = (href: string | undefined) => {
        if (href)
            return (
                <a
                    href={href}
                    className="underline"
                    download={download}
                    target="_blank"
                >
                    {detail}
                </a>
            );

        return <span>{detail}</span>;
    };

    return (
        <div className="flex flex-row gap-2">
            {renderIcon(icon)}
            {renderLink(href)}
        </div>
    );
};
