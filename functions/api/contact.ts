var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};

import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";
// Function to generate MD5 hash (you may need to include a library for this)
function md5(string) {
  return  MD5(encodeURIComponent(string));
  // Implementation of MD5 hashing (or use a library)
}

// Helper function to return JSON response
const JSONResponse = (message, status = 200) => {
  let headers = {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },

    status: status,
  }

  let response = {
    message: message,
  }

  return new Response(JSON.stringify(response), headers)
}

export const onRequest = (context) => {
  return staticFormsPlugin({
    respondWith: async ({ formData }) => {

        let email_copy = "test@webo.agency";
              // Change this to what you want for CORS
        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": 'Content-Type'
        };

        let vars = {
          name: (formData.get("name") || "").toString(),
          company: (formData.get("company") || "").toString(),
          phone: (formData.get("phone") || "").toString(),
          message: (formData.get("description") || "").toString(),
          acceptance: (formData.get("acceptance") || 0).toString(),
          service: (formData.get("service") || 0).toString(),
          email: (formData.get("mail") || "").toString(),
          subject: `Thank you for contact ${formData.get("name") || ""}`
        };

        let dataObject = {
          smtp_account: '1.webo.smtp',
          subject: "{{subject}}",
          from: context.env.EMAIL_FROM,
          template_id: '641c8100',
          reply_to: context.env.EMAIL_REPLY_TO,
          from_name: "Webo.Agency"
        };

        let to = vars.email;

        return fetch(context.env.EMAIL_LABS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${context.env.EMAIL_LABS_APP_KEY}:${context.env.EMAIL_LABS_APP_SECRET}`)
          },
          body: new URLSearchParams(dataObject).toString() +
            "&to" + new URLSearchParams("["+to+"]").toString()+
            "&to" + new URLSearchParams("["+to+"][message_id]="+md5(to)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][name]="+decodeURIComponent(vars.name)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][company]="+decodeURIComponent(vars.company)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][phone]="+decodeURIComponent(vars.phone)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][message]="+decodeURIComponent(vars.message)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][email]="+decodeURIComponent(vars.email)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][subject]="+decodeURIComponent(vars.subject)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][service]="+decodeURIComponent(vars.service)).toString() +
            "&to" + new URLSearchParams("["+to+"][vars][acceptance]="+decodeURIComponent(vars.acceptance)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"]").toString()+
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][name]="+decodeURIComponent(vars.name)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][company]="+decodeURIComponent(vars.company)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][phone]="+decodeURIComponent(vars.phone)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][message]="+decodeURIComponent(vars.message)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][email]="+decodeURIComponent(vars.email)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][subject]="+decodeURIComponent("WWW | Contact from : " + vars.name)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][service]="+decodeURIComponent(vars.service)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_REPLY_TO+"][vars][acceptance]="+decodeURIComponent(vars.acceptance)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"]").toString()+
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][name]="+decodeURIComponent(vars.name)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][company]="+decodeURIComponent(vars.company)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][phone]="+decodeURIComponent(vars.phone)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][message]="+decodeURIComponent(vars.message)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][email]="+decodeURIComponent(vars.email)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][subject]="+decodeURIComponent("WWW | Contact from : " + vars.name)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][service]="+decodeURIComponent(vars.acceptance)).toString() +
            "&to" + new URLSearchParams("["+context.env.EMAIL_COPY+"][vars][acceptance]="+decodeURIComponent(vars.acceptance)).toString()
        }).then(result => new Response(
         'Message has been sent',{
            headers: {...corsHeaders}
          }
        ))
        .catch(error => new Response(
          'Failed to send email, please contact website administrator ',{
            headers: {...corsHeaders}
          }
        ));
    },
  })(context)
}
