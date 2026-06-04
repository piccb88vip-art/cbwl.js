(() => {
  "use strict";

  if (document.getElementById("cb-wc-popup-wrap")) return;

  const banners = [
    {
      title: "⚽ WORLD CUP CHAMPIONSHIP ⚽",
      img: "http://plcl.me/images/sY4EF.jpg",
      event: "https://click-lynk.com/JADWAL-BOLA",
      tnc: "https://clickbet88sedekahrejeki01.xyz/promotion/kompetisi-turnover-sport-special-worldcup"
    },
    {
      title: "⚽ WORLD CUP PREDICTION CUP ⚽",
      img: "http://plcl.me/images/yPFhm.jpg",
      event: "https://click-lynk.com/CBEVNT2-FIFAWORLDCUP",
      tnc: "https://clickbet88sedekahrejeki01.xyz/promotion/prediksi-big-event-tournament-worldcup"
    },
    {
      title: "⚽ WORLD CUP PENALTY SHOOTOUT ⚽",
      img: "http://plcl.me/images/QHfqe.jpg",
      event: "https://click-lynk.com/CBEVNT3-PENALTY",
      tnc: "https://clickbet88sedekahrejeki01.xyz/promotion/special-event-minigames-worldcup"
    }
  ];

  const style = document.createElement("style");
  style.textContent = `
    #cb-wc-popup-wrap{
      width:100%;
      max-width:420px;
      margin:auto;
      font-family:Arial,sans-serif;
      background:#090909;
      border-radius:15px;
      overflow:hidden;
    }

    #cb-wc-title{
      background:linear-gradient(90deg,#8b5a00,#ffd36a,#8b5a00);
      color:#120800;
      text-align:center;
      padding:9px;
      font-size:13px;
      font-weight:900;
    }

    #cb-wc-img{
      width:100%;
      display:block;
      border:0;
    }

    .cb-wc-action{
      display:flex;
      justify-content:center;
      gap:6px;
      padding:9px;
      background:#090909;
    }

    .cb-wc-btn{
      width:95px;
      text-align:center;
      background:linear-gradient(135deg,#ffd36a,#b97818);
      color:#230b00;
      padding:7px 4px;
      border-radius:99px;
      font-size:8px;
      font-weight:900;
      text-decoration:none;
      white-space:nowrap;
    }

    .cb-wc-tnc{
      background:#151515;
      color:#ffd36a;
      border:1px solid rgba(255,211,106,.6);
    }

    .cb-wc-report{
      background:linear-gradient(135deg,#ff4d4d,#8b0000);
      color:#fff;
    }

    .cb-wc-control{
      display:flex;
      justify-content:center;
      align-items:center;
      gap:14px;
      padding:8px 0 10px;
      background:#090909;
    }

    .cb-wc-nav{
      width:28px;
      height:28px;
      border-radius:50%;
      border:0;
      background:rgba(255,215,120,.2);
      color:#ffd36a;
      font-size:18px;
      font-weight:900;
      cursor:pointer;
    }

    .cb-wc-dot{
      width:7px;
      height:7px;
      border-radius:50%;
      background:#666;
      display:inline-block;
      margin:0 3px;
    }

    .cb-wc-dot.active{
      background:#ffd36a;
      box-shadow:0 0 8px #ffd36a;
    }

    @media(max-width:480px){
      #cb-wc-popup-wrap{max-width:94vw;}
      #cb-wc-title{font-size:12px;}
      .cb-wc-btn{width:88px;font-size:7.5px;}
    }
  `;
  document.head.appendChild(style);

  const popup = document.createElement("div");
  popup.id = "cb-wc-popup-wrap";

  popup.innerHTML = `
    <div id="cb-wc-title">${banners[0].title}</div>

    <img id="cb-wc-img" src="${banners[0].img}" alt="World Cup Event" loading="eager">

    <div class="cb-wc-action">
      <a id="cb-wc-event" class="cb-wc-btn" href="${banners[0].event}" target="_blank">LIHAT EVENT</a>
      <a id="cb-wc-tnc" class="cb-wc-btn cb-wc-tnc" href="${banners[0].tnc}" target="_blank">KETENTUAN</a>
      <a class="cb-wc-btn cb-wc-report" href="https://click-lynk.com/LAPORAN_KENDALA" target="_blank">KENDALA</a>
    </div>

    <div class="cb-wc-control">
      <button class="cb-wc-nav" id="cb-wc-prev" type="button">‹</button>
      <div>
        <span class="cb-wc-dot active"></span>
        <span class="cb-wc-dot"></span>
        <span class="cb-wc-dot"></span>
      </div>
      <button class="cb-wc-nav" id="cb-wc-next" type="button">›</button>
    </div>
  `;

  function runPopup(){
    const target = document.currentScript && document.currentScript.parentNode
      ? document.currentScript.parentNode
      : document.body;

    target.appendChild(popup);

    let index = 0;
    const title = popup.querySelector("#cb-wc-title");
    const img = popup.querySelector("#cb-wc-img");
    const eventBtn = popup.querySelector("#cb-wc-event");
    const tncBtn = popup.querySelector("#cb-wc-tnc");
    const dots = popup.querySelectorAll(".cb-wc-dot");

    function showBanner(i){
      index = (i + banners.length) % banners.length;

      title.textContent = banners[index].title;
      img.src = banners[index].img;
      eventBtn.href = banners[index].event;
      tncBtn.href = banners[index].tnc;

      dots.forEach((dot, n) => {
        dot.classList.toggle("active", n === index);
      });
    }

    popup.querySelector("#cb-wc-next").onclick = () => showBanner(index + 1);
    popup.querySelector("#cb-wc-prev").onclick = () => showBanner(index - 1);

    dots.forEach((dot, i) => {
      dot.onclick = () => showBanner(i);
    });
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", runPopup);
  }else{
    runPopup();
  }
})();
