<template>
  <el-footer>
    <div>
      <h4>Made with <i class="fas fa-heart"></i> in south Germany</h4>
      <p>
        We hope that you have become a fan of our site as well. If you have
        noticed something and you want to tell us something, do not hesitate to
        write us a message, we are happy about your feedback.
      </p>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style scoped>
.fas {
  color: white;
}
.el-footer {
  border-top: 1px solid;
  border-color: white;
  background-color: #000000;
  color: white;
  text-align: center;
  height: 15em;
  padding: 0% 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0px;
}
</style>
