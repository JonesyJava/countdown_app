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
      <div class="days-c">
        <p class="big-text" id="days">0</p>
        <span>Hours</span>
      </div>
      <div class="days-c">
        <p class="big-text" id="days">0</p>
        <span>Minutes</span>
      </div>
      <div class="days-c">
        <p class="big-text" id="days">0</p>
        <span>Seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
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
