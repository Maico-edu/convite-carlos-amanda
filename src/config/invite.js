/* ==========================================================
   TODO O CONTEÚDO DO CONVITE FICA AQUI.
   Para trocar textos, datas, local ou fotos, edite só este arquivo.
   ========================================================== */

export const invite = {
  groom: 'Carlos',
  bride: 'Amanda',

  // 1. Frase de boas-vindas
  welcome: 'Com alegria no coração, convidamos você',

  // 4. Texto do convite (cada item vira um parágrafo)
  invitationText: [
    'Com a bênção de Deus e o carinho de nossas famílias, Carlos e Amanda têm a alegria de convidar você para celebrar a união de suas vidas.',
    '💍 NOSSO CASAMENTO ❤️ 💍👰🤵',
    'Com muita alegria no coração, queremos compartilhar com vocês um dos momentos mais importantes das nossas vidas: o nosso casamento! 🥹❤️ Estamos começando uma nova etapa da nossa história, cheia de amor, sonhos e planos para o futuro. E não poderíamos viver esse momento tão especial sem a presença de pessoas queridas que fazem parte da nossa caminhada. Por isso, queremos convidar você para celebrar conosco esse dia tão especial, que ficará para sempre guardado em nossos corações. 🥂💒 Sua presença será um presente e uma bênção para nós! Com carinho, convidamos você para fazer parte do início da nossa família. ❤️ Com amor, os noivos! 💍👰🤵'
  ],

  // 5. Cerimônia e jantar
  // ⚠️ SUBSTITUA os textos entre colchetes pelas informações reais.
  ceremony: {
    title: 'Cerimônia',
    date: '02/01/2027',
    time: '17:00h',
    place: 'Igreja Católica De Naque',
    address: 'R. Antônio Alves de Lima, 70, Naque - MG, 35117-000'
  },
  dinner: {
    title: 'Jantar',
    date: 'Sem data definida',
    time: 'Sem Horario definida',
    place: 'Antigo Neneco',
    address: 'Rua Guiomar Soares Costa, nº 355, na saída para o Naquinho, na cidade de Naque'
  },

  // 6. Versículo
  verse: {
    text: 'E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.',
    reference: 'Colossenses 3:14'
  },

  // 7. Mensagem final
  closing: 'Venha compartilhar conosco este momento tão especial. Sua presença fará toda a diferença!',

  /* Fotos: coloque os arquivos em public/images/ e ajuste os nomes aqui.
     Deixe '' (vazio) para mostrar apenas o espaço reservado. */
  photos: {
    main: 'images/foto.pre.jpeg',
    gallery: ['images/f.jpeg', 'images/fot.jpeg', 'images/fo.jpeg']
  }
}
