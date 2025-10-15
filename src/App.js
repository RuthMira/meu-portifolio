import React from "react";
import ReposList from "./components/ReposList";
import ApiTemplate from "./components/ApiTemplate";
import "./App.css";

function App() {
	return (
		<div className="container py-5">
			<div className="row g-4">
				<div className="col-lg-4">
					<div className="card profile-card p-3">
						<div className="text-center">
							<img
								src="https://avatars.githubusercontent.com/RuthMira"
								alt="Ruth Mira"
								className="avatar mb-3"
							/>
							<h3>Ruth Mira</h3>
							<p className="text-muted">Estudante de Banco de Dados | Desenvolvedora Full Stack</p>
						</div>

						<hr />

						<h5>Introdução</h5>
						<p style={{ textAlign: "justify" }}>
							Meu nome é Ruth Mira e sou estudante do quarto ano do curso de Banco de Dados. Tenho experiência como desenvolvedora full stack,
							interesse por novas tecnologias e dedicação à leitura de documentação técnica.
						</p>

						<h6>Contatos</h6>
						<p>
							<a href="https://github.com/RuthMira" target="_blank" rel="noopener noreferrer" className="me-2">GIT</a>
							<a href="#" className="me-2">LinkedIn</a>
						</p>

						<h6>Principais Conhecimentos</h6>
						<div className="d-flex flex-wrap gap-2">
							<span className="badge badge-skill px-2 py-1">C#</span>
							<span className="badge badge-skill px-2 py-1">Java / Spring Boot</span>
							<span className="badge badge-skill px-2 py-1">JavaScript</span>
							<span className="badge badge-skill px-2 py-1">Vue.js</span>
							<span className="badge badge-skill px-2 py-1">Python</span>
							<span className="badge badge-skill px-2 py-1">MySQL</span>
						</div>
					</div>
				</div>

				<div className="col-lg-8">
					<div className="card p-3 mb-4">
						<h4 className="mb-3">Meus Projetos / Semestres</h4>

						<div className="accordion" id="semestersAccordion">

							{/* Semestre 1 (modelo: texto do Semestre 3) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem1Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem1Collapse" aria-expanded="false" aria-controls="sem1Collapse">
										Semestre 1 — Modelo (texto do 3º semestre)
									</button>
								</h2>
								<div id="sem1Collapse" className="accordion-collapse collapse" aria-labelledby="sem1Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No terceiro semestre (2024-2), em parceria com a GSW (Global Solutions & Web), desenvolvemos a Porygon2, uma aplicação web para captura, organização e consulta de grandes volumes de notícias e dados estratégicos vindos de portais e APIs públicas. Nosso objetivo foi permitir que pesquisadores filtrassem, categorizassem e acessassem informações automaticamente, com alta performance e usabilidade.</p>

										<p>GitHub do Projeto: <a href="#" target="_blank" rel="noopener noreferrer">ver repositório</a></p>

										<h6 className="mt-3">Tecnologias Utilizadas</h6>
										<ul>
											<li>Java 22 – linguagem base da aplicação, aproveitando os recursos modernos da JVM</li>
											<li>Spring Boot 3.3.3 (Web, Data JPA, Thymeleaf, DevTools)</li>
											<li>MySQL – banco relacional</li>
											<li>Lombok – redução de boilerplate</li>
											<li>Jsoup – web scraping</li>
											<li>Jackson – conversão JSON/XML</li>
											<li>Maven – gerenciamento de dependências</li>
											<li>Thymeleaf – template engine</li>
											<li>Bootstrap – estilização responsiva</li>
										</ul>

										<h6>Contribuições Pessoais</h6>
										<p><strong>💻 Backend e Arquitetura</strong></p>
										<ul>
											<li>Criação do projeto inicial com dependências Maven, estrutura MVC e configuração de banco.</li>
											<li>Modelagem do banco de dados: diagrama físico e scripts SQL.</li>
											<li>Desenvolvimento dos CRUDs completos para Portais, Tags, Notícias, Jornalistas e APIs.</li>
											<li>Criação de método para requisição às APIs cadastradas e salvamento em ApiDados.</li>
											<li>Refatoração da lógica de raspagem para execução assíncrona.</li>
											<li>Tratamento de erros, prevenção de duplicidade e validações.</li>
											<li>Criação de testes unitários para casos específicos.</li>
										</ul>

										<h6 className="mt-3">🧠 Lógica de Negócio e Recursos Avançados</h6>
										<ul>
											<li>Tabela de sinônimos ligada à Tag para buscas inteligentes.</li>
											<li>Rotina de análise textual para vincular tags às notícias durante a coleta.</li>
											<li>Sugestão automática de seletores HTML com base em dados salvos.</li>
										</ul>

										<h6 className="mt-3">🌐 Front-end</h6>
										<ul>
											<li>Home com navbar e footer reutilizáveis.</li>
											<li>Caixa de seleção com tipos de arquivo da API (XML, CSV, JSON).</li>
											<li>Formato global de datas e validações no front-end.</li>
											<li>Responsividade em tabelas e padronização visual.</li>
										</ul>

										<h6 className="mt-3">🧪 Organização e Estruturação do Código</h6>
										<ul>
											<li>Criação da pasta /codebase para organização por domínio.</li>
											<li>Documentação no README.md sobre decisões e fluxo de uso.</li>
										</ul>

										<h6 className="mt-3">💡 Hard Skills</h6>
										<ul>
											<li>Java (JDK 22) – autonomia total</li>
											<li>Spring Boot 3.3.3 – nível avançado</li>
											<li>Thymeleaf – nível autônomo</li>
											<li>Bootstrap – nível intermediário</li>
											<li>MySQL – nível avançado</li>
											<li>Maven, Jsoup, Jackson, Bean Validation, Git, JUnit</li>
										</ul>

										<h6 className="mt-3">🤝 Soft Skills</h6>
										<ul>
											<li>Organização, Proatividade, Resolução de Problemas, Comunicação, Trabalho em Equipe, Atenção aos Detalhes</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Semestre 2 (modelo: texto do Semestre 3) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem2Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem2Collapse" aria-expanded="false" aria-controls="sem2Collapse">
										Semestre 2 — Modelo (texto do 3º semestre)
									</button>
								</h2>
								<div id="sem2Collapse" className="accordion-collapse collapse" aria-labelledby="sem2Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No terceiro semestre (2024-2), em parceria com a GSW (Global Solutions & Web), desenvolvemos a Porygon2, uma aplicação web para captura, organização e consulta de grandes volumes de notícias e dados estratégicos vindos de portais e APIs públicas. Nosso objetivo foi permitir que pesquisadores filtrassem, categorizassem e acessassem informações automaticamente, com alta performance e usabilidade.</p>

										<p>GitHub do Projeto: <a href="#" target="_blank" rel="noopener noreferrer">ver repositório</a></p>

										<h6 className="mt-3">Tecnologias Utilizadas</h6>
										<ul>
											<li>Java 22 – linguagem base da aplicação, aproveitando os recursos modernos da JVM</li>
											<li>Spring Boot 3.3.3 (Web, Data JPA, Thymeleaf, DevTools)</li>
											<li>MySQL – banco relacional</li>
											<li>Lombok – redução de boilerplate</li>
											<li>Jsoup – web scraping</li>
											<li>Jackson – conversão JSON/XML</li>
											<li>Maven – gerenciamento de dependências</li>
											<li>Thymeleaf – template engine</li>
											<li>Bootstrap – estilização responsiva</li>
										</ul>

										<h6>Contribuições Pessoais</h6>
										<p><strong>💻 Backend e Arquitetura</strong></p>
										<ul>
											<li>Criação do projeto inicial com dependências Maven, estrutura MVC e configuração de banco.</li>
											<li>Modelagem do banco de dados: diagrama físico e scripts SQL.</li>
											<li>Desenvolvimento dos CRUDs completos para Portais, Tags, Notícias, Jornalistas e APIs.</li>
											<li>Criação de método para requisição às APIs cadastradas e salvamento em ApiDados.</li>
											<li>Refatoração da lógica de raspagem para execução assíncrona.</li>
											<li>Tratamento de erros, prevenção de duplicidade e validações.</li>
											<li>Criação de testes unitários para casos específicos.</li>
										</ul>

										<h6 className="mt-3">🧠 Lógica de Negócio e Recursos Avançados</h6>
										<ul>
											<li>Tabela de sinônimos ligada à Tag para buscas inteligentes.</li>
											<li>Rotina de análise textual para vincular tags às notícias durante a coleta.</li>
											<li>Sugestão automática de seletores HTML com base em dados salvos.</li>
										</ul>

										<h6 className="mt-3">🌐 Front-end</h6>
										<ul>
											<li>Home com navbar e footer reutilizáveis.</li>
											<li>Caixa de seleção com tipos de arquivo da API (XML, CSV, JSON).</li>
											<li>Formato global de datas e validações no front-end.</li>
											<li>Responsividade em tabelas e padronização visual.</li>
										</ul>

										<h6 className="mt-3">🧪 Organização e Estruturação do Código</h6>
										<ul>
											<li>Criação da pasta /codebase para organização por domínio.</li>
											<li>Documentação no README.md sobre decisões e fluxo de uso.</li>
										</ul>

										<h6 className="mt-3">💡 Hard Skills</h6>
										<ul>
											<li>Java (JDK 22) – autonomia total</li>
											<li>Spring Boot 3.3.3 – nível avançado</li>
											<li>Thymeleaf – nível autônomo</li>
											<li>Bootstrap – nível intermediário</li>
											<li>MySQL – nível avançado</li>
											<li>Maven, Jsoup, Jackson, Bean Validation, Git, JUnit</li>
										</ul>

										<h6 className="mt-3">🤝 Soft Skills</h6>
										<ul>
											<li>Organização, Proatividade, Resolução de Problemas, Comunicação, Trabalho em Equipe, Atenção aos Detalhes</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Semestre 3 (texto original mantido) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem3Heading">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sem3Collapse" aria-expanded="true" aria-controls="sem3Collapse">
										Semestre 3 — Porygon2 (2024-2)
									</button>
								</h2>
								<div id="sem3Collapse" className="accordion-collapse collapse show" aria-labelledby="sem3Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No terceiro semestre (2024-2), em parceria com a GSW (Global Solutions & Web), desenvolvemos a Porygon2, uma aplicação web para captura, organização e consulta de grandes volumes de notícias e dados estratégicos vindos de portais e APIs públicas. Nosso objetivo foi permitir que pesquisadores filtrassem, categorizassem e acessassem informações automaticamente, com alta performance e usabilidade.</p>

										<p>GitHub do Projeto: <a href="#" target="_blank" rel="noopener noreferrer">ver repositório</a></p>

										<h6 className="mt-3">Tecnologias Utilizadas</h6>
										<ul>
											<li>Java 22 – linguagem base da aplicação, aproveitando os recursos modernos da JVM</li>
											<li>Spring Boot 3.3.3 (Web, Data JPA, Thymeleaf, DevTools)</li>
											<li>MySQL – banco relacional</li>
											<li>Lombok – redução de boilerplate</li>
											<li>Jsoup – web scraping</li>
											<li>Jackson – conversão JSON/XML</li>
											<li>Maven – gerenciamento de dependências</li>
											<li>Thymeleaf – template engine</li>
											<li>Bootstrap – estilização responsiva</li>
										</ul>

										<h6>Contribuições Pessoais</h6>
										<p><strong>💻 Backend e Arquitetura</strong></p>
										<ul>
											<li>Criação do projeto inicial com dependências Maven, estrutura MVC e configuração de banco.</li>
											<li>Modelagem do banco de dados: diagrama físico e scripts SQL.</li>
											<li>Desenvolvimento dos CRUDs completos para Portais, Tags, Notícias, Jornalistas e APIs.</li>
											<li>Criação de método para requisição às APIs cadastradas e salvamento em ApiDados.</li>
											<li>Refatoração da lógica de raspagem para execução assíncrona.</li>
											<li>Tratamento de erros, prevenção de duplicidade e validações.</li>
											<li>Criação de testes unitários para casos específicos.</li>
										</ul>

										<h6 className="mt-3">🧠 Lógica de Negócio e Recursos Avançados</h6>
										<ul>
											<li>Tabela de sinônimos ligada à Tag para buscas inteligentes.</li>
											<li>Rotina de análise textual para vincular tags às notícias durante a coleta.</li>
											<li>Sugestão automática de seletores HTML com base em dados salvos.</li>
										</ul>

										<h6 className="mt-3">🌐 Front-end</h6>
										<ul>
											<li>Home com navbar e footer reutilizáveis.</li>
											<li>Caixa de seleção com tipos de arquivo da API (XML, CSV, JSON).</li>
											<li>Formato global de datas e validações no front-end.</li>
											<li>Responsividade em tabelas e padronização visual.</li>
										</ul>

										<h6 className="mt-3">🧪 Organização e Estruturação do Código</h6>
										<ul>
											<li>Criação da pasta /codebase para organização por domínio.</li>
											<li>Documentação no README.md sobre decisões e fluxo de uso.</li>
										</ul>

										<h6 className="mt-3">💡 Hard Skills</h6>
										<ul>
											<li>Java (JDK 22) – autonomia total</li>
											<li>Spring Boot 3.3.3 – nível avançado</li>
											<li>Thymeleaf – nível autônomo</li>
											<li>Bootstrap – nível intermediário</li>
											<li>MySQL – nível avançado</li>
											<li>Maven, Jsoup, Jackson, Bean Validation, Git, JUnit</li>
										</ul>

										<h6 className="mt-3">🤝 Soft Skills</h6>
										<ul>
											<li>Organização, Proatividade, Resolução de Problemas, Comunicação, Trabalho em Equipe, Atenção aos Detalhes</li>
										</ul>

										<p className="mt-2"><strong>Outros semestres</strong>: Em 2022-1, 2022-2, 2023-1 e 2023-2 — mesmo formato.</p>
									</div>
								</div>
							</div>

							{/* Semestre 4 (modelo: texto do Semestre 3 + ApiTemplate para preencher) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem4Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem4Collapse" aria-expanded="false" aria-controls="sem4Collapse">
										Semestre 4 — Modelo (texto do 3º semestre + template)
									</button>
								</h2>
								<div id="sem4Collapse" className="accordion-collapse collapse" aria-labelledby="sem4Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No terceiro semestre (2024-2), em parceria com a GSW (Global Solutions & Web), desenvolvemos a Porygon2, uma aplicação web para captura, organização e consulta de grandes volumes de notícias e dados estratégicos vindos de portais e APIs públicas. Nosso objetivo foi permitir que pesquisadores filtrassem, categorizassem e acessassem informações automaticamente, com alta performance e usabilidade.</p>

										<p>GitHub do Projeto: <a href="#" target="_blank" rel="noopener noreferrer">ver repositório</a></p>

										<h6 className="mt-3">Tecnologias Utilizadas</h6>
										<ul>
											<li>Java 22 – linguagem base da aplicação, aproveitando os recursos modernos da JVM</li>
											<li>Spring Boot 3.3.3 (Web, Data JPA, Thymeleaf, DevTools)</li>
											<li>MySQL – banco relacional</li>
											<li>Lombok – redução de boilerplate</li>
											<li>Jsoup – web scraping</li>
											<li>Jackson – conversão JSON/XML</li>
											<li>Maven – gerenciamento de dependências</li>
											<li>Thymeleaf – template engine</li>
											<li>Bootstrap – estilização responsiva</li>
										</ul>

										<h6>Contribuições Pessoais</h6>
										<p><strong>💻 Backend e Arquitetura</strong></p>
										<ul>
											<li>Criação do projeto inicial com dependências Maven, estrutura MVC e configuração de banco.</li>
											<li>Modelagem do banco de dados: diagrama físico e scripts SQL.</li>
											<li>Desenvolvimento dos CRUDs completos para Portais, Tags, Notícias, Jornalistas e APIs.</li>
											<li>Criação de método para requisição às APIs cadastradas e salvamento em ApiDados.</li>
											<li>Refatoração da lógica de raspagem para execução assíncrona.</li>
											<li>Tratamento de erros, prevenção de duplicidade e validações.</li>
											<li>Criação de testes unitários para casos específicos.</li>
										</ul>

										<h6 className="mt-3">🧠 Lógica de Negócio e Recursos Avançados</h6>
										<ul>
											<li>Tabela de sinônimos ligada à Tag para buscas inteligentes.</li>
											<li>Rotina de análise textual para vincular tags às notícias durante a coleta.</li>
											<li>Sugestão automática de seletores HTML com base em dados salvos.</li>
										</ul>

										<h6 className="mt-3">🌐 Front-end</h6>
										<ul>
											<li>Home com navbar e footer reutilizáveis.</li>
											<li>Caixa de seleção com tipos de arquivo da API (XML, CSV, JSON).</li>
											<li>Formato global de datas e validações no front-end.</li>
											<li>Responsividade em tabelas e padronização visual.</li>
										</ul>

										<h6 className="mt-3">🧪 Organização e Estruturação do Código</h6>
										<ul>
											<li>Criação da pasta /codebase para organização por domínio.</li>
											<li>Documentação no README.md sobre decisões e fluxo de uso.</li>
										</ul>

										<h6 className="mt-3">💡 Hard Skills</h6>
										<ul>
											<li>Java (JDK 22) – autonomia total</li>
											<li>Spring Boot 3.3.3 – nível avançado</li>
											<li>Thymeleaf – nível autônomo</li>
											<li>Bootstrap – nível intermediário</li>
											<li>MySQL – nível avançado</li>
											<li>Maven, Jsoup, Jackson, Bean Validation, Git, JUnit</li>
										</ul>

										<h6 className="mt-3">🤝 Soft Skills</h6>
										<ul>
											<li>Organização, Proatividade, Resolução de Problemas, Comunicação, Trabalho em Equipe, Atenção aos Detalhes</li>
										</ul>

										{/* Template reutilizável para o 4º semestre */}
										<ApiTemplate
											title="Novo Projeto - 4º Semestre (título aqui)"
											repoLink="#"
											description="Descrição breve do projeto/ API desenvolvida no 4º semestre."
											technologies={["ex: Java", "Spring Boot", "MySQL"]}
											contributions={["Implementação do backend", "Integração com API", "Testes"]}
										/>
									</div>
								</div>
							</div>

						</div>
					</div>

					{/* Lista de repositórios em accordion */}
					<ReposList />
				</div>
			</div>
		</div>
	);
}

export default App;