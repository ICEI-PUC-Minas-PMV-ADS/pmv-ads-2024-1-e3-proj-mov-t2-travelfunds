# Registro de Testes de Software

Considerando os requisitos do projeto e os casos listados no item 08-Plano de Testes de Software, e cumprindo os requisitos a seguir:

- Conexão com a internet: Os usuários devem ter acesso a uma conexão à internet para acessar a aplicação.
- Dispositivo compatível: Os usuários devem acessar a aplicação por meio de um dispositivo compatível, como um smartphone, tablet ou computador.
  
Foram realizados os testes descritos abaixo:

| **Caso de Teste** 	| CT-01 – Cadastrar usuário  	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-001 - A aplicação deve permitir que o usuário crie uma conta  |
|	Grupos de Usuários 	| Novos usuários que desejam criar uma conta na aplicação |
| Objetivo do Teste 	| Verificar se o usuário consegue cadastrar-se na plataforma fornecendo as informações necessárias (nome, email e senha) |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário preenche os campos necessários; <br> - O usuário clica no botão Cadastrar. |
|Critério de Êxito | - Os dados do usuário são armazenados corretamente no banco de dados; <br> - O usuário consegue se cadastrar na plataforma.|
|Resultado | Houve uma desconfiguração do firebase, dessa forma, não está salvando na base de dados, porém, a funcionalidade está ativa, como será possível ver nas evidências relacionada nos demais casos de teste abaixo. |

| **Caso de Teste** 	| CT-02 – Login na conta	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-002 - A aplicação deve permitir que o usuário realize login em sua conta utilizando email e senha |
|	Grupos de Usuários 	| Usuários previamente cadastrados e que desejam aceder à aplicação |
| Objetivo do Teste 	| Verificar se após o cadastro na aplicação o usuário consegue realizar login |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página de login da aplicação; <br> - O usuário insere os dados solicitados no login; <br> - O usuário clica no botão de realizar o login.|
|Critério de Êxito | - O usuário é redirecionado para a tela principal da aplicação com permissões restritas apenas a usuários autenticados  |
|Resultado | O login está funcionando para as contas já cadastradas e o logout também.|
| Evidência	| https://youtube.com/shorts/jy-An7wtFP0?si=ixvO8QnQpXRnFbab |

| **Caso de Teste** 	| CT-03 – Gerenciamento de perfil do usuário |
|:---:	|:---:	|
|	Requisito Associado 	| RF-003 - A aplicação deve permitir que o usuário gerencie seu perfil |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Verificar se os usuários conseguem visualizar, atualizar e deletar seus dados pessoais |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário é capaz de visualizar, atualizar ou deletar seus dados; <br> - O usuário salva as alterações.|
|Critério de Êxito | - Os dados do usuário são atualizados corretamente no banco de dados; <br> - O usuário consegue visualizar as alterações feitas na aplicação|
|Resultado | Essa funcionalidade ainda não pode ser testada pois ainda não está implementada no aplicativo.|

| **Caso de Teste** 	| CT-04 – Criação e gerenciamento de viagem |
|:---:	|:---:	|
|	Requisito Associado 	| RF-004 - A aplicação deve possibilitar ao usuário criar e gerenciar viagens <br> RF-009 - A aplicação deve permitir que o usuário configure um orçamento total necessário para a realização da viagem |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Verificar se os usuários conseguem criar viagens e gerenciar viagens previamente criadas |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário acesso a página de criação de viagem; <br> - O usuário informa os dados necessários para a criação da viagem; <br> - O usuário clica no botão correspondente para a criação da viagem; <br> - O usuário seleciona a viagem criada na lista de viagens; <br> - O usuário é capaz de visualizar, atualizar ou deletar seus dados de viagem; <br> - O usuário é capaz de salvar as alterações feitas na viagem.|
|Critério de Êxito | - Os dados da viagem são armazenados corretamente no banco de dados; <br> - Os dados da viagem são atualizados corretamente no banco de dados; <br> - Após a criação, a nova viagem é exibida na página do usuário; <br> - As alterações feitas na viagem são salvas e exibidas corretamente para o usuário.|
|Resultado | É possívvel criar e gerenciar as viagens dentro do aplicativo. |
| Evidência	| https://youtube.com/shorts/zTih5iYm76E?si=beUrm2HNLpjROKZi |

| **Caso de Teste** 	| CT-05 – Exibição do painel de controle 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-005 - A aplicação deve exibir um painel de controle que destaca o valor total guardado para a viagem, saldo atualizado e lista de gastos registrados divididos por categoria <br> RF-007 - A aplicação deve atualizar automaticamente o saldo quando um gasto for inserido durante a viagem |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Garantir que o painel de controle, ao ser acessado pelo usuário, exiba as informações corretas sobre determinada viagem, como: valor total guardado para a viagem, saldo atualizado e lista de gastos por categoria inseridas durante a viagem |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário seleciona a viagem que deseja na lista de viagens; <br> - O usuário acessa o painel de controle da viagem selecionada; <br> - O usuário visualiza no painel de controle o valor total guardado para a viagem, saldo atualizado e lista de gastos registrados divididos por categorias.|
|Critério de Êxito | - Os valores são exibidos corretamente no painel de controle da viagem. |
|Resultado | Funcionalidade ainda não implementada |

| **Caso de Teste** 	| CT-06 – Gerenciamento de contribuições 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-008 - A aplicação deve permitir que os usuários registrem o valor que estão guardando para a viagem <br> RF-010 - A aplicação deve exibir o progresso em direção a meta de economia final |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Verificar se a aplicação permite que o usuário registre sua contribuição periódica para atingir a meta de orçamento da viagem e exiba o progresso em direção à meta |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário acessa a sessão de contribuições na aplicação; <br> - O usuário insere o valor da contribuição e a data; <br> - O usuário salva a contribuição; <br> - O usuário visualiza o progresso em direção a meta  de economia final atualizado após inserir contribuição.|
|Critério de Êxito | - A contribuição mensal é registrada com sucesso e exibida corretamente na interface; <br>  - O progresso em direção a meta de economia final é atualizado corretamente.|
|Resultado | O gerenciamento de contribuições está em funcionamento, apenas ainda não está vinculado com a tela de metas. |
| Evidência	|https://youtube.com/shorts/-LHIbdyIngw?si=zVrhPWKeM6PT0AJA |

| **Caso de Teste** 	| CT-07 – Inserção de gastos durante a viagem|
|:---:	|:---:	|
|	Requisito Associado 	|RF-006 - A aplicação deve permitir que os usuários insiram gastos durante a viagem, especificando valor e categoria <br> RF-007 - A aplicação deve atualizar automaticamente o saldo quando um gasto for inserido durante a viagem |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Verificar se é possível inserir gastos durante a viagem e se após a inserção o saldo da viagem é atualizado corretamente |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário seleciona a viagem que deseja na lista de viagens; <br> - O usuário acessa a página de inserção de gastos; <br> - O usuário preenche os dados necessários para inserir um gasto; <br> - O usuário salva o gasto.|
|Critério de Êxito |- O usuário consegue inserir o gasto e visualizá-lo corretamente na interface da aplicação; <br> - Após a inserção, o saldo da viagem é atualizado com o novo gasto contabilizado.|
|Resultado | A tela de inserção de gastos já está desenvolvida, e funcionando. Apenas a tela de meta que ainda não foi possível vincular com as demais funções, contribuição e gastos. |
| Evidências	|https://youtube.com/shorts/-LHIbdyIngw?si=zVrhPWKeM6PT0AJA <br> https://youtube.com/shorts/oO01seCUyRQ?si=2q2ohJfIEdp8EZDp|

| **Caso de Teste** 	| CT-08 – Geração de relatório |
|:---:	|:---:	|
|	Requisito Associado 	| RF-012 - A aplicação deve oferecer ao usuário a possibilidade de gerar relatório que exibe gastos por categoria |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Verificar se os usuário conseguem gerar relatório de gastos detalhado por categoria ao final da viagem |
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário seleciona a viagem que deseja na lista de viagens; <br> - O usuário acessa a seção de relatórios; <br> - Usuário confirma a geração do relatório.|
|Critério de Êxito | - O relatório é gerado com sucesso e exibe gastos separados por categorias; <br> - Os gastos apresentados no relatório correspondem aos gastos registrados pelo usuário.|
|Resultado | Funcionalidade ainda não implementada |

| **Caso de Teste** 	| CT-09 – Compartilhamento de viagem	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-011 - A aplicação deve permirtir que o usuário compartilhe uma viagem com outros usuários|
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	|Verificar se a aplicação permite que o usuário compartilhe viagens com outros usuários|
| Passos 	| - O usuário acessa a aplicação do dispositivo móvel; <br> - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário seleciona a viagem que deseja na lista de viagens; <br> - Usuário localiza a opção para compartilhar a viagem; <br> - Usuário insere o email do usuário com quem quer compartilhar a viagem; <br> - Usuário compartilha a viagem.|
|Critério de Êxito |- Após compartilhamento o usuário convidado tem acesso aos dados da viagem compartilhada; <br> O usuário convidado consegue interagir com a viagem compartilhada.|
|Resultado | Funcionalidade ainda não implementada |

| **Caso de Teste** 	| CT-010 – Programação de Alertas	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-13 - A aplicação deve permitir que os usuários programem alertas para poupança e recebam notificações durante a viagem, alertando sobre a proximidade ou ultrapassagem do limite de gastos estabelecido |
|	Grupos de Usuários 	| Usuários previamente cadastrados |
| Objetivo do Teste 	| Verificar se o usuário consegue programar alertas relacionados a uma viagem |
| Passos 	| - O usuário acessa a página do seu perfil na aplicação; <br> - O usuário seleciona a viagem que deseja na lista de viagens; <br> - Usuário localiza a opção para configurar os alertas; <br> - O usuário define o tipo de alerta que deseja receber; <br> -O usuário confirma a programação dos alertas. |
|Critério de Êxito | - Os alertas são programados com sucesso; <br> - O usuário recebe os alertas com informação corretas a respeito da viagem.|
|Resultado | Funcionalidade ainda não implementada |
