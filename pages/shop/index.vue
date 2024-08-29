<template>
  <div class="w-100">
    <!-- Navbar -->
    <pageHeader />

    <!-- Header -->
    <header class="w-100 position-relative">
      <img src="@/assets/images/vt_axetor_breadcrumb.webp" class="w-100" />
      <div class="w-100 position-absolute h-100 d-flex" style="top:0;left:0;">
        <div class="container m-auto text-white">
          <h1 class="display-1 mb-4">SHOP</h1>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-white" style="text-decoration:none;">Home</RouterLink></li>
            <li class="breadcrumb-item" style="color:#ccc;">Shop</li>
          </ol>
        </div>
      </div>
    </header>

    <!-- Section -->
    <section class="w-100 new-arrivals py-5 mb-5">
      <div class="container">
        <div class="w-100 d-flex mb-5">
          <p class="my-auto lead">Showing All {{ Products.length }} Products</p>
          <div class="my-auto ms-auto">
            <input class="form-control round-30 shadow-none"
              type="search"
              placeholder="Search equipments"
              v-model="searchItem"
              style="font-size:1.1em;padding:12px 25px;"
            />
          </div>
        </div>
        
        <div class="row">
          <div class="w-100 text-center lead" v-if="searchItem && fileredItems.length==0">
            No results found for "{{ searchItem }}"
          </div>
          <div class="col-sm-3 mb-5" v-for="(item, idx) in fileredItems">
            <RouterLink :to="`shop/${item.id}`" class="w-100 product-item">
              <div class="w-100 border p-0 mb-2">
                <img :src="imageUrl(item.banner)" :alt="item.name" class="w-100" />
              </div>
              <div class="ratings mb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>
              <p class="mb-1 text-uppercase fw-bold">{{item.name}}</p>
              <h4 class="w-100 d-flex" style="font-weight:300;">
                <span class="text-danger">₦{{item.price}}</span>
                <small v-if="item.oldPrice>0" class="text-secondary ms-auto" style="text-decoration:line-through;">₦{{item.oldPrice}}</small>
              </h4>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Section -->
    <section class="w-100 mb-5 position-relative">
      <img src="@/assets/images/vt_axetor_home1_banner_2.webp" class="w-100">
      <div class="w-100 position-absolute h-100 d-flex" style="top:0;">
        <div class="container m-auto text-white">
          <h1 class="display-1 text-uppercase fw-bold">men’s work pants</h1>
          <p class="h3 fw-light mb-5">Maximum durability, utility and comfort.</p>
          <a href="javascript:void(0)" class="btn btn-light bg-white text-dark round-30 px-4 py-2">
            <span class="px-2 py-1 d-block">DISCOVER MORE <i class="bi bi-arrow-right ms-2"></i></span>
          </a>
        </div>
      </div>
    </section>

    <!-- About section -->
    <AboutUs />

    <!-- Footer -->
    <pageFooter />

  </div>
</template>

<script>
import DB from '@/database/DB.json';
export default {
  name: "Home",
  data() {
    return {
      Products: DB.products,
      searchItem: ''
    }
  },
  methods: {
    imageUrl(file) {
      return "https://images.aaveinvestment.org/"+file;
    }
  },
  computed: {
    fileredItems() {
      if( !this.searchItem ) return this.Products;
      return this.Products.filter( item =>
        item.name.toLowerCase().includes(this.searchItem.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchItem.toLowerCase())
      );
    }
  }
}
</script>