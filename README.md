# Pyramid Generator (In English|Em Inglês)

## Overview
This project generates a pyramid pattern in the console using a specified character and number of rows. It also includes functionality to invert the pyramid orientation.

## Features
- Generate a pyramid with a customizable number of rows.
- Use a specific character to build the pyramid (default: `#`).
- Invert the pyramid orientation by toggling a boolean variable.

## How It Works
The script defines a function, `padRow`, that generates each row of the pyramid with proper alignment. Rows are either added to the top or bottom of the structure based on the value of the `inverted` variable.

### Key Variables:
- **`character`**: The character used to create the pyramid (default: `#`).
- **`count`**: Number of rows in the pyramid (default: `8`).
- **`inverted`**: When `true`, the pyramid is generated upside down (default: `false`).

### Example Outputs:
#### Normal Pyramid (inverted = `false`):
```
       #
      ###
     #####
    #######
   #########
  ###########
 #############
###############
```
#### Inverted Pyramid (inverted = `true`):
```
###############
 #############
  ###########
   #########
    #######
     #####
      ###
       #
```

## How to Use
1. Clone the repository or copy the script.
2. Modify the values of the `character`, `count`, and `inverted` variables as needed:
   - Set `character` to the desired character.
   - Set `count` to the number of rows.
   - Set `inverted` to `true` or `false` depending on the desired orientation.
3. Run the script in a JavaScript environment (e.g., Node.js or browser console).

### Example:
```javascript
const character = "*";
const count = 5;
let inverted = true;
// Output will be an inverted pyramid with 5 rows built using '*'.
```

## License
This project is licensed under the MIT License.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Gerador de Pirâmide (Em Português|In Portuguese)

## Visão Geral
Este projeto gera um padrão de pirâmide no console usando um caractere especificado e um número de linhas. Ele também inclui a funcionalidade de inverter a orientação da pirâmide.

## Funcionalidades
- Gerar uma pirâmide com um número personalizável de linhas.
- Usar um caractere específico para construir a pirâmide (padrão: `#`).
- Inverter a orientação da pirâmide alternando uma variável booleana.

## Como Funciona
O script define uma função, `padRow`, que gera cada linha da pirâmide com o alinhamento adequado. As linhas são adicionadas ao topo ou à base da estrutura com base no valor da variável `inverted`.

### Variáveis Principais:
- **`character`**: O caractere usado para criar a pirâmide (padrão: `#`).
- **`count`**: Número de linhas na pirâmide (padrão: `8`).
- **`inverted`**: Quando `true`, a pirâmide é gerada de cabeça para baixo (padrão: `false`).

### Exemplos de Saída:
#### Pirâmide Normal (`inverted = false`):
```
       #
      ###
     #####
    #######
   #########
  ###########
 #############
###############
```
#### Pirâmide Invertida (`inverted = true`):
```
###############
 #############
  ###########
   #########
    #######
     #####
      ###
       #
```

## Como Usar
1. Clone o repositório ou copie o script.
2. Modifique os valores das variáveis `character`, `count` e `inverted` conforme necessário:
   - Defina `character` para o caractere desejado.
   - Defina `count` para o número de linhas.
   - Defina `inverted` como `true` ou `false`, dependendo da orientação desejada.
3. Execute o script em um ambiente JavaScript (por exemplo, Node.js ou console do navegador).

### Exemplo:
```javascript
const character = "*";
const count = 5;
let inverted = true;
// A saída será uma pirâmide invertida com 5 linhas construídas usando '*'.
```

## Licença
Este projeto está licenciado sob a Licença MIT.

