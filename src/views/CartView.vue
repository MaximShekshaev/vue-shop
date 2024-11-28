<script setup>

</script>

<template>
<div class="container">
    <div class="row">
        <div class="col">
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
                <tr>
                <th scope="row">1</th>
                <td> <img src="https://ants.kz/upload/resize_cache/webp/iblock/e98/450_450_1/tzwnq7fu8gl2cc942ftxjfumug86tluq.webp"  alt=""></td>
                <td>ASUS ROG MAXIMUS Z690 EXTREME GLACIAL</td>
                <td>300$</td>
                <td><input type="text" class="form-control" value="1"></td>
                <td><button type="button" class="btn btn-outline-danger">Delete</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    </div>
</div>

<div class="row">
    <div class="col text-end">
         <h3>Total sum: 1000$</h3>
         <td><button type="button" class="btn btn-outline-success btn-lg me-2">Buy</button></td>
    </div>
</div>
</template>