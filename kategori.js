document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const tur = urlParams.get('tur');

  const kategoriBasliklari = {
    gida: "Gıda Ürünleri",
    deterjan: "Deterjan Ürünleri",
    kagit:"Kağıt Ürünleri",
    hirdavat:"Hırdavat Ürünleri",
    kirtasiye:"Kırtasiye Ürünleri",
    "is-guvenligi-ekipmanlari":"İş Güvenliği Ekipman Ürünleri",
  };

  const urunler = {
    gida: [
      { ad: "Çaykur Çay", resim: "images/gida-urunler/caykur-cay.png" },
      { ad: "Balküpü Küp Şeker", resim: "images/gida-urunler/kup-seker.jpg" },
      { ad: "Nescafe", resim: "images/gida-urunler/nescafe2.jpg" },
      { ad: "Coffee Mate", resim: "images/gida-urunler/coffee-mate.jpg" },
    ],
    deterjan: [
      { ad: "Cif Temizlik Ürünleri", resim: "images/deterjan-urunler/cif.jpg" },
      { ad: "Domestos Temizlik Ürünleri", resim: "images/deterjan-urunler/domestos.jpg" },
      { ad: "Pril Temizlik Ürünleri", resim: "images/deterjan-urunler/pril.jpg" },
      { ad: "Abc Temizlik Ürünleri", resim: "images/deterjan-urunler/abc.jpg" },
      { ad: "Endüstriyel Deterjan Ürünleri", resim: "images/deterjan-urunler/oxydeterjan.jpg" },
    ],
     kagit: [
      { ad: "Kağıt Havlu", resim: "images/kagit-urunler/selpak-havlu.jpg" },
      { ad: "Tuvalet Kağıdı", resim: "images/kagit-urunler/selpak-tuvalet-kagidi.jpg" },
  { ad: "Fotoselli Havlu Kağıtlar", resim: "images/kagit-urunler/fotoselli-kagit-havlu.jpg" },
  { ad: "İçten Çekmeli Havlu", resim: "images/kagit-urunler/icten-cekmeli-havlu.webp" },
  { ad: "Z Kat Havlu", resim: "images/kagit-urunler/pecete-z-katlamali.webp" },
  { ad: "Mini Jumbo Tuvalet Kağıdı", resim: "images/kagit-urunler/mini-jumbo-tuvalet-kagidi.jpg" },
  { ad: "Dispenser Peçeteler", resim: "images/kagit-urunler/dispenser-pecete.jpg" },
  { ad: "Peçeteler", resim: "images/kagit-urunler/peceteler.jpg" },
  { ad: "Rulo Havlu Kağıtlar", resim: "images/kagit-urunler/rulo-kagit-havlu.jpg" },
    ],
   hirdavat: [
      { ad: "İzeltaş Ürünleri", resim: "images/hirdavat-urunler/izeltas-urunleri.png" },
      { ad: "Makina Takım Ürünleri", resim: "images/hirdavat-urunler/makina-takim.png" },
      { ad: "Bosch Ürünleri", resim: "images/hirdavat-urunler/bosch.png" },
      { ad: "Gedik Kaynak Ürünleri", resim: "images/hirdavat-urunler/gedik-kaynak.png" },

    ], 
    kirtasiye: [
      { ad: "Edding Kalemler", resim: "images/kirtasiye-urunler/edding.jpg" },
      { ad: "Faber Castell", resim: "images/kirtasiye-urunler/faber-castell.jpg" },
      { ad: "Panda Pano Yazı Tahtası", resim: "images/kirtasiye-urunler/yazi-tahtasi.jpg" },

    ],
    "is-guvenligi-ekipmanlari": [
      { ad: "3M Ürünleri", resim: "images/is-guvenligi-ekipman-urunler/3m.png" },
      { ad: "Starline Ürünleri", resim: "images/is-guvenligi-ekipman-urunler/starline.png" },
      { ad: "Fullflex Eldiven Ürünleri", resim: "images/is-guvenligi-ekipman-urunler/fullflex-eldiven.jpeg" },
      { ad: "V10 Ürünleri", resim: "images/is-guvenligi-ekipman-urunler/v10.jpg" },

    ], 
       };

  if (urunler[tur]) {
    document.body.innerHTML = `
      <header>
        <a href="index.html">
          <div id="logodiv">
            <img src="images/siteimg.png" alt="Logo" id="logo">
          </div>
        </a>
        <div id="navbar"> 
          <a href="index.html"><p id="anasayfa">Ana Sayfa</p></a> 
          <a href="hakkimizda.html"><p id="hakkımızda">Hakkımızda</p></a>
          <a href="bizeulasin.html"><p id="bizeulasin">Bize Ulaşın</p></a>
        </div>
      </header>
      <main>
        <h1 style="text-align:center; font-family: Roboto-Flex; margin-top: 30px;">
          ${kategoriBasliklari[tur] || "Ürünler"}
        </h1>
        <div class="urunler-box">
          <div id="urunler-listesi" class="urunler-wrapper"></div>
        </div>
      </main>
      <footer>
        <span>
          <p> ESG TEDARİK</p>
          <p>esg.tedarik@gmail.com</p>
          <p>+90 553 010 57 36</p>
          <p>Beylikbağı 324. Sokak No:33</p>
          <p>Gebze/Kocaeli</p>
        </span>
      </footer>
    `;

    const liste = document.getElementById("urunler-listesi");

    urunler[tur].forEach((urun) => {
      const urunCard = document.createElement("div");

      const safeClassName = urun.ad.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

      urunCard.className = `urun-karti ${safeClassName}`;
      urunCard.id = `urun-${safeClassName}`;

      urunCard.innerHTML = `
        <img src="${urun.resim}" alt="${urun.ad}" class="urun-resim">
        <h3>${urun.ad}</h3>
      `;
 
      liste.appendChild(urunCard);
    });
  } else {
    document.body.innerHTML = "<p>Ürün kategorisi bulunamadı.</p>";
  }
});
