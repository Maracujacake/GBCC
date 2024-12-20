
# GBCC

<imagem axolote centralizada>
GBCC é uma plataforma criada para ajudar os alunos do Bacharelado em Ciência da Computação da UFSCar. Com ela, os alunos podem acessar informações importantes sobre o curso de forma rápida e eficiente.

Uma breve descrição sobre o que esse projeto faz e para quem ele é

Sumário (links para a parte do readme)
- Como executar 

- Sobre o projeto

- Estrutura básica e funcionamento

---

Como executar:
- Para rodar o projeto localmente, siga as instruções abaixo:

- - ```git clone https://github.com/seu-usuario/gbcc.git ```
- - ```cd gbcc ```
- - ```npm install ```
- - ```npm start ```



O projeto também está hospedado na Vercel para acesso imediato.

---

Sobre o projeto
- Inspiração e motivação
- - A motivação por trás deste projeto foi a necessidade de centralizar todas as informações do curso em um único lugar. Como estudante de Ciência da Computação, percebi que o acesso a informações essenciais poderia ser mais rápido e simples. Assim, a ideia surgiu para facilitar a vida dos alunos, proporcionando um acesso ágil a conteúdos relacionados ao curso, como calendários acadêmicos, disciplinas, editais e dúvidas.

- Tecnologias usadas e motivos
React: 

Optamos pelo React devido à sua simplicidade, flexibilidade e grande comunidade. Com React, conseguimos criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente. Ele também é altamente escalável, permitindo que o projeto cresça conforme novas funcionalidades sejam implementadas.

TailwindCSS
O TailwindCSS foi escolhido por ser uma ferramenta que facilita o desenvolvimento de interfaces responsivas e personalizáveis. Ele permite um controle total sobre o design com classes utilitárias, tornando a escrita do CSS muito mais rápida e eficiente.


- Futuros updates
Responsividade Melhorada: Continuaremos ajustando a responsividade para garantir que o projeto funcione perfeitamente em dispositivos móveis.

Novas Funcionalidades: Pretendemos adicionar novas funcionalidades e melhorar a experiência do usuário, como uma melhor navegação entre as seções do site e personalização dos recursos.

---

Estrutura básica e funcionamento
- Padrões

Padrões de Nomeação de Arquivos Componentes: Cada componente React é armazenado em um diretório gbcc/src/components/. O nome do arquivo é sempre em PascalCase, por exemplo, Welcome.js, Navbar.js.

Imagens: As imagens ficam armazenadas em src/assets/. O nome dos arquivos é mantido em snake_case para garantir consistência. Exemplo: axolote_header.png.

- Responsividade

A responsividade da aplicação é garantida utilizando as classes utilitárias do TailwindCSS. Algumas práticas importantes incluem:

Grid e Flexbox: Utilizamos o sistema de grid e flexbox do Tailwind para criar layouts que se adaptam ao tamanho da tela.

Classes de Responsividade: Com o Tailwind, podemos adicionar classes condicionais para diferentes tamanhos de tela. Por exemplo, md:flex para telas médias e lg:hidden para esconder elementos em telas grandes.

- Alterações mais específicas

Para modificar o estilo global, edite o arquivo src/index.css. As regras CSS podem ser aplicadas diretamente neste arquivo ou através de arquivos de componentes.

Os componentes são conectados através do React Router. No arquivo src/App.js, utilizamos o Router para navegar entre diferentes seções do site. Cada componente é importado e vinculado a uma rota específica.





