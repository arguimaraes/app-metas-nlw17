const { select } = require('@inquirer/prompts') /* Essa sintaxe define que o programa irá importar o inquirer, ou seja, que o programa irá buscar dentro da pasta node_modules o @inquirer e dentro do @inquirer, a pasta prompts e de dentro dela ele vai extrair alguma coisa ("um código... uma função... que a gente vai usar daqui a pouco")*/ 

/* Palavras do professor sobre o que essa sintaxe informa/significa: O "require('@inquirer/prompts')" vai me devolver um objeto, de dentro do objeto eu quero apenas o "select". */

const start = async () => { // O async é obrigatório por conta do await lá na linha 9
  
  while(true){

    // O await, por sua vez, é usado para informar ao programa que, para o while ser ativado, ele deve ~aguardar~ o usuário selecionar algo (Essa seleção do usuário é possível graças ao select que a gente importou com o inquirer)
    const opcao = await select({
      message: 'Menu >',
      choices: [
        {
          name: 'Cadastrar meta', //O name é o que será apresentado ao usuário
          value: 'cadastrar' //O value é o valor que será passado para a variável opcao, que será usada no switch
        },
        {
          name: 'Listar metas',
          value: 'listar'
        },
        {
          name: 'Sair',
          value: 'sair'
        }
      ]
    }) /* É obrigatória essa estrutura para esse tipo de select do inquirer, pois isso é pré-definido pela biblioteca. Cada biblioteca pode ser estudada para descobrirmos as estruturas necessárias.
    Neste caso, é essa estrutura a que se pede: com o "message: 'String_qualquer'," e o "choices: []", pois essa função espera um objeto que tenha exatamente essas propriedades. Além disso o choices tem que ser um array, que pode ser de objetos. */


    switch (opcao) {
      case 'cadastrar':
        console.log('vamos cadastrar'); 
        break;
      case 'listar':
        console.log('vamos listar');
        break;
      case 'sair':
        console.log('Até a próxima');
        return
    }
  }
}

start();