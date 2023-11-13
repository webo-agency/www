<template>
  <div class="w-full sticky z-40 bottom-0 px-5 tablet:px-10 desktop:px-20 pointer-events-none ">
        <div class=" flex justify-end max-w-screen-desktop-wide mx-auto pointer-events-none h-0">
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
  @apply !top-0 !relative !h-0 !overflow-visible
}

.fb_dialog_content iframe{
  @apply !absolute !bottom-4 !right-0 !mx-0
}


.fb_iframe_widget{
  @apply !overflow-visible !bottom-0 !w-full
}

.fb_iframe_widget > span{
  @apply !w-full
}

.fb_iframe_widget iframe{
  @apply !absolute !max-h-[calc(100vh_-_84px)]
}



</style>