# Convite de Casamento — Carlos & Amanda

Site de convite em **Vue 3 + Vite**: o visitante vê um envelope fechado; ao tocar nele, o envelope abre com animação e revela o convite completo, com espaço para fotos dos noivos.

## Como rodar

Precisa do [Node.js](https://nodejs.org) (versão 18 ou mais nova).

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão final para publicar:

```bash
npm run build
```

A pasta `dist/` gerada é o site pronto. Pode subir em qualquer hospedagem (Netlify, Vercel, GitHub Pages, etc.).

## Como adicionar as fotos de Carlos e Amanda

1. Copie suas fotos para a pasta **`public/images/`**.
2. Abra o arquivo **`src/config/invite.js`** e procure o bloco `photos`:

```js
photos: {
  main: 'images/casal-principal.jpg',
  gallery: ['images/foto-2.jpg', 'images/foto-3.jpg', 'images/foto-4.jpg']
}
```

3. Use **os mesmos nomes** dos seus arquivos. Duas opções:
   - renomear suas fotos para `casal-principal.jpg`, `foto-2.jpg`, `foto-3.jpg` e `foto-4.jpg`; ou
   - trocar os nomes no código pelos nomes das suas fotos (ex.: `'images/carlos-e-amanda.jpg'`).

Dicas:

- O caminho **não** começa com `/` e **não** inclui `public` (use `images/nome.jpg`).
- Para mostrar só a foto principal, deixe `gallery: []`.
- Para deixar uma foto vazia (mostrando só o espaço reservado), use `''`.
- Para ter mais fotos pequenas, basta adicionar mais caminhos na lista `gallery`.
- As fotos **não são cortadas**: elas aparecem inteiras, com a proporção original.
- Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`. Fotos com até uns 1500px de largura já ficam ótimas e carregam rápido.
- Se uma foto não existir ou o nome estiver errado, o site **não quebra**: aparece um espaço reservado dourado no lugar.

## Como editar textos, datas e local

Tudo fica em **`src/config/invite.js`**.

> ⚠️ **Importante:** os campos de data, horário, igreja, endereço e local do jantar estão como `[DATA DA CERIMÔNIA]`, `[NOME DA IGREJA]` etc. Substitua pelas informações reais do casamento. O texto do convite e a mensagem final também podem ser alterados ali.

## Estrutura do projeto

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/              ← coloque as fotos aqui
└── src/
    ├── main.js
    ├── App.vue              ← controla a troca entre as duas telas
    ├── style.css            ← cores e fontes globais
    ├── config/
    │   └── invite.js        ← textos, datas e caminhos das fotos
    └── components/
        ├── EnvelopeScreen.vue   ← tela 1: envelope animado
        ├── InvitationPage.vue   ← tela 2: convite completo
        ├── PhotoFrame.vue       ← moldura de foto (com espaço reservado)
        ├── Floral.vue           ← ornamento floral
        └── Divider.vue          ← divisor dourado
```

## Personalização rápida

- **Cores:** variáveis no topo de `src/style.css` (`--gold`, `--ivory`, etc.).
- **Fontes:** *Great Vibes* (cursiva) e *Cormorant Garamond* (texto), carregadas do Google Fonts em `index.html`. Precisa de internet para aparecerem; sem internet, o site usa fontes de reserva.
- **Voltar ao envelope:** o botão no fim da página convida a rever a animação. Para removê-lo, apague a linha `<button class="back" ...>` em `InvitationPage.vue`.
