(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{300:function(r,e,t){"use strict";t.r(e);t(56);var n=t(20),o={data:function(){return{form:{password:""}}},methods:{changePassword:function(r){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),t.prev=1,e.$axios.post("/api/change/password",{email:e.$route.query.email,password:e.form.password}).then((function(r){e.$toast.show("successfully",{type:"success",duration:2e3})})).catch((function(r){return console.log(r)})),t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(1),console.log(t.t0.message,"errors"),t.abrupt("return");case 9:case"end":return t.stop()}}),t,null,[[1,5]])})))()}}},c=t(57),component=Object(c.a)(o,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"container"},[t("h3",[r._v(" Change Password ")]),r._v(" "),t("b-form",{on:{submit:function(e){return r.changePassword(e)}}},[t("b-form-group",[t("b-form-input",{attrs:{type:"password",required:"",placeholder:"Enter New Password"},model:{value:r.form.password,callback:function(e){r.$set(r.form,"password",e)},expression:"form.password"}})],1),r._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[r._v("Submit")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);