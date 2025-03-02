import { useState, useEffect } from "react";

import { IRepo, RepoSection } from "@/components/common";

const FILTER_TOPIC = "showcase";

const fetchRepos = async () => {
    const resp = await fetch(
        "https://api.github.com/users/psycoder01/repos?type=public&per_page=15"
    );
    const repos: IRepo[] = await resp.json();

    return repos;
};

const Repo: React.FC = () => {
    const [repos, setRepos] = useState<IRepo[]>([]);
    const [loading, setLoading] = useState(true);

    const runFetchRepos = async () => {
        try {
            const repos = await fetchRepos();
            const filteredRepos = repos.filter((r) =>
                r.topics.find((topic) => topic === FILTER_TOPIC)
            );
            setRepos(filteredRepos);
        } catch (_) {
            console.error("Error fetching repos");
        }

        setTimeout(() => setLoading(false), 5000);
    };

    useEffect(() => {
        runFetchRepos();
    }, []);

    if (loading) <div>wait a few seconds...</div>;

    if (repos?.length === 0) return <div>No repo found</div>;

    return (
        <div className="m-8 flex flex-col gap-4">
            {repos.map((r) => (
                <RepoSection key={r.name} repo={r} />
            ))}
        </div>
    );
};

export default Repo;
