<script setup>

</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-5">
              <select class="form-select" aria-label="Default select example">
        <option selected>Select category</option>
        <option value="1">GPU</option>
        <option value="2">CPU</option>
        <option value="3">motherboard</option>
        <option value="4">RAM</option>
      </select>
      </div>
      <div class="col-md-5"><input type="text" class="form-control" placeholder="Search by name...">
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-outline-danger">Reset</button>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 row mt-4">
  <div class="col">
    <div class="card">
      <img src="https://ants.kz/upload/resize_cache/webp/iblock/e98/450_450_1/tzwnq7fu8gl2cc942ftxjfumug86tluq.webp" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">ASUS ROG MAXIMUS Z690 EXTREME GLACIAL</h5>
        <p class="card-text">motherboard</p>
        <p class="card-text">300$</p>
      </div>
      <div class="card-footer text-end">
        <button type="button" class="btn btn-outline-danger m-2">Detail</button>
        <button type="button" class="btn btn-outline-danger">Cart</button>
      </div>
    </div>
  </div>

  
  <div class="col">
    <div class="card">
      <img src="https://ants.kz/upload/resize_cache/webp/iblock/542/450_450_1/v35oy7vgvk880q13ywpi8a7na0bes4r8.webp" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">AMD Ryzen 7 5700X OEM</h5>
        <p class="card-text">CPU</p>
        <p class="card-text">200$</p>
      </div>
      <div class="card-footer text-end">
        <button type="button" class="btn btn-outline-danger m-2">Detail</button>
        <button type="button" class="btn btn-outline-danger">Cart</button>
      </div>
    </div>
  </div>



  <div class="col">
    <div class="card">
      <img src="https://ants.kz/upload/resize_cache/webp/iblock/a12/450_450_1/llw9pbl326cbubi7h2fwa3z9sh6l067s.webp" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Kingston Fury Beast Black EXPO</h5>
        <p class="card-text">RAM</p>
        <p class="card-text">200$</p>
      </div>
      <div class="card-footer text-end">
        <button type="button" class="btn btn-outline-danger m-2">Detail</button>
        <button type="button" class="btn btn-outline-danger">Cart</button>
      </div>
    </div>
  </div>


  <div class="col">
    <div class="card">
      <img src="https://ants.kz/upload/resize_cache/webp/iblock/657/450_450_1/pq2tj2p7tzqtd5mkdbmqfxe16knia8sj.webp" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">24 Gb PNY RTX 3090</h5>
        <p class="card-text">GPU</p>
        <p class="card-text">2000$</p>
      </div>
      <div class="card-footer text-end">
        <button type="button" class="btn btn-outline-danger m-2">Detail</button>
        <button type="button" class="btn btn-outline-danger">Cart</button>
      </div>
    </div>
  </div>

    </div>
  </div>
  
</template>
