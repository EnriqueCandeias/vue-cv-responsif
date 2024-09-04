<template>
  <div class="container mt-6">
    <h1 class="mb-4">Expériences professionnelles</h1>
    
    <div v-for="(experience, index) in experiences" :key="index" class="experience mb-4">
      <div class="job-title fw-bold text-primary">{{ experience.jobTitle }}</div>
      <div class="company fst-italic text-secondary">{{ experience.company }}</div>
      <div class="date text-muted">{{ experience.date }}</div>
      <div class="description mt-2">
        <ul>
          <li v-for="(desc, i) in experience.description" :key="i">{{ desc }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const experiences = ref([
  {
    jobTitle: 'Stage',
    company: '???',
    date: 'Novembre 2024 - Février 2025',
    description: [
      '',
      '',
      ''
    ]
  },
  {
    jobTitle: 'Formation Développeur Web & Web Mobile',
    company: 'Afpa',
    date: 'Avril 2024 - Février 2025',
    description: [
      'Développement de la partie front-end d’une application web',
      'Utilisation de langages de programmation (HTML5, CSS, JavaScript, Vue.js..)',
      'Développement de la partie back-end d’une application '
    ]
  },
  {
    jobTitle: "Militaire au 1er Régiment d'Infanterie",
    company: 'Armée de Terre',
    date: 'Février 2017 - Avril 2024',
    description: [
      'Pilote de véhicules blindés tout terrain (VAB, Griffon, GBC)',
      'Entretien et maintenance des véhicules',
      'Gestion d’équipe (3 à 10 personnes)',
      'Formation de jeunes recrues',
      'Diverses Mission/OPEX (Niger, Norvège, Bénin, Nouvelle-Calédonie..)'
    ]
  }
]);

</script>

<style scoped>

.container {
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border-radius: 20px;
    margin-top: 120px;
}

.experience {
  position: relative;
  padding-left: 30px;
}

.experience::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #3498db;
}

.experience::after {
  content: '';
  position: absolute;
  left: -4px;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3498db;
}

.job-title {
  color: #2c3e50;
}

.company {
  color: #7f8c8d;
}

.date {
  font-size: 0.9rem;
  color: #95a5a6;
}

.description ul {
  list-style-type: disc;
  padding-left: 20px;
}

@media (max-width: 600px) {
  .container {
    padding: 1rem;
    margin: 20px;
    margin-top: 300px;
  }
}

</style>
