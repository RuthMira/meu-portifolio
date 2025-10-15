import React, { useEffect, useState } from "react";
import { fetchRepos } from "../api/github";

const ReposList = () => {
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchRepos()
			.then((data) => {
				setRepos(Array.isArray(data) ? data : []);
				setLoading(false);
			})
			.catch((e) => {
				setError(e.message || "Erro ao buscar repositórios");
				setLoading(false);
			});
	}, []);

	if (loading) return <div className="my-4">Carregando repositórios...</div>;
	if (error) return <div className="alert alert-danger my-4">Erro: {error}</div>;
	if (!repos.length) return <div className="my-4">Nenhum repositório encontrado.</div>;

	return (
		<div className="my-4">
			<h2 className="mb-3">Meus Repositórios</h2>
			<div className="accordion" id="reposAccordion">
				{repos.map((repo) => (
					<div className="accordion-item" key={repo.id}>
						<h2 className="accordion-header" id={`heading-${repo.id}`}>
							<button
								className="accordion-button collapsed"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target={`#collapse-${repo.id}`}
								aria-expanded="false"
								aria-controls={`collapse-${repo.id}`}
							>
								{repo.name}
								<small className="text-muted ms-3"> — {repo.language || "—"}</small>
							</button>
						</h2>
						<div
							id={`collapse-${repo.id}`}
							className="accordion-collapse collapse"
							aria-labelledby={`heading-${repo.id}`}
							data-bs-parent="#reposAccordion"
						>
							<div className="accordion-body">
								<p className="repo-desc">{repo.description || "Sem descrição"}</p>
								<p className="mb-1">
									<strong>Estrelas:</strong> {repo.stargazers_count} &nbsp;
									<strong>Forks:</strong> {repo.forks_count}
								</p>
								<a
									href={repo.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-sm btn-outline-primary"
								>
									Ver no GitHub
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ReposList;
