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
							Meu nome é Ruth Mira e sou estudante do TERCEIRO ano do curso de Banco de Dados. Tenho experiência como desenvolvedora full stack,
							interesse por novas tecnologias e dedicação à leitura de documentação técnica.
						</p>

						<h6>Contatos</h6>
						<p className="d-flex gap-2">
							<a href="https://github.com/RuthMira" target="_blank" rel="noopener noreferrer" className="contact-badge" aria-label="GitHub">
								{/* GitHub SVG icon */}
								<svg className="contact-icon" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 018 4.8c.68.003 1.36.092 2 .27 1.52-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.001 8.001 0 0016 8c0-4.42-3.58-8-8-8z"/>
								</svg>
								<span className="ms-1">GitHub</span>
							</a>
							<a href="#" target="_blank" rel="noopener noreferrer" className="contact-badge" aria-label="LinkedIn">
								{/* LinkedIn SVG icon */}
								<svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56V24H.22zM8.98 8h4.38v2.18h.06c.61-1.16 2.1-2.38 4.33-2.38 4.63 0 5.48 3.04 5.48 6.99V24h-4.56v-7.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24H8.98z"/>
								</svg>
								<span className="ms-1">LinkedIn</span>
							</a>
						</p>

						<h6>Principais Conhecimentos</h6>
						<div className="d-flex flex-wrap gap-2">
							<span className="skill-badge">⚙️ C#</span>
							<span className="skill-badge">☕ Java / Spring Boot</span>
							<span className="skill-badge">🟨 JavaScript</span>
							<span className="skill-badge">🖖 Vue.js</span>
							<span className="skill-badge">🐍 Python</span>
							<span className="skill-badge">🐬 MySQL</span>
							<span className="skill-badge">⚛️ React</span>
							<span className="skill-badge">🟩 Node.js</span>
							<span className="skill-badge">�.NET</span>
							<span className="skill-badge">🐘 PostgreSQL</span>
							<span className="skill-badge">🧠 Redis</span>
							<span className="skill-badge">🐳 Docker</span>
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
										<p>No primeiro semestre do curso da FATEC, desenvolvemos uma aplicação para a instituição de ensino PBLTex, especializada em cursos baseados em Problem Based Learning (PBL). O projeto teve como objetivo construir um sistema de informação voltado à gestão e acompanhamento de scores de alunos, permitindo o controle de turmas, grupos, entregas e métricas de desempenho acadêmico. O sistema busca proporcionar uma visão consolidada do progresso dos estudantes e facilitar o trabalho dos coordenadores e professores no acompanhamento de atividades e resultados, promovendo a integração entre tecnologia, aprendizado ativo e gestão educacional.</p>

										<p>GitHub do Projeto: <a href="#" target="_blank" rel="noopener noreferrer">ver repositório</a></p>

										<h6 className="mt-3">Tecnologias Utilizadas</h6>
										<ul>
											<li>Python – linguagem principal de desenvolvimento.</li>
											<li>HTML e CSS – estrutura e estilização das interfaces.</li>
											<li>JavaScript – interatividade e dinamicidade do front-end.</li>
											<li>Canva – design e prototipação visual.</li>
											<li>Git e GitHub – versionamento e colaboração de código.</li>
											<li>JExcalidraw – criação de diagramas e modelagem visual.</li>
											<li>JSON/CSV – armazenamento e manipulação de dados.</li>
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