

<div align="center">
  <h1 style="color: white; font-size: 32px; margin-bottom: 10px;">GBCC - Guia para Bacharelado em Ciência da Computação 💻</h1>

  <img src="https://github.com/Maracujacake/GBCC/blob/main/gbcc/src/assets/axolote_locomocao.png" width="50%" alt="Axolote">
</div>


# Sumário

- [Como executar ⚡](#como-executar)
- [Sobre o projeto 📚](#sobre-o-projeto)
- [Estrutura básica e funcionamento 🏛](#estrutura-básica-e-funcionamento)
  
---

## Como executar:
- Para rodar o projeto localmente, siga as instruções abaixo:

- - ```git clone https://github.com/seu-usuario/gbcc.git ```
- - ```cd gbcc ```
- - ```npm install ```
- - ```npm start ```



O projeto também está hospedado na [Vercel](https://gbcc.vercel.app/) para acesso imediato.

---

## Sobre o projeto

### Inspiração e motivação 🐱‍🚀
> A motivação por trás deste projeto foi a necessidade de centralizar todas as informações do curso em um único lugar. Como estudante de Ciência da Computação, percebi que o acesso a informações essenciais poderia ser mais rápido e simples. Assim, a ideia surgiu para facilitar a vida dos alunos, proporcionando um acesso ágil a conteúdos relacionados ao curso, como calendários acadêmicos, disciplinas, editais e dúvidas.

> O layout de base pode ser acessado a partir do [figma](https://www.figma.com/design/qfcFhFYEeNCC0hY1BTgzvz/BCC_GUIA_UFSCAR?node-id=10-28&t=QjmxrogdfROfrqjm-1)


### Tecnologias usadas e motivos

#### React : 

> Optamos pelo React devido à sua simplicidade e flexibilidade. Com React, conseguimos criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.

#### TailwindCSS
> O TailwindCSS foi escolhido por ser uma ferramenta que facilita o desenvolvimento de interfaces responsivas e personalizáveis, permitindo um controle total sobre o design com classes utilitárias, tornando a escrita do CSS muito mais rápida e eficiente.


#### Futuros updates

- Responsividade Melhorada: O ajuste sobre a responsividade para garantir que o projeto funcione perfeitamente em dispositivos móveis será contínuo.

- Novas Funcionalidades: Está nos planos adicionar novas funcionalidades e melhorar a experiência do usuário, como uma melhor navegação entre as seções do site e personalização dos recursos.

---

## Estrutura básica e funcionamento 

### Padrões (para fins de contribuição)

#### Padrões de Nomeação de Arquivos Componentes

Cada componente React é armazenado em um diretório ```gbcc/src/components/```. O nome do arquivo é sempre em **PascalCase**;

Exemplo: Welcome.js, Navbar.js, ExemploDePascalCase.js.

#### Padrões em relação a imagens e arquivos adicionais
As imagens ficam armazenadas em ```src/assets/```. O nome dos arquivos é mantido em snake_case para garantir consistência.

Exemplo: axolote_header.png.

### Responsividade

A responsividade da aplicação é garantida utilizando as **classes utilitárias do TailwindCSS**. Algumas práticas importantes incluem:

- Grid e Flexbox: Foi utilizado o sistema de grid e flexbox do Tailwind para criar layouts que se adaptam ao tamanho da tela (flex, flex-1, etc.).

- Classes de Responsividade: Com o Tailwind, podemos adicionar classes condicionais para diferentes tamanhos de tela *(breakpoints)*.
 Por exemplo: md:flex para telas médias e lg:hidden para esconder elementos em telas grandes.

### Alterações mais específicas

- Para modificar o estilo global, edite o arquivo ```src/index.css```. As regras CSS podem ser aplicadas diretamente neste arquivo ou através de arquivos de componentes.

- Os componentes são conectados através do React Router. No arquivo ```src/App.js```, utilizamos o Router para navegar entre diferentes seções do site. Cada componente é importado e vinculado a uma rota específica.

---

*Projeto implementado para a disciplina de Desenvolvimento de Software para Web 2, no período 2024/2 da UFSCar.*

*Aluno: Christian C.S Polli, RA: 798083*

