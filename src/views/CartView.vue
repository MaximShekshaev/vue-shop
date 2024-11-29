<script setup>
import CartList from '@/components/CartList.vue';
import { useCartStore } from '@/stores/cart';
import OrderView from './OrderView.vue';

const cartStore = useCartStore();

</script>

<template>
<div class="container">
    <div class="row">
        <div class="col">
           <CartList/>
        </div>
    </div>
</div>

<div class="row">
    <div class="col text-end">
         <RouterLink class="nav-link" to="/order"> <button type="button" v-show="cartStore.carts.length" @click="OrderView" class="btn btn-outline-success btn-lg me-2">Buy</button></RouterLink>
        </div>
</div>
</template>