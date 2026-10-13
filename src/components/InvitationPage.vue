<script setup>
import { invite } from '../config/invite.js'
import Floral from './Floral.vue'
import Divider from './Divider.vue'
import PhotoFrame from './PhotoFrame.vue'

defineEmits(['back'])
</script>

<template>
  <main class="page">
    <article class="paper">
      <div class="corner tl"><Floral /></div>
      <div class="corner tr"><Floral /></div>
      <div class="corner bl"><Floral /></div>
      <div class="corner br"><Floral /></div>

      <!-- 1. Boas-vindas -->
      <p class="welcome reveal" style="--d: 0.1s">{{ invite.welcome }}</p>

      <!-- 2. Nomes -->
      <h1 class="names reveal" style="--d: 0.3s">
        {{ invite.groom }} <span class="amp">&amp;</span> {{ invite.bride }}
      </h1>

      <Divider />

      <!-- 3. Foto principal + galeria -->
      <section class="photos reveal" style="--d: 0.5s" aria-label="Fotos dos noivos">
        <div class="main-photo">
          <PhotoFrame
            :src="invite.photos.main"
            alt="Carlos e Amanda"
            label="Foto principal do casal"
            ratio="4 / 5"
          />
        </div>
        <div class="gallery" v-if="invite.photos.gallery.length">
          <PhotoFrame
            v-for="(photo, i) in invite.photos.gallery"
            :key="i"
            :src="photo"
            :alt="`Carlos e Amanda — foto ${i + 2}`"
            :label="`Foto ${i + 2}`"
            ratio="1 / 1"
          />
        </div>
      </section>

      <Divider />

      <!-- 4. Texto do convite -->
      <section class="text reveal" style="--d: 0.2s">
        <p v-for="(p, i) in invite.invitationText" :key="i">{{ p }}</p>
      </section>

      <Divider />

      <!-- 5. Cerimônia e jantar -->
      <section class="events reveal" style="--d: 0.2s">
        <div v-for="ev in [invite.ceremony, invite.dinner]" :key="ev.title" class="event">
          <h2>{{ ev.title }}</h2>
          <p class="strong">{{ ev.date }}</p>
          <p>{{ ev.time }}</p>
          <p class="place">{{ ev.place }}</p>
          <p class="addr">{{ ev.address }}</p>
        </div>
      </section>

      <Divider />

      <!-- 6. Versículo -->
      <blockquote class="verse reveal" style="--d: 0.2s">
        <p>“{{ invite.verse.text }}”</p>
        <footer>{{ invite.verse.reference }}</footer>
      </blockquote>

      <Divider />

      <!-- 7. Mensagem final -->
      <section class="closing reveal" style="--d: 0.2s">
        <p>{{ invite.closing }}</p>
        <p class="sign">{{ invite.groom }} &amp; {{ invite.bride }}</p>
      </section>
    </article>

    <button type="button" class="back" @click="$emit('back')">↩ Voltar ao envelope</button>
  </main>
</template>

<style scoped>
.page {
  min-height: 100dvh;
  padding: clamp(14px, 4vw, 48px) clamp(10px, 3vw, 24px) 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paper {
  position: relative;
  width: 100%;
  max-width: 760px;
  padding: clamp(40px, 8vw, 80px) clamp(22px, 7vw, 72px);
  text-align: center;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 254, 250, 1)),
    var(--white);
  border: 1px solid var(--gold-light);
  border-radius: 6px;
  box-shadow:
    0 0 0 8px var(--white),
    0 0 0 9px var(--gold-light),
    0 24px 60px rgba(120, 90, 30, 0.2);
  overflow: hidden;
}

.corner {
  position: absolute;
  width: clamp(80px, 20vw, 150px);
  opacity: 0.5;
  pointer-events: none;
}
.tl { top: 0; left: 0; }
.tr { top: 0; right: 0; transform: scaleX(-1); }
.bl { bottom: 0; left: 0; transform: scaleY(-1); }
.br { bottom: 0; right: 0; transform: scale(-1, -1); }

.paper > :not(.corner) {
  position: relative;
}

.welcome {
  margin: 0 0 6px;
  font-style: italic;
  font-size: clamp(1.15rem, 3.8vw, 1.5rem);
  color: var(--gold-dark);
}

.names {
  word-spacing: 0.18em;
  margin: 0;
  font-family: var(--script);
  font-weight: 400;
  font-size: clamp(3rem, 14vw, 5.6rem);
  line-height: 1.15;
  color: var(--gold);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
}
.amp {
  font-size: 0.8em;
  color: var(--gold-light);
}

/* fotos */
.photos {
  display: flex;
  flex-direction: column;
  gap: 22px;
  align-items: center;
}
.main-photo {
  width: min(100%, 460px);
}
.gallery {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  align-items: start;
}
@media (max-width: 480px) {
  .gallery {
    gap: 8px;
  }
}

/* textos */
.text p {
  margin: 0 auto 1.1em;
  max-width: 560px;
  font-size: clamp(1.15rem, 3.6vw, 1.4rem);
  line-height: 1.75;
}

.events {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
@media (max-width: 600px) {
  .events {
    grid-template-columns: 1fr;
  }
}
.event h2 {
  margin: 0 0 10px;
  font-family: var(--script);
  font-weight: 400;
  font-size: clamp(2rem, 7vw, 2.6rem);
  color: var(--gold);
}
.event p {
  margin: 4px 0;
  font-size: clamp(1.1rem, 3.5vw, 1.3rem);
}
.event .strong {
  font-weight: 600;
  letter-spacing: 0.05em;
}
.event .place {
  margin-top: 10px;
  font-style: italic;
}
.event .addr {
  font-size: 1rem;
  opacity: 0.85;
}

.verse {
  margin: 0 auto;
  max-width: 520px;
}
.verse p {
  margin: 0 0 10px;
  font-style: italic;
  font-size: clamp(1.25rem, 4vw, 1.6rem);
  line-height: 1.6;
}
.verse footer {
  color: var(--gold-dark);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.95rem;
}

.closing p {
  margin: 0 auto;
  max-width: 520px;
  font-size: clamp(1.15rem, 3.6vw, 1.4rem);
  line-height: 1.7;
}
.closing .sign {
  word-spacing: 0.18em;
  margin-top: 18px;
  font-family: var(--script);
  font-size: clamp(2.2rem, 8vw, 3rem);
  color: var(--gold);
}

/* botão discreto para voltar ao envelope */
.back {
  margin-top: 26px;
  padding: 10px 22px;
  background: transparent;
  color: var(--gold-dark);
  border: 1px solid var(--gold-light);
  border-radius: 999px;
  font-style: italic;
  font-size: 1.05rem;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}
.back:hover,
.back:focus-visible {
  background: var(--gold);
  color: var(--white);
  outline: none;
}

/* entrada suave dos blocos */
.reveal {
  opacity: 0;
  transform: translateY(18px);
  animation: rise 0.9s ease forwards;
  animation-delay: calc(0.5s + var(--d, 0s));
}
@keyframes rise {
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
