import React from "react";
import ReposList from "./components/ReposList";
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
							Sou Ruth Mira, estudante do 6º semestre de Banco de Dados e desenvolvedora full stack no Grupo TXAI. Minha trajetória na tecnologia começou durante minha primeira graduação em Engenharia na UNIFESP, onde tive contato com lógica de programação e algoritmos. Apesar de sempre gostar de computadores e games, foi nesse período que descobri maior interesse pela área de desenvolvimento.
						</p>
						<p style={{ textAlign: "justify" }}>
							Antes de migrar para TI, trabalhei com recrutamento e seleção. Depois decidi seguir carreira em tecnologia, ingressei na FATEC e iniciei o curso de Banco de Dados. Desde então, participei de projetos acadêmicos e profissionais, atuando como desenvolvedora no 1º Cartório de Registro de Imóveis de São José dos Campos ainda no primeiro ano da faculdade, e posteriormente no Grupo TXAI, empresa voltada a soluções para cartórios.
						</p>
						<p style={{ textAlign: "justify" }}>
							Busco evoluir constantemente, estudando documentação técnica, boas práticas, novas tecnologias, bibliotecas e ferramentas que surgem no mercado. Tenho interesse em desafios reais de desenvolvimento e em soluções que conectem banco de dados, backend e frontend de forma eficiente.
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
							<a href="https://www.linkedin.com/in/ruth-mira" target="_blank" rel="noopener noreferrer" className="contact-badge" aria-label="LinkedIn">
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
							<span className="skill-badge">🌱 Spring Security</span>
							<span className="skill-badge">🍃 Thymeleaf</span>
							<span className="skill-badge">📘 Swagger / OpenAPI</span>
							<span className="skill-badge">🟨 JavaScript</span>
							<span className="skill-badge">🔷 TypeScript</span>
							<span className="skill-badge">🖖 Vue.js</span>
							<span className="skill-badge">⚛️ React</span>
							<span className="skill-badge">⚡ FastAPI</span>
							<span className="skill-badge">🌐 Django</span>
							<span className="skill-badge">🐍 Python</span>
							<span className="skill-badge">🐬 MySQL</span>
							<span className="skill-badge">🐘 PostgreSQL</span>
							<span className="skill-badge">🍃 MongoDB</span>
							<span className="skill-badge">🔶 Oracle</span>
							<span className="skill-badge">📐 Vertabelo</span>
							<span className="skill-badge">🗄️ Data Warehouse</span>
							<span className="skill-badge">📊 OLAP</span>
							<span className="skill-badge">🧭 ETL</span>
							<span className="skill-badge">🤖 IA</span>
							<span className="skill-badge">📈 Machine Learning</span>
							<span className="skill-badge">🟩 Node.js</span>
							<span className="skill-badge">🟣 .NET</span>
							<span className="skill-badge">🧠 Redis</span>
							<span className="skill-badge">🐳 Docker</span>
							<span className="skill-badge">☁️ Máquinas Virtuais</span>
							<span className="skill-badge">🌐 Configuração de Rede</span>
							<span className="skill-badge">🚀 Deploy em VM</span>
							<span className="skill-badge">🔐 Keycloak</span>
							<span className="skill-badge">✅ GitHub Actions</span>
							<span className="skill-badge">⚙️ DevOps</span>
							<span className="skill-badge">📌 Jira</span>
							<span className="skill-badge">📚 Confluence</span>
							<span className="skill-badge">💬 Slack</span>
							<span className="skill-badge">🔍 SonarQube</span>
							<span className="skill-badge">🧪 Testes</span>
							<span className="skill-badge">🔒 LGPD</span>
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
										Semestre 1 — PBLTex (2023-2)
									</button>
								</h2>
								<div id="sem1Collapse" className="accordion-collapse collapse" aria-labelledby="sem1Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>A <strong>PBLTex</strong> é uma instituição de ensino especializada em cursos baseados na metodologia <strong>Problem Based Learning (PBL)</strong>, na qual o aprendizado acontece pela resolução de problemas reais em equipe e o desempenho dos alunos é avaliado de forma contínua, ao longo de ciclos de entrega. Esse modelo torna o acompanhamento naturalmente complexo: há várias turmas, grupos de alunos dentro de cada turma e diversos ciclos, cada um gerando scores parciais. Sem uma ferramenta dedicada, esse controle pode ficar espalhado em planilhas dispersas, dificultando a consolidação das notas, a visualização da evolução dos alunos e grupos e a extração de métricas para apoiar decisões pedagógicas.</p>
										<p>Para resolver isso, desenvolvemos um sistema de informação para gestão e acompanhamento de scores, organizado em torno da estrutura real da instituição: turmas, grupos, alunos e ciclos de entrega. Construído em <strong>Python</strong>, o sistema centraliza o cadastro e a carga de alunos e scores parciais, calcula métricas consolidadas a partir dos dados brutos, permite configurar parâmetros globais de avaliação e exporta os resultados computados. Com isso, oferece visualizações objetivas para acompanhar o desempenho por aluno, grupo e turma, transformando dados dispersos em informação útil para o acompanhamento dos cursos da PBLTex.</p>

										<div className="project-link-box">
											<span>Repositório do projeto</span>
											<a href="https://github.com/RuthMira/API1BD" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
										</div>

										<h6 className="section-title">Tecnologias Utilizadas</h6>
										<div className="tech-list">
											<a className="tech-item" href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Python</span>
												<span className="tech-desc">Linguagem principal do sistema</span>
											</a>
											<a className="tech-item" href="https://developer.mozilla.org/en-US/docs/Web" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">HTML e CSS</span>
												<span className="tech-desc">Estrutura e estilização das telas</span>
											</a>
											<a className="tech-item" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JavaScript</span>
												<span className="tech-desc">Interatividade no front-end</span>
											</a>
											<a className="tech-item" href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Canva</span>
												<span className="tech-desc">Design e prototipação visual</span>
											</a>
											<a className="tech-item" href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Git e GitHub</span>
												<span className="tech-desc">Versionamento e colaboração</span>
											</a>
											<a className="tech-item" href="https://excalidraw.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JExcalidraw</span>
												<span className="tech-desc">Diagramas e modelagem visual</span>
											</a>
											<a className="tech-item" href="https://www.json.org/json-en.html" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JSON/CSV</span>
												<span className="tech-desc">Armazenamento e manipulação de dados</span>
											</a>
										</div>

										<h6 className="section-title">Contribuições Pessoais</h6>
										<div className="contribution-text">
											<p>Na API 1, eu estava começando minha trajetória em desenvolvimento, e isso definiu onde pude contribuir no início: enquanto os integrantes mais experientes assumiam as partes mais complexas de CRUD, regras de cálculo e lógica em JavaScript, concentrei minha atuação no <strong>front-end</strong>, com <strong>HTML e CSS</strong>. Trabalhei na construção, estilização e <strong>padronização visual</strong> das telas, cuidando da <strong>responsividade</strong> e da organização da interface para deixar a aplicação mais clara, consistente e fácil de usar.</p>
											<p>Conforme o sistema crescia, percebi um problema que ainda precisava de atenção: o repositório começava a ficar desorganizado, com arquivos de front-end, back-end, imagens e estilos misturados. Assumi parte da <strong>estruturação e organização do projeto</strong>, separando melhor essas camadas para evitar que a base de código se tornasse um obstáculo conforme novas funcionalidades entravam. Foi a primeira vez que contribuí pensando não só na tela, mas na <strong>manutenibilidade</strong> do que estávamos construindo.</p>
											<p>Paralelamente, me envolvi na <strong>documentação</strong> e no <strong>levantamento das regras de negócio</strong>. Esse trabalho foi o que me deu base para entender de fato o problema que estávamos resolvendo: registrar o que precisava ser desenvolvido e alinhar as funcionalidades com a proposta da aplicação me obrigou a enxergar o sistema inteiro, não apenas a parte visual. Foi também nesse processo que ajudei a organizar o <strong>diagrama</strong> de telas, entidades e fluxos principais que guiou o desenvolvimento.</p>
											<div className="project-media">
												<img
													src={`${process.env.PUBLIC_URL}/assets/api1/telas-api.png`}
													alt="Diagrama das telas do projeto PBLTex"
													className="project-image"
												/>
												<p className="project-caption">Diagrama utilizado para organizar as telas, entidades e fluxos principais da aplicação durante o desenvolvimento.</p>
											</div>
											<p>À medida que estudei e passei a entender melhor <strong>JavaScript</strong> e a lógica do sistema, migrei para tarefas de <strong>CRUD</strong>, funcionalidades ligadas aos <strong>cálculos de scores</strong> e <strong>testes manuais</strong> da plataforma. Não assumi as decisões técnicas mais complexas no início, mas usei cada oportunidade para aprender programação na prática. Esse foi o ponto de virada do projeto para mim: comecei atuando na interface e na organização e terminei participando da lógica, da validação e do funcionamento da aplicação.</p>
										</div>

										<h6 className="section-title">Hard Skills Trabalhadas</h6>
										<ul className="skill-level-list">
											<li><strong>HTML5</strong> — básico/intermediário</li>
											<li><strong>CSS3</strong> — básico/intermediário</li>
											<li><strong>JavaScript</strong> — básico</li>
											<li><strong>Python</strong> — básico</li>
											<li><strong>Git e GitHub</strong> — básico</li>
											<li><strong>UI Design e responsividade</strong> — básico</li>
											<li><strong>Documentação técnica</strong> — básico</li>
											<li><strong>Testes manuais</strong> — básico</li>
										</ul>

										<h6 className="section-title">Soft Skills Trabalhadas</h6>
										<div className="contribution-text">
											<p>Por ser o primeiro semestre, o <strong>trabalho em equipe</strong> foi o maior desafio. O grupo ainda estava se conhecendo, com relações em construção e perfis de liderança fortes. Como eu era mais tímida e ainda aprendia a programar, precisei desenvolver minha <strong>comunicação</strong> para acompanhar as decisões, tirar dúvidas e identificar onde poderia contribuir de verdade, em vez de ficar à margem esperando uma tarefa aparecer.</p>
											<p>Esse contexto fortaleceu minha <strong>colaboração</strong>, muitas vezes de forma indireta: organizando telas, documentando regras, ajustando detalhes visuais, apoiando testes e observando como os mais experientes resolviam os problemas. A <strong>proatividade</strong> apareceu exatamente nesse movimento de buscar contribuir dentro do que eu já conseguia fazer, sem me afastar das partes difíceis que ainda não dominava. Em vez de travar pelo que eu não sabia, entreguei pelo que sabia e fui aprendendo o restante.</p>
											<p>A experiência também desenvolveu minha <strong>atenção aos detalhes</strong>, visível no cuidado com a consistência visual e nos testes manuais, e meu <strong>aprendizado contínuo</strong>. Tratei a API como uma oportunidade para aprender a programar, entender a dinâmica de um projeto real e ganhar confiança para participar tecnicamente nos semestres seguintes.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Semestre 2 (modelo: texto do Semestre 3) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem2Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem2Collapse" aria-expanded="false" aria-controls="sem2Collapse">
										Semestre 2 — PorygonAPI (2024-1)
									</button>
								</h2>
								<div id="sem2Collapse" className="accordion-collapse collapse" aria-labelledby="sem2Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">

										<p>No segundo semestre (2024-1), o projeto foi desenvolvido para um professor que atuou como cliente, trazendo a necessidade de uma ferramenta desktop para consolidar dados climáticos de cidades do estado de São Paulo. O problema envolvia importar arquivos CSV de estações meteorológicas, validar os registros recebidos, separar valores suspeitos para revisão e armazenar as informações em um banco de dados relacional estruturado.</p>
										<p>Como solução, desenvolvemos a <strong>EMA (Estação Meteorológica Automatizada)</strong>, nome da aplicação criada em Java Desktop com persistência via <strong>JDBC</strong>. O sistema permitia gerenciar estações, cidades e unidades de medida, carregar e validar dados climáticos, revisar registros suspeitos e gerar relatórios de apoio à análise, como médias por cidade e período, relatório de situação das últimas medidas e informações necessárias para construção de boxplots.</p>

										<div className="project-link-box">
											<span>Repositório do projeto</span>
											<a href="https://github.com/RuthMira/API2BD" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
										</div>

										<h6 className="section-title">Tecnologias Utilizadas</h6>
										<div className="tech-list">
											<a className="tech-item" href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Java SE</span>
												<span className="tech-desc">Base da aplicação desktop</span>
											</a>
											<a className="tech-item" href="https://openjfx.io/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JavaFX</span>
												<span className="tech-desc">Construção da interface gráfica</span>
											</a>
											<a className="tech-item" href="https://docs.oracle.com/javase/tutorial/jdbc/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JDBC</span>
												<span className="tech-desc">Integração entre aplicação e banco</span>
											</a>
											<a className="tech-item" href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">MySQL</span>
												<span className="tech-desc">Armazenamento dos dados climáticos</span>
											</a>
											<a className="tech-item" href="https://docs.oracle.com/javase/tutorial/deployment/jar/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JAR</span>
												<span className="tech-desc">Empacotamento da aplicação</span>
											</a>
											<a className="tech-item" href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Git e GitHub</span>
												<span className="tech-desc">Versionamento e colaboração</span>
											</a>
										</div>

										<h6 className="section-title">Contribuições Pessoais</h6>
										<div className="contribution-text">
											<p>No segundo semestre, eu já trabalhava em tempo integral no cartório e começava a desenvolver mais o meu lado de programação. Esse semestre trouxe também uma virada de contexto: parte dos colegas anteriores trancou o curso ou mudou de grupo, então pedi para entrar no Porygon, onde encontrei uma nova equipe e uma pessoa que acabou se tornando minha dupla em vários momentos de código.</p>
											<p>Comecei novamente pelo <strong>front-end</strong>, por ser onde eu tinha mais segurança, mas dessa vez o terreno era diferente: uma aplicação <strong>desktop em Java</strong>, com <strong>JavaFX</strong> e empacotamento em <strong>JAR</strong>, um formato que eu nunca tinha visto. Isso me obrigou a <strong>estudar a estrutura do projeto</strong> do zero, entendendo a organização das telas e, principalmente, a forma de integrar a interface com a lógica da aplicação.</p>
											<p>Atuei no <strong>design e na construção das telas</strong> e, a partir daí, comecei a participar de funcionalidades de <strong>CRUD</strong>, <strong>validações</strong> e da <strong>integração entre a interface gráfica e o banco via JDBC</strong>. Não foi um percurso linear: tive dificuldade em entregar algumas tarefas no ritmo esperado, em parte pela organização do projeto, em parte por ainda estar aplicando os conceitos na prática pela primeira vez. Em vez de travar nisso, me apoiei em um dos desenvolvedores do grupo e fui destravando as entregas conforme o projeto avançava.</p>
											<div className="project-media">
												<img
													src={`${process.env.PUBLIC_URL}/assets/api2/boxplot.png`}
													alt="Estudo visual sobre boxplot e identificação de outliers"
													className="project-image"
												/>
												<p className="project-caption">Estudo usado para entender a lógica dos relatórios estatísticos, boxplot e identificação de registros suspeitos.</p>
											</div>
											<p>Na reta final, concentrei minha atuação nas rotinas de <strong>relatórios</strong>, e foi aqui que mais cresci tecnicamente nesse projeto. Precisei entender de fato a lógica por trás das <strong>médias por cidade e período</strong>, dos <strong>boxplots</strong> e da <strong>identificação de registros suspeitos e valores anômalos</strong>, além de fazer os <strong>testes manuais</strong> da plataforma. Essa API foi importante justamente por isso: me tirou do território apenas da interface e me aproximou da <strong>lógica de negócio</strong>, da <strong>persistência de dados</strong> e da <strong>análise dos dados climáticos</strong>.</p>
										</div>

										<h6 className="section-title">Hard Skills Trabalhadas</h6>
										<ul className="skill-level-list">
											<li><strong>Java SE</strong> — básico/intermediário</li>
											<li><strong>JavaFX</strong> — básico/intermediário</li>
											<li><strong>JDBC</strong> — básico</li>
											<li><strong>MySQL</strong> — básico/intermediário</li>
											<li><strong>CRUD</strong> — básico/intermediário</li>
											<li><strong>Validações</strong> — básico/intermediário</li>
											<li><strong>Integração GUI-banco</strong> — básico/intermediário</li>
											<li><strong>Relatórios estatísticos</strong> — básico</li>
											<li><strong>Boxplot e valores anômalos</strong> — básico</li>
											<li><strong>Git e GitHub</strong> — intermediário</li>
											<li><strong>Testes manuais</strong> — intermediário</li>
										</ul>

										<h6 className="section-title">Soft Skills Trabalhadas</h6>
										<div className="contribution-text">
											<p>Esse semestre exigiu <strong>adaptação</strong> em três frentes ao mesmo tempo: entrar em um grupo novo, aprender uma tecnologia que eu não dominava e conciliar tudo isso com o trabalho em tempo integral. A mudança de equipe fortaleceu minha <strong>comunicação</strong>, porque eu precisava entender como o grupo trabalhava, <strong>pedir ajuda no momento certo</strong> e alinhar minhas entregas com pessoas que já tinham mais experiência, algo que foi uma evolução concreta em relação à timidez do primeiro semestre.</p>
											<p>O projeto também desenvolveu meu <strong>trabalho em equipe</strong> e meu <strong>aprendizado contínuo</strong>. Mesmo com dificuldades de ritmo, procurei estudar por fora, acompanhar quem tinha mais domínio técnico e avançar nas partes em que eu conseguia contribuir. Foi onde mais exercitei a <strong>persistência</strong>: em vez de recuar diante do que não saía no ritmo esperado, insisti até destravar. No fim, isso reforçou minha <strong>atenção aos detalhes</strong> e minha confiança para participar de funcionalidades mais próximas da lógica do sistema nos semestres seguintes.</p>
										</div>
									</div>
								</div>
							</div>


							{/* Semestre 3 (texto original mantido) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem3Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem3Collapse" aria-expanded="false" aria-controls="sem3Collapse">
										Semestre 3 — Porygon2 (2024-2)
									</button>
								</h2>
								<div id="sem3Collapse" className="accordion-collapse collapse" aria-labelledby="sem3Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No terceiro semestre (2024-2), o projeto foi desenvolvido em parceria com a <strong>GSW (Global Solutions & Web)</strong>, que trouxe a necessidade de uma ferramenta para capturar, armazenar e organizar notícias estratégicas e dados relevantes vindos de diferentes fontes. O problema envolvia lidar com portais de notícias e APIs públicas, cada um com formatos, estruturas e frequências de atualização diferentes, o que tornava inviável acompanhar manualmente, de forma padronizada e confiável, as informações de interesse. Sem uma forma de centralizar e estruturar esse conteúdo disperso, ficava difícil identificar tendências e enxergar o que o mercado dizia sobre determinados assuntos a tempo de embasar decisões.</p>
										<p>Como solução, desenvolvemos a <strong>Porygon</strong>, uma aplicação web em Java com Spring Boot voltada ao cadastro de tags, portais, seletores HTML e APIs externas. O sistema permitia configurar fontes de dados, validar URLs e seletores, realizar web scraping com Jsoup, consumir APIs em formatos como JSON, XML e CSV, armazenar as informações em banco relacional e organizar os dados coletados por tags e sinônimos. A organização por tags era o que dava inteligência à ferramenta: ao agrupar e cruzar notícias de fontes distintas sobre um mesmo tema, era possível comparar informações e acompanhar tendências de mercado, transformando fontes dispersas em uma base consultável e estruturada que ajudava os usuários a ler o que é relevante sobre um assunto e tomar decisões fundamentadas.</p>

										<div className="project-link-box">
											<span>Repositório do projeto</span>
											<a href="https://github.com/RuthMira/API3BD" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
										</div>

										<h6 className="section-title">Tecnologias Utilizadas</h6>
										<div className="tech-list">
											<a className="tech-item" href="https://docs.oracle.com/en/java/javase/22/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Java 22</span>
												<span className="tech-desc">Linguagem base da aplicação</span>
											</a>
											<a className="tech-item" href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Spring Boot</span>
												<span className="tech-desc">Backend, MVC e APIs</span>
											</a>
											<a className="tech-item" href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">MySQL</span>
												<span className="tech-desc">Banco de dados relacional</span>
											</a>
											<a className="tech-item" href="https://vertabelo.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Vertabelo</span>
												<span className="tech-desc">Modelagem física do banco</span>
											</a>
											<a className="tech-item" href="https://jsoup.org/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Jsoup</span>
												<span className="tech-desc">Raspagem de dados em sites</span>
											</a>
											<a className="tech-item" href="https://www.thymeleaf.org/documentation.html" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Thymeleaf</span>
												<span className="tech-desc">Templates da interface web</span>
											</a>
											<a className="tech-item" href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Maven</span>
												<span className="tech-desc">Gerenciamento de dependências</span>
											</a>
											<a className="tech-item" href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Jira</span>
												<span className="tech-desc">Organização das tarefas</span>
											</a>
										</div>

										<h6 className="section-title">Contribuições Pessoais</h6>
										<div className="contribution-text">
											<p>No terceiro semestre, eu já tinha mais confiança técnica, e isso se materializou de uma forma que não estava planejada: <strong>atuei como tech lead na prática</strong>. Não foi um cargo formal como Product Owner ou Scrum Master, mas um papel que assumi quando o membro com maior conhecimento técnico precisou se ausentar em vários momentos. Com essa lacuna, acabei me tornando uma <strong>referência técnica para os colegas</strong>, que passaram a me procurar para destravar problemas e apoiar decisões de implementação.</p>
											<p>Esse contexto me empurrou para a frente justamente nas situações mais críticas. Quando havia <strong>bugs que não avançavam</strong>, eu entrava para investigar, debugar e finalizar as correções, com o apoio de outros colegas. Foi nesse semestre que desenvolvi de verdade minha <strong>segurança no código</strong>: ter que ser a pessoa que fecha o problema, e não só a que ajuda, mudou minha relação com o desenvolvimento.</p>
											<p>Foi também aqui que comecei a atuar com mais profundidade em <strong>banco de dados</strong>. Trabalhamos com um banco real e foquei bastante na <strong>modelagem</strong>, em especial no <strong>modelo físico feito no Vertabelo</strong>. Tinha dificuldade com a parte teórica da disciplina de modelagem, mas foi aplicando na prática, criando estruturas, desenvolvendo CRUDs e conectando o banco à aplicação, que os conceitos começaram a fazer mais sentido.</p>
											<div className="project-media">
												<img
													src={`${process.env.PUBLIC_URL}/assets/api3/modelo-fisico.png`}
													alt="Modelo físico do banco de dados da API 3"
													className="project-image"
												/>
												<p className="project-caption">Modelo físico criado no Vertabelo para organizar as entidades, relacionamentos e estrutura do banco de dados da aplicação.</p>
											</div>
											<p>No backend, participei do desenvolvimento dos <strong>CRUDs</strong> e da organização da aplicação com <strong>Spring Boot</strong>, criando estruturas relacionadas a portais, tags, notícias, APIs e jornalistas. Também apoiei a <strong>lógica de raspagem de dados com Jsoup</strong>, uma das partes que mais me chamou atenção, porque envolvia capturar informação de sites reais e transformá-la em algo útil dentro do sistema.</p>
										</div>

										<h6 className="section-title">Hard Skills Trabalhadas</h6>
										<ul className="skill-level-list">
											<li><strong>Java</strong> — intermediário/avançado</li>
											<li><strong>Spring Boot</strong> — intermediário</li>
											<li><strong>MySQL</strong> — intermediário/avançado</li>
											<li><strong>Modelagem de banco de dados</strong> — intermediário</li>
											<li><strong>Vertabelo</strong> — intermediário</li>
											<li><strong>Maven</strong> — intermediário</li>
											<li><strong>Thymeleaf</strong> — intermediário</li>
											<li><strong>Jsoup / Web scraping</strong> — intermediário</li>
											<li><strong>Jackson</strong> — básico/intermediário</li>
											<li><strong>Debugging</strong> — intermediário</li>
											<li><strong>Jira</strong> — básico/intermediário</li>
											<li><strong>Git e GitHub</strong> — intermediário/avançado</li>
										</ul>

										<h6 className="section-title">Soft Skills Trabalhadas</h6>
										<div className="contribution-text">
											<p>Esse semestre desenvolveu fortemente minha <strong>liderança técnica</strong>, minha <strong>proatividade</strong> e minha <strong>resolução de problemas</strong>. Com as mudanças na equipe e a ausência de pessoas tecnicamente importantes, não dava para esperar: precisei assumir responsabilidade, investigar bugs, apoiar decisões técnicas e manter as entregas andando. O ponto de virada foi perceber que os colegas me viam como a pessoa que destravava os problemas, e responder a essa expectativa em vez de recuar dela.</p>
											<p>Trabalhei bastante também a <strong>comunicação</strong> e a <strong>organização</strong>, principalmente pelo uso do <strong>Jira</strong> e pela necessidade de traduzir regras de negócio em tarefas claras, com critérios de aceite bem definidos, papel em que apoiei diretamente a PO. A troca de membros e a adaptação a uma nova Scrum Master tornaram esse processo mais desafiador, mas também amadureceram minha forma de colaborar.</p>
											<p>No fim da API, saí com uma evolução clara em <strong>liderança técnica</strong>, <strong>atenção aos detalhes</strong> e <strong>trabalho em equipe</strong>: passei a ser uma pessoa de referência para desbloquear problemas, apoiar os colegas e <strong>conectar o entendimento de negócio à implementação técnica</strong>, que talvez tenha sido a habilidade mais valiosa que esse semestre me deu.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Semestre 4 (modelo: texto do Semestre 3 + ApiTemplate para preencher) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem4Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem4Collapse" aria-expanded="false" aria-controls="sem4Collapse">
										Semestre 4 — Porygon3 (2025-1)
									</button>
								</h2>
								<div id="sem4Collapse" className="accordion-collapse collapse" aria-labelledby="sem4Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">

										<p>No quarto semestre (2025-1), o projeto foi desenvolvido em parceria com a <strong>Visiona</strong>, com o tema de manipulação de dados armazenados em banco relacional, visualização em tela e acesso por meio de APIs. O problema envolvia apoiar o acompanhamento de áreas agrícolas, mapas de classificação automática, atividades de analistas e métricas de produtividade, garantindo que consultores, analistas e administradores tivessem acesso às informações corretas conforme suas permissões. O desafio central estava nos <strong>dados geoespaciais</strong>: as áreas agrícolas eram representadas por pontos e vetores em formato <strong>GeoJSON</strong>, e era preciso exibi-los sobre um mapa interativo para que pudessem ser analisados e corrigidos de forma visual, não apenas como registros em tabela.</p>

										<p>Como solução, desenvolvemos uma aplicação web composta por backend e frontend, com <strong>APIs RESTful</strong>, autenticação, controle de usuários, cadastro de áreas agrícolas, visualização e edição de mapas, aprovação de classificações automáticas e dashboards de acompanhamento. O sistema utilizava banco de dados <strong>Oracle</strong>, integração com <strong>JPA/Hibernate</strong> e uma interface em <strong>Vue.js</strong>. Os dados GeoJSON eram plotados em camadas sobre um mapa interativo, permitindo que os analistas sobrepusessem a marcação automática das ervas daninhas a uma imagem de base da área e comparassem o que era produção real e o que era erva daninha. A partir dessa análise, o analista editava as marcações e gerava um novo dado contendo apenas a área de produção, transformando a classificação automática bruta em uma base validada e confiável para acompanhamento.</p>

										<div className="project-link-box">
											<span>Repositório do projeto</span>
											<a href="https://github.com/RuthMira/API4BD" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
										</div>

										<h6 className="section-title">Tecnologias Utilizadas</h6>
										<div className="tech-list">
											<a className="tech-item" href="https://docs.oracle.com/en/java/javase/22/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Java 22</span>
												<span className="tech-desc">Linguagem base do backend</span>
											</a>
											<a className="tech-item" href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Spring Boot</span>
												<span className="tech-desc">APIs RESTful e arquitetura modular</span>
											</a>
											<a className="tech-item" href="https://docs.oracle.com/en/database/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Oracle</span>
												<span className="tech-desc">Banco de dados relacional</span>
											</a>
											<a className="tech-item" href="https://hibernate.org/orm/documentation/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JPA/Hibernate</span>
												<span className="tech-desc">Persistência e mapeamento relacional</span>
											</a>
											<a className="tech-item" href="https://spring.io/projects/spring-security" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Spring Security</span>
												<span className="tech-desc">Autenticação e controle de acesso</span>
											</a>
											<a className="tech-item" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Vue.js</span>
												<span className="tech-desc">Interface web e gerenciamento de estado</span>
											</a>
											<a className="tech-item" href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Docker</span>
												<span className="tech-desc">Apoio à containerização do ambiente</span>
											</a>
											<a className="tech-item" href="https://docs.github.com/en/issues/planning-and-tracking-with-projects" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">GitHub Projects</span>
												<span className="tech-desc">Organização das sprints e tarefas</span>
											</a>
										</div>

										<h6 className="section-title">Contribuições Pessoais</h6>
										<div className="contribution-text">
											<p>Na API 4, atuei tanto na parte técnica quanto na organização do projeto. No backend, contribuí com a criação e manutenção de endpoints RESTful em Spring Boot, implementação de entidades e relacionamentos, padronização de services, controllers e DTOs, além de ajustes em queries e estruturas voltadas aos relatórios de produtividade e acompanhamento.</p>
											<p>Também participei da integração entre backend, banco Oracle e frontend em Vue.js, apoiando telas relacionadas ao cadastro e visualização de áreas agrícolas, dashboards e relatórios. O projeto exigia que os dados fossem acessados por perfis diferentes, então a organização de permissões, autenticação e fluxo de uso também foi uma parte importante da solução.</p>
											<div className="project-media">
												<img
													src={`${process.env.PUBLIC_URL}/assets/api4/wireframe-analista.png`}
													alt="Wireframe das telas do perfil analista na API 4"
													className="project-image"
												/>
												<p className="project-caption">Wireframe usado para planejar a experiência do analista na visualização, edição e aprovação de mapas de classificação.</p>
											</div>
											<p>Além do desenvolvimento, também tive participação em organização ágil. Atuei como Scrum Master no início do projeto, conduzindo cerimônias e acompanhando o andamento das entregas. Depois, assumi atividades próximas ao papel de Product Owner, ajudando na priorização do backlog, refinamento de histórias, validação de entregas e atualização da documentação técnica.</p>
										</div>

										<h6 className="section-title">Hard Skills Trabalhadas</h6>
										<ul className="skill-level-list">
											<li><strong>Java</strong> — avançado</li>
											<li><strong>Spring Boot</strong> — avançado</li>
											<li><strong>APIs RESTful</strong> — avançado</li>
											<li><strong>JPA/Hibernate</strong> — intermediário/avançado</li>
											<li><strong>Oracle</strong> — intermediário</li>
											<li><strong>Spring Security</strong> — intermediário</li>
											<li><strong>Vue.js</strong> — intermediário</li>
											<li><strong>Docker</strong> — básico/intermediário</li>
											<li><strong>Dashboards e relatórios</strong> — intermediário</li>
											<li><strong>GitHub Projects</strong> — intermediário</li>
											<li><strong>Git e GitHub</strong> — avançado</li>
										</ul>

										<h6 className="section-title">Soft Skills Trabalhadas</h6>
										<div className="contribution-text">
											<p>Essa API desenvolveu bastante minha <strong>liderança</strong>, <strong>organização</strong> e <strong>comunicação</strong>, porque precisei transitar entre papéis técnicos e de gestão. Atuar como Scrum Master e depois apoiar atividades de Product Owner exigiu acompanhar entregas, entender demandas, organizar prioridades e manter o time alinhado.</p>
											<p>Também trabalhei <strong>proatividade</strong>, <strong>resolução de conflitos</strong> e <strong>atenção aos detalhes</strong>, principalmente por lidar com um sistema que envolvia diferentes perfis de usuário, regras de permissão, visualização de mapas e métricas de produtividade. Foi um semestre importante para consolidar minha capacidade de conectar requisitos de negócio, organização de equipe e implementação técnica.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Semestre 5 (estrutura para preenchimento) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem5Heading">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sem5Collapse" aria-expanded="true" aria-controls="sem5Collapse">
										Semestre 5 — Athos Insight (2025-2)
									</button>
								</h2>
								<div id="sem5Collapse" className="accordion-collapse collapse show" aria-labelledby="sem5Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No quinto semestre (2025-2), desenvolvemos o <strong>Athos Insight</strong>, uma ferramenta analítica para gestão de projetos. O desafio era consumir dados de um sistema de gestão via API, consolidá-los em um <strong>Data Warehouse</strong> e, a partir dessa base, gerar indicadores, dashboards e relatórios gerenciais. A solução precisava permitir o acompanhamento de horas lançadas, custos, prazos, produtividade individual e por equipe, além de diferenciar perfis de acesso como Gerente, Líder e Membro, garantindo segurança e privacidade das informações.</p>
										<p>Como solução, o Athos Insight foi construído como uma plataforma web em modelo <strong>SaaS</strong>, hospedada em uma máquina virtual na Microsoft Azure. A aplicação centraliza e organiza dados de projetos em um Data Warehouse, transformando-os em informações estratégicas para tomada de decisão. O sistema permite monitorar produtividade, comparar custos previstos e realizados, visualizar dashboards financeiros e operacionais, acompanhar tarefas, bugs e issues, exportar relatórios em PDF e manter os dados organizados para análise gerencial.</p>

										<div className="project-link-box">
											<span>Repositório do projeto</span>
											<a href="https://github.com/RuthMira/API5BD" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
										</div>

										<h6 className="section-title">Tecnologias Utilizadas</h6>
										<div className="tech-list">
											<a className="tech-item" href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Python 3.11</span>
												<span className="tech-desc">Linguagem base da aplicação</span>
											</a>
											<a className="tech-item" href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Django</span>
												<span className="tech-desc">Framework web do backend</span>
											</a>
											<a className="tech-item" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">JavaScript</span>
												<span className="tech-desc">Interatividade na interface</span>
											</a>
											<a className="tech-item" href="https://htmx.org/docs/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">HTMX</span>
												<span className="tech-desc">Atualizações dinâmicas no front-end</span>
											</a>
											<a className="tech-item" href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">PostgreSQL</span>
												<span className="tech-desc">Banco de dados relacional</span>
											</a>
											<a className="tech-item" href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Docker</span>
												<span className="tech-desc">Containerização do ambiente</span>
											</a>
											<a className="tech-item" href="https://azure.microsoft.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Microsoft Azure</span>
												<span className="tech-desc">Hospedagem em máquina virtual</span>
											</a>
											<a className="tech-item" href="https://learn.microsoft.com/azure/virtual-machines/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Máquina Virtual</span>
												<span className="tech-desc">Deploy e configuração do ambiente</span>
											</a>
											<a className="tech-item" href="https://learn.microsoft.com/azure/virtual-network/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Rede em Nuvem</span>
												<span className="tech-desc">Configuração de acesso e conectividade</span>
											</a>
											<a className="tech-item" href="https://www.sonarsource.com/products/sonarcloud/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">SonarQube</span>
												<span className="tech-desc">Monitoramento da qualidade do código</span>
											</a>
										</div>

										<h6 className="section-title">Contribuições Pessoais</h6>
										<div className="contribution-text">
											<p>Nessa API, atuei como <strong>Product Owner</strong>, com foco em transformar as necessidades do projeto em requisitos, histórias e entregas organizadas. Participei da definição do backlog, priorização das funcionalidades, critérios de aceite e alinhamento da solução com os objetivos de gestão de projetos, produtividade e análise financeira.</p>
											<p>Também contribuí para a documentação, entendimento das regras de negócio e acompanhamento das entregas relacionadas aos dashboards, relatórios, perfis de usuário e organização dos dados. Como o projeto envolvia Data Warehouse e indicadores gerenciais, foi importante conectar a visão de negócio com a estrutura técnica necessária para transformar dados brutos em informação útil.</p>
											<div className="project-media">
												<img
													src={`${process.env.PUBLIC_URL}/assets/api5/olap-data-warehouse.webp`}
													alt="Modelo OLAP do Data Warehouse do Athos Insight"
													className="project-image"
												/>
												<p className="project-caption">Modelo OLAP utilizado para estruturar o Data Warehouse e apoiar a análise de horas, custos, colaboradores e projetos.</p>
											</div>
											<p>O projeto também exigiu atenção à organização do fluxo de trabalho, documentação do produto, integração com dados externos e comunicação com a equipe para garantir que as entregas técnicas refletissem as necessidades de acompanhamento gerencial.</p>
										</div>

										<h6 className="section-title">Hard Skills Trabalhadas</h6>
										<ul className="skill-level-list">
											<li><strong>Python</strong> — intermediário</li>
											<li><strong>Django</strong> — intermediário</li>
											<li><strong>PostgreSQL</strong> — intermediário</li>
											<li><strong>Data Warehouse</strong> — intermediário</li>
											<li><strong>Modelagem OLAP</strong> — intermediário</li>
											<li><strong>Consumo de APIs</strong> — intermediário</li>
											<li><strong>Dashboards e relatórios gerenciais</strong> — intermediário/avançado</li>
											<li><strong>Docker</strong> — intermediário</li>
											<li><strong>Microsoft Azure</strong> — básico/intermediário</li>
											<li><strong>Deploy em máquina virtual</strong> — básico/intermediário</li>
											<li><strong>Configuração de rede em nuvem</strong> — básico/intermediário</li>
											<li><strong>SonarQube</strong> — básico/intermediário</li>
											<li><strong>Git e GitHub</strong> — avançado</li>
										</ul>

										<h6 className="section-title">Soft Skills Trabalhadas</h6>
										<div className="contribution-text">
											<p>Esse semestre desenvolveu principalmente minha <strong>organização</strong>, <strong>comunicação</strong> e <strong>visão de produto</strong>. Atuar como Product Owner exigiu entender o problema, priorizar entregas, alinhar expectativas e manter o backlog claro para que a equipe conseguisse transformar requisitos em funcionalidades úteis.</p>
											<p>Também trabalhei <strong>liderança</strong>, <strong>responsabilidade</strong> e <strong>tomada de decisão</strong>, porque o projeto envolvia muitas camadas: dados, dashboards, permissões, relatórios e infraestrutura. Foi uma experiência importante para amadurecer minha capacidade de conectar necessidade de negócio, planejamento de produto e execução técnica.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Semestre 6 (estrutura para preenchimento) */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="sem6Heading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sem6Collapse" aria-expanded="false" aria-controls="sem6Collapse">
										Semestre 6 — ZEUS (2026-1)
									</button>
								</h2>
								<div id="sem6Collapse" className="accordion-collapse collapse" aria-labelledby="sem6Heading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<p>No sexto semestre (2026-1), o projeto foi desenvolvido para a <strong>Tecsys do Brasil</strong>, empresa que atua com soluções de monitoramento em tempo real para redes de distribuição de energia. O desafio era superar uma barreira estratégica: a ausência de um processo estruturado para ingerir, tratar e analisar dados públicos da <strong>ANEEL</strong>. Sem esse processo, a identificação de regiões críticas dependia de análises manuais, pouco escaláveis e sujeitas a erro, dificultando a priorização de mercado e a definição de estratégias comerciais baseadas em dados.</p>
										<p>Como solução, desenvolvemos o <strong>ZEUS</strong>, uma plataforma web voltada a transformar grandes volumes de dados públicos da ANEEL em inteligência de mercado. A aplicação centraliza o processamento por meio de pipelines de ETL versionados, calcula indicadores como TAM físico, ranking de criticidade baseado em DEC/FEC e previsões por modelos de séries temporais, além de disponibilizar essas informações em APIs e dashboards intuitivos. A arquitetura utiliza MongoDB para dados públicos analíticos e PostgreSQL para dados sensíveis, com requisitos de LGPD tratados como parte do produto.</p>

										<div className="project-link-box">
											<span>Repositório do projeto</span>
											<a href="https://github.com/RuthMira/API6BD" target="_blank" rel="noopener noreferrer">Acessar no GitHub</a>
										</div>

										<h6 className="section-title">Tecnologias Utilizadas</h6>
										<div className="tech-list">
											<a className="tech-item" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">React</span>
												<span className="tech-desc">Interface web do dashboard</span>
											</a>
											<a className="tech-item" href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">TypeScript</span>
												<span className="tech-desc">Tipagem no front-end</span>
											</a>
											<a className="tech-item" href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Vite</span>
												<span className="tech-desc">Build e ambiente front-end</span>
											</a>
											<a className="tech-item" href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Tailwind CSS</span>
												<span className="tech-desc">Estilização da interface</span>
											</a>
											<a className="tech-item" href="https://www.python.org/doc/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Python</span>
												<span className="tech-desc">Processamento e backend</span>
											</a>
											<a className="tech-item" href="https://fastapi.tiangolo.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">FastAPI</span>
												<span className="tech-desc">APIs de dados e análise</span>
											</a>
											<a className="tech-item" href="https://www.postgresql.org/docs/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">PostgreSQL</span>
												<span className="tech-desc">Dados sensíveis e auditoria</span>
											</a>
											<a className="tech-item" href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">MongoDB</span>
												<span className="tech-desc">Dados públicos analíticos</span>
											</a>
											<a className="tech-item" href="https://www.keycloak.org/documentation" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Keycloak</span>
												<span className="tech-desc">Autenticação e segurança</span>
											</a>
											<a className="tech-item" href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Docker</span>
												<span className="tech-desc">Containerização dos serviços</span>
											</a>
											<a className="tech-item" href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">GitHub Actions</span>
												<span className="tech-desc">Automação e CI/CD</span>
											</a>
											<a className="tech-item" href="https://turbo.build/repo/docs" target="_blank" rel="noopener noreferrer">
												<span className="tech-name">Turborepo</span>
												<span className="tech-desc">Organização do monorepo</span>
											</a>
										</div>

										<h6 className="section-title">Contribuições Pessoais</h6>
										<div className="contribution-text">
											<p>Nessa API, minha contribuição esteve ligada ao entendimento do problema de negócio, organização das entregas e conexão entre dados públicos, requisitos de análise e experiência do usuário. O projeto exigia transformar informações brutas e dispersas da ANEEL em indicadores claros para apoiar decisões comerciais e técnicas da Tecsys.</p>
											<p>Também participei da estruturação das funcionalidades relacionadas a dashboards, indicadores DEC/FEC, ranking de criticidade, TAM físico e requisitos de segurança e LGPD. Como o produto envolvia dados públicos, dados sensíveis, autenticação e rastreabilidade, foi necessário pensar a solução não apenas como um dashboard, mas como uma base analítica confiável, auditável e escalável.</p>
											<div className="project-media">
												<img
													src={`${process.env.PUBLIC_URL}/assets/api6/dashboard-zeus.png`}
													alt="Dashboard do projeto ZEUS com indicadores DEC, FEC e áreas críticas"
													className="project-image"
												/>
												<p className="project-caption">Dashboard do ZEUS com indicadores de rede, regiões críticas e dados consolidados para priorização técnica e comercial.</p>
											</div>
											<p>O projeto também teve um módulo de apoio para acompanhamento de burndown, usando Java, GitHub Actions e GitHub API, além de comunicação e organização do time por Slack. Essa combinação reforçou a importância de integrar produto, dados, segurança e automação em uma solução única.</p>
										</div>

										<h6 className="section-title">Hard Skills Trabalhadas</h6>
										<ul className="skill-level-list">
											<li><strong>React</strong> — intermediário</li>
											<li><strong>TypeScript</strong> — intermediário</li>
											<li><strong>FastAPI</strong> — intermediário</li>
											<li><strong>Python</strong> — intermediário/avançado</li>
											<li><strong>PostgreSQL</strong> — intermediário/avançado</li>
											<li><strong>MongoDB</strong> — intermediário</li>
											<li><strong>Keycloak</strong> — básico/intermediário</li>
											<li><strong>Docker</strong> — intermediário</li>
											<li><strong>GitHub Actions</strong> — intermediário</li>
											<li><strong>ETL e versionamento de cargas</strong> — intermediário/avançado</li>
											<li><strong>LGPD, auditoria e consentimento</strong> — intermediário</li>
											<li><strong>Indicadores DEC/FEC, TAM e SAM</strong> — intermediário</li>
											<li><strong>Séries temporais</strong> — básico/intermediário</li>
										</ul>

										<h6 className="section-title">Soft Skills Trabalhadas</h6>
										<div className="contribution-text">
											<p>Essa API exigiu bastante <strong>visão estratégica</strong>, <strong>organização</strong> e <strong>comunicação</strong>, porque o problema não era apenas técnico: ele envolvia transformar dados regulatórios em inteligência de mercado para apoiar decisões reais de expansão comercial.</p>
											<p>Também desenvolvi <strong>pensamento analítico</strong>, <strong>responsabilidade</strong> e <strong>atenção aos detalhes</strong>, principalmente por lidar com dados sensíveis, requisitos de LGPD, rastreabilidade e previsibilidade dos resultados. O projeto reforçou minha capacidade de conectar tecnologia, dados, segurança e tomada de decisão em um produto com impacto direto para o cliente.</p>
										</div>
									</div>
								</div>
							</div>

							{/* Legenda dos níveis técnicos */}
							<div className="accordion-item">
								<h2 className="accordion-header" id="skillLegendHeading">
									<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#skillLegendCollapse" aria-expanded="false" aria-controls="skillLegendCollapse">
										Legenda dos níveis técnicos
									</button>
								</h2>
								<div id="skillLegendCollapse" className="accordion-collapse collapse" aria-labelledby="skillLegendHeading" data-bs-parent="#semestersAccordion">
									<div className="accordion-body">
										<div className="skill-legend">
											<div className="table-responsive">
												<table className="table table-sm align-middle mb-0">
													<thead>
														<tr>
															<th>Nível</th>
															<th>Descrição</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td><strong>Básico</strong></td>
															<td>Contato inicial com a ferramenta, apoio em tarefas simples e aprendizado guiado.</td>
														</tr>
														<tr>
															<td><strong>Intermediário</strong></td>
															<td>Uso prático em entregas do projeto, com autonomia parcial e apoio em funcionalidades reais.</td>
														</tr>
														<tr>
															<td><strong>Avançado</strong></td>
															<td>Atuação com maior autonomia, resolução de problemas, decisões técnicas e apoio à equipe.</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
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
