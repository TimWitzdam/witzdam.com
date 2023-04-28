<template>
  <div>
    <h2>Stats:</h2>
    <div class="stats-container">
      <div>
        <p>Broken links found:</p>
        <count-up-component
          :end-val="counterValues.broken_links"
          :options="counterOptions"
          duration="3"
        ></count-up-component>
      </div>
      <div>
        <p>Pages checked:</p>
        <count-up-component
          :end-val="counterValues.pages_checked"
          :options="counterOptions"
          duration="3"
        ></count-up-component>
      </div>
      <div>
        <p>Inbound links checked:</p>
        <count-up-component
          :end-val="counterValues.inbound_links"
          :options="counterOptions"
          duration="3"
        ></count-up-component>
      </div>
      <div>
        <p>Outbound links checked:</p>
        <count-up-component
          :end-val="counterValues.outbound_links"
          :options="counterOptions"
          duration="3"
        ></count-up-component>
      </div>
    </div>
    <div class="results-heading">
      <h2>Results:</h2>
      <button v-if="counterValues.broken_links > 0" @click="exportToExcel">
        <p>Export to Excel</p>
        <svg
          width="17"
          height="17"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3609 8.2199V9.5212C10.3609 10.0958 10.1568 10.5898 9.74338 10.9967C9.33648 11.4114 8.84118 11.6155 8.26788 11.6155H2.22418C1.64958 11.6155 1.15558 11.4114 0.740883 10.9967C0.333983 10.5898 0.129883 10.0945 0.129883 9.5212V3.4788C0.129883 2.9042 0.333983 2.4102 0.740883 2.0033C1.15558 1.5886 1.64958 1.3858 2.22418 1.3858H7.34358C7.46708 1.3858 7.56848 1.4807 7.56848 1.6185V2.0839C7.56848 2.2217 7.46708 2.3166 7.34358 2.3166H2.22418C1.90438 2.3166 1.62748 2.4336 1.40258 2.6585C1.17768 2.8834 1.06068 3.1603 1.06068 3.4801V9.5225C1.06068 9.8423 1.17768 10.1192 1.40258 10.3441C1.62748 10.569 1.90438 10.686 2.22418 10.686H8.26658C8.58638 10.686 8.86328 10.569 9.08818 10.3441C9.31308 10.1192 9.43008 9.8423 9.43008 9.5225V8.2199C9.43008 8.0821 9.52498 7.995 9.66278 7.995H10.1282C10.266 7.9937 10.3609 8.0821 10.3609 8.2199ZM12.7828 4.5552L10.4051 6.9251C10.2166 7.1292 9.91108 6.9693 9.91108 6.721V5.5354H8.86458C8.55908 5.5354 8.15868 5.5497 7.65688 5.5718C7.15508 5.5939 6.66108 5.681 6.16578 5.8266C5.67828 5.9722 5.28568 6.1386 4.98798 6.3284C4.69678 6.5169 4.49398 6.7067 4.37048 6.8952C4.25348 7.0772 4.15208 7.3242 4.05718 7.6297C3.96228 7.9352 3.91938 8.2407 3.91938 8.5527C3.91938 8.7204 3.92718 8.9167 3.94148 9.1273C3.94148 9.1637 3.96358 9.3015 3.96358 9.36C3.96358 9.4471 3.90508 9.5199 3.81798 9.5199C3.75948 9.5199 3.71658 9.4913 3.68668 9.4393C3.63598 9.3743 3.55538 9.1702 3.51248 9.0909C3.11988 8.2108 2.99638 7.3099 3.14848 6.3934C3.22908 5.7603 3.55538 5.1493 4.13778 4.5682C5.08158 3.6309 6.65978 3.159 8.86328 3.159H9.90978V1.9669C9.90978 1.7121 10.2153 1.5665 10.4038 1.7563L12.7815 4.134C12.8985 4.2562 12.8985 4.4382 12.7828 4.5552Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
    <DataTable v-if="counterValues.broken_links > 0" :data="rows"></DataTable>
    <p v-if="counterValues.broken_links === 0" style="text-align: center">
      🔥 No broken links found
    </p>
  </div>
</template>
<script>
import CountUpComponent from "vue-countup-v3";
import * as XLSX from "xlsx";
export default {
  props: ["results"],
  components: {
    CountUpComponent,
  },
  data() {
    return {
      counterValues: {
        broken_links: 0,
        pages_checked: 0,
        inbound_links: 0,
        outbound_links: 0,
      },
      counterOptions: { separator: "." },
      rows: [],
      errorAssignments: {
        400: "Bad request",
        401: "Unauthorized",
        402: "Payment required",
        403: "Forbidden",
        404: "Not found",
        405: "Method not allowed",
        406: "Not acceptable",
        407: "Proxy authentication required",
        408: "Request timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length required",
        412: "Precondition failed",
        413: "Payload too large",
        414: "URI too long",
        415: "Unsupported media type",
        416: "Range not satisfiable",
        417: "Expectation failed",
        418: "I'm a teapot",
        422: "Unprocessable entity",
        425: "Too early",
        426: "Upgrade required",
        428: "Precondition required",
        429: "Too many requests",
        431: "Request header fields too large",
        451: "Unavailable for legal reasons",
        500: "Internal server error",
        501: "Not implemented",
        502: "Bad gateway",
        503: "Service unavailable",
        504: "Gateway timeout",
        505: "HTTP version not supported",
        506: "Variant also negotiates",
        507: "Insufficient storage",
        508: "Loop detected",
        510: "Not extended",
        511: "Network authentication required",
      },
    };
  },
  methods: {
    updateCounter(to) {
      counterValue.value = to;
    },
    exportToExcel() {
      let tempRows = this.rows.slice(); // create a shallow copy of this.rows
      tempRows.unshift(["Page", "Broken link"]);
      var workbook = XLSX.utils.book_new(),
        worksheet = XLSX.utils.aoa_to_sheet(tempRows);
      workbook.SheetNames.push("First");
      workbook.Sheets["First"] = worksheet;
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "broken_links_export.xlsx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
  mounted() {
    this.counterValues.broken_links = this.results.broken_links;
    this.counterValues.pages_checked = this.results.pages_checked;
    this.counterValues.inbound_links = this.results.inbound_links;
    this.counterValues.outbound_links = this.results.outbound_links;
    for (const i in this.results.data) {
      for (const link in this.results.data[i]["broken_links"]) {
        this.rows.push([
          i,
          Object.keys(this.results.data[i]["broken_links"][link])[0],
          {
            title:
              "❌ " +
              Object.values(this.results.data[i]["broken_links"][link])[0],
            description:
              this.errorAssignments[
                Object.values(this.results.data[i]["broken_links"][link])[0]
              ] || "Unknown error",
            showHover: false,
          },
        ]);
      }
    }
    console.log(this.rows);
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 3rem;
}
.stats-container {
  display: grid;
  grid-template-columns: 25% 25%;
  grid-template-rows: 40% 40%;
  gap: 30px 30px;
  grid-template-areas:
    ". ."
    ". .";
  justify-items: stretch;
  justify-content: center;
}
.stats-container div {
  display: grid;
  place-items: center;
  border: solid white;
  padding: 1rem 0;
  border-radius: 1rem;
}
.stats-container div p {
  font-weight: 700;
}
.stats-container div div {
  opacity: 0.56;
  border: none;
  padding: none;
  display: block;
}
.results-heading button {
  background-color: #212121;
  display: flex;
  margin-left: auto;
  max-width: fit-content;
  align-items: center;
  gap: 0.5rem;
  border: solid white;
  padding: 0.6rem 0.9rem;
  border-radius: 1rem;
  font-weight: 700;
  cursor: pointer;
}
@media (max-width: 770px) {
  .stats-container {
    grid-template-columns: 40% 40%;
    grid-template-rows: 40% 40%;
    text-align: center;
  }
}
</style>
