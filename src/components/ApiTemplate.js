import React from "react";

const ApiTemplate = ({ title = "Título da API / Projeto", repoLink = "#", description = "Descrição breve da API/projeto.", technologies = [], contributions = [] }) => {
	return (
		<div className="border rounded p-3 mb-3">
			<h5>{title}</h5>
			<p className="text-muted">{description}</p>

			{technologies.length > 0 ? (
				<p><strong>Tecnologias:</strong> {technologies.join(", ")}</p>
			) : (
				<p className="text-muted"><strong>Tecnologias:</strong> (adicione tecnologias)</p>
			)}

			{contributions.length > 0 ? (
				<div>
					<strong>Contribuições:</strong>
					<ul>
						{contributions.map((c, i) => <li key={i}>{c}</li>)}
					</ul>
				</div>
			) : (
				<p className="text-muted"><strong>Contribuições:</strong> (adicione contribuições)</p>
			)}

			<p>
				<a href={repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">Link / Repositório</a>
			</p>

			<p className="text-end text-muted mb-0"><small>Duplicar este componente para cada nova API / projeto.</small></p>
		</div>
	);
};

export default ApiTemplate;
