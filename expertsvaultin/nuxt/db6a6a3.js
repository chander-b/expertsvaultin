(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{305:function(t,e,r){"use strict";r.r(e);r(56);var n=r(20),o={data:function(){return{form:{email:"",otp:""}}},methods:{confirmOtp:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.preventDefault(),r.prev=1,e.$axios.post("/api/login/otp",{email:e.$route.query.email,otp:e.form.otp}).then((function(t){e.$router.push("/change-password"),e.$toast.show("successfully",{type:"success",duration:2e3})})).catch((function(t){return console.log(t)})),r.next=9;break;case 5:return r.prev=5,r.t0=r.catch(1),console.log(r.t0.message,"errors"),r.abrupt("return");case 9:case"end":return r.stop()}}),r,null,[[1,5]])})))()}}},c=r(57),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h3",[t._v(" Add Otpfdasfa")]),t._v(" "),r("b-form",{on:{submit:function(e){return t.confirmOtp(e)}}},[r("b-form-group",[r("b-form-input",{attrs:{type:"text",required:"",placeholder:"Enter OTP"},model:{value:t.form.otp,callback:function(e){t.$set(t.form,"otp",e)},expression:"form.otp"}})],1),t._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);