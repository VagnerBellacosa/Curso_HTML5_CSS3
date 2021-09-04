# Git
---

>Git é um sistema de controle de versão distribuído gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes com velocidade e eficiência.  
Git é fácil de aprender e tem um desempenho extremamente rápido. Ele supera as ferramentas SCM como Subversion, CVS, Perforce e ClearCase com recursos como ramificação local barata, áreas de teste convenientes e vários fluxos de trabalho.

Inicialmente projetado e desenvolvido por Linus Torvald em 2005, Git rapidamente se tornou uma das mais populares ferramentas de controle de versão, principalmente em projetos open source.
Muito do aumento da popularida de Git se deve a plataformas como GitHub a qual vamos ver mais a frente.  
<br/>

## Principais plataformas de hospedagem que utilizam Git  
<br/>

![](img/github.png) 

![](img/gitlab.png) 

![](img/bitbucket.png) 


## GitHub
---  
<br/>

Iremos adotar a plataforma GitHub para este treinamento, se trata da plataforma mais popular do mundo que utiliza Git.  
O GitHub é amplamente utilizado por grande parte dos projetos open sources e também por desenvolvedores para divulgação de projetos e portifólio.  
<br/>


## Conceitos GIt
---  
<br/>

### Repositório  

Local onde os arquivos e suas cópias ficarão armazenados. O repositório pode ser local ou remoto, podendo salvar qualquer tipo de arquivo.  
<br/>

### Branch  

Um branch é uma cópia de um repositório feito a partir de outra branch. Você pode utilizá-lo para desenvolver o seu projeto individualmente, sem alterar a branch de origem. Assim, só depois de finalizado, será combinado novamente com a branch original.

Essa função é útil, por exemplo, se você tem mais de uma opção para a finalização de um projeto. Você pode testar as opções separadamente e incluir o código definitivo só quando você decidir qual alternativa é a melhor.  

Geralmente, teremos a branch principal que normalmente tem o nome de master ou main (GitHub utilizava por default o master mas passou a adotar o padrão main desde 2020) e as branchs criadas pelos colaboradores.

<br/>

### Pull request  / Merge Request  

Um Pull/Merge Request é quando você informa aos outros membros da sua equipe que vai incorporar seu branch ao repositório original. Os colaboradores da equipe podem aceitar ou não a Pull Request.

Ao abrir essa opção é possível discutir e argumentar o seu trabalho com os cocriadores do projeto.  
<br/>

### Merge

Após a finalização de um trabalho em um Branch, é necessário realizar o Merge, fundir a cópia e seus arquivos modificados com a branch principal do projeto. Isso pode ser feito localmente ou no caso de estarmos utilizando uma plataforma como o GitHub isso pode ser feito após análise da solicitação de Merge Request.  
<br/>  

![](img/branch.png)  



### Primeiros passos

- Criar uma conta pessoal no GitHub
- Instalar Git Client
  - https://git-scm.com/downloads
- Criar um novo repositório no Github
- Criar assinatura
  - ``` 
  git config --global user.name "Seu usuario"
  git config --global user.email "email@example.com
  ```
- Clonar repositório
  - ``` 
  git clone <url_repositorio>
  ```

## Comandos Git
---  
<br/>

### Git Help

```
git help
git help <comando> #Comando o qual deseja maiores informações
```

O comando help irá lhe mostrar qual a função de determinado comandos e quais opções podem ser utilizadas junto com aquele comando.   

#### Git Clone  
```
git clone <endereco-repositorio-remoto>
```
O Git clone é um comando para baixar o código-fonte existente de um repositório remoto (como o Github, por exemplo). Utilizando GitHub é possível fazer o *git clone* por https ou ssh.

#### Git Init
```
git init
```

Cria um novo repositório local Git. Com esse comando será criado um novo subdiretório chamado .git que contem todos os arquivos necessários de seu repositório — um esqueleto de repositório Git.  

### Git Remote

```
git remote add origin <endereco_repositorio>
```

Vincula o repositório local a um repositório remoto.


```
git remote

git remote -v
```

Exibe os repositórios remotos.  


#### Git Status  
```
git status
```
Fornece todas as informações necessárias sobre o branch atual, como por exemplo ficheiros que sofreram alterações que podem ser incluídos no próximo *commit*.  

#### Git Add
```
git add <ficheiro>
git add .
```  
Adiciona um ficheiro ou todos o ficheiros que sofreram modificações e/ou foram incluídos no  próximo *commit*.
Este comando não altera o repositório, as alterações não são salvas até fazermos um *commit*. 

#### Git Restore
```
git restore --staged <ficheiro>
```  
Remove do próximo *commit* ficheiro que foi incluído no  próximo *commit*.

```
git restore <ficheiro>
```  
Restaura o ficheiro para a última estado dele na Branch. Cuidado, isso irá remover todas suas alterações que não foram realizadas *commit*.

#### Git Reset

```
git reset HEAD <ficheiro>
```

Remove do próximo *commit* ficheiro que foi incluído no  próximo *commit*. (igual ao comando git restore --staged


```
git reset --hard
```

Retorna o repositório para o último commit na branch a qual está posicionado. Cuidado, todas as suas alterações que não sofreram *commit* serão perdidadas.

#### Git Commit

```
git commit -m "Mensagem explicativa da alteração realizada"
```
Este comando é como definir um ponto de verificação no processo de desenvolvimento, para o qual você pode voltar mais tarde, se necessário. Quando é feito o *git commit* as alterações são confirmadas apenas no repositório local.  

#### Git Pull
```
git push <remote> <nome-do-branch>
git push origin main
```
Este comando é como definir um ponto de verificação no processo de desenvolvimento, para o qual você pode voltar mais tarde, se necessário. Quando é feito o *git commit* as alterações são confirmadas apenas no repositório local.  

#### Git Push
```
git pull <remote>
git pull origin
git pull
```

Obtém atualizações do repositório remoto, quando usamos o git pull, ele recebe as atualizações do repositório remoto e aplica imediatamente as alterações mais recentes no seu repositório local.  

#### Git Branch

Com branches, vários desenvolvedores podem trabalhar em paralelo no mesmo projeto simultaneamente.

Pode-se usar o comando git branch para criar, listar e excluir branches.

Criação nova:

```
git branch <nome-do-branch>
```

Listar branches:

```
git branch
git branch --list
```

Deletar branches:

```
git branch -d <nome-do-branch>
```

Replicar branch para o repositório remoto:

```
git push -u <remote> <nome-da-branch>
```   

Listar branches que já foram fundidos (merged) com o master  

```
git branch --merged
```   

Listar branches que não foram fundidos (merged) com o master  

```
git branch --merged
```

#### Git Checkout

Este é um dos comandos Git mais usados. Para trabalhar em uma branch, primeiro você precisa mudar para ela.

Usamos o git checkout principalmente para alternar de um branch para outro. Também podemos usá-lo para verificar arquivos e commits.

```
git checkout <nome-do-branch>
```

Criar um novo branch e fazer checkout ao mesmo tempo:

```
git checkout -b <nome-da-branch>
```

#### Git Log

Exibir histórico do repositório

```
git log
```   

Exibir histórico com diff das duas últimas alterações.  

```
git log -p -2
```

Exibir resumo do histórico (hash completa, autor, data, comentário e qtde de alterações (+/-))   
```
git log --stat
```   

Exibir informações resumidas em uma linha (hash completa e comentário)  

```
git log --pretty=oneline
```

Exibir histórico modificação de um ficheiro  

```
git log --diff-filter=M -- <ficheiro>
```


#### Git Tags

Tags são utilizadas normalmente para marcar o ponto de uma determina versão da aplicação, desta forma, é possível seguir na mesma branch principal e conseguir voltar para pontos de versão apenas utilizando as tags.

Criar uma tag localmente, a tag é criada na branch onde estiver no momento em que executar o comando. 

```
git tag v1.1 -m "descricao"
```

  
Criar a tag que foi criada localmente no repositório remoto.

```
git push origin <tag_name>
```

Criar todas as tags locais no repositório remoto.

```
git push origin --tags
``` 

#### Git Merge

O git merge permite fazer um merge entre duas branch.

```
git merge <branch_a_realizar_merge>
```

Para realizar o merge, é necessário estar no branch que deverá receber as alterações. O merge pode acontecer de forma automática ou exigir uma ação manual. O merge automático será feito em arquivos textos que não sofreram alterações nas mesmas linhas, já o merge manual será feito em arquivos textos que sofreram alterações nas mesmas linhas, onde será necessário intervenção e realização de um novo commit após esta intevenção.

----

## Referências:

 - https://gist.github.com/leocomelli/2545add34e4fec21ec16
 - https://comandosgit.github.io/
 - https://rogerdudler.github.io/git-guide/index.pt_BR.html
 - https://tableless.com.br/tudo-que-voce-queria-saber-sobre-git-e-github-mas-tinha-vergonha-de-perguntar/

