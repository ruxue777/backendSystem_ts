<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>用户</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block @click="set()">
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="fs-12 text-center">
        <a href="" class="color-whilt ">忘记密码</a> |
        <a href="" class="color-whilt">注册</a>
      </div>
      {{count}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "Login",
  setup(props) {
    const count = ref<number>(10);

    const fromConfig = reactive<any>({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      aaa:10,
      bbb:'123'
    });

    const data = toRefs(fromConfig);

    const set = () => {
      count.value += 1
    }

    return {
      ...data,count,set
  };
}
});
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
