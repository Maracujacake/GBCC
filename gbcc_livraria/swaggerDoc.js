/**
 * @swagger
 * tags:
 *   - name: Alunos
 *     description: API para gerenciamento de alunos
 *   - name: Livros
 *     description: API para gerenciamento de livros
 */

/**
 * @swagger
 * /aluno/{email}:
 *   get:
 *     summary: Obtém as informações de um aluno pelo email
 *     tags: [Alunos]
 *     parameters:
 *       - name: email
 *         in: path
 *         required: true
 *         description: O email do aluno
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Informações do aluno
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro ao buscar aluno
 */

/**
 * @swagger
 * /api/aluno/aluguel:
 *   post:
 *     summary: Realiza o aluguel de um livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               livro_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro alugado com sucesso
 *       404:
 *         description: Aluno ou livro não encontrado
 *       500:
 *         description: Erro ao alugar livro
 */

/**
 * @swagger
 * /livros:
 *   post:
 *     summary: Cria um novo livro
 *     tags: [Livros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano_publicacao:
 *                 type: integer
 *               quantidade:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Livro criado com sucesso
 *       500:
 *         description: Erro ao criar livro
 */

/**
 * @swagger
 * /livros:
 *   get:
 *     summary: Lista todos os livros
 *     tags: [Livros]
 *     responses:
 *       200:
 *         description: Lista de livros
 *       500:
 *         description: Erro ao listar livros
 */

/**
 * @swagger
 * /livros/{id}:
 *   get:
 *     summary: Obtém informações de um livro pelo id
 *     tags: [Livros]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: O id do livro
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Informações do livro
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro ao buscar livro
 */

/**
 * @swagger
 * /livros/{id}:
 *   put:
 *     summary: Atualiza as informações de um livro
 *     tags: [Livros]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: O id do livro
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               ano_publicacao:
 *                 type: integer
 *               quantidade:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Livro atualizado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro ao atualizar livro
 */

/**
 * @swagger
 * /livros/{id}:
 *   delete:
 *     summary: Deleta um livro pelo id
 *     tags: [Livros]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: O id do livro
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Livro deletado com sucesso
 *       404:
 *         description: Livro não encontrado
 *       500:
 *         description: Erro ao deletar livro
 */

/**
 * @swagger
 * /api/aluno:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 *       400:
 *         description: Campos obrigatórios não preenchidos
 *       500:
 *         description: Erro ao criar aluno
 */

/**
 * @swagger
 * /api/aluno/{email}/alugueis:
 *   get:
 *     summary: Obtém todos os alugueis de um aluno pelo email
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: email
 *         required: true
 *         description: O email do aluno para buscar os alugueis
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de alugueis do aluno
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   aluno_id:
 *                     type: integer
 *                   livro_id:
 *                     type: integer
 *                   data_devolucao:
 *                     type: string
 *                     format: date
 *       404:
 *         description: Aluno não encontrado
 *       500:
 *         description: Erro ao buscar os alugueis
 */

