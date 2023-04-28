<template>
  <div>
    <Head>
      <Title>Broken Link Checker - Tim Witzdam</Title>
      <Meta
        name="description"
        content="Find broken links in seconds with this easy to use tool. Check both internal and external links."
      />
    </Head>
    <TopSection
      title="🔗 Broken link checker"
      sub-title="Find broken links using this finder tool. It will help you if you are doing broken link building."
    ></TopSection>
    <h2 style="text-align: center; margin-top: 3rem">Enter URLs</h2>
    <div class="input-fields">
      <InputField
        v-for="(inputField, index) in inputFields"
        input_type="url"
        placeholder_text="Enter domain or URL"
        input_width="20rem"
        :key="index"
        @get-value="setCurrentInput($event, index)"
        @enter-press="urlConfirm"
      ></InputField>
    </div>
    <div class="add-url">
      <p @click="addURLInputField">Add URL +</p>
      <ClickButton text="Check broken links" @click="urlConfirm"></ClickButton>
    </div>
    <div class="error-container" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <LoadingAnimation v-if="requestPending"></LoadingAnimation>
    <BrokenLinkCheckerResultsContainer
      v-if="requestData && requestData.status === 'OK'"
      :results="requestData"
    ></BrokenLinkCheckerResultsContainer>
    <InformationBox
      class="information-box"
      title="❓ Why bother checking for broken links?"
    >
      <p style="opacity: 0.56">
        Checking websites or blogs for broken links can be useful for following
        scenarios:<br /><br />
      </p>
      <ul style="list-style-position: inside; opacity: 0.56">
        <li>Improve SEO</li>
        <li>Improve user experience</li>
        <li>Do <u>broken backlink building</u></li>
        <li>Get yourself new backlinks</li>
      </ul>
    </InformationBox>
    <InformationBox class="information-box" title="🤷‍♂️ How to use the tool?">
      <p style="opacity: 0.56">
        Using this tool is very easy. Here are the steps you may go through:<br /><br />
      </p>
      <ul style="list-style-position: inside; opacity: 0.56">
        <li>Enter your domain or URL and click “Check broken links”</li>
        <li>After a short moment you'll receive your results</li>
        <li style="list-style-type: none">
          <img src="https://legende.cc/ss/U8Kk5nCdNx.png" />
        </li>
        <li>You can now go ahead and fix these links</li>
        <li>
          If you want to save them for later, you can export them like this:
        </li>
        <li style="list-style-type: none">
          <img src="/export-tutorial.webp" />
        </li>
      </ul>
    </InformationBox>
    <InformationBox class="information-box" title="🤖 How does this tool work?">
      <p style="opacity: 0.56; max-width: 80%">
        This tool basically visits the domain/URL you've entered, finds all
        links on that page and goes deep.<br /><br />
        It starts visiting all these links, finds all links on these pages and
        goes deep again. <br /><br />
        This way I can assure, that you'll get the most out of this tool. <br />
        Other tools often only check the first page you enter for broken links,
        this one goes through many more pages on your website without you having
        to do anything for that.
      </p>
    </InformationBox>
  </div>
</template>
<script setup>
import { ref } from "vue";
const requestData = ref(null);
const requestPending = ref(false);
const errorMessage = ref(null);
const inputFields = ref([{ input_value: null }]);

function setCurrentInput(input, index) {
  inputFields.value[index].input_value = input;
}

function addURLInputField() {
  if (inputFields.value.length < 10) {
    inputFields.value.push({ input_value: null });
  } else {
    errorMessage.value = "You can only add up to 10 URLs";
  }
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
  let valueList = [];
  for (const inputField of inputFields.value) {
    if (inputField.input_value) {
      if (!isValidUrl(inputField.input_value)) {
        errorMessage.value = "Invalid URL: " + inputField.input_value;
        return;
      }
    }
  }
  for (const inputField of inputFields.value) {
    if (inputField.input_value) {
      valueList.push(inputField.input_value);
    }
  }
  if (valueList.length == 0) {
    errorMessage.value = "No URLs provided";
    return;
  }
  requestPending.value = true;
  const {
    data: request,
    pending,
    error: a,
    refresh,
  } = await useFetch("https://api.witzdam.com/tools/broken-link-checker", {
    //} = await useFetch("http://192.168.178.45:5002/tools/broken-link-checker", {
    method: "POST",
    body: { urls: valueList },
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
    errorMessage.value = JSON.parse(request.value).message;
    console.log(errorMessage.value);
    requestPending.value = false;
    return;
  }
  requestPending.value = false;
  requestData.value = request.value;
}
</script>
<style scoped>
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
