const coursesData = [
  {
    name: "Licenciatura em Fotografia",
    description:
      "O ciclo de estudos em Fotografia visa a formação qualificada de artistas e fotógrafos dotados de competências e capacidade crítica para desenvolver o discurso fotográfico nas suas diversas vertentes, ...",
    school: "ESMAD",
    time: "Diurno",
    image: "/public/courses/fotografia.png",
    degree: "licenciaturas",
  },
  {
    name: "Licenciatura em Multimédia",
    description:
      "A Licenciatura em Multimédia assenta numa visão contemporânea e interdisciplinar. Fundindo várias áreas numa interseção que incluí arte, tecnologia, comunicação e cultura, bem como a música, o ...",
    school: "ESMAD",
    time: "Diurno",
    image: "/public/courses/multimedia.png",
    degree: "licenciaturas",
  },
  {
    name: "Licenciatura em Tecnologias e Sistemas de Informação Para a Web",
    description:
      "A licenciatura assenta numa visão contemporânea e multidisciplinar da Web, agregando competências focadas na conceção, design e desenvolvimento de produtos e software para a Web. Procura dotar os ...",
    school: "ESMAD",
    time: "Diurno",
    image: "/public/courses/web.png",
    degree: "licenciaturas",
  },
  {
    name: "Licenciatura em Tecnologias para a Educação STEAM",
    description:
      "A licenciatura assenta numa visão contemporânea e multidisciplinar da Web, agregando competências focadas na conceção, design e desenvolvimento de produtos e software para a Web. Procura dotar os ...",
    school: "ESMAD",
    time: "Diurno",
    image: "/public/courses/educacao-stem.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Audiologia",
    "description": "O Audiologista tem como áreas de intervenção e desenvolvimento da sua atividade: A Prevenção: delineia e desenvolve ações de sensibilização e rastreios junto das populações em geral...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/audiologia.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Biotecnologia Medicinal",
    "description": "A biotecnologia medicinal é uma das áreas de mais rápido crescimento do conhecimento humano e está relacionada com o desenvolvimento de sistemas terapêuticos emergentes como a terapia genética...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/biotecnologia.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Ciências Biomédicas Laboratoriais",
    "description": "A Licenciatura em Ciências Biomédicas Laboratoriais (CBL) confere qualificação para o exercício profissional independente e autónomo, correspondente ao conteúdo funcional das profissões de Técnico de...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/ciencias-biomedicas.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Terapia da Fala",
    "description": "A Terapêutica da Fala, ou Terapia da Fala, como meio de intervenção específico para a Comunicação, Linguagem, Fala e Deglutição, surgiu nos Estados Unidos da América (EUA), para reabilitação dos...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/terapia-fala.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Terapia Ocupacional",
    "description": "A Terapia Ocupacional é o tratamento de condições de saúde que afetam o desempenho das pessoas em qualquer fase da vida através do envolvimento em atividades significativas, com o objetivo de lhes...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/terapia-ocupacional.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Gestão de Atividades Turísticas",
    "description": "A criação da Licenciatura de Gestão de Atividades Turísticas resultou de uma análise ponderada quer das necessidades e exigências atuais do mercado de trabalho, quer de uma reflexão aprofundada da...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/gestao-atividades-turisticas.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Gestão de Atividades Turísticas - Pós-laboral",
    "description": "A criação da Licenciatura de Gestão de Atividades Turísticas resultou de uma análise ponderada quer das necessidades e exigências atuais do mercado de trabalho, quer de uma reflexão aprofundada da...",
    "school": "ESS",
    "time": "Pós-laboral",
    "image": "/public/courses/gestao-atividades-turisticas.png",
    degree: "licenciaturas",
  },
  {
    "name": "Licenciatura em Gestão de Restauração e Catering",
    "description": "Este curso proporciona a aquisição de conhecimentos e competências essenciais na Gestão de Unidades de Restauração e Catering. Nesta ótica, pretende qualificar-se profissionais aptos a dominar as...",
    "school": "ESS",
    "time": "Diurno",
    "image": "/public/courses/gestao-restauracao-catering.png",
    degree: "licenciaturas",
  },
  {
    "name": "Mestrado em Técnicas Avançadas de Imagem em Radiologia",
    "description": "O Mestrado em Técnicas Avançadas de Imagem em Radiologia pretende dar resposta às necessidades de formação diferenciada e desenvolvimento de competências em duas áreas de evolução emergente no âmbito ...",
    "school": "ESS",
    "degree": "mestrados",
    "image": "/public/courses/radiologia.png",
    "time": "Diurno"
  },
  {
    "name": "Mestrado em Técnicas Laboratoriais em Biopatologia - Citopatologia",
    "description": "O Mestrado em Técnicas Laboratoriais em Biopatologia (BioPat) apresenta 3 ramos de especialização - Citopatologia, Histopatologia e Patologia Molecular. O programa deste Mestrado revela-se inovador, ...",
    "school": "ESS",
    "degree": "mestrados",
    "image": "/public/courses/ciencias-biomedicas.png",
    "time": "Diurno"
  },
  {
    "name": "Mestrado em Técnicas Laboratoriais em Biopatologia - Histopatologia",
    "description": "O Mestrado em Técnicas Laboratoriais em Biopatologia (BioPat) apresenta 3 ramos de especialização - Citopatologia, Histopatologia e Patologia Molecular. O programa deste Mestrado revela-se inovador, ...",
    "school": "ESS",
    "degree": "mestrados",
    "image": "/public/courses/biotecnologia.png",
    "time": "Diurno"
  },
  {
    "name": "Mestrado em Direção Hoteleira",
    "description": "O Mestrado em Direção Hoteleira tem como objetivo principal proporcionar uma formação na área da gestão hoteleira, a qual pretende responder às atuais e futuras necessidades do mercado de emprego.",
    "school": "ESHT",
    "degree": "mestrados",
    "image": "/public/courses/direcao-hoteleira.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Mestrado em Gestão do Turismo",
    "description": "O Mestrado em Gestão do Turismo tem como objetivo dar resposta à necessidade de uma qualificação deste setor, fornecendo uma base que permita que o aluno atue com eficácia dentro da indústria do turismo.",
    "school": "ESHT",
    "degree": "mestrados",
    "image": "/public/courses/gestao-atividades-turisticas.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Mestrado em Sustentabilidade no Turismo e na Hotelaria",
    "description": "O Curso de Mestrado em Sustentabilidade no Turismo e na Hotelaria visa proporcionar uma formação diferenciadora, de nível superior, especializada no âmbito da sustentabilidade, colmatando as lacunas existentes no setor.",
    "school": "ESHT",
    "degree": "mestrados",
    "image": "/public/courses/gestao-restauracao-catering.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Mestrado em Design - Especialização em Design de Produto",
    "description": "O Mestrado em Design evoca três eixos fundamentais da prática projetual: a experiência laboratorial, a autoria e a inovação. Através de estratégias pedagógicas que incentivem a maturação de ...",
    "school": "ESMAD",
    "degree": "mestrados",
    "image": "/public/courses/design-produto.png",
    "time": "Horário Misto"
  },
  {
    "name": "Mestrado em Design - Especialização em Design Gráfico",
    "description": "O Mestrado em Design evoca três eixos fundamentais da prática projetual: a experiência laboratorial, a autoria e a inovação. Através de estratégias pedagógicas que incentivem a maturação de ...",
    "school": "ESMAD",
    "degree": "mestrados",
    "image": "/public/courses/design-grafico.png",
    "time": "Horário Misto"
  },
  {
    "name": "Mestrado em Media Digitais Interativos",
    "description": "O mestrado em Media Digitais Interativos cruza as artes com as tecnologias emergentes potenciando esta fusão em contextos científicos, artísticos e profissionais. O curso promove uma filosofia de ...",
    "school": "ESMAD",
    "degree": "mestrados",
    "image": "/public/courses/web.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Curso Técnico Superior Profissional de Design de Jogos e Animação Digital",
    "description": "O Curso Técnico Superior Profissional em Design de Jogos e Animação Digital visa conferir qualificação superior profissional, preparando os estudantes para planear, conceber, desenhar e desenvolver ...",
    "school": "ESMAD",
    "degree": "ctesp",
    "image": "/public/courses/jogos.png",
    "time": "Diurno"
  },
  {
    "name": "Curso Técnico Superior Profissional de Design de Mobiliário e Espaços",
    "description": "O Curso Técnico Superior Profissional em Design de Mobiliário e Espaços irá dotar os estudantes das ferramentas teóricas, tecnológicas, práticas e projetuais, necessárias para que estes possam ...",
    "school": "ESMAD",
    "degree": "ctesp",
    "image": "/public/courses/design-produto.png",
    "time": "Diurno"
  },
  {
    "name": "Curso Técnico Superior Profissional de Design e Tecnologias Para Aplicações Móveis",
    "description": "O Curso Técnico Superior Profissional em Design e Tecnologias para Aplicações Móveis (DTAM) visa desenvolver competências técnicas no domínio das ciências informáticas, mais concretamente, no design ...",
    "school": "ESMAD",
    "degree": "ctesp",
    "image": "/public/courses/web.png",
    "time": "Diurno"
  },
  {
    "name": "CTESP - Controle e Qualidade Alimentar",
    "description": "O sector Alimentar representa uma área comercial de grande importância, diversificada e abrangente, desde a produção à distribuição e comercialização dos produtos alimentares. Apesar da ...",
    "school": "ESS",
    "degree": "ctesp",
    "image": "/public/courses/alimentar.png",
    "time": "Diurno"
  },
  {
    "name": "CTESP - Cuidados de Saúde e Bem-Estar",
    "description": "Os cuidados de saúde e a promoção do bem-estar devem-se adaptar às necessidades dos indivíduos, caracterizando-se por serem cuidados centrados na pessoa. As exigências trazidas pelas novas ...",
    "school": "ESS",
    "degree": "ctesp",
    "image": "/public/courses/fisioterapia.png",
    "time": "Diurno"
  },
  {
    "name": "CTESP - Culturas e Manutenção Laboratorial",
    "description": "A necessidade urgente de contribuir para a sustentabilidade global, os problemas da degradação do ambiente e da mudança climática, a gestão dos recursos naturais, a procura de soluções sustentáveis, ...",
    "school": "ESS",
    "degree": "ctesp",
    "image": "/public/courses/biotecnologia.png",
    "time": "Diurno"
  },
  {
    "name": "Curso Técnico Superior Profissional de Operações Hoteleiras",
    "description": "O Curso Técnico Superior Profissional em Operações Hoteleiras visa conferir qualificação superior profissional preparando os alunos para planear, gerir e coordenar o departamento de alojamento, ...",
    "school": "ESHT",
    "degree": "ctesp",
    "image": "/public/courses/gestao-atividades-turisticas.png",
    "time": "Diurno"
  },
  {
    "name": "Curso Técnico Superior Profissional de Serviços de Restauração e Catering",
    "description": "O Curso Técnico Superior Profissional em Serviços de Restauração e Catering visa conferir qualificação superior profissional preparando os alunos para planear, gerir e coordenar todas as operações de ...",
    "school": "ESHT",
    "degree": "ctesp",
    "image": "/public/courses/gestao-restauracao-catering.png",
    "time": "Diurno"
  },
  {
    "name": "Curso Técnico Superior Profissional de Turismo e Informação Turística",
    "description": "Este curso visa a formação de profissionais capazes de introduzir importantes dinâmicas nos destinos e nas empresas, desenvolvendo, criando e gerindo oferta de recursos e produtos turísticos ...",
    "school": "ESHT",
    "degree": "ctesp",
    "image": "/public/courses/direcao-hoteleira.png",
    "time": "Diurno"
  },
  {
    "name": "Pós-Graduação em Marketing Digital para a Hotelaria e Turismo",
    "description": "O desenvolvimento das tecnologias para a Web tem potenciado a globalização dos mercados, sendo uma fonte de inovação e competitividade para as empresas. Deste modo, as empresas têm tornado as suas ...",
    "school": "ESHT",
    "degree": "pos-graduacoes",
    "image": "/public/courses/gestao-atividades-turisticas.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Pós-graduação em Revenue Management em Turismo e Hotelaria",
    "description": "A Pós-graduação em Revenue Management em Turismo e Hotelaria é direcionada para aqueles que pretendam adquirir e melhorar os seus conhecimentos em gestão de receita, numa indústria emergente como o ...",
    "school": "ESHT",
    "degree": "pos-graduacoes",
    "image": "/public/courses/direcao-hoteleira.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Pós-Graduação em Fisioterapia Cardiorrespiratória",
    "description": "O curso tem como objetivos: - Consolidar as competências adquiridas na intervenção em pacientes do foro Cardiorrespiratório; - Atualizar o conhecimento em novos protocolos de intervenção ...",
    "school": "ESS",
    "degree": "pos-graduacoes",
    "image": "/public/courses/fisioterapia.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Pós-Graduação em Fisioterapia Invasiva",
    "description": "Esta Pós-Graduação tem os seguintes objetivos: - Identificar e seleccionar os diferentes procedimentos de avaliação clínica e instrumental mais utilizados nas lesões neuro-músculo-esqueléticas que ...",
    "school": "ESS",
    "degree": "pos-graduacoes",
    "image": "/public/courses/fisioterapia.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Pós-Graduação em Design de Interiores e Espaços",
    "description": "A Pós-Graduação em Design de Interiores e Espaços tem por objetivo proporcionar uma formação técnica, artística e cultural especializada em projetos espaciais, em estreita parceria e colaboração com ...",
    "school": "ESMAD",
    "degree": "pos-graduacoes",
    "image": "/public/courses/design-produto.png",
    "time": "Pós-Laboral"
  },
  {
    "name": "Pós-Graduação em Web Design",
    "description": "A Pós-graduação em Web Design oferece formação especializada na criação de sítios e plataformas web através do cruzamento das áreas do Design, Multimédia e Informática. A Pós-graduação em Web Design ...",
    "school": "ESMAD",
    "degree": "pos-graduacoes",
    "image": "/public/courses/design-grafico.png",
    "time": "Pós-Laboral"
  },
  {
    name: "Doutoramento em Design de Comunicação",
    description:
      "O Doutoramento em Design de Comunicação é um programa de estudos avançados que visa a formação de investigadores e docentes de alto nível, capazes de contribuir para o desenvolvimento do conhecimento ...",
    school: "ESMAD",
    time: "Diurno",
    "image": "/public/courses/design-grafico.png",
    degree: "doutoramentos",
  },
  {
    name: "Doutoramento em Terapia Ocupacional",
    description:
      "O Doutoramento em Terapia Ocupacional é um programa de estudos avançados que visa a formação de investigadores e docentes de alto nível, capazes de contribuir para o desenvolvimento do conhecimento ...",
    school: "ESS",
    time: "Diurno",
    "image": "/public/courses/terapia-ocupacional.png",
    degree: "doutoramentos",
  },
  {
    name: "Doutoramento em Turismo",
    description:
      "O Doutoramento em Turismo é um programa de estudos avançados que visa a formação de investigadores e docentes de alto nível, capazes de contribuir para o desenvolvimento do conhecimento ...",
    school: "ESHT",
    time: "Diurno",
    "image": "/public/courses/direcao-hoteleira.png",
    degree: "doutoramentos",
  },
];

const currentPathName = window.location.pathname;
const currentPathParent = currentPathName.split("/")[1];
const currentPathChild = currentPathName.split("/")[2];

const currentPathQuery = window.location.search;
const queryParsed = currentPathQuery.split("?q=")[1];

const coursesContainer = document.querySelector(".row");

coursesData.map((course) => {
  if (currentPathParent === "cursos" && queryParsed) {
    const title = document.getElementById("searchTitle");
    title.innerHTML = `Resultados para: ${queryParsed}`;

    if (course.name.toLowerCase().includes(queryParsed) === false) {
      return;
    }
  } else if (currentPathParent === "cursos") {
    const courseSchool = course.degree.toLocaleLowerCase();

    if (currentPathChild.includes(courseSchool) === false) {
      return;
    }
  } else if (currentPathParent === "escolas") {
    const courseSchool = course.school.toLocaleLowerCase();

    if (currentPathChild.includes(courseSchool) === false) {
      return;
    }
  }

  const courseCard = document.createElement("div");
  courseCard.classList.add("col");

  courseCard.innerHTML = `
    <div class="course_card shadow-sm p-3">
      <a class="d-flex flex-column" href="/cursos/${course.degree}/fotografia.html">
        <img
          src="${course.image}"
          class="img-fluid"
          alt="${course.name}"
        />
        <div class="mt-3">
          <h5 class="mb-2 fs-4 fw-medium">
            ${course.name}
          </h5>
          <p class="mb-3 fs-7 lh-base tone-deaf">
            ${course.description}
          </p>
          <div class="d-flex align-items-center gap-4">
            <div>
              <span class="fs-7">Escola:</span>
              <span class="fs-7 tone-deaf">${course.school}</span>
            </div>
            <div>
              <span class="fs-7">Regime:</span>
              <span class="fs-7 tone-deaf">${course.time}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  `;

  coursesContainer.appendChild(courseCard);
});