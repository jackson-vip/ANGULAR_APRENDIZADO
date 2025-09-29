import { IUser } from "../interfaces/user/user.interface";

export const UsersList: IUser[] = [
    {
        nome: "João Silva",
        email: "joao.silva@example.com",
        senha: "senha-segura-123",
        idade: 30,
        endereco: {
            rua: "Rua das Flores",
            numero: 42,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        },
        telefone: "11912345678",
        ativo: true,
        funcao: "Desenvolvedor",
        dataCadastro: "2023-08-01T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-02T09:00:00.000Z"
        }
    },
    {
        nome: "Maria Fernandes",
        email: "maria.fernandes@example.com",
        senha: "Maria123",
        idade: 25,
        endereco: {
            rua: "Avenida do Sol",
            numero: 100,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            pais: "Brasil"
        },
        telefone: "21956789101",
        ativo: false,
        funcao: "Designer",
        dataCadastro: "2023-08-05T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-06T09:00:00.000Z"
        }
    },
    {
        nome: "Carlos Pereira",
        email: "carlos.pereira@example.com",
        senha: "Carlos456",
        idade: 40,
        endereco: {
            rua: "Praça da Liberdade",
            numero: 5,
            cidade: "Belo Horizonte",
            estado: "MG",
            pais: "Brasil"
        },
        telefone: "31911121314",
        ativo: true,
        funcao: "Gerente",
        dataCadastro: "2023-08-10T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-12T09:00:00.000Z"
        }
    },
    {
        nome: "Ana Sousa",
        email: "ana.sousa@example.com",
        senha: "Ana789",
        idade: 22,
        endereco: {
            rua: "Rua das Pedras",
            numero: 80,
            cidade: "Porto Alegre",
            estado: "RS",
            pais: "Brasil"
        },
        telefone: "51915161718",
        ativo: false,
        funcao: "Analista",
        dataCadastro: "2023-08-15T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-18T09:00:00.000Z"
        }
    },
    {
        nome: "Pedro Mendes",
        email: "pedro.mendes@example.com",
        senha: "Pedro012",
        idade: 35,
        endereco: {
            rua: "Boulevard Central",
            numero: 60,
            cidade: "Recife",
            estado: "PE",
            pais: "Brasil"
        },
        telefone: "81919202122",
        ativo: true,
        funcao: "Diretor",
        dataCadastro: "2023-08-20T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-25T09:00:00.000Z"
        }
    },
    {
        nome: "Lucas Almeida",
        email: "lucas.almeida@example.com",
        senha: "Lucas2023",
        idade: 28,
        endereco: {
            rua: "Rua Nova Esperança",
            numero: 12,
            cidade: "Curitiba",
            estado: "PR",
            pais: "Brasil"
        },
        telefone: "41923242526",
        ativo: true,
        funcao: "Tester",
        dataCadastro: "2023-08-22T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-23T09:00:00.000Z"
        }
    },
    {
        nome: "Fernanda Lima",
        email: "fernanda.lima@example.com",
        senha: "Fernanda321",
        idade: 32,
        endereco: {
            rua: "Rua do Comércio",
            numero: 200,
            cidade: "Salvador",
            estado: "BA",
            pais: "Brasil"
        },
        telefone: "71927282930",
        ativo: false,
        funcao: "Recursos Humanos",
        dataCadastro: "2023-08-24T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-26T09:00:00.000Z"
        }
    },
    {
        nome: "Rafael Costa",
        email: "rafael.costa@example.com",
        senha: "Rafael654",
        idade: 27,
        endereco: {
            rua: "Rua das Palmeiras",
            numero: 33,
            cidade: "Fortaleza",
            estado: "CE",
            pais: "Brasil"
        },
        telefone: "85931323334",
        ativo: true,
        funcao: "Suporte",
        dataCadastro: "2023-08-27T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-08-28T09:00:00.000Z"
        }
    },
    {
        nome: "Juliana Rocha",
        email: "juliana.rocha@example.com",
        senha: "Juliana987",
        idade: 29,
        endereco: {
            rua: "Rua do Progresso",
            numero: 77,
            cidade: "Manaus",
            estado: "AM",
            pais: "Brasil"
        },
        telefone: "92935363738",
        ativo: false,
        funcao: "Consultora",
        dataCadastro: "2023-08-29T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-08-30T09:00:00.000Z"
        }
    },
    {
        nome: "Bruno Martins",
        email: "bruno.martins@example.com",
        senha: "Bruno159",
        idade: 34,
        endereco: {
            rua: "Rua das Árvores",
            numero: 88,
            cidade: "Belém",
            estado: "PA",
            pais: "Brasil"
        },
        telefone: "91939404142",
        ativo: true,
        funcao: "Administrador",
        dataCadastro: "2023-09-01T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-02T09:00:00.000Z"
        }
    },
    {
        nome: "Patrícia Gomes",
        email: "patricia.gomes@example.com",
        senha: "Patricia753",
        idade: 31,
        endereco: {
            rua: "Rua do Lago",
            numero: 55,
            cidade: "Florianópolis",
            estado: "SC",
            pais: "Brasil"
        },
        telefone: "48943444546",
        ativo: false,
        funcao: "Financeiro",
        dataCadastro: "2023-09-03T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-04T09:00:00.000Z"
        }
    },
    {
        nome: "Eduardo Ramos",
        email: "eduardo.ramos@example.com",
        senha: "Eduardo852",
        idade: 38,
        endereco: {
            rua: "Rua do Mercado",
            numero: 120,
            cidade: "Brasília",
            estado: "DF",
            pais: "Brasil"
        },
        telefone: "61947484950",
        ativo: true,
        funcao: "Coordenador",
        dataCadastro: "2023-09-05T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-06T09:00:00.000Z"
        }
    },
    {
        nome: "Camila Souza",
        email: "camila.souza@example.com",
        senha: "Camila963",
        idade: 26,
        endereco: {
            rua: "Rua do Porto",
            numero: 70,
            cidade: "Natal",
            estado: "RN",
            pais: "Brasil"
        },
        telefone: "84951525354",
        ativo: false,
        funcao: "Marketing",
        dataCadastro: "2023-09-07T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-08T09:00:00.000Z"
        }
    },
    {
        nome: "Thiago Oliveira",
        email: "thiago.oliveira@example.com",
        senha: "Thiago741",
        idade: 37,
        endereco: {
            rua: "Rua do Sol",
            numero: 95,
            cidade: "João Pessoa",
            estado: "PB",
            pais: "Brasil"
        },
        telefone: "83955565758",
        ativo: true,
        funcao: "Engenheiro",
        dataCadastro: "2023-09-09T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-10T09:00:00.000Z"
        }
    },
    {
        nome: "Larissa Barros",
        email: "larissa.barros@example.com",
        senha: "Larissa258",
        idade: 24,
        endereco: {
            rua: "Rua das Acácias",
            numero: 44,
            cidade: "Maceió",
            estado: "AL",
            pais: "Brasil"
        },
        telefone: "82959606162",
        ativo: false,
        funcao: "Pesquisadora",
        dataCadastro: "2023-09-11T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-12T09:00:00.000Z"
        }
    },
    {
        nome: "Gabriel Nunes",
        email: "gabriel.nunes@example.com",
        senha: "Gabriel369",
        idade: 33,
        endereco: {
            rua: "Rua do Campo",
            numero: 101,
            cidade: "Campo Grande",
            estado: "MS",
            pais: "Brasil"
        },
        telefone: "67963646566",
        ativo: true,
        funcao: "Professor",
        dataCadastro: "2023-09-13T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-14T09:00:00.000Z"
        }
    },
    {
        nome: "Isabela Teixeira",
        email: "isabela.teixeira@example.com",
        senha: "Isabela147",
        idade: 29,
        endereco: {
            rua: "Rua das Oliveiras",
            numero: 67,
            cidade: "Vitória",
            estado: "ES",
            pais: "Brasil"
        },
        telefone: "27967686970",
        ativo: false,
        funcao: "Advogada",
        dataCadastro: "2023-09-15T09:00:00.000Z",
        status: {
            online: false,
            verificado: true,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-16T09:00:00.000Z"
        }
    },
    {
        nome: "Vinícius Lopes",
        email: "vinicius.lopes@example.com",
        senha: "Vinicius951",
        idade: 36,
        endereco: {
            rua: "Rua do Mar",
            numero: 23,
            cidade: "Aracaju",
            estado: "SE",
            pais: "Brasil"
        },
        telefone: "79971727374",
        ativo: true,
        funcao: "Arquiteto",
        dataCadastro: "2023-09-17T09:00:00.000Z",
        status: {
            online: true,
            verificado: false,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-18T09:00:00.000Z"
        }
    },
    {
        nome: "Aline Figueiredo",
        email: "aline.figueiredo@example.com",
        senha: "Aline852",
        idade: 27,
        endereco: {
            rua: "Rua das Rosas",
            numero: 58,
            cidade: "Teresina",
            estado: "PI",
            pais: "Brasil"
        },
        telefone: "86975767778",
        ativo: false,
        funcao: "Psicóloga",
        dataCadastro: "2023-09-19T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-20T09:00:00.000Z"
        }
    },
    {
        nome: "Felipe Cardoso",
        email: "felipe.cardoso@example.com",
        senha: "Felipe357",
        idade: 39,
        endereco: {
            rua: "Rua do Bosque",
            numero: 81,
            cidade: "Palmas",
            estado: "TO",
            pais: "Brasil"
        },
        telefone: "63979808182",
        ativo: true,
        funcao: "Médico",
        dataCadastro: "2023-09-21T09:00:00.000Z",
        status: {
            online: true,
            verificado: true,
            assinaturaAtiva: true,
            ultimoAcesso: "2023-09-22T09:00:00.000Z"
        }
    },
    {
        nome: "Sofia Ribeiro",
        email: "sofia.ribeiro@example.com",
        senha: "Sofia654",
        idade: 23,
        endereco: {
            rua: "Rua das Laranjeiras",
            numero: 14,
            cidade: "Macapá",
            estado: "AP",
            pais: "Brasil"
        },
        telefone: "96981828384",
        ativo: false,
        funcao: "Estagiária",
        dataCadastro: "2023-09-23T09:00:00.000Z",
        status: {
            online: false,
            verificado: false,
            assinaturaAtiva: false,
            ultimoAcesso: "2023-09-24T09:00:00.000Z"
        }
    }
];
