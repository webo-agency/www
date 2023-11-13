<template>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat">
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
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
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