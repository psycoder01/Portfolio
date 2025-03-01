import { useState, useEffect } from "react";

interface Repo {
    id: string;
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    topics: string[];
    forks: number;
    watchers: number;
}

const fetchRepos = async () => {
    const resp = await fetch(
        "https://api.github.com/users/psycoder01/repos?type=public&per_page=15"
    );
    const repos: Repo[] = await resp.json();

    return repos;
};

const Repo: React.FC = () => {
    const [repos, setRepos] = useState<Repo[]>([]);

    useEffect(() => {
        fetchRepos()
            .then((repos) => setRepos(repos))
            .catch((_) => console.error("Error fetching repos"));
    }, []);

    if (repos?.length === 0) return <div>No repo found</div>;

    return (
        <div className="m-16 flex flex-row">
            {repos.map((r) => (
                <div>{r.name}</div>
            ))}
        </div>
    );
};

export default Repo;
