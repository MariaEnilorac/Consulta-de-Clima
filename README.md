# Projeto de Consulta de Clima

Este projeto é uma aplicação simples de consulta de clima utilizando a API do OpenWeatherMap. A aplicação permite que o usuário insira o nome de uma cidade, e retorna as informações do clima atual, como a temperatura e o ícone representando as condições climáticas.

## Funcionalidades

- Busca por dados meteorológicos com base no nome da cidade.
- Exibe a temperatura atual e um ícone que representa o clima.
- Validações de entrada, como o mínimo de três caracteres para o nome da cidade.
- Tratamento de erros em caso de falha ao buscar os dados da API.

## Tecnologias Utilizadas

- **HTML**: Estrutura básica da aplicação.
- **CSS**: Para estilizar os elementos visuais (não incluído neste README).
- **JavaScript (ES6+)**: Lógica para fazer a requisição assíncrona à API e manipulação do DOM.
- **TypeScript**: Uso opcional, conforme indicado na tipagem do `input` no código.
- **API OpenWeatherMap**: Fornece os dados meteorológicos.

## Instruções para Utilização

1. **Pré-requisitos**: 
   - Um navegador moderno com suporte a ES6 e `fetch` API.
   - Acesso à internet para fazer chamadas à API do OpenWeatherMap.
   
2. **Estrutura do HTML**:
   - O formulário deve ter o seguinte formato:

    ```html
    <section id="search-form">
        <form>
            <input type="text" id="input-localizacao" placeholder="Digite a cidade">
            <button type="submit">Buscar</button>
        </form>
    </section>
    
    <section id="tempo-info"></section>
    ```

3. **Chave da API**:
   - A aplicação utiliza uma chave de API fornecida pelo OpenWeatherMap. No código acima, a chave `appid` usada é `992efcddadbe837d3325fc0684e903fa`. Substitua-a pela sua própria chave, se necessário.

4. **Como funciona**:
   - Ao submeter o formulário, o nome da cidade é capturado.
   - O nome da cidade é passado como parâmetro para a API do OpenWeatherMap, que retorna os dados do clima.
   - As informações do clima, como temperatura e o ícone, são exibidas na página.

5. **Validação**:
   - O campo de entrada valida se o nome da cidade tem pelo menos 3 letras.
   - Caso contrário, uma mensagem de alerta é exibida.
   
6. **Tratamento de Erros**:
   - Se a resposta da API falhar (ex.: cidade não encontrada ou erro de rede), o sistema exibe um alerta com a mensagem de erro apropriada.

## Como Rodar o Projeto

1. Clone o repositório para sua máquina.
2. Abra o arquivo `index.html` em um navegador.
3. Insira o nome de uma cidade no campo de entrada e clique em "Buscar".
4. A temperatura e o ícone do clima da cidade inserida serão exibidos na tela.

## Exemplo de Uso

- **Entrada**: "São Paulo"
- **Saída**:
  - Local: São Paulo
  - Temperatura: 25°C
  - Ícone correspondente ao clima atual (ex.: sol, nuvens, chuva)

## Possíveis Melhorias

- Adicionar estilização com CSS para melhorar a experiência do usuário.
- Implementar funcionalidades adicionais, como a previsão do tempo para os próximos dias.
- Suporte a geolocalização para exibir automaticamente o clima do local atual do usuário.
  
## Contribuição

Sinta-se à vontade para abrir issues e enviar pull requests para melhorias.

## Licença

Este projeto está licenciado sob a licença MIT.
