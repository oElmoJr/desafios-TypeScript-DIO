// Como podemos melhorar o esse código usando TS? 

enum profissao {
    Atriz,
    Padeiro
}

interface IPessoa {
    nome: string,
    idade: number,
    profissao: profissao
}

let maria: IPessoa  = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz
};

let roberto: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
}

let laura: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}
