<template>
  <div class="container">
    <header class="text-center mb-4">
      <h1>Mes Projets Personnels</h1>
    </header>
    <div class="row container-card justify-content-center">
      <div class="col" v-for="project in projects" :key="project.id">
        <div class="card shadow-sm rounded overflow-hidden project-card">
          <a :href="project.link" class="stretched-link"></a>
          <img :src="project.image" :alt="project.title" class="card-img-top" />
          <div class="card-body">
            <h2 class="card-title">{{ project.title }}</h2>
            <p class="card-text">{{ project.description }}</p>
            <div class="d-flex flex-wrap mt-2">
              <i v-for="tag in project.tags" :key="tag" :class="getIconClass(tag) + ' fa-2x'" class="me-4 mb-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Nrik War Paint',
    description: 'Mon site sur l\'univers de la peinture sur figurine !',
    image: './src/assets/Photo/Nrik-war-paint-view.png',
    link: 'https://github.com/EnriqueCandeias/vue-nrik-war-paint',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Vue.js'],
  },
  {
    id: 2,
    title: 'Les artistes peintres',
    description: 'Une galerie présentant des œuvres d\'art d\'artistes célèbres.',
    image: './src/assets/Photo/les artistes peintres.png',
    link: 'https://github.com/EnriqueCandeias/Formation-AFPA-DWWE/tree/main/Exo%20Javascript/Les%20artistes%20peintres',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 3,
    title: 'ACDC Rock\'n\'Roll',
    description: 'Le site dédié à l\'univers du groupe mythique ACDC.',
    image: './src/assets/Photo/acdc.png',
    link: 'https://github.com/EnriqueCandeias/Formation-AFPA-DWWE/tree/main/Exo%20HTML%20ET%20CSS/Exo%20ACDC%20RocknRoll',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
  },
]);

const getIconClass = (tag) => {
  switch (tag) {
    case 'HTML5':
      return 'fab fa-html5';
    case 'CSS3':
      return 'fab fa-css3-alt';
    case 'JavaScript':
      return 'fab fa-js';
    case 'Bootstrap':
      return 'fab fa-bootstrap';
    case 'Vue.js':
      return 'fab fa-vuejs';
    default:
      return '';
  }
};
</script>

<style scoped>
.container {
  max-width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 50px;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  box-sizing: border-box;
  overflow: hidden;
  max-width: 360px;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  height: 180px;
}

.card-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #000000;
}

.card-text {
  font-size: 1.2rem;
  color: #000000;
}

.project-card {
  width: 100%;
  position: relative;
}

.project-card .card-body {
  padding: 20px;
  height: 200px;
}

.stretched-link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.card-body .fa {
  font-size: 1.5rem;
  color: #000000;
}

h1 {
  color: rgb(255, 255, 255);
}

@media (max-width: 1400px) {
  .col {
    flex: 0 1 calc(50% - 20px);
  }
  .container {
    margin-top: 600px;
  }

}

@media (max-width: 870px) {
  .col {
    flex: 0 1 100%;
  }

  .container {
    margin-top: 1100px;
  }

  .card-title {
    font-size: 1.4rem;
  }

  .card-text {
    font-size: 1.1rem;
  }
}
</style>
