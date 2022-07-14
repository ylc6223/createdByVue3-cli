<script setup>
import {ref} from "vue";

// const msg = ref("Hello World!");
// const v = "";
const header = ref("Shopping List App");
const items = ref([
  {id: 1, label: "10 party hats"},
  {id: 2, label: "2 board games"},
  {id: 3, label: "20 cups"},
]);
/*const items = ref({
  1: { id: 1, label: "10 party hats" },
  2: { id: 2, label: "2 board games" },
  3: { id: 3, label: "20 cups" },
});*/
const newItem = ref("");
const newItem1 = ref("");
const newItem2 = ref("");
const newItem3 = ref("");
const newItemPriority = ref("low");
const newItemPriority1 = ref("male");
const newItemPriority2 = ref(false);
const iceCreamFlavors = ref([]);
/*const items = ref({
  "item-1": {id: 1, label: "10 party hats"},
  "item-2": {id: 2, label: "2 board games"},
  "item-3": {id: 3, label: "20 cups"}
})*/
const saveItem = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
  });
  newItem.value = ""
};
</script>

<template>
  <h1>{{ header }}</h1>
  <!--  <div class="add-item-form mb-20">
    <label for="item">no modifier</label
    ><input
      id="item"
      type="text"
      v-model="newItem"
      v-on:keyup="
        items.push({
          id: items.length + 1,
          label: newItem,
        })
      "
      placeholder="Add an item"
    />
    {{ newItem }}
    <button
      v-on:click="
        items.push({
          id: items.length + 1,
          label: newItem,
        })
      "
      class="btn btn-primary"
    >
      Save Item
    </button>
  </div>-->

  <form class="add-item-form mb-20" v-on:submit.prevent="saveItem">
    <label for="item">no modifier</label
    ><input id="item" type="text" v-model="newItem" placeholder="Add an item"/>
    {{ newItem }}
    <button class="btn btn-primary">Save Item</button>
  </form>

  <div class="mb-20">
    <label for="item1">lazy modifier</label
    ><input
      id="item1"
      type="text"
      v-model.lazy="newItem1"
      placeholder="Add an item1"
  />
    {{ newItem1 }}
  </div>

  <div class="mb-20">
    <label for="item2">number modifier</label
    ><input
      id="item2"
      type="text"
      v-model.number="newItem2"
      placeholder="Add an item1"
  />
    {{ newItem2 }}
  </div>

  <div class="mb-20">
    <label for="item3">trim modifier</label
    ><input
      id="item3"
      type="text"
      v-model.trim="newItem3"
      placeholder="Add an item1"
  />
    {{ newItem3 }}
  </div>
  Priority:
  <label>
    <input type="radio" v-model="newItemPriority" value="low"/>
    Low
  </label>
  <label>
    <input type="radio" v-model="newItemPriority" value="high"/>
    High
  </label>
  <div :style="{ color: 'red' }">{{ newItemPriority }}</div>
  <ul>
    <!--    <li v-for="item in items" :key="item.id">{{ item.label }}</li>-->
    <li v-for="({ id, label }, index) in items" :key="id">
      {{ index }}:
      {{ label }}
    </li>
  </ul>
  Priority1:
  <label>
    <select v-model="newItemPriority1">
      <option value="male">male</option>
      <option value="female">famale</option>
    </select>
  </label>
  <div :style="{ color: 'red' }">{{ newItemPriority1 }}</div>
  <br/>
  Priority2:
  <label>
    <input type="checkbox" v-model="newItemPriority2"/>
    High Priority
  </label>
  <div :style="{ color: 'red' }">{{ newItemPriority2 }}</div>
  <br/>
  iceCreamFlavors:
  <label>
    <input type="checkbox" value="vanilla" v-model="iceCreamFlavors"/>
    vanilla
  </label>

  <label>
    <input type="checkbox" value="chocolate" v-model="iceCreamFlavors"/>
    chocolate
  </label>

  <label>
    <input type="checkbox" value="strawberry" v-model="iceCreamFlavors"/>
    strawberry
  </label>
  <div>{{ iceCreamFlavors }}</div>
</template>
