"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[358],{358:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var s=n(4420),a=n(2791),r=n(7302),o=n(6095),c=function(){return{contacts:(0,s.v9)(o.K2),visibleContacts:(0,s.v9)(o.Jr),error:(0,s.v9)(o.by),isLoading:(0,s.v9)(o.Kv),sortedAlphabetic:(0,s.v9)(o.qT),recentlyAdded:(0,s.v9)(o.uT)}},i=n(7694),l=n.n(i),u="ContactForm_contactForm__title__OassT",d=n(6146),_=n(184),m=function(){var t=(0,s.I0)(),e=c().contacts;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h2",{className:u,children:"Phonebook"}),(0,_.jsxs)("form",{onSubmit:function(n){n.preventDefault();var s=n.target,a=s.name,o=s.number,c={name:a.value,number:o.value};e.find((function(t){return t.name.toLowerCase()===a.value.toLowerCase()}))?l().Notify.failure("".concat(c.name," is already in your contacts.")):t((0,r.uK)(c)),n.target.reset()},className:d.Z.form,children:[(0,_.jsx)("input",{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,placeholder:"Name",className:d.Z.form__input}),(0,_.jsx)("input",{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Phone",className:d.Z.form__input}),(0,_.jsx)("button",{className:d.Z.button__dark,type:"submit",children:(0,_.jsx)("span",{children:"Add contact"})})]})]})},p=n(7140),x="Filter_filter__input__toa89",h=function(){var t=(0,s.I0)(),e=(0,s.v9)(o.zK);return(0,_.jsx)("input",{placeholder:"Find contacts by name",className:x,value:e.filter,type:"search",onChange:function(e){t((0,p.x)(e.target.value))}})},f=n(3477),b=function(){f.Z1},v=n(2395),C="SortingButtons_sortBtns__wrapper__Ol6ps",j="SortingButtons_sortBtns__iQ04H",N=function(){var t=(0,s.I0)();return(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("button",{onClick:function(){return t((0,v.m2)())},className:j,children:"Sort by name"}),(0,_.jsxs)("button",{onClick:function(){return t((0,v.L)())},className:j,children:["Recently added"," "]})]})},y=n(7247),g=n(1830),w=n.n(g),k="ContactsList_contacts__list__0rgaD",B="ContactsList_contacts__item__Bl6YX",L="ContactsList_contacts__button__xkM5F",F=function(){var t=(0,s.I0)(),e=c().visibleContacts,n=c().isLoading;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(N,{}),n?(0,_.jsxs)("span",{children:[" ",(0,_.jsx)(b,{color:"#CD4631",size:"50"})]}):(0,_.jsx)("ul",{className:k,children:e.map((function(e){var s=e.name,a=e.number,o=e.id;return(0,_.jsxs)("li",{"data-id":o,className:B,children:[s," : ",a,(0,_.jsx)("div",{children:(0,_.jsx)("button",{type:"button",onClick:function(){return function(e){w().fire({title:"Are you sure?",text:"You won't be able to revert this!",color:"#000",padding:"12px 36px 24px 36px",showCancelButton:!0,confirmButtonColor:"#000",cancelButtonColor:"#CD4631",confirmButtonText:"Yes, delete!",width:"420px",borderRadius:"14px",borderColor:"#000",border:"2px solid"}).then((function(n){n.isConfirmed&&(t((0,r.GK)(e)),w().fire({title:"Deleted!",text:"Your file has been deleted.",color:"#000",confirmButtonColor:"#000",width:"420px",borderRadius:"14px",borderColor:"#000",border:"2px solid",padding:"12px 36px 24px 36px"}))}))}(o)},className:L,children:n?(0,_.jsx)(b,{color:"#CD4631",size:"20"}):(0,_.jsx)(y.Z,{size:"10"})})})]},o)}))})]})},Z="Contacts_contacts__section__wRF5v",D="Contacts_contacts__wrap__7vqWm",K="Contacts_contactsList__wrap__ORqhN",T="Contacts_contacts__title__ZEWHT",q="Contacts_contacts__wrapper__S9QJO",A="Contacts_contacts__message__BuTJu",I=function(){var t=(0,s.I0)(),e=c().contacts;return(0,a.useEffect)((function(){t((0,r.K2)())}),[t]),(0,_.jsxs)("section",{className:Z,children:[(0,_.jsx)("div",{className:D,children:(0,_.jsx)(m,{})}),(0,_.jsxs)("div",{className:K,children:[(0,_.jsx)("h2",{className:T,children:"Contacts"}),(0,_.jsxs)("div",{className:q,children:[(0,_.jsx)(h,{}),e.length>0?(0,_.jsx)(F,{}):(0,_.jsx)("p",{className:A,children:"Add your first contact"})]})]})]})}}}]);
//# sourceMappingURL=358.ecd8cf8d.chunk.js.map