var SECTIONS=[
 {title:"Internal Tools",chip:"Week 2 · Oct 5–9",desc:"AI tools available within our company. Start here to learn the basics.",videos:[
  {name:"Microsoft Copilot",title:"Microsoft Copilot Tutorial for Beginners",by:"Kevin Stratvert",desc:"What Copilot is, how to open it, and how to use it for writing, images, and everyday Microsoft 365 tasks.",url:"https://www.youtube.com/watch?v=d-CuF6dlqLg",embed:"https://www.youtube.com/embed/d-CuF6dlqLg"},
  {name:"Cogniflows",title:"Cogniflow official channel",by:"Cogniflow",desc:"Introductions to building no-code AI with text, image, and audio. Browse the channel for the intro videos.",url:"https://www.youtube.com/@cogniflowai",embed:"https://www.youtube.com/embed/videoseries?list=UUpvCL6teal83cxwFlQR8zzA"}
 ]},
 {title:"External Tools",chip:"Week 3 · Oct 12–16",desc:"Popular AI assistants you can explore outside our systems.",videos:[
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
 {date:"Oct 1–2",title:"AI in Action kicks off",text:"The campaign email blast goes out. Get ready to explore the AI tools we'll use this quarter."},
 {date:"Oct 5–9 · Week 2",title:"Internal AI tools",text:"Short video reels featuring Cogniflows and Copilot. Start with the videos below."},
 {date:"Oct 12–16 · Week 3",title:"External AI tools",text:"Short video reels featuring ChatGPT, Gemini, and Claude."},
 {date:"Oct 19–27",title:"Copilot Prompt Challenge",text:"Submit your best prompts. Three winners take home ₱500 each, announced Oct 30."},
 {date:"Oct 29",title:"AI Unfiltered: The Podcast",text:"Tune in for the campaign podcast episode."}
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

// Calendar of activities. type: "major" (biweekly/monthly) or "minor" (weekly).
// s/e are start and end dates (YYYY-MM-DD). To add an item, copy a line, change the dates (d is the label shown), the text (t) and the type.
var CALENDAR=[
 {week:"Oct 5 – 9",events:[
  {d:"Oct 5–9",s:"2026-10-05",e:"2026-10-09",t:"Week 2 — Internal AI Tools: short video reels featuring Cogniflows and Copilot",type:"major"}
 ]},
 {week:"Oct 12 – 16",events:[
  {d:"Oct 12–16",s:"2026-10-12",e:"2026-10-16",t:"Week 3 — External AI Tools: short video reels featuring ChatGPT, Gemini, and Claude",type:"major"}
 ]},
 {week:"Oct 19 – 23",events:[
  {d:"Oct 19–27",s:"2026-10-19",e:"2026-10-27",t:"Copilot Prompt Challenge: agents submit prompts for Duda Copilot",type:"major"}
 ]},
 {week:"Oct 26 – 30",events:[
  {d:"Until Oct 27",s:"2026-10-26",e:"2026-10-27",t:"Copilot Challenge: prompt submissions",type:"major"},
  {d:"Oct 29",s:"2026-10-29",e:"2026-10-29",t:"AI Unfiltered: The Podcast",type:"major"}
 ]}
];
(function(){
  var root=document.getElementById("calendar");
  if(!root)return;
  var MON=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var DOW=["Mon","Tue","Wed","Thu","Fri"];
  var evs=[];CALENDAR.forEach(function(w){w.events.forEach(function(e){evs.push(e)})});
  function P(s){return new Date(s+"T00:00:00")}
  function eventsOn(date){return evs.filter(function(e){return P(e.s)<=date&&date<=P(e.e)})}
  function sameDay(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}
  var t0=new Date();var today=new Date(t0.getFullYear(),t0.getMonth(),t0.getDate());
  var first=new Date(2026,8,28),WEEKS=5;

  var wrap=document.createElement("div");wrap.className="cal";
  var head=document.createElement("div");head.className="cal-head";
  var m=document.createElement("span");m.className="m";m.textContent="October";
  var h2=document.createElement("h2");h2.textContent="Calendar of Activities";
  head.appendChild(m);head.appendChild(h2);
  var lg=document.createElement("div");lg.className="cal-legend";
  [["Major activity","var(--accent)"],["Minor activity","var(--minor)"]].forEach(function(x){
    var sp=document.createElement("span");var i=document.createElement("i");i.style.background=x[1];
    sp.appendChild(i);sp.appendChild(document.createTextNode(x[0]));lg.appendChild(sp);
  });
  var body=document.createElement("div");body.className="cal-body";
  var grid=document.createElement("div");grid.className="cal-grid";
  DOW.forEach(function(n){var h=document.createElement("div");h.className="cal-dow";h.textContent=n;grid.appendChild(h)});
  var detail=document.createElement("div");detail.className="cal-detail";detail.setAttribute("aria-live","polite");
  var cells=[];
  function render(date){
    cells.forEach(function(c){c.btn.setAttribute("aria-pressed",sameDay(c.date,date)?"true":"false")});
    detail.textContent="";
    var h=document.createElement("h4");
    h.textContent=DOW[(date.getDay()+6)%7]+", "+MON[date.getMonth()]+" "+date.getDate();
    detail.appendChild(h);
    var list=eventsOn(date);
    if(!list.length){var n=document.createElement("p");n.className="none";n.textContent="No activities on this day.";detail.appendChild(n);return}
    list.forEach(function(ev){
      var el=document.createElement("div");el.className="cal-ev "+ev.type;
      var d=document.createElement("div");d.className="d";d.textContent=ev.d;
      var t=document.createElement("div");t.className="t";t.textContent=ev.t;
      el.appendChild(d);el.appendChild(t);detail.appendChild(el);
    });
  }
  for(var w=0;w<WEEKS;w++){for(var d=0;d<5;d++){
    var date=new Date(first.getFullYear(),first.getMonth(),first.getDate()+w*7+d);
    var list=eventsOn(date);
    var btn=document.createElement("button");btn.type="button";
    btn.className="cal-day"+(date.getMonth()!==9?" out":"")+(sameDay(date,today)?" today":"");
    btn.setAttribute("aria-pressed","false");
    btn.setAttribute("aria-label",MON[date.getMonth()]+" "+date.getDate()+": "+(list.length?list.map(function(e){return e.t}).join("; "):"no activities"));
    var num=document.createElement("span");num.className="num";
    num.textContent=(date.getDate()===1?MON[date.getMonth()]+" ":"")+date.getDate();
    btn.appendChild(num);
    list.forEach(function(e){var b=document.createElement("span");b.className="bar "+e.type;btn.appendChild(b)});
    (function(dt){btn.onclick=function(){render(dt)}})(date);
    grid.appendChild(btn);cells.push({date:date,btn:btn});
  }}
  var hint=document.createElement("p");hint.className="cal-hint";hint.textContent="Tap a date to see what's happening.";
  body.appendChild(grid);body.appendChild(hint);body.appendChild(detail);
  wrap.appendChild(head);wrap.appendChild(lg);wrap.appendChild(body);root.appendChild(wrap);
  var start=new Date(2026,9,1);
  cells.forEach(function(c){if(sameDay(c.date,today))start=today});
  render(start);
})();
