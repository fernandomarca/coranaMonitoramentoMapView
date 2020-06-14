# Corana Monitorament MapView
> Aplicação Mobile e web para monitoramento dos casos da Covid-19.

## Meta

Fernando Marca Magalhães – fernandomarca@hotmail.com

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

[https://github.com/fernandomarca/coranaMonitoramentoMapView](https://github.com/fernandomarca/coranaMonitoramentoMapView)

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/fernandomarca/coranaMonitoramentoMapView/wiki

>Ajudamos os municípios do Paraná a monitorar e mapear os casos 
>confirmados e suspeitos da Covid-19, em tempo real em um mapa interativo, 
>para que os interessados possam traçar suas estratégias de controle de forma mais eficiêntes.

## Contributing

1. Faça o _fork_ do projeto (<hhttps://github.com/fernandomarca/coranaMonitoramentoMapView/fork>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

![](../header.png)

<p align="center">
    <img alt="logo" title="#logo" src="https://github.com/fernandomarca/coranaMonitoramentoMapView/blob/master/web/src/assets/logo.png" width="160px" />
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/fernando-magalh%C3%A3es-476a71b1/">
    Linkdin
  </a>
  <a href="https://github.com/fernandomarca">
    Github
  </a>
</p>

# Corana Monitorament MapView

#Capa Desktop-Web

![capaDesktop](https://github.com/fernandomarca/coranaMonitoramentoMapView/blob/master/screens/Desktop-home.png)

#Mobile 
#Legenda:
alfinete Vermelho=Caso Confirmado, 
Alfinete Amarelo= Caso Suspeito, 
Alfinete Verde saúdavel/curado, 
Alfinete Azul= Óbito confirmado 

![capa](https://github.com/fernandomarca/coranaMonitoramentoMapView/blob/master/screens/home-mapa.jpeg)


Projeto desenvolvido durante a quarentena com base na [NextLevelWeek](https://nextlevelweek.com/) da [Rocketseat](https://rocketseat.com.br) para aplicar os conceitos de `typescript`, `Node.js`, `ReactJS` e `React Native`.

Trata-se de uma aplicação completa (backend, frontend e mobile) para ajudar os municípios do oestes do estado do paraná no monitoramento dos casos da covid-19.
Auxilía no monitoramneto em tempo real pela visualização no mapa integrado, bem como para o contato com as pessoas cadastradas para acompanhamento do seu estado de saúde.
  
  [Começando](#começando)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Instalação](#instalação)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Execução](#execução)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Tecnologias](#tecnologias)&nbsp;&nbsp;|&nbsp;&nbsp;
  [Preview](#preview)&nbsp;&nbsp;|&nbsp;&nbsp; 

## Começando
As instruções a seguir são para fornecer uma cópia deste projeto que poderá ser executada na sua máquina local para fins de desenvolvimento e teste.

### Pré Requisitos

* É necessário que você tenha o `Node.js` instalado em sua máquina. 
* Para a aplicação Mobile é necessário instalar o pacote `expo` em sua máquia

## Instalação

Clonando este repositório em sua máquina local e acessaando a pasta do projeto:

```bash
git clone https://github.com/fernandomarca/coranaMonitoramentoMapView.git

### Backend
Instalando as dependências do backend da aplicação:

```bash
cd server
npm install / npm up
```
crie as variáveis de ambiente necessárias.

### Frontend

Instalando as dependências do frontend da aplicação:

```bash
cd ../web
npm install / npm up
```
Crir as variáveis de ambiente necessárias.

### Mobile

Instalando as dependências da aplicação mobile:

```bash
cd ../mobile
npm install / npm up
```
Crie as variáveis de ambiente necessárias.

## Execução
Toda a aplicação pode ser inicializada em ambiente de desenvolvimento com facilidade, seguindo as instruções abaixo:

### Backend
A primeira parte que deve ser executada no ambiente de desenvolvimento é o servidor `node.js`. 

Certifique-se de que está dentro da pasta `server` do projeto em seu terminal e que você já configurou as variáveis de ambiente corretamente, em seguida execute o comando abaixo para inicializá-lo:

```bash
npm run dev
```

### Frontend
Este é o site `ReactJS` onde os pontos de coleta são cadastrados. É necessário que o backend já esteja operacional. 

Certifique-se de que está dentro da pasta `web` do projeto em seu terminal e que você já configurou as variáveis de ambiente corretamente, em seguida execute o comando abaixo para inicializá-lo:

```bash
npm start
```
### Mobile
Nesta parte você irá inicializar a aplicação mobile, escrita com `React Native` onde os pontos de coleta podem ser consultados por cidade. Esta parte funciona independente do Frontend, porém é necessário que o backend já esteja operacional. 

Certifique-se de que está dentro da pasta `mobile` do projeto em seu terminal e que você já configurou as variáveis de ambiente corretamente, em seguida execute o comando abaixo para inicializá-lo:

```bash
npm start
```
Após o projeto mobile inicializar, será exibido um `QRCode` no terminal e uma aba dos eu navegador irá carregar o `Metro Bundler`. Neste momento você precisará instalar em seu dispositivo móvel, um aplicativoo chamado `Expo`.
Ele está disponível nas APP Stores:

- [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) na Google Play
- [Expo Client](https://apps.apple.com/br/app/expo-client/id982107779) na Apple Store

Abra em seu smartphone o aplicativo Expo e escaneie o código de barras exibido na inicialização do projeto.


## Tecnologias

* [Node.js](https://nodejs.org/) - Usado para construir o backend (webservice REST) do projeto
* [express](https://expressjs.com/) - Framework Web utilizado no backend
* [knex.js](http://knexjs.org/) - ORM usado no backend para auxiliar no versionamento do banco de dados
* [sqlite3](https://www.sqlite.org/) - Banco de dados utilisado no backend para peristência dos dados
* [React](https://reactjs.org/) - Usado para construir o frontend (website)
* [React Native](https://reactnative.dev/) - Usado para construir a aplicação Mobile multiplataforma
* [expo](https://expo.io/) - Usado para facilitar o desenvolvimento com `React Native`
* [typescript](https://www.typescriptlang.org/) - Usado para melhorar a integridade do código final e auxiliar o desenvolvimento em equipe

Confira a lista completa de tecnologias utilizadas no arquivo `package.json`, presente na pasta raiz de cada parte do projeto.

## Preview

![projeto](http://i.picasion.com/pic90/d8cfac61211f2f471f2a7d19e3913534.gif)
![projeto2](http://i.picasion.com/pic90/54d5039d06bb67f423ffa3375b6d6f67.gif)

API implementada no backend não possui interface gráfica própria. Para ver como ficou, confira o código aqui no repositório.

Feito por [Fernando Marca Magalhães](https://www.linkedin.com/in/fernando-magalh%C3%A3es-476a71b1)

