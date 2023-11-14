<template>
  <div class="w-full sticky z-40 bottom-0 px-5 tablet:px-10 desktop:px-20 overflow-x-clip">
        <div class=" flex justify-end max-w-screen-desktop-wide mx-auto h-0">
          <div id="fb-root"></div>
          <div id="fb-customer-chat" class="fb-customerchat">
        </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    id: Number,
    locale: String
})

function addFacebookSDK(){
    const d = document;
    const s = "script";
    const id = "facebook-jssdk";

    var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = `https://connect.facebook.net/${props.locale}/sdk/xfbml.customerchat.js`;
        fjs.parentNode.insertBefore(js, fjs);
}

function initFacebookChat() {
      window.fbAsyncInit = function () {
        const chatbox = document.getElementById('fb-customer-chat');
        if (chatbox) {
          chatbox.setAttribute("page_id", props.id);
          chatbox.setAttribute("attribution", "biz_inbox");
          FB.init({
            xfbml: true,
            version: 'v18.0',
          });
        }
      };
      addFacebookSDK();
    }

onMounted(()=>{
    initFacebookChat()
})
</script>

<style>
#fb-root{
  @apply !relative !bottom-0 !z-40
}

.fb_dialog{
  @apply !top-0 !relative !h-0 !overflow-visible !p-0
}

.fb_dialog_content iframe{
  @apply !absolute !bottom-4 !right-0 !mx-0
}

.fb_dialog_content > div{
  @apply !absolute !bottom-4 !right-0 !mx-0
}


.fb_iframe_widget{
  @apply !overflow-visible !bottom-0 !w-full
}

.fb_iframe_widget > span{
  @apply !w-full
}

.fb_new_ui_mobile_overlay_active .fb_iframe_widget iframe{
  @apply tablet:!fixed
}

.fb_iframe_widget iframe{
  @apply !fixed tablet:!absolute
}

.fb_iframe_widget iframe.fb_customer_chat_bounce_in_v2{
  @apply !max-h-[calc(100vh_-_84px)]
}

.fb-customerchat > div{
  transform: translateZ(10px) translateX(24px) translateY(8px);
  @apply absolute
}



</style>