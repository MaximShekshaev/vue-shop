<script setup >
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const updateCount = (id, evaent) => {
cartStore.updateCountCart(id,evaent.target.value)
}

</script>

<template>
<table class="table">
        <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col" class="md-4">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Count</th>
                </tr>
         </thead>
        <tbody>
                <tr v-for="product, index in cartStore.cartList" :key="product.productId">
                <th scope="row">{{ index + 1 }}</th>
                <td> <img class="img-thumbnail" :src="product.img"  alt="" width="300"></td>
                <td>{{ product.name }}</td>
                <td>{{ product.price }}$</td>
                <td><input type="text" class="form-control" ref="countInput"  @input="updateCount (product.productId, $event)" :value="product.count"></td>
                <td><button type="button" @click="$router.push('/detail/' +product.productId)" class="btn btn-outline-danger">Detail</button></td>
                <td><button type="button" @click="cartStore.removeById(product.productId)" class="btn btn-outline-danger">Delete</button></td>
            </tr>
        </tbody>
</table>
<div class="row">
    <div class="col text-end">
         <h3>total: ${{ cartStore.totalSum }}</h3>
    </div>
            </div>

</template>