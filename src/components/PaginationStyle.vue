<template>
  <div>
    <order-list
      v-for="(item, i) in listData"
      :key="i"
      :orderListData="listData"
      :idxData="i"
    />
    <PaginationList
      :pageSetting="pageDataSetting(total, limit, block, this.page)"
      @paging="pagingMethod"
    />
    <div class="order-none">거래내역이 없습니다.</div>
  </div>
</template>

<script>
import PaginationList from "./PaginationList.vue";

export default {
  data() {
    return {
      listData: [],
      paymentInfo: [],
      total: 50,
      page: 1,
      limit: 5,
      block: 5,
    };
  },
  mounted() {
    this.pagingMethod(this.page);
  },
  methods: {
    pagingMethod(page) {
      this.listData = this.paymentInfo.slice(
        (page - 1) * this.limit,
        page * this.limit,
      );
      this.page = page;
      this.pageDataSetting(this.total, this.limit, this.block, page);
    },
    pageDataSetting(total, limit, block, page) {
      const totalPage = Math.ceil(total / limit);
      let currentPage = page;
      const first =
        currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null;
      const end =
        totalPage !== currentPage
          ? parseInt(currentPage, 10) + parseInt(1, 10)
          : null;
      let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1;
      let endIndex =
        startIndex + block > totalPage ? totalPage : startIndex + block - 1;
      let list = [];
      for (let index = startIndex; index <= endIndex; index++) {
        list.push(index);
      }
      return { first, end, list, currentPage };
    },
  },
  components: { PaginationList },
};
</script>

<style lang="scss" scoped>
.create-data-btn {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
