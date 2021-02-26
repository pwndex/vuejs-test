<template>
  <div class="data-table">
    <table>
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.label"
            :width="column.width"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in paginatedRows"
          :key="row.id"
        >
          <td data-title="ID">{{ row.id }}</td>
          <td data-title="Date">{{ row.date | toFormatedDate }}</td>
          <td data-title="Name">{{ textShortener(row.name) }}</td>
          <td data-title="Amount">{{ row.amount | toFormatedAmount }}</td>
        </tr>
      </tbody>
    </table>

    <div class="data-table__paginator">
      <data-paginator
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
  }),

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    paginatedRows() {
      const start = this.pageSize * (this.page - 1);
      const end = this.pageSize * this.page - 1;

      return this.rows.slice(start, end + 1);
    },
  },
  methods: {
    textShortener(text) {
      return text.length >= 35 ? `${text.substr(0, 34)}...` : text;
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin: 40px 0;
}

th, td {
  border: 3px solid #bbbbbb;
  text-align: left;
  padding: 8px;
}

@media only screen and (max-width: 768px) {

table,
thead,
tbody,
th,
td,
tr {
  display: block;
}

thead tr {
  display: none;
}

tr {
  border: 3px solid #ccc;
  margin: 20px 0;
  padding: 20px;
  overflow-x: scroll;
}

td {
  border: none;
  position: relative;
  white-space: nowrap;
  padding: 30px 0 5px 0;
}

td:before {
  position: absolute;
  content: attr(data-title);
  top: 5px;
  white-space: nowrap;
  font-weight: bold;
  color: #6B697A;
}

}
</style>
