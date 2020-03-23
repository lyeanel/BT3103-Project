<template>
  <div>
    <b-navbar toggleable="lg" type="light" :class="[$style['alternate-bg'], $style['navbar-bg']]">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="/brand.png" width="30" height="30" class="d-inline-block align-top" alt="">
          Journey
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!--
          <b-navbar-nav>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
           -->

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/login">Login</b-nav-item>
            <b-nav-item to="/register">Register</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <div :class="[$style['alternate-bg'], $style['header-bg']]" class="py-5 text-center">
      <div class="container">
        <!-- <logo /> -->
        <h1>
          Journey
        </h1>
        <h4 class="text-secondary">
          Simple and easy way to create a blog from your photos
        </h4>

        <div class="mt-5">
          <div class="my-2 text-secondary">Join our early access program.</div>
          <form>
            <div class="form-row justify-content-md-center">
              <div class="col-md-auto mb-3">
                <label for="inputEmail" class="sr-only">Your email</label>
                <input class="form-control" name="email" type="email" placeholder="Your email">
              </div>
              <div class="col-md-auto mb-3">
                <button type="submit" class="btn btn-primary">Request Invite</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <b-carousel
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="First slide"
            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>Hello world!</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>What is Lorem Ipsum?</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div class="col-md-6">
            <h2>Why do we use it?</h2>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['alternate-bg']" class="py-5 text-center">
      <div class="container">
        <h2>Request Early Invite</h2>
        <form>
          <div class="form-row  justify-content-md-center">
            <div class="my-3">Join our early access program and be the first to experience the Journey.</div>
          </div>
          <div class="form-row justify-content-md-center">
            <div class="col-md-auto mb-3">
              <label for="inputEmail" class="sr-only">Your email</label>
              <input class="form-control" name="email" type="email" placeholder="Your email">
            </div>
            <div class="col-md-auto mb-3">
              <button type="submit" class="btn btn-primary" style="position: relative;">Request Invite</button>
            </div>
          </div>
        </form>
        <div class="text-secondary">No spam. Easily unsubsribe with a single click.</div>
      </div>
    </div>
    <div class="py-3">
      <div class="container">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/d_luaz">Twitter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://code.luasoftware.com">Blog</a>
          </li>
        </ul>
        <div class="text-center">© <a href="https://www.luasoftware.com/" class="text-secondary">Lua Software</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Journey - create a photo blog'
  }
}
</script>

<style module>
.alternate-bg {
  background-color: #FBFBFB;
  border-bottom: solid 1px #DEDEDE;
  border-top: solid 1px #DEDEDE;
}

.navbar-bg {
  border-top: 0;
  border-bottom: 0;
}

.header-bg {
  border-top: 0;
}
</style>