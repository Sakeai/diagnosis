(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{5418:function(e,t,r){Promise.resolve().then(r.bind(r,1425))},1199:function(e,t,r){"use strict";r.d(t,{SakeaiProvider:function(){return i},l:function(){return a}});var s=r(7437),n=r(2265);let u=(0,n.createContext)(void 0),i=e=>{let{children:t}=e,[r,i]=(0,n.useState)(0),[a,c]=(0,n.useState)({}),[o,l]=(0,n.useState)(!1),[d,f]=(0,n.useState)({nickname:"",gender:"",age:""}),[x,h]=(0,n.useState)({});return(0,s.jsx)(u.Provider,{value:{currentStep:r,setCurrentStep:i,answers:a,setAnswers:c,isLoading:o,setIsLoading:l,profile:d,setProfile:f,resultPoints:x,setResultPoints:h},children:t})},a=()=>{let e=(0,n.useContext)(u);if(void 0===e)throw Error("useSakeai must be used within a SakeaiProvider");return e}},1425:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var s=r(7437),n=r(2265),u=r(6463),i=r(1199);let a=()=>(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"})});function c(){let e=(0,u.useRouter)(),{setIsLoading:t}=(0,i.l)();return(0,n.useEffect)(()=>{let r=setTimeout(()=>{t(!1),e.push("/result")},3e3);return()=>clearTimeout(r)},[e,t]),(0,s.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:(0,s.jsxs)("div",{className:"text-center space-y-4",children:[(0,s.jsx)(a,{}),(0,s.jsx)("p",{className:"text-xl font-semibold",children:"あなたの日本酒タイプを分析中..."}),(0,s.jsxs)("p",{className:"text-center",children:["あなたに合う日本酒をお勧めします。",(0,s.jsx)("br",{}),"フィードバックすることで",(0,s.jsx)("br",{}),"日本酒タイプも変化します。"]})]})})}},6463:function(e,t,r){"use strict";var s=r(1169);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})}},function(e){e.O(0,[971,23,744],function(){return e(e.s=5418)}),_N_E=e.O()}]);