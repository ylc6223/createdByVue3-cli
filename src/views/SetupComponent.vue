<template>
  <div></div>
</template>

<script>
/*大型组件过于碎片化带来的理解和维护困难，选项的分离掩盖了现在的逻辑问题，需要不断跳转相关代码，*/
import { toRefs } from "vue";
import useUserRepositories from "@/composables/useUserRepositories";
import useRepositoryNameSearch from "@/composables/useRepositoryNameSearch";
import useRepositoryFilters from "@/composables/useRepositoryFilters";

export default {
  name: "SetupComponent",
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // 使用 `toRefs` 创建对 `props` 中的 `user` property 的响应式引用
    const { user } = toRefs(props);

    const { repositories, getUserRepositories } = useUserRepositories(user);

    const { searchQuery, repositoriesMatchingSearchQuery } =
      useRepositoryNameSearch(repositories);

    const { filters, updateFilters, filteredRepositories } =
      useRepositoryFilters(repositoriesMatchingSearchQuery);

    // 返回列表和函数，以便其他组件选项可以对它们进行访问
    return {
      // 因为我们并不关心未经过滤的仓库
      // 我们可以在 `repositories` 名称下暴露过滤后的结果
      repositories: filteredRepositories,
      getUserRepositories,
      searchQuery,
      filters,
      updateFilters,
    };
  },
};
</script>

<style scoped lang="scss"></style>
