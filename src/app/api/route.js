import { NextResponse } from "next/server";

export const listaDeChamps = [
       {
        id: 1,
        nome: "Amumu",
        funcao: ["Tanque", "Suporte"],
        preco: 950,
        imagem: "https://th.bing.com/th/id/R.cdf38a1e864ce4fb2c86b5c6e5f9f213?rik=A7P9t7M3mR4Q%2fA&pid=ImgRaw&r=0",
        descricao: "Reza a lenda que Amumu é uma alma solitária e melancólica da antiga Shurima que vaga sem rumo pelo mundo em busca de um amigo.",
        dific: "Baixa"
       },
       {
        id: 2,
        nome: "Sett",
        funcao: ["Tanque", "Lutador"],
        preco: 2350,
        imagem: "",
        descricao: "Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus.",
        dific: "Baixa"
       },
       {
        id: 3,
        nome: "Rengar",
        funcao: ["Caçador", "Assassino"],
        preco: 950,
        imagem: "",
        descricao: "Rengar é um feroz caçador de troféus vastaya que gosta da emoção proporcionada pela caça e pelo abate de criaturas perigosas.",
        dific: "Alta"
       },
       {
        id: 4,
        nome: "Jhin",
        funcao: ["Atirador", "Mago"],
        preco: 4444,
        imagem: "",
        descricao: "Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte.",
        dific: "Média"
       },
       {
        id: 5,
        nome: "Thresh",
        funcao: ["Suporte", "Tanque"],
        preco: 950,
        imagem: "",
        descricao: "Sádico e astuto, Thresh é um espírito ambicioso e incansável das Ilhas das Sombras. Ele já foi guardião de incontáveis segredos arcanos, mas acabou sucumbindo a poderes maiores do que a vida e a morte.",
        dific: "Média"
       },

    ];

    export async function GET(){
        return NextResponse.json(listaDeChamps)
    }