<template>
  <div id="app">
    <button @click="savePositiveDataset()">Export Positive Doc</button>
    <button @click="savePositiveDataset()">Export Negative Doc</button>
    <table>
      <tr>
        <th>Komentar</th>
        <th>Positive</th>
        <th>Negative</th>
      </tr>
      <tr v-for="(komen, index) in data" :key="index" >
        <td>{{komen}}</td>
        <td>
          <button @click="insertPositive(komen)">Positive</button>
        </td>
        <td>
          <button @click="insertNegative(komen)">Negative</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import dataJson from '../src/assets/kimihime.json';

export default {
  name: 'app',
  data() {
    return {
      positive: [],
      negative: [],
      data: dataJson,
    }
  },
  methods: {
    insertPositive(komentar) {
      const { positive } = this;
      positive.push(komentar);
      this.data.splice(this.data.indexOf(komentar),1);
    },

    insertNegative(komentar) {
      const { negative } = this;
      negative.push(komentar);
      this.data.splice(this.data.indexOf(komentar),1);
    },

    savePositiveDataset() {
      const { positive } = this;
      const data = JSON.stringify(positive)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "positive.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    },

    saveNegativeDataset() {
      const { negative } = this;
      const data = JSON.stringify(negative)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
      a = document.createElement('a');
      a.download = "positive.json";
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
      e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      a.dispatchEvent(e);
    }

  }
}
</script>

<style>
  tr {
    padding: 10px 5px;
    border: 2px solid #000;
  }
</style>
