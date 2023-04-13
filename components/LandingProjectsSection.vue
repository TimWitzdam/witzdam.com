<template>
  <div>
    <h2>🤝 My projects...</h2>
    <div class="sub-heading">
      <p>are helping exactly</p>
      <count-up-component
        ref="myCounter"
        :end-val="counterValue"
        :options="counterOptions"
        duration="3"
      ></count-up-component>

      <p>people</p>
    </div>
    <LandingProject
      project-type="Discord Bot"
      name="CryptoDisplay"
      link="https://top.gg/bot/850066255472885800"
      img-name="cryptodisplay-logo.webp"
      img-alt="cryptodisplay-logo"
      :tech-stack="[
        {
          name: 'Python',
          popupInfo: {
            description:
              'Python is a high level programming language, which I chose to learn programming with.',
            experience: '4 years',
            useCases: ['API building', 'Webscraping'],
          },
        },
        {
          name: 'MySQL',
          popupInfo: {
            description:
              'MySQL is a relational database, which I started learning in school and used in some projects.',
            experience: '3 years',
            useCases: ['Data storing for projects'],
          },
        },
        {
          name: 'Flask',
          popupInfo: {
            description:
              'Flask is a framework for Python which I used to create REST APIs with in connection with my projects.',
            experience: '4 years',
            useCases: ['Private APIs', 'Public APIs'],
          },
        },
        {
          name: 'JSON',
          popupInfo: {
            description:
              'With JSON you can store data in a clear structure. Basically anything with data uses JSON.',
            experience: '4 years',
            useCases: ['APIs', 'Frontend Apps'],
          },
        },
        {
          name: 'PyCord',
          popupInfo: {
            description:
              'PyCord is an API wrapper for Discord bots, which is optimized for performance. Its a fork of discord.py.',
            experience: '2.5 years',
            useCases: ['Public Discord bots'],
          },
        },
      ]"
    ></LandingProject>
    <LandingProject
      project-type="Web app"
      name="AgencyLabs"
      link="https://agencylabs.ai"
      img-name="agencylabs-logo.webp"
      img-alt="agencylabs-logo"
      :tech-stack="[
        {
          name: 'HTML/CSS',
          popupInfo: {
            description:
              'Both is used to build and design websites. Its a must have for anyone in frontend development.',
            experience: '2 years',
            useCases: ['Website structuring', 'Website styling'],
          },
        },
        {
          name: 'JS',
          popupInfo: {
            description:
              'Javascript is genrerally used in  web developement. With many frameworks supporting it, its also essential for any frontend dev.',
            experience: '2 years',
            useCases: ['Website functionality'],
          },
        },
        {
          name: 'VueJS',
          popupInfo: {
            description:
              'VueJS is an insanely fast and powerful JS framework, for web developement. Want to make a reactive site? Thats your way to go.',
            experience: '1 year',
            useCases: ['Reactive websites'],
          },
        },
        {
          name: 'Nuxt3',
          popupInfo: {
            description:
              'Nuxt3 makes VueJS even more powerful with many added features to improve speed, SEO and useability.',
            experience: '1 year',
            useCases: ['APIs', 'Frontend Apps'],
          },
        },
        {
          name: 'PostgreSQL',
          popupInfo: {
            description:
              'PostgreSQL is a relational database, which is made more powerful with tools like CockroachDB, which make databases scaleable.',
            experience: '0.5 years',
            useCases: ['Huge databases'],
          },
        },
      ]"
    ></LandingProject>
  </div>
</template>
<script setup>
import CountUpComponent from "vue-countup-v3";
import { ref, onMounted } from "vue";
import axios from "axios";

const counterValue = ref(0);
const counterOptions = { separator: "." };
function updateCounter(to) {
  counterValue.value = to;
}
onMounted(() => {
  axios
    .get(`https://api.witzdam.com/stats/projects-user-count`)
    .then((response) => {
      if (response.status === 200) {
        updateCounter(response.data.userCount);
      }
    })
    .catch((error) => {
      console.error(`Request failed due to: ${error}`);
    });
  const timer = setInterval(() => {
    axios
      .get(`https://api.witzdam.com/stats/projects-user-count`)
      .then((response) => {
        if (response.status === 200) {
          updateCounter(response.data.userCount);
        }
      })
      .catch((error) => {
        console.error(`Request failed due to: ${error}`);
      });
  }, 5000);
});
</script>
<style scoped>
.sub-heading {
  display: flex;
  gap: 5px;
  margin-bottom: 2rem;
}
.sub-heading p {
  opacity: 0.56;
}
</style>
