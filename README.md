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
POST | http://localhost:8080/

# Retornar um veículo específico
GET | http://localhost:8080/${placa}

# Retorna todos os veículos
GET | http://localhost:8080/

# Remove um veículo
DELETE | http://localhost:8080/${plate}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)