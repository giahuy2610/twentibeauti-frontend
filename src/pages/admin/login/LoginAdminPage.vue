<template lang="">
  <div class="container">
    <div class="col-md-9 card mx-auto d-flex flex-row px-0">
      <div class="img-left d-md-flex d-none"></div>

      <div class="card-body d-flex flex-column justify-content-center">
        <h4 class="title text-center mt-4 pb-3">Login into accont</h4>
        <form class="col-sm-10 col-12 mx-auto">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="email" />
          </div>
          <div class="form-group py-3">
            <input type="password" class="form-control" placeholder="***" />
          </div>
          <div class="">
            <input
              type="button"
              class="btn btn-outline-primary d-block w-100"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}

.card {
  overflow: hidden;
  border-radius: 10px;
  min-height: 500px;
}

.img-left {
  width: 45%;
  background: url("https://images.unsplash.com/photo-1663640171543-9eef40a4b320?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjU4NzAyNjE&ixlib=rb-1.2.1&q=80")
    center;
  background-size: cover;
}

.card-body {
  padding: 2rem;
}

input[type="email"],
input[type="password"] {
  border-radius: 100px;
  border: none;
  background: #e3f2fd;
}
input[type="button"] {
  border-radius: 100px;
}
</style>
