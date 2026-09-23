var SECTIONS=[
 {title:"Internal Tools",chip:"Week 2 · Oct 5–9",desc:"AI tools available within our company. Start here to learn the basics.",videos:[
  {name:"Microsoft Copilot",title:"Microsoft Copilot Tutorial for Beginners",by:"Kevin Stratvert",desc:"What Copilot is, how to open it, and how to use it for writing, images, and everyday Microsoft 365 tasks.",url:"https://www.youtube.com/watch?v=d-CuF6dlqLg",embed:"https://www.youtube.com/embed/d-CuF6dlqLg"},
  {name:"Cogniflows",title:"Cogniflow official channel",by:"Cogniflow",desc:"Introductions to building no-code AI with text, image, and audio. Browse the channel for the intro videos.",url:"https://www.youtube.com/@cogniflowai",embed:"https://www.youtube.com/embed/videoseries?list=UUpvCL6teal83cxwFlQR8zzA"}
 ]},
 {title:"External Tools",chip:"Week 4 · Oct 19–23",desc:"Popular AI assistants you can explore outside our systems.",videos:[
  {name:"Claude",title:"Getting started with Claude.ai",by:"Anthropic",desc:"The basics of chatting with Claude and writing effective prompts.",url:"https://www.youtube.com/watch?v=0vZ_UVLhSQQ",embed:"https://www.youtube.com/embed/0vZ_UVLhSQQ"},
  {name:"ChatGPT",title:"ChatGPT Tutorial for Beginners in 9 Minutes",by:"YouTube",desc:"A quick walkthrough of ChatGPT and how to get useful answers.",url:"https://www.youtube.com/watch?v=gi6o2yYWrzw",embed:"https://www.youtube.com/embed/gi6o2yYWrzw"},
  {name:"Google Gemini",title:"Google Gemini Tutorial for Beginners",by:"Kevin Stratvert",desc:"A beginner tour of Gemini, including images, Gmail, Drive and more.",url:"https://www.youtube.com/watch?v=8aRJYpExTfs",embed:"https://www.youtube.com/embed/8aRJYpExTfs"}
 ]}
];
var app=document.getElementById("app");
SECTIONS.forEach(function(s){
  var sec=document.createElement("section");
  var head=document.createElement("div");head.className="sec-head";
  var h=document.createElement("h2");h.textContent=s.title;
  var c=document.createElement("span");c.className="chip";c.textContent=s.chip;
  head.appendChild(h);head.appendChild(c);
  var d=document.createElement("p");d.className="sec-desc";d.textContent=s.desc;
  var g=document.createElement("div");g.className="grid";
  s.videos.forEach(function(v){
    var card=document.createElement("div");card.className="card";
    var t=document.createElement("div");t.className="thumb";
    var f=document.createElement("iframe");f.src=v.embed;f.title=v.title;f.loading="lazy";
    f.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    f.setAttribute("allowfullscreen","");f.referrerPolicy="strict-origin-when-cross-origin";
    t.appendChild(f);
    var b=document.createElement("div");b.className="body";
    var by=document.createElement("div");by.className="by";by.textContent=v.by;
    var t3=document.createElement("h3");t3.textContent=v.title;
    var pp=document.createElement("p");pp.textContent=v.desc;
    var a=document.createElement("a");a.className="btn";a.textContent="Open on YouTube";
    a.href=v.url;a.target="_blank";a.rel="noopener";
    b.appendChild(by);b.appendChild(t3);b.appendChild(pp);b.appendChild(a);
    card.appendChild(t);card.appendChild(b);g.appendChild(card);
  });
  sec.appendChild(head);sec.appendChild(d);sec.appendChild(g);app.appendChild(sec);
});

// Edit this list to change the latest announcements.
var ANNOUNCEMENTS=[
 {date:"Oct 1–2",title:"AI in Action kicks off",text:"Watch for the campaign email blast and get ready to explore the AI tools we'll use this quarter."},
 {date:"Oct 5–9 · Week 2",title:"Internal tools spotlight",text:"Start with the Microsoft Copilot and Cogniflows videos below."},
 {date:"Oct 19–23 · Week 4",title:"Meet the external tools",text:"Explore Claude, ChatGPT, and Gemini with the intro videos below."},
 {date:"Oct 26–30",title:"Copilot Prompt Challenge",text:"Show off your best prompts. Three winners take home ₱500 each, announced Oct 30."}
];
(function(){
  var root=document.getElementById("announce");
  if(!root||!ANNOUNCEMENTS.length)return;
  var box=document.createElement("div");box.className="ann-box";
  var label=document.createElement("div");label.className="ann-label";label.textContent="Latest announcements";
  var viewport=document.createElement("div");viewport.style.overflow="hidden";
  var track=document.createElement("div");track.className="ann-track";track.setAttribute("aria-live","off");
  ANNOUNCEMENTS.forEach(function(a,i){
    var s=document.createElement("div");s.className="ann-slide";
    s.setAttribute("role","group");s.setAttribute("aria-label",(i+1)+" of "+ANNOUNCEMENTS.length);
    var d=document.createElement("div");d.className="date";d.textContent=a.date;
    var t=document.createElement("h3");t.textContent=a.title;
    var p=document.createElement("p");p.textContent=a.text;
    s.appendChild(d);s.appendChild(t);s.appendChild(p);track.appendChild(s);
  });
  viewport.appendChild(track);
  var ctrl=document.createElement("div");ctrl.className="ann-ctrl";
  var dots=document.createElement("div");dots.className="ann-dots";
  var arrows=document.createElement("div");arrows.className="ann-arrows";
  var prev=document.createElement("button");prev.type="button";prev.textContent="\u2039";prev.setAttribute("aria-label","Previous announcement");
  var next=document.createElement("button");next.type="button";next.textContent="\u203A";next.setAttribute("aria-label","Next announcement");
  arrows.appendChild(prev);arrows.appendChild(next);
  var idx=0,timer=null,btns=[];
  ANNOUNCEMENTS.forEach(function(_,i){
    var b=document.createElement("button");b.type="button";b.className="ann-dot";b.setAttribute("aria-label","Go to announcement "+(i+1));
    b.onclick=function(){go(i);restart()};dots.appendChild(b);btns.push(b);
  });
  function go(i){
    idx=(i+ANNOUNCEMENTS.length)%ANNOUNCEMENTS.length;
    track.style.transform="translateX(-"+(idx*100)+"%)";
    btns.forEach(function(b,k){b.setAttribute("aria-current",k===idx?"true":"false")});
  }
  function restart(){stop();
    if(window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    timer=setInterval(function(){go(idx+1)},6000);}
  function stop(){if(timer){clearInterval(timer);timer=null}}
  prev.onclick=function(){go(idx-1);restart()};
  next.onclick=function(){go(idx+1);restart()};
  box.addEventListener("mouseenter",stop);box.addEventListener("mouseleave",restart);
  box.addEventListener("focusin",stop);box.addEventListener("focusout",restart);
  ctrl.appendChild(dots);ctrl.appendChild(arrows);
  box.appendChild(label);box.appendChild(viewport);box.appendChild(ctrl);root.appendChild(box);
  go(0);restart();
})();
