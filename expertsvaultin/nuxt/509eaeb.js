(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{288:function(e,r,t){var content=t(297);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(78).default)("132ceba2",content,!0,{sourceMap:!1})},296:function(e,r,t){"use strict";t(288)},297:function(e,r,t){(r=t(77)(!1)).push([e.i,".wrapper{width:100%;max-width:500px;margin:10px auto;padding:10px}",""]),e.exports=r},304:function(e,r,t){"use strict";t.r(r);t(56);var n=t(20),o={data:function(){return{form:{email:"",password:"",phonenumber:""}}},methods:{expertsRegister:function(e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,r.$axios.post("/api/auth/signup",{email:r.form.email,password:r.form.password,phone_number:r.form.phonenumber,roles:["experts"]}).then((function(e){r.$axios.post("/api/sent/otp",{email:r.form.email}).then((function(e){r.$router.push("/register-confirm-otp?email="+r.form.email),r.$toast.show("Successfully sent opt on email.",{type:"success",duration:2e3})})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}));case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),console.log(t.t0.message,"errors"),t.abrupt("return");case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},loginLinkdin:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="".concat("http://localhost:8080","/api/auth/linkedin");case 1:case"end":return e.stop()}}),e)})))()},loginGoogle:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="".concat("http://localhost:8080","/api/auth/google");case 1:case"end":return e.stop()}}),e)})))()}}},c=(t(296),t(57)),component=Object(c.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"wrapper"},[t("h3",[e._v(" Register As Expert ")]),e._v(" "),t("b-form",{on:{submit:function(r){return e.expertsRegister(r)}}},[t("b-form-group",[t("b-form-input",{attrs:{type:"email",required:"",placeholder:"Enter Email"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}})],1),e._v(" "),t("b-form-group",[t("b-form-input",{attrs:{required:"",placeholder:"Enter Password",type:"password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}})],1),e._v(" "),t("b-form-group",[t("vue-tel-input",{model:{value:e.form.phonenumber,callback:function(r){e.$set(e.form,"phonenumber",r)},expression:"form.phonenumber"}})],1),e._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1),e._v(" "),t("br"),e._v(" "),t("h3",[e._v("OR")]),e._v(" "),t("br"),e._v(" "),t("button",{on:{click:function(r){return e.loginLinkdin(r)}}},[e._v(" SignUp width Linkdin ")]),e._v(" "),t("button",{on:{click:function(r){return e.loginGoogle(r)}}},[e._v(" SignUp width Google ")])],1)}),[],!1,null,null,null);r.default=component.exports}}]);