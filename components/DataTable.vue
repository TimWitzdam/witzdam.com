<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column" class="column">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="row">
          <td
            v-for="(cell, index) in row"
            :key="index"
            @mouseover="showPopup(rowIndex, index)"
            @mouseleave="hidePopup(rowIndex, index)"
            :class="{
              'help-cursor': cell.constructor === Object,
            }"
            style="position: relative"
          >
            <div
              v-if="cell.constructor === Object && cell.showHover"
              class="hover-info"
              style="
                position: absolute;
                top: 50%;
                left: 100%;
                transform: translate(-50%, -50%);
                z-index: 1;
              "
            >
              <p>{{ cell.description }}</p>
            </div>
            <div class="cell">
              <p
                :style="{
                  cursor: cell.constructor === Object ? 'help' : 'pointer',
                }"
              >
                {{ cell.constructor === Object ? cell.title : cell }}
              </p>

              <svg
                width="12"
                height="12"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                v-if="cell.constructor !== Object"
                style="cursor: pointer"
              >
                <path
                  d="M7.6 1C7.6 0.668629 7.33137 0.4 7 0.4L1.6 0.4C1.26863 0.4 1 0.668629 1 1C1 1.33137 1.26863 1.6 1.6 1.6L6.4 1.6L6.4 6.4C6.4 6.73137 6.66863 7 7 7C7.33137 7 7.6 6.73137 7.6 6.4L7.6 1ZM1.42426 7.42426L7.42426 1.42426L6.57574 0.575736L0.575736 6.57574L1.42426 7.42426Z"
                  fill="white"
                />
              </svg>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      columns: [
        { title: "Page" },
        { title: "Broken link" },
        { title: "Status" },
      ],
      rows: [
        [
          "dentist.com/blog/how-to-get-good-teeth",
          "dentist.com/i-am-a-test-big",
          { title: "❌ 404", description: "Not found", showHover: false },
        ],
      ],
    };
  },
  methods: {
    showPopup(rowIndex, index) {
      if (this.rows[rowIndex][index].constructor === Object) {
        this.rows[rowIndex][index].showHover = true;
      }
    },
    hidePopup(rowIndex, index) {
      if (this.rows[rowIndex][index].constructor === Object) {
        this.rows[rowIndex][index].showHover = false;
      }
    },
  },
};
</script>
<style scoped>
.table-container {
  outline: 2px solid rgba(255, 255, 255, 0.56);
  background-color: transparent;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0 0 2rem 0rem;
  border-radius: 1.2rem;
}
.table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 1.2rem 0.8rem;
  text-align: left;
  border-bottom: 2px solid #989898;
  white-space: nowrap;
}

th {
  background-color: #1d1d1d;
  padding: 1.2rem 0.8rem;
}
.hover-info {
  position: absolute;
  background-color: #2e2e2e;
  border: 1px solid #353535;
  border-radius: 1rem;
  padding: 1rem;
  font-size: small;
  max-width: 15rem;
  z-index: 1;
}
.help-cursor {
  cursor: help;
}
.cell {
  display: flex;
  align-items: center;
}
</style>
