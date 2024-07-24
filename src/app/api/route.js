import { NextResponse } from "next/server";

export const listaDeChamps = [
       {
        id: 1,
        nome: "Amumu",
        funcao: "Tanque",
        preco: 950,
        imagem: "https://www.mobafire.com/images/social/build-card/amumu.jpg",
        descricao: "Reza a lenda que Amumu é uma alma solitária e melancólica da antiga Shurima que vaga sem rumo pelo mundo em busca de um amigo.",
        dific: "Baixa"
       },
       {
        id: 2,
        nome: "Sett",
        funcao: "Lutador",
        preco: 2350,
        imagem: "https://www.mobafire.com/images/social/build-card/sett.jpg",
        descricao: "Líder de parte do próspero submundo do crime em Ionia, Sett deve todo o seu sucesso à guerra contra Noxus.",
        dific: "Baixa"
       },
       {
        id: 3,
        nome: "Rengar",
        funcao: "Caçador",
        preco: 950,
        imagem: "https://www.mobafire.com/images/social/build-card/rengar.jpg",
        descricao: "Rengar é um feroz caçador de troféus vastaya que gosta da emoção proporcionada pela caça e pelo abate de criaturas perigosas.",
        dific: "Alta"
       },
       {
        id: 4,
        nome: "Jhin",
        funcao: "Atirador",
        preco: 4444,
        imagem: "https://www.mobafire.com/images/social/build-card/jhin.jpg",
        descricao: "Jhin é um meticuloso psicopata criminoso que acredita que o assassinato é uma arte.",
        dific: "Média"
       },
       {
        id: 5,
        nome: "Thresh",
        funcao: "Suporte",
        preco: 950,
        imagem: "https://www.mobafire.com/images/social/build-card/thresh.jpg",
        descricao: "Sádico e astuto, Thresh é um espírito ambicioso e incansável das Ilhas das Sombras. Ele já foi guardião de incontáveis segredos arcanos, mas acabou sucumbindo a poderes maiores do que a vida e a morte.",
        dific: "Média"
       },
       {
        id: 6,
        nome: "Ornn",
        funcao: "Tanque",
        preco: 950,
        imagem: "https://www.mobafire.com/images/social/build-card/ornn.jpg",
        descricao: "Ornn é o espírito Freljordano da forja e da artesania. Ele trabalha na solidão de uma enorme fornalha, construída a marteladas por entre as cavernas de lava do vulcão Pedra-Lar.",
        dific: "Média"
       },
       {
        id: 7,
        nome: "Ezreal",
        funcao: "Atirador",
        preco: 950,
        imagem: "https://www.mobafire.com/images/social/build-card/ezreal.jpg",
        descricao: "Um aventureiro arrojado, com um talento nato nas artes mágicas, Ezreal desbrava catacumbas soterradas, envolve-se com antigas maldições e supera com facilidade as situações mais improváveis.",
        dific: "Média"
       },
       {
        id: 8,
        nome: "Kayn",
        funcao:  "Assassino",
        preco: 2350,
        imagem: "https://www.mobafire.com/images/social/build-card/kayn.jpg",
        descricao: "Inigualável praticante da letal magia sombria, Shieda Kayn luta para alcançar seu verdadeiro destino: um dia comandar a Ordem das Sombras rumo a uma nova era de supremacia ioniana.",
        dific: "Alta"
       },
       {
        id: 9,
        nome: "Aatrox",
        funcao: "Lutador",
        preco: 2350,
        imagem: "https://www.mobafire.com/images/social/build-card/aatrox.jpg",
        descricao: "Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira.",
        dific: "Média"
       },
       {
        id: 10,
        nome: "Shen",
        funcao: "Tanque",
        preco: 950,
        imagem: "https://www.mobafire.com/images/social/build-card/shen.jpg",
        descricao: "Para os guerreiros ionianos sigilosos conhecidos como Kinkou, Shen, o Olho do Crepúsculo, é um líder. Ele busca permanecer livre da confusão das emoções, preconceito ou ego, caminhando pelo caminho nunca visto do julgamento imparcial entre o reino dos espiritos",
        dific: "Média"
       },

    ];

    export async function GET(){
        return NextResponse.json(listaDeChamps)
    }