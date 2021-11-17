<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div>
    <h1 class="text-white">New Years Eve</h1>
    </div>

    <div class="countdown-container text-white">
      <div class="days-c">
        <p class="big-text" id="days">0</p>
        <span>Days</span>
      </div>
      <div class="hours-c">
        <p class="big-text" id="days">0</p>
        <span>Hours</span>
      </div>
      <div class="minutes-c">
        <p class="big-text" id="days">0</p>
        <span>Minutes</span>
      </div>
      <div class="seconds-c">
        <p class="big-text" id="days">0</p>
        <span>Seconds</span>
      </div>
    </div>
  </div>
</template>
vt
<script>
export default {
  name: 'Home',
  setup(){
    return {}
  },
  components:{}
}
</script>

<style scoped lang="scss">
h1{
  font-size: 6rem;
}
.countdown-container{
  display: flex;
}
.big-text{
  font-size:6rem;
  line-height: 1;
  margin: 0 2rem;
}

.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
