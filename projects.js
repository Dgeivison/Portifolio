/* Dados dos projetos. Para editar um projeto, mude o texto aqui; os cards e o modal se atualizam sozinhos.
   types: auto | web | ia | dados   —   sections: { h: "Título", p: "texto" } ou { h: "Título", list: [...] } */
window.PROJECTS = [
  {
    title: "RPA de Multas", cat: "Automação · RPA", types: ["auto", "dados"], status: "Desenvolvido",
    summary: "Fluxo automatizado que consulta, organiza e consolida informações de multas de veículos em relatórios.",
    tags: ["Power Automate Desktop", "PowerShell", "HTML", "Regex"],
    sections: [
      { h: "Objetivo", p: "Facilitar a consulta, coleta, organização e consolidação de informações de multas de veículos, reduzindo consultas e conferências manuais." },
      { h: "Problema", p: "A consulta envolve etapas repetitivas: preencher dados, navegar em sistemas e organizar resultados. Isso consome tempo e aumenta o risco de erro manual." },
      { h: "Solução", p: "Um fluxo automatizado que realiza as consultas, organiza os resultados e consolida tudo em relatórios." },
      { h: "Funcionalidades", list: ["Navegação e interação automática com sistemas", "Preenchimento automático de dados dos veículos", "Coleta e tratamento das informações retornadas", "Processamento de dados com scripts", "Consolidação e geração de relatórios", "Informações estruturadas para acompanhamento gerencial"] },
      { h: "Resultado esperado", p: "Menos trabalho manual, consultas padronizadas, resultados mais organizados e mais agilidade para obter informações." }
    ]
  },
  {
    title: "Dashboard de Multas", cat: "Desenvolvimento web · Dashboards", types: ["web", "dados"], status: "Desenvolvido",
    summary: "Interface web que consolida veículos, multas e resultados das consultas automatizadas.",
    tags: ["HTML", "CSS", "JavaScript", "PowerShell"],
    sections: [
      { h: "Objetivo", p: "Dar uma visão visual e gerencial das multas, dos veículos e dos resultados das consultas automatizadas." },
      { h: "Solução", p: "Um dashboard web que apresenta os dados processados pela automação e facilita o acompanhamento e a análise." },
      { h: "Funcionalidades", list: ["Consolidação de dados", "Identificação dos veículos consultados", "Contagem de multas", "Organização e visualização dos resultados", "Estrutura de relatórios", "Integração entre automação e interface"] },
      { h: "Aplicação", p: "Transformar dados operacionais em informações mais acessíveis para acompanhamento e análise." }
    ]
  },
  {
    title: "Portal do Grupo R", cat: "Sistema corporativo · Desenvolvimento web", types: ["web"], status: "Em evolução",
    summary: "Portal interno que centraliza informações, ferramentas e acessos usados pelos setores da empresa.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    sections: [
      { h: "Objetivo", p: "Centralizar informações, recursos, ferramentas e acessos usados pelos diferentes setores da empresa." },
      { h: "Problema", p: "Informações e ferramentas internas ficam dispersas, o que dificulta o acesso, a organização e a comunicação entre setores." },
      { h: "Solução", p: "Um portal com organização visual, navegação simplificada e centralização dos recursos internos." },
      { h: "Funcionalidades (feitas e planejadas)", list: ["Centralização de links e ferramentas", "Organização por setores", "Páginas internas", "Área administrativa em evolução", "Acessos e permissões em planejamento"] },
      { h: "Foco", p: "Uma experiência mais organizada para os colaboradores acessarem ferramentas e informações da empresa." }
    ]
  },
  {
    title: "Bot de WhatsApp da Frota", cat: "Automação · Grupo R Energia Solar", types: ["auto"], status: "Em uso",
    summary: "Bot que automatiza os registros e o acompanhamento da frota de veículos da empresa.",
    tags: ["WhatsApp", "Automação", "JavaScript"],
    sections: [
      { h: "Objetivo", p: "Controlar e gerir a frota de veículos da empresa, automatizando registros e acompanhamento." },
      { h: "Solução", p: "Um bot de WhatsApp que recebe e organiza os registros da frota, com manutenção e evolução contínuas." }
    ]
  },
  {
    title: "Site da Pousada Capiau", cat: "Site institucional · Desenvolvimento web", types: ["web"],
    summary: "Site da pousada que apresenta o espaço e facilita o contato de novos hóspedes.",
    tags: ["HTML", "CSS", "JavaScript"],
    sections: [
      { h: "Objetivo", p: "Apresentar a pousada e facilitar o contato de novos hóspedes." }
    ]
  },
  {
    title: "Sistema Financeiro Pessoal", cat: "Aplicação web · Gestão financeira", types: ["web", "dados"], status: "Em desenvolvimento",
    summary: "Controle de receitas e despesas, individual ou compartilhado, com dashboard e visão mensal.",
    tags: ["JavaScript", "React", "Firebase"],
    sections: [
      { h: "Objetivo", p: "Registrar receitas e despesas e acompanhar a situação financeira de forma organizada, pessoal ou compartilhada." },
      { h: "Funcionalidades planejadas", list: ["Cadastro de receitas e despesas", "Categorias financeiras", "Organização mensal e visualização de saldo", "Dashboard financeiro", "Acesso individual ou compartilhado", "Autenticação e banco de dados"] },
      { h: "Objetivo da aplicação", p: "Simplificar o controle financeiro com uma interface acessível, organizada e prática." }
    ]
  },
  {
    title: "Agente de IA para Clínica Odontológica", cat: "Inteligência artificial · Atendimento", types: ["ia", "auto"], status: "Em estruturação",
    summary: "Atendimento automatizado via WhatsApp que organiza solicitações e facilita o agendamento de consultas.",
    tags: ["IA", "WhatsApp", "JavaScript", "Google Calendar"],
    sections: [
      { h: "Objetivo", p: "Usar IA para ajudar pacientes, organizar solicitações e facilitar o agendamento de consultas odontológicas." },
      { h: "Funcionalidades planejadas", list: ["Atendimento automatizado via WhatsApp", "Respostas a dúvidas iniciais", "Identificação da intenção do paciente", "Solicitação e organização de agendamentos", "Integração com Google Calendar", "Encaminhamento para atendimento humano e retomada do atendimento automático"] },
      { h: "Aplicação", p: "Automatizar etapas do atendimento, facilitar o agendamento e reduzir tarefas repetitivas da equipe." }
    ]
  },
  {
    title: "Sistema de Gestão para Clínica Odontológica", cat: "Desenvolvimento de sistemas · Gestão", types: ["web", "dados"], status: "Em estruturação",
    summary: "Sistema que centraliza pacientes, dentistas, agenda e indicadores da clínica.",
    tags: ["Aplicação web", "Dashboard", "Agenda"],
    sections: [
      { h: "Objetivo", p: "Centralizar informações de pacientes, dentistas, agenda e indicadores de uma clínica odontológica." },
      { h: "Estrutura", list: ["Dashboard", "Cadastro e pesquisa de pacientes", "Prontuários", "Gestão de dentistas e agenda", "Relatórios e configurações"] },
      { h: "Funcionalidades planejadas", list: ["Busca de pacientes por nome ou prontuário", "Pacientes organizados por dentista", "Filtros por profissional", "Acompanhamento de indicadores"] },
      { h: "Foco", p: "Facilitar a gestão da clínica, melhorar o acesso às informações e organizar os processos administrativos." }
    ]
  },
  {
    title: "Automação de Processos Administrativos", cat: "Automação · Produtividade", types: ["auto"], status: "Em exploração",
    summary: "Identificar tarefas repetitivas em rotinas administrativas e transformá-las em fluxos automáticos.",
    tags: ["Automação", "Planilhas", "Integrações"],
    sections: [
      { h: "Objetivo", p: "Encontrar oportunidades de automação em processos administrativos e operacionais para reduzir tarefas manuais e aumentar a produtividade." },
      { h: "Abordagem", p: "Analisar o processo atual, identificar tarefas repetitivas, mapear melhorias e desenvolver soluções que simplifiquem a execução." },
      { h: "Áreas exploradas", list: ["Organização de planilhas", "Automatização de tarefas e rotinas", "Processamento e organização de dados", "Digitalização de processos", "Integração entre ferramentas"] }
    ]
  },
  {
    title: "Soluções Digitais para Pequenos Negócios", cat: "Desenvolvimento web · Digitalização", types: ["web", "ia"], status: "Em exploração",
    summary: "Landing pages, sites, link de agendamento, bots e agentes de IA para pequenos negócios e autônomos.",
    tags: ["Landing pages", "WhatsApp", "Agentes de IA"],
    sections: [
      { h: "Objetivo", p: "Criar soluções digitais acessíveis para pequenos negócios, autônomos e empresas que querem melhorar a presença digital e os processos." },
      { h: "Soluções exploradas", list: ["Landing pages e sites institucionais", "Link de agendamento e integração com WhatsApp", "Bots de atendimento e agentes de IA", "Automação de planilhas e organização de leads", "Sistemas simples de gestão"] }
    ]
  },
  {
    title: "Atendimento e Fluxos via WhatsApp", cat: "Automação · Inteligência artificial", types: ["ia", "auto"], status: "Em exploração",
    summary: "Respostas automáticas, fluxos de atendimento, agendamento e encaminhamento para atendimento humano.",
    tags: ["WhatsApp", "IA", "Integrações"],
    sections: [
      { h: "Objetivo", p: "Explorar automação de atendimento no WhatsApp, organização de solicitações e integração com ferramentas de gestão." },
      { h: "Possibilidades", list: ["Respostas automáticas e fluxos de atendimento", "Organização de solicitações e agendamento", "Encaminhamento para atendimento humano", "Agentes inteligentes", "Automação de tarefas comerciais"] }
    ]
  },
  {
    title: "Organização de Processos com Planilhas", cat: "Automação · Dados", types: ["auto", "dados"], status: "Em exploração",
    summary: "Planilhas, automações e ferramentas digitais para organizar controles e acompanhar atividades.",
    tags: ["Planilhas", "Indicadores", "Automação"],
    sections: [
      { h: "Objetivo", p: "Usar planilhas e ferramentas acessíveis para organizar processos, consolidar informações e facilitar o acompanhamento de atividades." },
      { h: "Soluções exploradas", list: ["Organização de dados e estruturação de controles", "Automatização de rotinas", "Consolidação de informações", "Indicadores e integração com outras ferramentas"] }
    ]
  }
];
