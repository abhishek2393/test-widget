(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const u=`
    
    .container {
        border: none;
        width: 100%;
        height: 100px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .container-mid {
        border: none;
        width:15px;
        border-radius: 10px;
        padding: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
        
    }
    .widget__container {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        height:500px;
        overflow-y: scroll;
        right: -25px;
        bottom: 75px;
        position: absolute;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .widget__mid__container__left {
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        height:500px;
        overflow-y: scroll;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .widget__mid__container__right{
        position: absolute;
        right: 25px;
        bottom: 75px;
        box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        width: 400px;
        height:500px;
        overflow-y: scroll;
        transition: max-height .2s ease;
        font-family: Helvetica, Arial ,sans-serif;
        background-color: #e6e6e6a6;
        border-radius: 10px;
        box-sizing: border-box;

    }

    .widget__hidden {
        transform: scale(0);
    }

    .button__container {
        border: none;
        background-color: #0f172a;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        cursor: pointer;
    }

    .widget__icon {
        cursor: pointer;
        width: 60%;
        position: absolute;
        top: 18px;
        left: 16px;
        transition: transform .3s ease;
    }
    container.hidden {
        max-height: 0px;
    }

    .widget__hidden {
        transform: scale(0);
    }
    .widget__header {
        padding: 1rem 2rem 1.5rem;
        background-color: #000;
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        text-align: center;
    }

    .widget__header h3 {
        font-size: 24px;
        font-weight: 400;
        margin-bottom: 8px;
    }

    form {
        padding: 2rem 1rem 1.5rem;
    }

    form .form__field {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .form__field label {
        margin-bottom: 8px;
        font-size: 14px;
    }

    .form__field input,
    .form__field textarea {
        border: 1px solid #000000ad;
        border-radius: 3px;
        padding: 8px 10px;
        background-color: #fff;
    }

    .form__field input {
        height: 48px;
    }

    .form__field textarea::placeholder {
        font-family: Helvetica, Arial ,sans-serif;
    }

    form button {
        height: 48px;
        border-radius: 6px;
        font-size: 18px;
        background-color: #000;
        color: #fff;
        border: 0;
        width: 100%;
        cursor: pointer;
    }

    form button:hover {
        background-color: rgba(0, 0, 0, 95%);
    }

`,y=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
`,c=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="#FFFFFF" stroke="#FFFFFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
`;class d{constructor(){}async fetchQuotes(){return await(await fetch("https://type.fit/api/quotes")).json()}createWidgetContent(){return`
          <header class="widget__header">
              <h3>Start a conversation</h3>
              <p>We usually respond within a few hours</p>
          </header>
  
          <form>
              <div class="form__field">
                  <label for="name">Name</label>
                  <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  />
              </div>
  
              <div class="form__field">
                  <label for="email">Email</label>
                  <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  />
              </div>
  
              <div class="form__field">
                  <label for="subject">Subject</label>
                  <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Message Subject"
                  />
              </div>
  
              <div class="form__field">
                  <label for="message">Message</label>
                  <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                  ></textarea>
              </div>
  
              <button>Send Message</button>
          </form>
      `}}class w{constructor(){this.initialize(),this.injectStyles(),this.data=[],this.open=!1}async initialize(){var p,g,m;const e=document.createElement("div"),t=document.createElement("button"),r=document.createElement("span"),i=document.createElement("span");this.widgetContainer=document.createElement("div");var o=(p=document.querySelector('script[data-id="Pxwqwer"][data-position]'))==null?void 0:p.getAttribute("data-position"),n=(g=document.querySelector('script[data-id="Pxwqwer"][data-theme]'))==null?void 0:g.getAttribute("data-theme"),a=(m=document.querySelector('script[data-id="Pxwqwer"][data-color]'))==null?void 0:m.getAttribute("data-color");if(o){if(o=="top")e.style.position="absolute",e.style.display="flex",e.style.justifyContent="center",e.style.top="0",e.style.left="0",e.style.right="0",e.style.alignItems="center",e.style.padding="0.25rem",this.quotes=new d,this.data=await this.quotes.fetchQuotes(),console.log("top",this.data),document.body.appendChild(e),this.widgetContainer.classList.add("container");else if(o=="bottom")e.style.position="absolute",e.style.display="flex",e.style.justifyContent="center",e.style.bottom="0",e.style.left="0",e.style.right="0",e.style.alignItems="center",e.style.padding="0.25rem",this.quotes=new d,this.data=await this.quotes.fetchQuotes(),console.log("bottom",this.data),document.body.appendChild(e),this.widgetContainer.classList.add("container");else if(o=="bottom-right")e.style.position="fixed",e.style.bottom="30px",e.style.right="30px",t.classList.add("button__container"),r.innerHTML=y,r.classList.add("widget__icon"),this.widgetIcon=r,i.innerHTML=c,i.classList.add("widget__icon","widget__hidden"),this.closeIcon=i,this.data=[],console.log("bottom-right",this.data),t.appendChild(this.widgetIcon),t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleOpen.bind(this)),this.widgetContainer.classList.add("widget__hidden","widget__container"),this.content=new d,this.widgetContainer.innerHTML=this.content.createWidgetContent(),e.appendChild(t),document.body.appendChild(e);else if(o=="mid-left"){e.style.position="fixed",e.style.display="flex",e.style.justifyContent="center",e.style.top="0",e.style.left="0",e.style.bottom="0",e.style.alignItems="center",e.style.padding="1px";var l="Feedback";this.data=[],t.classList.add("container-mid"),t.innerHTML=l,t.style.backgroundColor=n,t.style.color=a,t.style.writingMode="vertical-rl",t.style.textOrientation="upright",i.innerHTML=c,i.classList.add("widget__icon","widget__hidden"),this.closeIcon=i,t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleFeedBack.bind(this)),this.widgetContainer.classList.add("widget__hidden","widget__mid__container__left"),this.content=new d,this.widgetContainer.innerHTML=this.content.createWidgetContent(),document.body.appendChild(e),e.appendChild(t)}else if(o=="mid-right"){e.style.position="fixed",e.style.display="flex",e.style.justifyContent="center",e.style.top="0",e.style.right="0",e.style.bottom="0",e.style.alignItems="center",e.style.padding="1px";var l="Feedback";this.data=[],t.classList.add("container-mid"),t.innerHTML=l,t.style.backgroundColor=n,t.style.color=a,t.style.writingMode="vertical-rl",t.style.textOrientation="upright",i.innerHTML=c,i.classList.add("widget__icon","widget__hidden"),this.closeIcon=i,t.appendChild(this.closeIcon),t.addEventListener("click",this.toggleFeedBack.bind(this)),this.widgetContainer.classList.add("widget__hidden","widget__mid__container__right"),this.content=new d,this.widgetContainer.innerHTML=this.content.createWidgetContent(),document.body.appendChild(e),e.appendChild(t)}}else console.log("no position"),this.data=[],e.style.position="relative",e.style.display="flex",e.style.justifyContent="center",e.style.top="0",e.style.left="0",e.style.right="0",e.style.alignItems="center";if(this.data.length>0){const f=this.data[Math.floor(Math.random()*this.data.length)],s=document.createElement("p");s.innerHTML=f.text,s.style.color=a,s.style.fontSize="1.5rem",s.style.fontWeight="bold",s.style.textAlign="center",s.style.marginTop="1rem",this.widgetContainer.style.backgroundColor=n,this.widgetContainer.appendChild(s)}e.appendChild(this.widgetContainer)}injectStyles(){const e=document.createElement("style");e.innerHTML=u.replace(/^\s+|\n/gm,""),document.head.appendChild(e)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.widgetContainer.innerHTML=this.content.createWidgetContent(),this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}toggleFeedBack(){console.log("clicked"),this.open=!this.open,this.open?(this.widgetContainer.classList.remove("widget__hidden"),this.closeIcon.classList.remove("widget__hidden")):(this.widgetContainer.innerHTML=this.content.createWidgetContent(),this.widgetContainer.classList.add("widget__hidden"),this.closeIcon.classList.add("widget__hidden"))}}new w;
