<template>
  <div>
    <!-- Navbar -->
    <pageHeader />

    <div class="container py-4 mb-5">
      <ol class="breadcrumb mb-5">
        <li class="breadcrumb-item"><RouterLink to="/" class="text-dark" style="text-decoration:none;">Home</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/shop" class="text-dark" style="text-decoration:none;">Equipments</RouterLink></li>
        <li class="breadcrumb-item text-muted" aria-current="page">{{Product.name}}</li>
      </ol>
      <!-- {{ Product }} -->
      <div class="row">
        <div class="col-sm-5">
          <div class="w-100 border rounded">
            <img :src="imageUrl(Product.banner)" alt="" class="w-100">
          </div>
        </div>
        <div class="col-sm-7">
          <div class="w-100">
            <h1 class="text-uppercase">{{Product.name}}</h1>
            <p class="lead">Brand: <b>{{ Product.brand }}</b></p>
            <p class="h1">₦{{ Product.price }} <small class="text-muted h4 ps-3" style="text-decoration:line-through;" v-if="Product.oldPrice>0">₦{{ Product.oldPrice }}</small></p>
            <p class="lead">Sizes: <b class="px-2" v-for="size in Product.sizes">{{ size }}</b></p>
            <p class="lead">Category: <b class="px-2" v-for="cat in Product.category">{{ cat }}</b></p>
            <p>{{ Product.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <pageFooter />
  </div>
</template>

<script>
import DB from '@/database/DB.json';
export default {
  name: "Product Details",
  data() {
    return {
      Products: DB.products,
      itemId: this.$route.params.id,
    }
  },
  methods: {
    imageUrl(file) {
      return "https://images.aaveinvestment.org/"+file;
    }
  },
  computed: {
    Product() {
      return this.Products.find(item => item.id == this.itemId);
    }
  }
}
</script>