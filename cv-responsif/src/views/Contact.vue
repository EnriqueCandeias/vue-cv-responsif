<template>
  <div class="container d-flex flex-wrap justify-content-center">
    <div 
      class="card" 
      v-for="(contact, index) in contacts" 
      :key="index"
      @mouseover="animateIcon(index, true)"
      @mouseout="animateIcon(index, false)"
    >
      <svg 
        class="icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        :class="{ animate: contact.animated }"
      >
        <path :d="contact.iconPath" :fill="contact.iconColor" />
      </svg>
      <h3>{{ contact.title }}</h3>
      <p>
        <a v-if="contact.link" :href="contact.link" target="_blank" rel="noopener noreferrer">
          {{ contact.info }}
        </a>
        <span v-else>{{ contact.info }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const contacts = reactive([
  {
    title: 'Adresse E-mail',
    info: 'enrique.candeias@hotmail.com',
    link: 'mailto:enrique.candeias@hotmail.com',
    iconPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
    iconColor: '#FF5722',
    animated: false,
  },
  {
    title: 'Téléphone',
    info: '+33 6 12 83 95 99',
    link: '',
    iconPath: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
    iconColor: '#2196F3',
    animated: false,
  },
  {
    title: 'LinkedIn',
    info: 'linkedin.com/in/votre-profil',
    link: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
    iconPath: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z',
    iconColor: '#0077B5',
    animated: false,
  },
]);

const animateIcon = (index, isHovered) => {
  contacts[index].animated = isHovered;
};
</script>

<style>

body {
  font-family: 'Arial', sans-serif;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s ease;
  margin: 40px;
}
.card:hover {
  transform: translateY(-5px);
}
.icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
}
.card:hover .icon {
  transform: scale(1.3);
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
.animate {
  animation: pulse 2s infinite;
}
/* Media Query pour les écrans en dessous de 1000px */
@media (max-width: 1000px) {
  .container {
    margin-top: 200px;
  }
}
</style>
