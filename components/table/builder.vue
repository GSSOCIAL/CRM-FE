<template>
  <div class="tableContainer">
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Middle Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jeremy</td>
          <td>M. Tannehill</td>
          <td></td>
        </tr>
        <tr>
          <td>Jeremy</td>
          <td>M. Tannehill</td>
          <td></td>
        </tr>
        <tr>
          <td>Jeremy</td>
          <td>M. Tannehill</td>
          <td></td>
        </tr>
        <tr>
          <td>Jeremy</td>
          <td>M. Tannehill</td>
          <td></td>
        </tr>
        <tr>
          <td>Jeremy</td>
          <td>M. Tannehill</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import "assets/style/mixins.scss";
.tableContainer {
  width: 100%;
  border-spacing: 0px;
  text-align: left;
  background-color: var(--Fill-Primary);
  color: var(--Text-On-Primary);
  > table {
    border-spacing: 0px;
    width: 100%;
    border: 1px solid var(--Fill-Divider);
    overflow: hidden;
    > thead {
      > tr {
        > th {
          border-bottom: 1px solid var(--Fill-Divider);
          color: var(--Text-On-Fill-Tertiary);
          @include text("headline");
        }
      }
    }
    > tbody {
      > tr {
        > td,
        > th {
          @include text("body");
        }
        &:nth-child(odd) {
        }
        &:nth-child(even) {
        }
        &:not(:last-child) {
          > td,
          > th {
            border-bottom: 1px solid var(--Fill-Divider);
          }
        }
      }
    }
    td,
    th {
      &.hiddenCell {
        width: 0px;
        padding: 0px;
      }
    }
  }
}
</style>
