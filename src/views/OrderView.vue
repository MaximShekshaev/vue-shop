<script setup >
import CartList from '@/components/CartList.vue';



</script>


<template>

<div class="container">
    <div class="row g-3 mt-3">
        <div class="col-md-3">
            <CartList/>
    <form class="row">
  <div class="col">
    <label for="input" class="form-label">Name</label>
    <input type="text" class="form-control" id="name">
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Man">
  <label class="form-check-label" for="flexRadioDefault1">
   Man
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="Woman" checked>
  <label class="form-check-label" for="flexRadioDefault2">
    Woman
  </label>
</div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Street">
  </div>
  <div class="col-12">
    <label for="inputNumber" class="form-label">Number</label>
    <input type="tel" class="form-control" id="tel" placeholder="Phone number">
  </div>
  <div class="col-md-5">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity">
  </div>
  <div class="col-md-7">
    <label for="inputState" class="form-label">Country</label>
    <select id="inputState" class="form-select">
      <option selected>Select country</option>
      <option>Kazakhstan</option>
      <option>Russia</option>
      <option>Germany</option>
      <option>USA</option>
    </select>
  </div>
  <div class="col-md-7">
    <label for="inputState" class="form-label">Delivery method</label>
    <select id="inputState" class="form-select">
      <option selected>method</option>
      <option>Courier delivery</option>
      <option>Pickup</option>
    </select>
  </div>
  <div class="col-md-7">
    <label for="inputState" class="form-label">payment method</label>
    <select id="inputState" class="form-select">
      <option selected>method</option>
      <option>by card</option>
      <option>cash</option>
    </select>
  </div>
  
</form>

<div class="row g-3 mt-3">
    <div class="col">
        <RouterLink to="about" type="button" class="btn btn-outline-warning">Send</RouterLink>
        <RouterLink class="btn btn-outline-danger" to="/">Back</RouterLink>
    </div>
</div>
</div>
</div>
</div>


    
</template>