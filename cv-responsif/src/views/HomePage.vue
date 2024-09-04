<template>
  <div class="container">
    <div class="animation-container p-4 mx-auto my-4 rounded" style="max-width: 800px; background-color: rgba(255, 255, 255, 0.1);">
      <h1 class="text-center">Bienvenue sur mon CV en ligne</h1>
      <p class="text-center">
        Je suis Enrique CANDEIAS, développeur web passionné par la création d'expériences numériques innovantes et performantes. Explorez mon portfolio pour découvrir mes compétences et projets.
      </p>
    </div>

    <!-- Animation SVG -->
    <div class="svg-container">
      <svg width="600" height="400" viewBox="0 0 600 400">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect x="0" y="0" width="600" height="400" fill="rgba(30, 30, 30, 0)"/>
        
        <g v-for="(line, index) in codeLines" :key="index">
          <path :d="line.path" fill="none" :stroke="line.color" stroke-width="2" filter="url(#glow)">
            <animate attributeName="stroke-dasharray" 
                     :values="line.dashArray" 
                     :dur="line.duration" 
                     repeatCount="indefinite"/>
          </path>
          <text :x="line.textX" :y="line.textY" fill="white" font-family="monospace" font-size="14">
            {{ line.text }}
            <animate attributeName="opacity"
                     values="0;1;1"
                     :dur="line.duration"
                     :begin="line.textDelay"
                     fill="freeze"/>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const codeLines = ref([
  {
    path: "M50,50 Q300,50 550,50 T550,1050",
    color: "#61dafb",
    dashArray: "0,600;600,0",
    duration: "4s",
    text: " Chargement du CV() {",
    textX: 60,
    textY: 45,
    textDelay: "0.5s"
  },
  {
    path: "M100,100 Q300,100 1500,100 T600,1100",
    color: "#ff6b6b",
    dashArray: "0,500;500,0",
    duration: "3.5s",
    text: "  Load'MyProjects'(animate);",
    textX: 110,
    textY: 95,
    textDelay: "1s"
  },
  {
    path: "M150,150 Q900,150 1450,150 T1450,200",
    color: "#feca57",
    dashArray: "0,400;400,0",
    duration: "3s",
    text: "  <AboutMe>(Delay);",
    textX: 160,
    textY: 145,
    textDelay: "1.5s"
  },
  {
    path: "M200,200 Q1300,200 1400,200 T1400,1250",
    color: "#48dbfb",
    dashArray: "0,300;300,0",
    duration: "2.5s",
    text: "  Contact();",
    textX: 210,
    textY: 195,
    textDelay: "2s"
  },
  {
    path: "M50,250 Q300,250 550,250 T1950,1250",
    color: "#ff9ff3",
    dashArray: "0,600;600,0",
    duration: "4s",
    text: "}",
    textX: 60,
    textY: 245,
    textDelay: "2.5s"
  },
  {
    path: "M50,300 Q300,300 550,300 T1950,1300",
    color: "#54a0ff",
    dashArray: "0,600;600,0",
    duration: "4s",
    text: "hOMEpAGE(eRROR 404);",
    textX: 60,
    textY: 295,
    textDelay: "3s"
  }
])
</script>

<style scoped>
.container {
  margin-top: 150px;
}

h1 {
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  color: rgb(255, 255, 255);
  font-size: 44px;
}

p {
  font-size: 19px;
}

.animation-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  animation: fadeIn 3s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.svg-container {
  text-align: center;
  margin-top: 20px;
  width: 100%;
  overflow: hidden; /* Assure que le SVG ne dépasse pas les limites */
}

.svg-container svg {
  width: 100%; /* Adapte le SVG à la largeur du conteneur */
  height: auto; /* Conserve les proportions */
  display: block;
}
</style>
