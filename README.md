# Sobre o Projeto

Projeto desenvolvido para resolver o primeiro desafio da maratona de programação da Lyncas.
O qual consistia em resolver o seguinte problema: 
			Dado duas strings, retorne truese elas forem iguais quando ambas forem digitadas em editores de textos vazios. '#' significa um caractere de retrocesso(backspace).
			Observe que após retroceder um texto vazio, o texto continuará vazio.


# Funcionamento

O algoritmo consiste em duas funções.
A primeira verifica a existência de '#' na string, e conforme ela vai encontrando, apaga o caracter imediatamentamente à esquerda e o próprio '#'. Caso não exista mais nenhum caracter, o próprio '#' é apagado.

Essa iteração é feita de forma recursiva até que não seja encontrada mais nenhuma ocorrência do '#'. Essa função é aplicada duas vezes, uma para cada string.

A segunda função consiste na comparação dos caracteres que permaneceram das strings. Caso o resultado da comparação seja igual, o algoritmo retorna true; caso seja diferente, retorna false.


# Como Testar

Para testar o algoritmo, basta chamar a função checkTextEquality passando as strings a serem comparados como parâmetros.
O comando para executar o projeto é npm dev ou yarn dev.

# Autores
Genara Sousa,
Thalison Campos,
Renato Ganske
