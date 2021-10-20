# Vehicle API

Vehicle API é uma pequena API de veículos que permite realizar operações CRUD para a persistência e consulta de veículos. Seu objetivo é demonstrar em um pequeno projeto os valores dos princípios SOLID e a implementação de testes.

## Instalação
Instale todas as dependências do projeto
```bash
npm install
```

## Endpoint's

```python
# Criar um veículo
POST | http://localhost:8080
# Body: { marca: string, modelo: string, ano: number, cor: string, valor: number, id_categoria: number }
# Categoria: 1 = Carro, 2 = Motocicleta
```

```python
# Retornar um veículo específico
GET | http://localhost:8080/${placa} 
# Exemplo do parâmetro: IAX8X00

# Retorna todos os veículos
GET | http://localhost:8080
```

```python
# Remove um veículo
DELETE | http://localhost:8080/${plate}
```



## Executar
Executa os testes
```bash
npm run test
```
Executa a API
```bash
npm run main
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
