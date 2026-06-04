(function(){
  "use strict";

  if(document.getElementById("cb-popup-worldcup")) return;

  var data = [
    {
      title:"⚽ WORLD CUP CHAMPIONSHIP ⚽",
      img:"http://plcl.me/images/sY4EF.jpg",
      event:"https://click-lynk.com/JADWAL-BOLA",
      tnc:"https://clickbet88sedekahrejeki01.xyz/promotion/kompetisi-turnover-sport-special-worldcup"
    },
    {
      title:"⚽ WORLD CUP PREDICTION CUP ⚽",
      img:"http://plcl.me/images/yPFhm.jpg",
      event:"https://click-lynk.com/CBEVNT2-FIFAWORLDCUP",
      tnc:"https://clickbet88sedekahrejeki01.xyz/promotion/prediksi-big-event-tournament-worldcup"
    },
    {
      title:"⚽ WORLD CUP PENALTY SHOOTOUT ⚽",
      img:"http://plcl.me/images/QHfqe.jpg",
      event:"https://click-lynk.com/CBEVNT3-PENALTY",
      tnc:"https://clickbet88sedekahrejeki01.xyz/promotion/special-event-minigames-worldcup"
    }
  ];

  function initPopup(){
    var box = document.createElement("div");

    box.innerHTML = `
<style>
#cb-popup-worldcup{max-width:420px;margin:auto;font-family:Arial,sans-serif;background:#090909;border-radius:15px;overflow:hidden}
#cb-popup-worldcup .cb-header{background:linear-gradient(90deg,#8b5a00,#ffd36a,#8b5a00);color:#120800;text-align:center;padding:9px;font-size:13px;font-weight:900}
#cb-popup-worldcup .cb-banner img{width:100%;display:block}
#cb-popup-worldcup .cb-action{display:flex;justify-content:center;gap:6px;padding:9px;background:#090909}
#cb-popup-worldcup .cb-btn{width:95px;text-align:center;background:linear-gradient(135deg,#ffd36a,#b97818);color:#230b00;padding:7px 4px;border-radius:99px;font-size:8px;font-weight:900;text-decoration:none;white-space:nowrap}
#cb-popup-worldcup .cb-btn.tnc{background:#151515;color:#ffd36a;border:1px solid rgba(255,211,106,.6)}
#cb-popup-worldcup .cb-btn.report{background:linear-gradient(135deg,#ff4d4d,#8b0000);color:#fff}
#cb-popup-worldcup .cb-control{display:flex;justify-content:center;align-items:center;gap:14px;padding:8px 0 10px;background:#090909}
#cb-popup-worldcup .cb-nav{width:28px;height:28px;border-radius:50%;border:0;background:rgba(255,215,120,.2);color:#ffd36a;font-size:18px;font-weight:900;cursor:pointer}
#cb-popup-worldcup .cb-dot{width:7px;height:7px;border-radius:50%;background:#666;display:inline-block;margin:0 3px}
#cb-popup-worldcup .cb-dot.active{background:#ffd36a;box-shadow:0 0 8px #ffd36a}
@media(max-width:480px){#cb-popup-worldcup{max-width:94vw}#cb-popup-worldcup .cb-header{font-size:12px}#cb-popup-worldcup .cb-btn{width:88px;font-size:7.5px}}
</style>

<div id="cb-popup-worldcup">
  <div class="cb-header" id="cbTitle"></div>

  <div class="cb-banner">
    <img id="cbImg" src="" alt="World Cup Event">
  </div>

  <div class="cb-action">
    <a id="cbEvent" class="cb-btn" href="#" target="_blank">LIHAT EVENT</a>
    <a id="cbTnc" class="cb-btn tnc" href="#" target="_blank">KETENTUAN</a>
    <a class="cb-btn report" href="https://click-lynk.com/LAPORAN_KENDALA" target="_blank">KENDALA</a>
  </div>

  <div class="cb-control">
    <button class="cb-nav" id="cbPrev" type="button">&#10094;</button>
    <div>
      <span class="cb-dot active"></span>
      <span class="cb-dot"></span>
      <span class="cb-dot"></span>
    </div>
    <button class="cb-nav" id="cbNext" type="button">&#10095;</button>
  </div>
</div>
`;

    var currentScript = document.currentScript;
    if(currentScript && currentScript.parentNode){
      currentScript.parentNode.insertBefore(box, currentScript);
    }else{
      document.body.appendChild(box);
    }

    var i = 0;
    var title = box.querySelector("#cbTitle");
    var img = box.querySelector("#cbImg");
    var eventBtn = box.querySelector("#cbEvent");
    var tncBtn = box.querySelector("#cbTnc");
    var dots = box.querySelectorAll(".cb-dot");

    function show(n){
      i = (n + data.length) % data.length;

      title.textContent = data[i].title;
      img.src = data[i].img;
      eventBtn.href = data[i].event;
      tncBtn.href = data[i].tnc;

      dots.forEach(function(dot){
        dot.classList.remove("active");
      });

      dots[i].classList.add("active");
    }

    box.querySelector("#cbPrev").onclick = function(){
      show(i - 1);
    };

    box.querySelector("#cbNext").onclick = function(){
      show(i + 1);
    };

    show(0);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initPopup);
  }else{
    initPopup();
  }
})();
