<h1 align="center">
    API-Express
</h1>
<br>  
<div align="center">
<p>API simples desenvolvida com Express Js, simulando um banco de dados armazenando usuários e artigos com suas respectivas informações.</p>
</div>

<br>
<div>
<ul>
<li>Utiliza mais de uma rota</li>
<li>Usuários com Id repetido não podem ser criados</li>
<li>Não é possivel alterar ou deletar usuários com id inexistente</li>
<li>Rota posts deleta um artigo pelo título</li>
<ul>
<br>
</div>

```javascript
//testando localmente
"http://localhost:port/route"
//exemplo:
"http://localhost:3000/users/4"
```


<h3>Estrutura</h3> 
	
````json
{
	"name": "Ulisses Auresco",
	"id": "1",
},
````

<h3>Métodos</h3> 

```javascript
//users:
.GET users/id     //retorna user com o ID enviado
.GET users/       //retorna todos os users
.POST users/      //retorna ok se o user enviado foi salvo
.PUT users/       //retorna ok se o user com o ID enviado foi substituido
.DELETE users/id    //retorna ok se o user com o ID enviado foi deletado
```
```javascript
//posts:
.GET posts/            //retorna todos os posts
.POST posts/           //retorna ok se o posts enviado foi salvo
.DELETE posts/title    //retorna ok se o posts com o title enviado foi deletado
```
<br>
<div>
<br>  
<p>API está configurada para a porta 3000, pode ser alterado no arquivo index.js.</p>
<p>Ao clonar este repositório é necessário a instalação do Node.js, Express Js além das dependências do projeto (node_modules).</p>
<p>Testes podem ser realizados pela plataforma <a href="https://www.postman.com/">Postman</a> </p>
</div>
<br>
<div align="center" style=" display: inline_block;"> 
 <a href="https://expressjs.com/">
  <img align="center" alt="express"  src="https://icongr.am/devicon/express-original-wordmark.svg?size=148&color=83cd29">
  <img align="center" alt="node" height="50" width="70" src="https://icongr.am/devicon/nodejs-original.svg?size=148&color=83cd29">
    </a>
</div>
