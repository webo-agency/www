<template>
  <div class="wrapper-menu tablet:" :class="{ open: btnActive }">
    <div class="line-menu half start bg-current"></div>
    <div class="line-menu bg-current"></div>
    <div class="line-menu half end bg-current"></div>
  </div>
</template>

<script>
export default {
  name: "HamburgerBtn",
  props: {
    btnActive: Boolean,
  },
};
</script>

<style>
.wrapper-menu {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 400ms cubic-bezier(0, 0, 0.2, 1);
}

.wrapper-menu.open {
  transform: rotate(-45deg);
}

.line-menu {
  width: 100%;
  height: 2px;
}

.line-menu.half {
  width: 50%;
}

.line-menu.start {
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: right;
}

.open .line-menu.start {
  transform: rotate(-90deg) translateX(1px);
}

.line-menu.end {
  align-self: flex-end;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
}

.open .line-menu.end {
  transform: rotate(-90deg) translateX(-1px);
}
</style>
