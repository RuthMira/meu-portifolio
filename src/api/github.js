const GITHUB_USERNAME = "RuthMira";

export async function fetchRepos({ per_page = 100, page = 1 } = {}) {
	// busca repositórios públicos do usuário
	try {
		const response = await fetch(
			`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${per_page}&page=${page}`
		);
		if (!response.ok) {
			if (response.status === 403) {
				throw new Error("Rate limit do GitHub atingido. Tente novamente mais tarde.");
			}
			throw new Error("Falha ao buscar repositórios");
		}
		return await response.json();
	} catch (err) {
		// encaminhar erro para o componente que chamou
		throw err;
	}
}
