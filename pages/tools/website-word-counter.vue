c
<template>
  <div>
    <Head>
      <Title>Website word counter - Tim Witzdam</Title>
      <Meta
        name="description"
        content="Count all the visible words on your website in just a few seconds with this tool."
      />
    </Head>
    <div class="tech-stack">
      <div
        class="technologies"
        v-for="(technology, index) in techStack"
        :key="index"
      >
        <p
          v-on:mouseover="showPopup($event, index)"
          @mouseleave="hidePopup(index)"
        >
          {{ technology.name }}
        </p>
        <div
          v-show="showPopups[index]"
          class="popup"
          :style="{ top: mouseY - 220 + 'px', left: mouseX + 'px' }"
          :key="index"
        >
          <h3>{{ technology.name }}</h3>
          <p>{{ technology.popupInfo.description }}</p>
          <p>Experience: {{ technology.popupInfo.experience }}</p>
          <p>Use cases:</p>
          <ul>
            <li v-for="useCase in technology.popupInfo.useCases">
              <span>{{ useCase }}</span>
            </li>
          </ul>
        </div>

        <span class="dot" v-show="index != techStack.length - 1"></span>
      </div>
    </div>
    <TopSection
      title="🔠 Website word counter"
      sub-title="Count all the visible words on your website in just a few seconds with this tool."
    ></TopSection>
    <h2 style="text-align: center; margin-top: 3rem">Enter URL</h2>
    <div class="input-fields">
      <InputField
        input_type="url"
        placeholder_text="Enter domain or URL"
        input_width="20rem"
        @get-value="setCurrentInput($event)"
        @enter-press="urlConfirm"
      ></InputField>
      <ClickButton text="Check word count" @click="urlConfirm"></ClickButton>
    </div>
    <div class="error-container" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <LoadingAnimation v-if="requestPending"></LoadingAnimation>
    <div class="results-container" v-if="requestData">
      <div class="stats-container">
        <div>
          <p>Visible words (counted by Google):</p>
          <count-up-component
            :end-val="requestData.visible_words"
            :options="counterOptions"
            duration="3"
          ></count-up-component>
        </div>
        <div>
          <p>Total words:</p>
          <count-up-component
            :end-val="requestData.total_words"
            :options="counterOptions"
            duration="3"
          ></count-up-component>
        </div>
      </div>
      <h2>Most used keywords:</h2>
      <DataTable
        :data="requestData.top_words"
        :columns="columns"
        table-width="50%"
      ></DataTable>
    </div>

    <InformationBox
      class="information-box"
      title="❓ Why bother checking the words on my website?"
    >
      <p style="opacity: 0.56">
        Checking the word count of your or a competitors website or blog article
        helps me in following scenarios:<br /><br />
      </p>
      <ul style="list-style-position: inside; opacity: 0.56">
        <li>Finding a baseline of content length</li>
        <li>Avoiding "thin content" pages</li>
        <li>Finding new keywords</li>
      </ul>
    </InformationBox>
    <InformationBox class="information-box" title="🤷‍♂️ How to use the tool?">
      <p style="opacity: 0.56">
        Using a tool has never been that easy:<br /><br />
      </p>
      <ul style="list-style-position: inside; opacity: 0.56">
        <li>Enter your domain or URL and click “Check word count”</li>
        <li>After a short moment you'll receive your result</li>
        <li style="list-style-type: none">
          <!-- <img src="https://legende.cc/ss/U8Kk5nCdNx.png" /> -->
        </li>
      </ul>
    </InformationBox>
    <InformationBox class="information-box" title="🤖 How does this tool work?">
      <p style="opacity: 0.56; max-width: 80%">
        This tool basically visits the domain/URL you've entered and counts all
        the words that are visible to the user as well as the ones, that aren't.
        This means that words that are with the help of HTML or CSS are not
        counted. This is the same way Google counts the words on your website.
      </p>
    </InformationBox>
  </div>
</template>
<script setup>
import { ref } from "vue";
import CountUpComponent from "vue-countup-v3";
const requestData = ref(null);
const requestPending = ref(false);
const errorMessage = ref(null);
const inputURL = ref(null);
const columns = [{ title: "Keyword" }, { title: "Count" }];
const counterOptions = { separator: "." };
const techStack = [
  {
    name: "Python",
    popupInfo: {
      description:
        "Python is a high level programming language, which I chose to learn programming with.",
      experience: "4 years",
      useCases: ["API building", "Webscraping"],
    },
  },
  {
    name: "MySQL",
    popupInfo: {
      description:
        "MySQL is a relational database, which I started learning in school and used in some projects.",
      experience: "3 years",
      useCases: ["Data storing for projects"],
    },
  },
  {
    name: "Flask",
    popupInfo: {
      description:
        "Flask is a framework for Python which I used to create REST APIs with in connection with my projects.",
      experience: "4 years",
      useCases: ["Private APIs", "Public APIs"],
    },
  },
  {
    name: "JSON",
    popupInfo: {
      description:
        "With JSON you can store data in a clear structure. Basically anything with data uses JSON.",
      experience: "4 years",
      useCases: ["APIs", "Frontend Apps"],
    },
  },
  {
    name: "PyCord",
    popupInfo: {
      description:
        "PyCord is an API wrapper for Discord bots, which is optimized for performance. Its a fork of discord.py.",
      experience: "2.5 years",
      useCases: ["Public Discord bots"],
    },
  },
];

function setCurrentInput(input) {
  inputURL.value = input;
}

const isValidUrl = (urlString) => {
  var urlPattern = new RegExp(
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

async function urlConfirm() {
  errorMessage.value = null;
  requestData.value = null;
  if (!inputURL.value) {
    errorMessage.value = "No URL provided";
    return;
  }

  if (!isValidUrl(inputURL.value)) {
    errorMessage.value = "Invalid URL: " + inputURL.value;
    return;
  }
  requestPending.value = true;
  const {
    data: request,
    pending,
    error: a,
    refresh,
    //} = await useFetch("https://api.witzdam.com/tools/broken-link-checker", {
  } = await useFetch("http://192.168.178.33:5002/tools/website-word-counter", {
    method: "POST",
    body: { url: inputURL },
    async onResponseError({ request, response, options }) {
      if (error.status === 429) {
        errorMessage.value =
          "You've made too many requests, please wait 1 hour before trying again.";
      } else {
        errorMessage.value = "An unknown error occurred";
      }
    },
  });
  request.value = JSON.parse(request.value);
  if (request.value.status !== "OK") {
    console.log("err");
    errorMessage.value = request.value.message;
    console.log(errorMessage.value);
    requestPending.value = false;
    return;
  }
  requestPending.value = false;
  requestData.value = request.value.data;
}
let showPopups = ref([]);
let mouseX = ref(0);
let mouseY = ref(0);
function showPopup(event, index) {
  showPopups.value[index] = true;
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;

  // add event listener to update mouse position
  document.addEventListener("mousemove", updateMousePosition);
}
function updateMousePosition(event) {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY + 30;
}
function hidePopup(index) {
  showPopups.value[index] = false;
  document.removeEventListener("mousemove", updateMousePosition);
}
onMounted(() => {
  for (let i; i < techStack.length; i++) {
    showPopups.value[i] = false;
  }
});
</script>
<style scoped>
.tech-stack {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 0.2rem;
}
.tech-stack p {
  opacity: 0.56;
}
.technologies {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.technologies p:hover {
  cursor: help;
}
.dot {
  height: 0.5rem;
  width: 0.5rem;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  opacity: 0.56;
}
.popup {
  position: absolute;
  background-color: #2e2e2e;
  border: 1px solid #353535;
  border-radius: 1rem;
  padding: 1.5rem;
  font-size: 0.7rem;
  max-width: 15rem;
  z-index: 1;
}
.popup p,
ul {
  opacity: 0.56;
  margin-top: 0.3rem;
}
.popup li {
  margin-left: 1rem;
}
.stats-container {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  gap: 30px 30px;
  grid-template-areas: ". .";
  justify-content: center;
}
.stats-container div {
  display: grid;
  place-items: center;
  border: solid rgba(255, 255, 255, 0.56) 2px;
  padding: 1rem 0;
  border-radius: 1rem;
}
.stats-container div p {
  font-weight: 700;
  text-align: center;
}
.stats-container div div {
  opacity: 0.56;
  border: none;
  padding: none;
  display: block;
}
.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.information-box {
  margin-top: 5rem;
}
.error-container {
  margin-top: 2rem;
  text-align: center;
}
.add-url {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
}
.add-url p {
  opacity: 0.56;
  transition: opacity 0.2s;
  cursor: pointer;
}
.add-url p:hover {
  opacity: 1;
}
.input-fields {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
}
img {
  max-width: 100%;
}

@media (min-width: 1024px) {
  img {
    max-width: 60%;
  }
}
</style>
