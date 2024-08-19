<template>
  <button
    @click="copyURI"
    :class="`btn-round-icon btn_mail ${isShowMsgCopy ? 'btn_mail--copied' : ''}`"
    data-MagneticBtn
    :title="`Copy e-mail ${address}`"
  >
    <Icon class="btn_icon-main" name="material-symbols-light:mail-outline-rounded"/>
    <Icon class="btn_icon-copy" name="material-symbols-light:content-copy-outline-rounded"/>
    <Icon class="btn_icon-check" name="material-symbols-light:check"/>
    <span class="btn_mail-tooltip">{{ address }}</span>
  </button>
</template>

<script lang="ts" setup>

const isShowMsgCopy = ref(false)
const address = ref("explorer717ed@gmail.com")
const copyURI = (evt: any) => {
  evt.preventDefault();
  navigator.clipboard.writeText(address.value).then(() => {
    /* clipboard successfully set */
    isShowMsgCopy.value = true
    setTimeout(()=>{
      isShowMsgCopy.value = false
    }, 800)
  }, () => {
    /* clipboard write failed */
  });
}

</script>

<style lang="scss" scoped>

.btn_mail{
  position: relative;
  &:hover{
    .btn_mail-tooltip{
      opacity: 1;
      transform: translateX(-100%) translateY(-100%) rotateY(0deg);
    }
  }
}

.btn_mail-tooltip{
  position: absolute;
  left: -5px;
  top: -5px;
  display: inline-block;
  border: 1px solid var(--color-text);
  background-color: var(--color-bg);
  padding: 5px 10px;
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) rotateY(90deg);
  pointer-events: none;
}

.btn_icon-main, .btn_icon-copy, .btn_icon-check{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  transition-duration: .3s;
}
.btn_icon-main{
  opacity: 1;
  transform: rotate(0deg);
}
.btn_icon-copy, .btn_icon-check{
  opacity: 0;
  transform: rotate(180deg);
}
.btn_mail:hover{
  .btn_icon-main{
    transform: rotate(-180deg);
    opacity: 0;
  }
  .btn_icon-copy{
    opacity: 1;
    transform: rotate(0deg);
  }
  &.btn_mail--copied{
    .btn_icon-copy{
      opacity: 0;
      transform: rotate(-180deg);
    }
  }
}

.btn_mail--copied{
  .btn_icon-main{
    transform: rotate(-180deg);
    opacity: 0;
  }
  .btn_icon-copy{
    opacity: 0;
    transform: rotate(-180deg);
  }
  .btn_icon-check{
    opacity: 1;
    transform: rotate(0deg);
  }

}

</style>