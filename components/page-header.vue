<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark d-block sticky-top">
      <div class="container sticky-top">
        <RouterLink to="/" class="navbar-brand">ZION SAFETY EQUIPMENTS</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link pe-4 active" aria-current="page">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/shop" class="nav-link pe-4">Shop</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link pe-4 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="(item, idx) in Categories.slice(0,6)"><a class="dropdown-item" href="#">{{item.name}}</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link pe-4" href="#">ABOUT</a>
            </li>
          </ul>
          <form @submit.prevent class="d-flex bg-white round-30 p-1">
            <label for="search" class="bi bi-search my-auto ps-2 py-1 h4"></label>
            <input type="search" id="search" placeholder="Search anything" class="form-control nav-input border-0 shadow-none round-30 my-auto">
          </form>
        </div>
      </div>
    </nav>
    <div class="top-bar bg-white">
      <ul class="nav container d-flex">
        <li class="nav-item" v-for="(item, idx) in Categories"><a href="#" class="nav-link">{{ item.name }}</a></li>
        <!-- <li class="nav-item"><a href="#" class="nav-link">Workwear</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Safety Glasses</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Footwear</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Apparel</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Headwear</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Corporate</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Sweatshirts</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Jackets</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Waistcoats</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Safety Glasses</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import DB from '@/database/DB.json';
export default {
  name: "Home",
  data() {
    return {
      Categories: DB.categories
    }
  },
  methods: {
    imageUrl(file) {
      return "/_nuxt/assets/images/"+file;
    }
  }
}
</script>