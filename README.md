# AppMobile
Aplicativo Mobile de Cálculo de Volume de Caixa de Som

Este é um aplicativo mobile que permite aos usuários calcular o volume de uma caixa de som, calcular o duto adequado e manter uma lista dos valores calculados. Além disso, o aplicativo possui integração com um banco de dados MySQL para armazenar todos os valores calculados.
Funcionalidades

O aplicativo possui três telas principais, que podem ser acessadas através de um TabNavigator:

Tela 1: 
Cálculo de Volume de Caixa de Som
Nesta tela, os usuários podem inserir as dimensões da caixa de som, como largura, altura e profundidade, e o aplicativo irá calcular automaticamente o volume total da caixa. Os valores calculados podem ser salvos na lista de resultados.

Tela 2: 
Cálculo do Duto
Nesta tela, os usuários podem inserir as dimensões do duto, como comprimento, diâmetro e área da seção transversal, e o aplicativo irá calcular o tamanho adequado do duto para a caixa de som. Os valores calculados podem ser salvos na lista de resultados.

Tela 3: 
Lista de Resultados
Nesta tela, os usuários podem visualizar todos os valores calculados a partir das telas de cálculo de volume e cálculo do duto. Os valores são exibidos em uma lista e também são armazenados em um banco de dados MySQL. Os usuários podem visualizar os detalhes de cada cálculo individualmente.
Integração com Banco de Dados MySQL

O aplicativo faz uso de um banco de dados MySQL para armazenar todos os valores calculados. Cada vez que um cálculo é realizado, os dados são salvos no banco de dados, permitindo que os usuários tenham acesso a eles posteriormente. A integração com o banco de dados é realizada através de uma API de comunicação.
Requisitos Técnicos

    O aplicativo foi desenvolvido utilizando o React Native.
    Para a integração com o banco de dados MySQL, é necessário fornecer as credenciais 
    de acesso e configurar corretamente as permissões de acesso no servidor do banco de dados.
    (disponivél na aba Instalação e Configuração)

Instalação e Configuração

    Faça o download do código-fonte do aplicativo.
    Abra o projeto no VsCode.
    instale as bibliotecas necessárias.
    Configure as credenciais de acesso ao banco de dados MySQL na seção apropriada do código.
    -user: root / password: root
    Compile e execute o aplicativo em um dispositivo ou emulador compatível.
    Recomendado: YARN
    navegue até a pasta do projeto e execute um yarn start no terminal.

Contribuição:

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou relatar problemas na página do projeto no GitHub.

Este aplicativo foi desenvolvido por Thiago Marques Ether e faz parte do projeto da avaliação da segunda unidade(AV2).

Licença:
Este aplicativo não é licenciado.
