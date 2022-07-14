<template></template>

<script>
export default {
  components: {RepositoriesFilters, RepositoriesSortBy, RepositoriesList},
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      repositories: [], // 1
      filters: {...}, // 3使用 filters 对象筛选仓库
      searchQuery: '' // 2使用 searchQuery 字符串搜索仓库c
    }
  },
  computed: {
    filteredRepositories() { ...
    }, // 3
    repositoriesMatchingSearchQuery() { ...
    }, // 2
  },
  watch: {
    // 在用户有任何更改时进行刷新
    user: 'getUserRepositories' // 1
  },
  methods: {
    getUserRepositories() {
      // 使用 `this.user` 获取用户仓库
    }, // 1
    updateFilters() { ...
    }, // 3
  },
  mounted() {
    //从假定的外部 API 获取该用户的仓库，
    this.getUserRepositories() // 1
  }
}
</script>

<style scoped lang="scss"></style>
