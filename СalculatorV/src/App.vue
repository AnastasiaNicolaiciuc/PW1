<script>
export default {
  name: 'Calculator-date',
  data: () => {
    return {
      period: 0
    }
  }
}
</script>

<template>
  <div id="app">
    <div>
      <input v-model="sum" type="number" placeholder="Sum" />
    </div>
    <div>
      <select v-model="period" type="number">
        <option value="0">Choose period:</option>
        <option v-for="month in 12" :value="month" :key="month">
          {{ month }}
        </option>
      </select>
    </div>
    <div v-if="Number(sum) >= 1 && Number(sum) <= 4000">
      <table width="100%" cellpadding="12" border="1px">
        <tr>
          <th>Month</th>
          <th>Sum</th>
          <th>Rest</th>
        </tr>
        <tr :key="month" v-for="month in period - 2">
          <td>{{ month }}</td>
          <td>{{ Math.floor(Number(sum) / period) }}</td>
          <td>
            {{ Math.floor(Number(sum) - (Number(sum) / period) * month) }}
          </td>
        </tr>

        <tr :key="period">
          <td>{{ period - 1 }}</td>
          <td>{{ Math.floor(Number(sum) / period) }}</td>
          <td v-if="Math.floor(Number(sum) / period) * period === Number(sum)">
            {{ Math.floor(Number(sum) / period) }}
          </td>
          <td v-else>
            {{
              Number(Math.floor(Number(sum) / period)) +
              Number(Number(sum) - Math.floor(Number(sum) / period) * period)
            }}
          </td>
        </tr>

        <tr :key="period">
          <td>{{ period }}</td>
          <td v-if="Math.floor(Number(sum) / period) * period === Number(sum)">
            {{ Math.floor(Number(sum) / period) }}
          </td>
          <td v-else>
            {{
              Number(Math.floor(Number(sum) / period)) +
              Number(Number(sum) - Math.floor(Number(sum) / period) * period)
            }}
          </td>
          <td>{{ 0 }}</td>
        </tr>
      </table>
    </div>
    <div v-else>Please enter an amount greater than 1 and less than 4000</div>
  </div>
</template>

<style scoped>
#app {
  width: 600px;
  margin: 100px auto;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
}

div,
input,
select,
button {
  width: 100%;
  margin-bottom: 8px;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
}

table {
  background: #e7bb41;
}
</style>
