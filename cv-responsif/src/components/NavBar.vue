<template>
  <div :class="['background', season]"></div>

  <div class="justify-content-between align-items-center p-3">
    <!-- Nouveau menu -->
    <div :class="['menu-toggle', { active: isMenuActive }]" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="sidebar" :class="{ active: isMenuActive }">
        <nav class="menu">
            <ul>
              <li><router-link to="/" @click.native="toggleMenu">Accueil</router-link></li>
              <li><router-link to="/MyProjects" @click.native="toggleMenu">Mes projets</router-link></li>
              <li><router-link to="/AboutMe" @click.native="toggleMenu">À propos de moi</router-link></li>
              <li><router-link to="/contact" @click.native="toggleMenu">Contact</router-link></li>
            </ul>
        </nav>
    </div>
    <!-- Fin du nouveau menu -->

    <div class="content">
      <div class="d-flex align-items-center">
        <div class="logo-container d-flex align-items-center mx-3">
          <div class="name">Enrique CANDEIAS</div>
          <svg class="logo ms-3" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" stroke-width="2" />
            <text x="50" y="50" font-size="40" text-anchor="middle" dy=".3em" fill="#ffffff">EC</text>
          </svg>
        </div>
        <div class="season-selector d-flex justify-content-center align-items-center">
          <p class="question m-0 me-3">Installez-vous confortablement. Quelle est votre saison préférée ?</p>
          <div class="season-logos d-flex">
            <div class="season-logo d-flex flex-column align-items-center" @click="season = 'spring'">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <defs>
                  <linearGradient id="springGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#a8e0a1;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#2f8f2e;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#springGradient)" />
              </svg>
            </div>
            <div class="season-logo d-flex flex-column align-items-center" @click="season = 'summer'">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <defs>
                  <linearGradient id="summerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#f7e18b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ff9100;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#summerGradient)" />
              </svg>
            </div>
            <div class="season-logo d-flex flex-column align-items-center" @click="season = 'autumn'">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <defs>
                  <linearGradient id="autumnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#69470b;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#983c2c;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#autumnGradient)" />
              </svg>
            </div>
            <div class="season-logo d-flex flex-column align-items-center" @click="season = 'winter'">
              <svg viewBox="0 0 100 100" width="60" height="60">
                <defs>
                  <linearGradient id="winterGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#e0f2f7;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#8c9db8;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#winterGradient)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);
const season = ref('spring'); // Default season

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.menu-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.menu-toggle span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  transition: all 0.3s ease;
}
.menu-toggle.active span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}
.menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 300px;
  height: 100%;
  background-color: rgba(103, 97, 97, 0.3); /* Transparent background */
  transition: right 0.3s ease, background-color 0.3s ease;
  z-index: 998;
}

@media (max-width: 1400px) {
  .sidebar {
    background-color: #676161; /* Solid background */
    position: fixed;
    top: 0;
    right: -300px;
    width: 200px;
    height: 100%;
    transition: right 0.3s ease, background-color 0.3s ease;
    z-index: 998;
  }
}

.sidebar.active {
  right: 0;
}

.menu {
  padding: 50px 20px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
}

.menu ul li {
  margin-bottom: 20px;
}

.menu ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 18px;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background.spring {
  background: linear-gradient(45deg, #a8e0a1, #2f8f2e);
}

.background.summer {
  background: linear-gradient(45deg, #a7975a, #ff9408);
}
.background.autumn {
  background: linear-gradient(45deg, #69470b, #983c2c);
}
.background.winter {
  background: linear-gradient(45deg, #e0f2f7, #36507b);
}
.content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100; /* Assure que la barre de navigation reste en haut */
}
.name {
  color: #fff;
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}
.logo {
  width: 100px;
  height: 100px;
  fill: #fff;
}
.season-selector {
  display: flex;
  justify-content: center;
  align-items: center;
}
.season-selector p {
  color: #fff;
  margin: 0 20px 0 0; /* Space between text and logos */
  font-size: 16px;
}
.season-logos {
  display: flex;
}
.season-logo {
  cursor: pointer;
  margin: 0 10px; /* Increase space between logos */
  text-align: center;
}
.season-logo svg {
  width: 30px; /* Size of the SVG */
  height: 40px; /* Size of the SVG */
}
@media (max-width: 1070px) {
  .question {
    display: none;
  }
}
@media (max-width: 600px) {
  .name {
    display: none;
  }
}
</style>
