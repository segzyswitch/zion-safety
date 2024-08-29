<template>
  <div class="w-100">
    <!-- Navbar -->
    <pageHeader />

    <!-- Header -->
    <header class="container-fluid px-0 mb-5">
      <div id="carouselExampleCaptions" class="carousel slide mb-0" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <!-- <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> -->
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="assets/images/vt_axetor_home1_slide_2.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption container d-none d-md-block">
              <div class="w-100 m-auto">
                <p class="mb-2">Up to 40% off selected products.</p>
                <h1 class="col-sm-8 p-0">Upgrade your Workwear</h1>
                <div class="w-100 slider-link">
                  <a href="#" class="btn">SHOP MEN <i class="bi bi-arrow-right"></i></a>
                  <a href="#" class="btn active ms-2">SHOP WOMEN <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="assets/images/vt_axetor_home1_slide1_bg.webp" class="d-block w-100" alt="...">
            <div class="carousel-caption container d-none d-md-block">
              <div class="w-100 m-auto">
                <p class="mb-2">Up to 40% off selected products.</p>
                <h1 class="col-sm-8 p-0">Upgrade your Workwear</h1>
                <div class="w-100 slider-link">
                  <a href="#" class="btn">SHOP MEN <i class="bi bi-arrow-right"></i></a>
                  <a href="#" class="btn active">SHOP WOMEN <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div> -->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </header>

    <!-- Section -->
    <section class="w-100 new-arrivals py-5 mb-5">
      <div class="container">
        <ul class="nav nav-pills mb-5">
          <li class="nav-item"><a href="#newArrivals" data-bs-toggle="tab" class="nav-link active">New Arrivals</a></li>
          <li class="nav-item"><a href="#bestSelling" data-bs-toggle="tab" class="nav-link">Best Selling</a></li>
        </ul>
        
        <div class="tab-content">
          <div class="tab-pane fade show active" id="newArrivals">
            <div class="row">
              <div class="col-sm-3 mb-4" v-for="(item, idx) in Products.slice(0,4)">
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
          <div class="tab-pane fade show" id="bestSelling">
            <div class="row">
              <div class="col-sm-3 mb-4" v-for="(item, idx) in Products.slice(4,8)">
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
      Products: DB.products
    }
  },
  methods: {
    imageUrl(file) {
      return "https://images.aaveinvestment.org/"+file;
    }
  }
}
</script>