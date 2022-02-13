# O que é uma função Lambda?

- ![Daniel Ginês](https://www.gravatar.com/avatar/14235090f35484b421c131bcb8bf01a1?s=250&d=mm&r=x)[DANIEL GINÊS](https://blog.estabil.is/author/danielgines/)

25 JUN 2018 • 4 MIN READ

![O que é uma função Lambda?](https://blog.estabil.is/content/images/size/w2000/2018/06/Untitled-1.png)

O AWS Lambda, como já aprendemos, é um serviço de computação que permite executar código sem gerenciar servidores. O AWS Lambda executa o código quando é necessário e é dimensionado automaticamente. O código executado no AWS Lambda é chamado de função lambda e pode ser considerado, para melhor compreensão, como uma fórmula em uma planilha. À medida que você faz fórmulas para calcular automaticamente quaisquer dados inseridos, as funções são um pouco semelhantes.

#### **O básico**

Criar funções simples através do console da Web do Lambda é bastante fácil. Funções permitem que seu código seja executado sem problemas ao executar tarefas automatizadas menores. A função está pronta para ser executada assim que for acionada. A função Lambda inclui seu código junto com as informações de configuração associadas. As funções do Lambda não têm nada a ver com a infraestrutura subjacente. Portanto, o Lambda pode executar quantas cópias da função forem necessárias para que possa ser dimensionada para atender à taxa dos eventos recebidos.

Quando seu código é carregado no AWS Lambda, sua função é comumente associada a alguns recursos específicos da AWS, como um bucket do Amazon S3, uma tabela do amazona Dynamo DB, notificações do Amazon SNS ou fluxos do Amazon Kinesis. Depois de associar sua função a recursos da AWS, quando o recurso for alterado, o Lambda executará e gerenciará os recursos de computação para obter êxito com as solicitações recebidas.

**Construindo Funções Lambda**
Depois de fazer o upload do seu código de aplicativo na forma de uma ou até várias funções do AWS Lambda para o AWS Lambda, o AWS Lambda executará o código para você. O AWS Lambda cuida do gerenciamento dos servidores para executar o código quando chamado. O ciclo de vida de um aplicativo baseado no AWS Lambda inclui várias seções.

**Código de autoria para sua função no Lambda** nos idiomas suportados pelo AWS Lambda. Os idiomas suportados são Node.js, Java, C#, Python e Go. Esses idiomas usam ferramentas específicas para o código de autoria. Alguns deles são o controle do AWS Lambda, o Eclipse IDE etc.

**A implantação do código e a criação de uma função do Lambda** exigem que você primeiro empacote seu código e dependências em um pacote de implantação para poder desenvolver uma função Lambda. Depois de fazer isso, você precisa fazer o upload do pacote de implantação para a AWS Lambda, assim ele permitirá que você crie a função do Lambda.

Organizar seu código e dependências de maneiras especificas é o primeiro passo para criar o pacote de implantação. As instruções do pacote de implantação podem variar dependendo do idioma que você escolheu para criar o código.

**O upload de um pacote de implementação** é permitido pela operação CreateFunction do AWS Lambda, que é usada para criar uma função do Lambda. Você pode escolher entre o AWS Lambda Console, o AWS CLI e o AWS SDKs para criar uma função Lambda. Fornecer informações de configuração depois de estabelecer a função lambda, incluindo os requisitos de computação, é enviado ao seu pacote de implantação.

**Testar as funções do Lambda** pode ser feito seguindo um dos métodos, como testar sua função lambda no console ou usar o AWS CLI ou até mesmo verificá-la localmente usando o AWS SAM CLI.

**O monitoramento de funções lambda** se torna automático depois que você está em produção, enquanto as métricas de relatório são feitas através do Amazon CloudWatch. Este é o principal ponto de dor das funções lambda.

O próprio Lambda auxilia na solução de falhas em uma função. O Lambda registra todas as solicitações tratadas pela sua função e também armazena automaticamente todos os logs gerados pelo seu código no Amazon CloudWatch logs.

**Configurando as funções do Lambda**
Uma função Lambda consiste no código e nas dependências associadas e também possui informações de configuração dentro dela. Você é quem está especificando as informações de configuração ao criar uma função do Lambda. A API também é fornecida para que você possa atualizar alguns dos dados de configuração. As informações de configuração da função Lambda são fornecidas com os elementos críticos, como o cálculo dos recursos necessários, o tempo máximo de execução (tempo limite), a função do IAM (função de execução) e o nome do manipulador.

O cálculo dos recursos necessários é feito especificando a quantidade de memória que você deseja alocar para sua função do Lambda. O AWS Lambda aloca a potência da CPU proporcionalmente à memória pela mesma proporção de um tipo de instância geral do Amazon EC2, como um tipo M3. No exemplo, isso significa que, se você alocar 1024MB de memória, sua função lambda obterá o dobro da CPU do que se alocou 512MB.

**O tempo máximo de execução (tempo limite)** é especificado para evitar que a função Lambda seja executada sem interrupção. Como você está pagando pelos recursos da AWS que são usados para executar sua função do Lambda, isso é bastante útil. Ao atingir o tempo limite, o AWS Lambda está encerrando a execução da sua função do Lambda. A configuração recomendada é avaliada no tempo de execução esperado.

**A função do IAM (função de execução)** é a função que o AWS Lambda desempenha em seu nome ao executar uma função lambda.

**O nome do manipulador** é o método de ponto de entrada que executa seu código de função lambda com quaisquer dependências de origem de eventos incluídas como parte de sua função lambda. Você poderá descobrir mais detalhes e os recursos de qualidade para monitorar e depurar o AWS Lambda e suas funções lambda.

**Acionando a Função Lambda**
O AWS Lambda é operado utilizando um desses dois modelos de eventos.
• Um modelo de evento push
• Um modelo de evento pull

As funções do Lambda podem ser escritas em Node.js (ou JavaScript) e Java (compatível com Java 8). Estes são alguns dos eventos que podem ser configurados para acionar a função Lambda.

• Atualizações de tabela no Amazon DynamoDB
• Modificando Objetos no Balde S3
• Mensagens que chegam ao fluxo do Amazon Kinesis
• Notificações que são enviadas do Amazon SNS
• Eventos HTTP enviados do gateway de API

Eventos personalizados provenientes de aplicativos móveis, aplicativos da web ou quaisquer outros serviços da web.

As funções Lambda são pequenos pedaços de um trabalho mais significado feito, permitindo que você o execute de forma simples e eficaz. Começar do zero é sempre a melhor opção, especialmente para iniciantes no campo.

Fonte: dzone.com