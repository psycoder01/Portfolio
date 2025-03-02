export interface IRepo {
    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
    forks: number;
    watchers: number;
    homepage: string;
}

interface IRepoSection {
    repo: IRepo;
}

interface IDetail {
    label: string;
    value: string;
    link?: boolean;
}

const Detail = (props: IDetail) => {
    const { label, value, link = false } = props;

    return (
        <div>
            <span className="font-bold">{label} : </span>
            {link ? (
                <a className="underline" href={value} target="_blank">
                    {value}
                </a>
            ) : (
                <span> {value}</span>
            )}
        </div>
    );
};

export const RepoSection = (props: IRepoSection) => {
    const { repo } = props;

    return (
        <div>
            <Detail label={"Project Name"} value={repo.name} />
            <Detail label={"About"} value={repo.description} />
            <Detail label={"GitHub"} value={repo.html_url} link />
            <Detail
                label={"Link"}
                value={repo?.homepage ?? "N/A"}
                link={!!repo?.homepage}
            />
            |x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x-x|
        </div>
    );
};
