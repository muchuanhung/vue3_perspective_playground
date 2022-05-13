<template>
  <div class="main">
    <section class="settings">
      <div class="settings-container">
        <!---4個不同range的設定雙向綁定value-->
        <label>perspective: {{ perspective }} px;</label>
        <input type="range" min="0" max="999" v-model="perspective" />

        <label>rotateX: {{ rotateX }} deg; </label>
        <input type="range" min="-180" max="180" v-model="rotateX" />

        <label>rotateY: {{ rotateY }} deg; </label>
        <input type="range" min="-180" max="180" v-model="rotateY" />

        <label>rotateZ: {{ rotateZ }} deg; </label>
        <input type="range" min="-180" max="180" v-model="rotateZ" />

        <!---重置-->
        <button type="button" @click.prevent="reset">Reset</button>
        <button type="button" @click.prevent="copy">Copy</button>
      </div>
    </section>
    <section class="output">
      <div class="box-container">
        <!---綁定事件 bind style-->
        <div class="box" :style="box"></div>
      </div>
    </section>
  </div>

    <css-doodle>
    :doodle {
    @grid: 1x3 / 100vmax;
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    }

    @size: 100% 150%;
    position: absolute;

    background: @m(100, (
    linear-gradient(transparent, @p(
    #FFFDE1@repeat(2, @p([0-9a-f])),
    #FB3569@repeat(2, @p([0-9a-f]))
    ))
    @r(0%, 100%) @r(0%, 100%) /
    @r(1px) @r(23vmin)
    no-repeat
    ));

    will-change: transform;
    animation: f 50s linear calc(-50s / @size() * @i()) infinite;
    @keyframes f {
    from { transform: translateY(-100%) }
    to { transform: translateY(100%) }
    }
  </css-doodle>
</template>

<script lang="ts">
import 'css-doodle'
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    //define value
    const perspective = ref(100);
    const rotateX = ref(0);
    const rotateY = ref(0);
    const rotateZ = ref(0);

    //caluate value
    // 將box函式帶入computed屬性，只要模板上的數值有變動，就執行宣告式渲染
    const box = computed(() => {
      return {
        transform: `
          perspective(${perspective.value}px)
          rotateX(${rotateX.value}deg)
          rotateY(${rotateY.value}deg)
          rotateZ(${rotateZ.value}deg)
        `,
      };
    });

    //reset function
    const reset = () => {
      // 選定DOM
      perspective.value = 100;
      rotateX.value = 0;
      rotateY.value = 0;
      rotateZ.value = 0;
    };

    //copy function
    const copy = () => {
      const el = document.createElement("textarea");
      el.setAttribute("readonly", "");
      el.value = `transform: ${box.value.transform}`;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    };

    return {
      perspective,
      rotateX,
      rotateY,
      rotateZ,
      box,
      reset,
      copy,
    };
  },
});
</script>

<style>
html {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  height: 100%;
  margin: 0;
  background: #261c33;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  color: #8d81f3;
  text-align: center;
  font-size: 40px;
  margin: 20px;
}
.main {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  max-width: 768px;
  margin: 0 auto;
  font-family: monospace, sans-serif;
  font-size: 22px;
}
.main label {
  display: block;
}
.main input[type="range"] {
  display: block;
  margin-bottom: 10px;
  width: 200px;
}
section.settings {
  width: 50%;
  z-index: 2;
}
.box-container {
  padding: 50px;
  border: 1px solid #8d81f3;
}
.box {
  width: 150px;
  height: 150px;
  background: #8d81f3;
}

button {
  background-color: #8d81f3;
  color: #fff;
  display: inline-block;
  font-size: 20px;
  padding: 10px;
  outline: none;
  border: none;
  margin-right: 10px;
}

label {
  color: #fff;
}
</style>
