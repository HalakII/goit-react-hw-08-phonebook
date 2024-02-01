"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[991],{3939:function(e,t,n){n.d(t,{N:function(){return r}});var a={title:"SectionTitle_title__gZ1-f"},s=n(3329),r=function(e){var t=e.title,n=e.children;return(0,s.jsxs)("section",{className:a.section,children:[(0,s.jsx)("h1",{className:a.title,children:t}),n]})}},4619:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});n(1138);var a=n(4221),s={item:"ContactsListItem_item__QeHgl",button_delete:"ContactsListItem_button_delete__AHx9n",icon:"ContactsListItem_icon__Qi9Cw",iconTel:"ContactsListItem_iconTel__E9arR"},r=n(1909),c=n(3329),i=function(e){var t=e.id,n=e.name,a=e.number,i=e.onDeleteContact;return(0,c.jsxs)("li",{className:s.item,children:[(0,c.jsx)(r.div,{className:s.iconTel}),(0,c.jsxs)("span",{className:s.name,children:[n,":"]}),(0,c.jsx)("span",{className:s.number,children:a}),(0,c.jsx)("button",{className:s.button_delete,type:"button",onClick:function(){return i(t)},children:(0,c.jsx)(r.FH3,{className:s.icon})})]})},o="ContactsList_contactList__qIIH9",l=n(4420),u=n(3634),m=n(3553),_=function(e){return e.contacts.contacts},d=function(e){return e.filter.filter},f=function(e){return e.contacts.isLoading},p=function(e){return e.contacts.error},b=(0,m.P1)([_,d],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),h=function(){var e=(0,l.I0)(),t=(0,l.v9)(b),n=function(t){return e((0,u.GK)(t))};return(0,c.jsx)("ul",{className:o,children:t.map((function(e){var t=e.id,a=e.name,s=e.number;return(0,c.jsx)(i,{id:t,name:a,number:s,onDeleteContact:n},t)}))})},x=n(3939),C={subtitle:"SectionSubtitle_subtitle__Eh57z"},j=function(e){var t=e.subtitle,n=e.children;return(0,c.jsxs)("section",{className:C.section,children:[(0,c.jsx)("h1",{className:C.subtitle,children:t}),n]})},N=n(9439),v={form_wrapper:"ContactForm_form_wrapper__QU-XT",input:"ContactForm_input__TWImw",button_add:"ContactForm_button_add__cPWQT",iconContact:"ContactForm_iconContact__E+QOC"},w=n(2942),L=n(2791),F=function(){var e=(0,L.useState)(""),t=(0,N.Z)(e,2),n=t[0],s=t[1],r=(0,L.useState)(""),i=(0,N.Z)(r,2),o=i[0],m=i[1],d=(0,l.v9)(_),f=(0,l.I0)(),p=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:return}};return(0,c.jsxs)("form",{className:v.form_wrapper,onSubmit:function(e){e.preventDefault(),d.some((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?a.fn.info("".concat(n," is already in contacts.")):(f((0,u.uK)({name:n,number:o})),s(""),m(""))},children:[(0,c.jsx)(w.VeL,{className:v.iconContact}),(0,c.jsxs)("label",{className:v.label,children:["Name",(0,c.jsx)("input",{className:v.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:p,required:!0})]}),(0,c.jsxs)("label",{className:v.label,children:["Number",(0,c.jsx)("input",{className:v.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:o,onChange:p,required:!0})]}),(0,c.jsx)("button",{className:v.button_add,type:"submit",children:"Add contact"})]})},g="Filter_wrapperFilter__RUcfr",I="Filter_input__N7T3z",k="Filter_label__vEd1E",y=n(4808),T=function(){var e=(0,l.v9)(d),t=(0,l.I0)();return(0,c.jsx)("div",{className:g,children:(0,c.jsxs)("label",{className:k,children:["Find contacts by name",(0,c.jsx)("input",{className:I,type:"text",name:"filter",value:e,onChange:function(e){var n=e.currentTarget.value.toLowerCase();t((0,y.T)(n))}})]})})},Z=n(985),A=function(){var e=(0,l.I0)(),t=(0,l.v9)(f),n=(0,l.v9)(p);return(0,L.useEffect)((function(){e((0,u.yF)())}),[e]),(0,c.jsxs)("div",{className:Z.Z.wrapper,children:[(0,c.jsx)(a.mh,{}),(0,c.jsx)(x.N,{title:"Phonebook"}),(0,c.jsx)(F,{}),(0,c.jsx)(j,{subtitle:"Contacts"}),(0,c.jsx)(T,{}),t&&!n&&(0,c.jsx)("b",{children:"Request in progress..."}),(0,c.jsx)(h,{})]})}},985:function(e,t){t.Z={wrapper:"Contacts_wrapper__s7EJR",title:"Contacts_title__LxdN4",icon:"Contacts_icon__NU3jc"}}}]);
//# sourceMappingURL=991.f603133b.chunk.js.map