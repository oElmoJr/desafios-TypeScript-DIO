"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
})(profissao || (profissao = {}));
let maria = {
    nome: "maria",
    idade: 29,
    profissao: profissao.Atriz
};
let roberto = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
let laura = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
