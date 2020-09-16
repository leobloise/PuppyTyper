# PuppyTyper

Robo criado utilizando puppeteer para realização de testes automatizados.

## Como usar

Basicamente, temos a classe PuppyTyper que ira realizar o trabalho de teste. Contudo, cada ‘website’ que sera acessado e muito diferente e possui suas próprias características, você precisara estender essa classe. Ao estender, você ira alterar o método routine. Esse metodo sera o responsável por conter toda a rotina do seu site e te levar para onde desejar.

A partir disso, você pode utilizar os métodos da (classe) pai para facilitar o seu trabalho e, caso deseje, criar os seus próprios métodos. Além disso, caso você esteja usando um seletor CSS em demasia, você pode utilizar o CSSReader. Para isso, basta passar para ele o caminho completo do seu JSON possuindo os seletores CSS. Ele ira devolver um objeto contendo todas os seletores la definidos.

# Exemplo

Caso ainda tenha duvidas sobre o seu funcionamento, veja o exemplo contido em: 

<ul>
    <li> index.js </li>
    <li> MyTyper.js </li>
</ul>