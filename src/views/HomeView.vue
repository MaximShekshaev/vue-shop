<script setup>
import { useCartStore } from '@/stores/cart';
import { useCategoryStore } from '@/stores/category';
import { useProductStore } from '@/stores/product';
import { ref } from 'vue';


const productStore = useProductStore ();
const categoryStore = useCategoryStore();
const category = ref(null);
const cartStore = useCartStore();
const searchText = ref('');
const products = ref([]);
products.value = productStore.products; 


const filterCategory = () => {
products.value = productStore.productsFilteredByCategoryName(category.value, null);
searchText.value = '';
}
const SearchName = () => {
products.value = productStore.productsFilteredByCategoryName(null, searchText.value );
category.value = '';
}

const resetAll = () => {
  searchText.value = '';
  category.value = null;
  products.value = productStore.products; 
}
resetAll()

</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-5">
              <select @change="filterCategory" class="form-select" v-model="category" aria-label="Default select example">
        <option :value="null" selected>Select category</option>
        <option 
        v-for="category in categoryStore.categories"
        :value="category"
        :key="category"
        >{{ category }}</option>
      </select>
      </div>
      <div class="col-md-5">
        <input type="text" @input="SearchName" v-model="searchText" class="form-control" placeholder="Search by name...">
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-outline-danger" @click="resetAll">Reset</button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 row mt-4">
  <div class="col" v-for="product in products" :key="product.id">
    <div class="card">
      <img :src="product.img" class="card-img-top">
      <div class="card-body" style="height: 150px;">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{product.category}}</p>
        <p class="card-text">{{ product.price }}$</p>
      </div>
      <div class="card-footer text-end">
        <button type="button" @click="$router.push(`/detail/${product.id}`)" class="btn btn-outline-info m-2">Detail</button>
        <button type="button" @click="cartStore.addToCart(product.id)" class="btn btn-outline-warning">Cart</button>
      </div>
    </div>
  </div>

  
    </div>
  </div>
</template>

