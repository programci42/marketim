var idler = [];
var urunler = [];
var fiyatlar = [];
var barkods = [];
var miktar = 1;
var tbl = "";
function urunsil(id) {
    var tutar = 0;
    if (tbluruns.rows.length >= 0) {
        for (var x = 0; x <= tbluruns.rows.length + 50; x++) {
            if (tbluruns.rows[x].id == id) {
                tbluruns.deleteRow(x);
                break;
            }
        }
    }

    if (tbluruns.rows.length == 0) { lblgeneltutar.innerText = "0 ₺"; }
    else {
        for (var x = 0; x <= tbluruns.rows.length + 50; x++) {
            if (document.getElementById("txtaratutar" + x) != undefined) {
                tutar += parseFloat(document.getElementById("txtaratutar" + x).value);
            }
        }

        lblgeneltutar.innerText = tutar.toFixed(2) + " ₺";
    }
}

function aratutar(id) {
    var tutar = 0;
    try {
        tutar = parseFloat(document.getElementById("txtfiyat" + id).value) * parseFloat(document.getElementById("txtmiktar" + id).value);
        document.getElementById("txtaratutar" + id).value = tutar;

        tutar = 0;
        if (tbluruns.rows.length >= 0) {
            for (var x = 0; x <= tbluruns.rows.length; x++) {
                if (document.getElementById("txtaratutar" + x) != undefined) {
                    tutar += parseFloat(document.getElementById("txtaratutar" + x).value);
                }
            }
        }

        document.getElementById("lblgeneltutar").innerText = tutar.toFixed(2) + " ₺";
    }
    catch (err) {

    }
}


function urunekle(u, f, id, m) {
    var row = undefined;
    var cell = [];

    row = tbluruns.insertRow(0);
    row.id = "tr" + tbluruns.rows.length.toString();
    cell[0] = row.insertCell(0);
    cell[1] = row.insertCell(1);
    cell[2] = row.insertCell(2);
    cell[3] = row.insertCell(3);
    cell[4] = row.insertCell(4);

    //cell[0].innerHTML = "<a href=" + String.fromCharCode(34) + "#" + String.fromCharCode(34) + " class = " + String.fromCharCode(34) + "btn btn-light btn-lg btn-block" + String.fromCharCode(34) + " style=" + String.fromCharCode(34) + "font-size: 20pt; font-weight: bold;" + String.fromCharCode(34) + " onclick = " + String.fromCharCode(34) + "javascript:tbl = 'tbluruns'; urunekle('', '', '', ''); " + String.fromCharCode(34) + "><img src=" + String.fromCharCode(34) + "res/Add-icon.png" + String.fromCharCode(34) + " class=" + String.fromCharCode(34) + "img-fluid" + String.fromCharCode(34) + " /></a>";

    cell[0].colSpan = "1";

    cell[0].innerHTML = "<a href=" + String.fromCharCode(34) + "#" + String.fromCharCode(34) + " class = " + String.fromCharCode(34) + "btn btn-light btn-lg btn-block" + String.fromCharCode(34) + " style=" + String.fromCharCode(34) + "font-size: 12pt; font-weight: bold; " + String.fromCharCode(34) + " title="+ String.fromCharCode(34) + "KALDIR" + String.fromCharCode(34) +" onclick = " + String.fromCharCode(34) + "javascript: urunsil('tr" + tbluruns.rows.length.toString() + "'); " + String.fromCharCode(34) + "><img src='res/cikar.png' width='18' height='18' /></a>";

    cell[1].innerHTML = "<input type=" + String.fromCharCode(34) + "hidden" + String.fromCharCode(34) + " id = " + String.fromCharCode(34) + "txtid" + tbluruns.rows.length.toString() + String.fromCharCode(34) + " value = " + String.fromCharCode(34) + id + String.fromCharCode(34) + " />";

    cell[1].innerHTML += "<input type=" + String.fromCharCode(34) + "text" + String.fromCharCode(34) + " name=" + String.fromCharCode(34) + "txturun" + tbluruns.rows.length.toString() + String.fromCharCode(34) + " id=" + String.fromCharCode(34) + "txturun" + tbluruns.rows.length.toString() + String.fromCharCode(34) + " readonly = " + String.fromCharCode(34) + "readonly" + String.fromCharCode(34) + " value = " + String.fromCharCode(34) + u + String.fromCharCode(34) + "  title = " + String.fromCharCode(34) + u + String.fromCharCode(34) + " class = " + String.fromCharCode(34) + "form-control" + String.fromCharCode(34) + " style=" + String.fromCharCode(34) + "font-family:'Tahoma'; font-size:10pt; font-weight:bold; background-color:White;" + String.fromCharCode(34) + "/>\n";

    cell[2].innerHTML = "<input type=" + String.fromCharCode(34) + "number" + String.fromCharCode(34) + " min = "+ String.fromCharCode(34) + "0" + String.fromCharCode(34) +" step = " + String.fromCharCode(34) + "0.5" + String.fromCharCode(34) + " id=" + String.fromCharCode(34) + "txtfiyat" + tbluruns.rows.length.toString() + String.fromCharCode(34) + " class=" + String.fromCharCode(34) + "form-control" + String.fromCharCode(34) + " value=" + String.fromCharCode(34) + f.toString() + String.fromCharCode(34) + " style=" + String.fromCharCode(34) + "font-size: 12pt; font-weight: bold; text-align: right; " + String.fromCharCode(34) + " onchange=" + String.fromCharCode(34) + "javascript: aratutar(" + tbluruns.rows.length.toString() + ");" + String.fromCharCode(34) + " />";

    cell[3].innerHTML = "<input type=" + String.fromCharCode(34) + "number" + String.fromCharCode(34) + " min = "+ String.fromCharCode(34) + "0" + String.fromCharCode(34) +" step = " + String.fromCharCode(34) + "1.0" + String.fromCharCode(34) + " id=" + String.fromCharCode(34) + "txtmiktar" + tbluruns.rows.length.toString() + String.fromCharCode(34) + " class=" + String.fromCharCode(34) + "form-control" + String.fromCharCode(34) + " value=" + String.fromCharCode(34) + m + String.fromCharCode(34) + " style=" + String.fromCharCode(34) + "font-size: 12pt; font-weight: bold; text-align: right; " + String.fromCharCode(34) + " onchange=" + String.fromCharCode(34) + "javascript: aratutar(" + tbluruns.rows.length.toString() + ");" + String.fromCharCode(34) + " />";

    cell[4].innerHTML = "<input type='number' step = '0.5' id='txtaratutar" + tbluruns.rows.length.toString() + "' class='form-control' value='"+ f.toString() +"' style='font-size: 12pt; font-weight: bold; text-align: right; color:Maroon;' readonly='readonly' />";

    aratutar(tbluruns.rows.length);

    miktar = 1;
    lblmiktar.innerText = "MİKTAR X1";
}

function urunara(e) {
    if (e.keyCode === 13) {
        for (var x = 0; x < urunler.length; x++) {
            if (barkods[x] == txtbarkod.value) {
                for (var i = 0; i < tbluruns.rows.length + 50; i++) {
                    if (document.getElementById("txturun" + i.toString()) != undefined) {
                        if (document.getElementById("txturun" + i.toString()).value == urunler[x]) {
                            txtbarkod.value = '';
                            document.getElementById("txtmiktar" + i.toString()).value = (parseInt(document.getElementById("txtmiktar" + i.toString()).value) + 1);
                            aratutar(i);
                            return;
                        }
                    }
                }

                txtbarkod.value = '';
                urunekle(urunler[x], fiyatlar[x], idler[x], miktar.toString());
                txtbarkod.focus();
                return;
            }
        }

        txtbarkod.value = '';
        lblmesaj.innerText = 'Ürün bulunamadı!';
        setTimeout(function () { lblmesaj.innerText = ''; }, 3000);
        txtbarkod.focus();
    }
}

function urunara2(ad) {
    // urunListesi içinde ürün adına göre arama yap
    const bulunanUrun = urunListesi.find(urun => 
        urun.Stok_Adi.toLowerCase().includes(ad.toLowerCase()) || 
        urun.Barkod === ad ||
        urun.Stok_Kodu === ad
    );
    
    if (bulunanUrun) {
        // Tabloda bu ürün zaten var mı kontrol et
        for (var i = 0; i < tbluruns.rows.length + 50; i++) {
            if (document.getElementById("txturun" + i.toString()) != undefined) {
                if (document.getElementById("txturun" + i.toString()).value == bulunanUrun.Stok_Adi) {
                    // Varsa miktarını 1 artır
                    document.getElementById("txtmiktar" + i.toString()).value = 
                        (parseInt(document.getElementById("txtmiktar" + i.toString()).value) + 1);
                    return;
                }
            }
        }
        
        // Yoksa yeni ürün ekle
        urunekle(
            bulunanUrun.Stok_Adi,    // Ürün adı
            bulunanUrun.Fiyat || 0,  // Fiyat (eğer yoksa 0)
            bulunanUrun.id,          // ID
            "1"                      // Başlangıç miktarı
        );
        return;
    }
    
    // Ürün bulunamadı
    lblmesaj.innerText = 'Ürün bulunamadı!';
    setTimeout(function () { lblmesaj.innerText = ''; }, 3000);
}

function fiyatgor() {
    var barkod = document.getElementById('txtbarkod2').value.trim();
    
    if (barkod === '') {
        alert('Lütfen barkod girin!');
        document.getElementById('txtbarkod2').focus();
        return;
    }
    
    // Ürünü bul
    var urun = urunBul(barkod);
    if (!urun) {
        alert('Ürün bulunamadı!\nBarkod: ' + barkod);
        document.getElementById('txtbarkod2').focus();
        return;
    }
    
    // Form alanlarını doldur
    document.getElementById('txturunadi').value = urun.Stok_Adi;
    document.getElementById('txtmevcut_fiyat').value = urun.Fiyat > 0 ? urun.Fiyat.toFixed(2) + ' ₺' : 'Fiyat Yok';
    document.getElementById('txtyeni_fiyat').value = urun.Fiyat > 0 ? urun.Fiyat.toFixed(2) : '';
    
    // Son güncelleme bilgisini göster
    var fiyatBilgisi = localData.urunFiyatlari[barkod];
    if (fiyatBilgisi && fiyatBilgisi.guncellemeTarihi) {
        var tarih = new Date(fiyatBilgisi.guncellemeTarihi);
        document.getElementById('lblson_guncelleme').innerText = 
            tarih.toLocaleDateString('tr-TR') + ' ' + 
            tarih.toLocaleTimeString('tr-TR', {hour: '2-digit', minute: '2-digit'});
    } else {
        document.getElementById('lblson_guncelleme').innerText = 'Hiç güncellenmemiş';
    }
    
    // Yeni fiyat alanına odaklan
    document.getElementById('txtyeni_fiyat').focus();
    document.getElementById('txtyeni_fiyat').select();
    
    console.log('Fiyat görüntülendi:', urun.Stok_Adi, 'Mevcut fiyat:', urun.Fiyat);
}

function fiyatModalKapat() {
    document.getElementById('tblfiyatgor').style.visibility = 'hidden';
    
    // Form alanlarını temizle
    document.getElementById('txtbarkod2').value = '';
    document.getElementById('txturunadi').value = '';
    document.getElementById('txtmevcut_fiyat').value = '';
    document.getElementById('txtyeni_fiyat').value = '';
    document.getElementById('lblson_guncelleme').innerText = '-';
    
    // Ana sayfaya dön
    document.getElementById('txtbarkod').focus();
    
    console.log('Fiyat modalı kapatıldı');
}
// Fiyat güncelleme ve kaydetme
function fiyatGuncelleKaydet() {
    try {
        var barkod = document.getElementById('txtbarkod2').value.trim();
        var urunAdi = document.getElementById('txturunadi').value;
        var yeniFiyat = document.getElementById('txtyeni_fiyat').value.trim();
        
        // Kontroller
        if (barkod === '' || urunAdi === '') {
            alert('Önce bir ürün aratın!');
            document.getElementById('txtbarkod2').focus();
            return false;
        }
        
        if (yeniFiyat === '' || isNaN(yeniFiyat) || parseFloat(yeniFiyat) < 0) {
            alert('Lütfen geçerli bir fiyat girin!\n(Pozitif sayı olmalıdır)');
            document.getElementById('txtyeni_fiyat').focus();
            return false;
        }
        
        var fiyatSayisi = parseFloat(yeniFiyat);
        
        // Onay al
        var onayMesaji = 'FİYAT GÜNCELLEME ONAYI\n\n' +
                        'Ürün: ' + urunAdi + '\n' +
                        'Barkod: ' + barkod + '\n' +
                        'Yeni Fiyat: ' + fiyatSayisi.toFixed(2) + ' ₺\n\n' +
                        'Fiyatı güncellemek istediğinizden emin misiniz?';
        
        if (!confirm(onayMesaji)) {
            return false;
        }
        
        // Fiyatı kaydet (mevcut sistem)
        var kaydedildi = urunFiyatiKaydet(barkod, fiyatSayisi, 'fiyat_modal');
        
        if (kaydedildi) {
            // Başarı mesajı
            alert('Fiyat başarıyla güncellendi!\n\n' +
                  'Ürün: ' + urunAdi + '\n' +
                  'Yeni Fiyat: ' + fiyatSayisi.toFixed(2) + ' ₺');
            
            // Form alanlarını güncelle
            document.getElementById('txtmevcut_fiyat').value = fiyatSayisi.toFixed(2) + ' ₺';
            
            // Son güncelleme tarihini göster
            var simdi = new Date();
            document.getElementById('lblson_guncelleme').innerText = 
                simdi.toLocaleDateString('tr-TR') + ' ' + 
                simdi.toLocaleTimeString('tr-TR', {hour: '2-digit', minute: '2-digit'});
            
            // Ürün listesi açıksa güncelle
            if (document.getElementById('divurunlist').style.visibility === 'visible') {
                urunListesiGoster();
            }
            
            console.log('Fiyat güncellendi:', barkod, fiyatSayisi);
            
            // 2 saniye sonra modalı kapat
            setTimeout(function() {
                fiyatModalKapat();
            }, 2000);
            
            return true;
        } else {
            alert('Fiyat güncellenirken hata oluştu!');
            return false;
        }
        
    } catch (error) {
        console.error('Fiyat güncelleme hatası:', error);
        alert('Fiyat güncellenirken hata oluştu: ' + error.message);
        return false;
    }
}

function odeme() {
    try {
        if (parseFloat(txtodenen.value >= txttutar.value)) {
            txtkalan.value = "0";
            txtparaustu.value = parseFloat(txtodenen.value) - parseFloat(txttutar.value);
        }
        else {
            txtparaustu.value = parseFloat(txttutar.value) - parseFloat(txtodenen.value);
            txtkalan.value = "0";
        }
    }
    catch (err) { }
}

// Mevcut Satis fonksiyonunu şu şekilde güncelle
function Satis(odemeTipi) {
    if (tbluruns.rows.length == 0) {
        alert('Satılacak ürün yok!');
        return;
    }
    
    // Satış verilerini topla
    var satisUrunleri = [];
    var toplamTutar = 0;
    
    for (var x = 0; x < 2000; x++) {
        if (document.getElementById("txturun" + x.toString()) != undefined) {
            var urunAdi = document.getElementById("txturun" + x.toString()).value;
            var miktar = parseFloat(document.getElementById("txtmiktar" + x.toString()).value) || 1;
            var fiyat = parseFloat(document.getElementById("txtfiyat" + x.toString()).value) || 0;
            var aratutar = parseFloat(document.getElementById("txtaratutar" + x.toString()).value) || 0;
            
            // Ürün bilgisini bul
            var urun = urunListesi.find(u => u.Stok_Adi === urunAdi);
            
            satisUrunleri.push({
                barkod: urun ? urun.Barkod : '',
                stokKodu: urun ? urun.Stok_Kodu : '',
                urunAdi: urunAdi,
                miktar: miktar,
                birimFiyat: fiyat,
                aratutar: aratutar,
                birim: urun ? urun.Birim : 'ADET'
            });
            
            // Fiyatı kaydet
            if (urun && fiyat > 0) {
                urunFiyatiKaydet(urun.Barkod, fiyat);
            }
            
            toplamTutar += aratutar;
        }
    }
    
    // Satışı kaydet
    var satisVerisi = {
        urunler: satisUrunleri,
        toplamTutar: toplamTutar,
        odemeTipi: odemeTipi,
        musteri: txtmusteri.value !== '0' ? txtmusteri.value : null
    };
    
    var satisId = satisKaydet(satisVerisi);
    
    // Mevcut işlemleri devam ettir...
    alert('Satış tamamlandı! ID: ' + satisId);
    
}

function nakitodeme() {
    tblodeme.style.visibility = 'visible';
    txtodenen.focus();
    txttutar.value = lblgeneltutar.innerText;
    txtodenen.value = txttutar.value;
    txtkalan.value = "0";
    txtparaustu.value = "0";
}

function katsayi() {
    if (document.getElementById("txtbarkod").value == "" || document.getElementById("txtbarkod").value == "0" || document.getElementById("txtbarkod").value == ",") {
        miktar = 1;
        lblmiktar.innerText = "MİKTAR X1";
        document.getElementById("txtbarkod").value = "";
    }
    else {
        miktar = parseInt(txtbarkod.value);
        lblmiktar.innerText = "MİKTAR X" + txtbarkod.value;
        document.getElementById("txtbarkod").value = "";
    }
}

// Eski fonksiyonu yeni sistemle değiştir
function hazirurunekle(urunAdiVeyaBarkod) {
    // Önce barkod olarak ara
    var urun = urunBul(urunAdiVeyaBarkod);
    
    // Bulamazsa ürün adı olarak ara
    if (!urun) {
        urun = urunListesi.find(u => u.Stok_Adi === urunAdiVeyaBarkod);
    }
    
    if (urun) {
        favoriEkle(urun);
        return true;
    } else {
        console.warn('Favoriye eklenecek ürün bulunamadı:', urunAdiVeyaBarkod);
        return false;
    }
}

// Yeni isimle aynı fonksiyon
function favoriUrunEkle(barkod) {
    var urun = urunBul(barkod);
    if (urun) {
        return favoriEkle(urun);
    }
    return false;
}

// Ürün listesinden favori ekleme
function urundenFavoriEkle(barkod) {
    var urun = urunBul(barkod);
    if (urun) {
        var eklendi = favoriEkle(urun);
        if (eklendi) {
            alert('Ürün favorilere eklendi: ' + urun.Stok_Adi);
        } else {
            alert('Ürün zaten favorilerde: ' + urun.Stok_Adi);
        }
        return eklendi;
    } else {
        alert('Ürün bulunamadı!');
        return false;
    }
}


function uruneklet(u) {
    if (tbl == tbluruns.id) {
        urunara2(u);
        divurunlist.style.visibility = "hidden";
    }
    else {
        hazirurunekle(u);
    }
}

// Mevcut veresiye fonksiyonunu güncelle
function veresiye() {
    veresiyeSatis(); // Yeni fonksiyonu çağır
}

// IndexedDB açılıyor
function openDB() {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open("BenimDB", 1);
        request.onupgradeneeded = function (event) {
            let db = event.target.result;
            if (!db.objectStoreNames.contains("cerezler")) {
                db.createObjectStore("cerezler");
            }
        };
        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
        request.onerror = function (event) {
            reject(event.target.error);
        };
    });
}

// Veri yazma (çerez yerine)
async function yazcerez(c_name, value) {
    let db = await openDB();
    let tx = db.transaction("cerezler", "readwrite");
    let store = tx.objectStore("cerezler");

    let crz = await getcerez(c_name) || "";
    if (crz.indexOf(value) === -1) {
        crz += value + "|";
        store.put(crz, c_name);
    }
    return tx.complete;
}

// Veri okuma
async function getcerez(c_name) {
    let db = await openDB();
    return new Promise((resolve) => {
        let tx = db.transaction("cerezler", "readonly");
        let store = tx.objectStore("cerezler");
        let request = store.get(c_name);
        request.onsuccess = () => resolve(request.result || "");
        request.onerror = () => resolve("");
    });
}

// Tüm verileri işleme
async function cerezler() {
    let crz = await getcerez("uruns");
    if (crz !== "") {
        crz.split("|").forEach(v => {
            if (v) hazirurunekle(v);
        });
    }
}


function favori_ac() {
    divsol.style.width = "49%";
    divorta.style.width = "27%";
    divsag.style.visibility = "visible";
    divsag.style.position = "static";
    yazcerez("favoriler", "ac");
    txtbarkod.focus();
}

function favori_kapat() {
    divsol.style.width = "69%";
    divorta.style.width = "31%";
    divsag.style.visibility = "hidden";
    divsag.style.position = "absolute";
    yazcerez("favoriler", "kapat");
    txtbarkod.focus();
}

// Mevcut satıştan fiş yazdırma (güncellenmiş)
function Makbuz() {
    if (tbluruns.rows.length === 0) {
        alert('Yazdırılacak satış yok!');
        return;
    }
    
    try {
        var kod = "";
        var toplamTutar = 0;
        
        for (var x = 0; x < 2000; x++) {
            var urunElement = document.getElementById("txturun" + x.toString());
            if (urunElement) {
                var urunAdi = urunElement.value;
                var miktar = document.getElementById("txtmiktar" + x.toString()).value || "1";
                var aratutar = document.getElementById("txtaratutar" + x.toString()).value || "0";
                
                kod += urunAdi + ";" + miktar + ";" + aratutar + "|";
                toplamTutar += parseFloat(aratutar) || 0;
            }
        }
        
        if (kod === "") {
            alert('Yazdırılacak ürün bulunamadı!');
            return;
        }
        
        // URL parametrelerini hazırla
        var parametreler = [
            'satislar=' + encodeURIComponent(kod),
            'satisid=F' + Date.now(),
            'tarih=' + encodeURIComponent(new Date().toISOString()),
            'odeme=Beklemede'
        ];
        
        var url = 'Makbuz.html?' + parametreler.join('&');
        
        // Makbuzu yeni pencerede aç
        var makbuzWindow = window.open(url, 'makbuz_mevcut', 
            'width=400,height=600,scrollbars=yes,resizable=yes');
            
        if (!makbuzWindow) {
            alert('Pop-up engellendi! Lütfen tarayıcı ayarlarından pop-up\'ları etkinleştirin.');
        } else {
            makbuzWindow.focus();
        }
        
    } catch (error) {
        console.error('Makbuz yazdırma hatası:', error);
        alert('Makbuz yazdırılırken hata oluştu!');
    }
}
// Barkoda göre ürün bulma
function urunBul(barkod) {
    for (var i = 0; i < urunListesi.length; i++) {
        if (urunListesi[i].Barkod === barkod) {
            return urunListesi[i];
        }
    }
    return null;
}

// Ürün adına göre arama (kısmi eşleşme)
function urunAdiAra(aramaMetni) {
    var bulunanlar = [];
    var aramaTerimi = aramaMetni.toUpperCase();
    
    for (var i = 0; i < urunListesi.length; i++) {
        if (urunListesi[i].Stok_Adi.toUpperCase().includes(aramaTerimi)) {
            bulunanlar.push(urunListesi[i]);
        }
    }
    return bulunanlar;
}

// Bu fonksiyonu Satis.js'e ekle
function urunListesiGoster(aramaSonucu = null) {
    var tbody = document.querySelector('#divurunlist table tbody');
    var gosterilecekUrunler = aramaSonucu || urunListesi;
    
    // Mevcut satırları temizle (başlık satırları hariç)
    while (tbody.rows.length > 2) {
        tbody.deleteRow(2);
    }
    
    // Ürünleri tabloya ekle
    for (var i = 0; i < gosterilecekUrunler.length; i++) {
        var urun = gosterilecekUrunler[i];
        var row = tbody.insertRow();
        
        row.innerHTML = 
            '<td><a href="#" class="btn btn-success btn-sm" onclick="urunSec(\'' + 
            urun.Barkod + '\')">SEÇ</a></td>' +
            '<td>' + urun.Barkod + '</td>' +
            '<td>' + urun.Stok_Adi + '</td>' +
            '<td>' + urun.Stok_Kodu + '</td>' +
            '<td>' + urun.Fiyat + '</td>';
    }
}

// Bu fonksiyonları Satis.js'e ekle
function urunSec(barkod) {
    var urun = urunBul(barkod);
    if (urun) {
        urunSepeteEkle(urun);
        divurunlist.style.visibility = 'hidden';
        if (tbl === tblhaziruruns.id)
        {
            favoriEkle(urun);
        }
        txtbarkod.focus();
    }
}

function urunSepeteEkle(urun) 
{
    if (tbl == tbluruns.id)
    {    
        urunekle(urun.Stok_Adi, urun.Fiyat, urun.id, miktar.toString());
    }
    else
    {
        hazirurunekle(urun.Stok_Adi);
    }
}


// Barkod okuma fonksiyonunu güncelle (mevcut urunBarkodOku fonksiyonuna ekle)
function urunBarkodOku(barkod) {
    var urun = urunBul(barkod);
    if (urun) {
        urunSepeteEkle(urun);
        document.getElementById('txtbarkod').value = '';
    } else {
        // Ürün bulunamadı - yeni ürün öner
        var cevap = confirm('Ürün bulunamadı!\nBarkod: ' + barkod + '\n\nBu ürünü sisteme eklemek ister misiniz?');
        
        if (cevap) {
            // Yeni ürün kayıt modalını aç ve barkodu doldur
            urunKayitAc();
            document.getElementById('txtyeniurun_barkod').value = barkod;
            urunOnizlemeGuncelle();
            document.getElementById('txtyeniurun_adi').focus();
        }
    }
}

// Veri yapıları
var localData = {
    favoriler: [],
    urunFiyatlari: {},
    satisGecmisi: [],
    gunlukSatislar: {},
    musteriler: []
};

// LocalStorage anahtarları
var STORAGE_KEYS = {
    FAVORILER: 'pos_favoriler',
    FIYATLAR: 'pos_fiyatlar', 
    SATIS_GECMISI: 'pos_satis_gecmisi',
    GUNLUK_SATISLAR: 'pos_gunluk_satislar',
    MUSTERILER: 'pos_musteriler',
    AYARLAR: 'pos_ayarlar'
};

// LocalStorage yardımcı fonksiyonları
function localKaydet(anahtar, veri) {
    try {
        localStorage.setItem(anahtar, JSON.stringify(veri));
        return true;
    } catch (e) {
        console.error('LocalStorage kayıt hatası:', e);
        return false;
    }
}

function localOku(anahtar) {
    try {
        var veri = localStorage.getItem(anahtar);
        return veri ? JSON.parse(veri) : null;
    } catch (e) {
        console.error('LocalStorage okuma hatası:', e);
        return null;
    }
}

function localSil(anahtar) {
    try {
        localStorage.removeItem(anahtar);
        return true;
    } catch (e) {
        console.error('LocalStorage silme hatası:', e);
        return false;
    }
}

// Tüm verileri yükle
function verileriYukle() {
    localData.favoriler = localOku(STORAGE_KEYS.FAVORILER) || [];
    localData.urunFiyatlari = localOku(STORAGE_KEYS.FIYATLAR) || {};
    localData.satisGecmisi = localOku(STORAGE_KEYS.SATIS_GECMISI) || [];
    localData.gunlukSatislar = localOku(STORAGE_KEYS.GUNLUK_SATISLAR) || {};
    localData.musteriler = localOku(STORAGE_KEYS.MUSTERILER) || [];
    urunFiyatlariGuncelle();
}



// Favori ürün silme
function favoriSil(barkod) {
    localData.favoriler = localData.favoriler.filter(f => f.Barkod !== barkod);
    localKaydet(STORAGE_KEYS.FAVORILER, localData.favoriler);
    
}

// Favori kullanım sayısını artır
function favoriKullanimArtir(barkod) {
    var favori = localData.favoriler.find(f => f.Barkod === barkod);
    if (favori) {
        favori.KullanimSayisi++;
        favori.SonKullanimTarihi = new Date().toISOString();
        localKaydet(STORAGE_KEYS.FAVORILER, localData.favoriler);
    }
}

// Ürün fiyatı kaydetme
// Mevcut urunFiyatiKaydet fonksiyonunu güncelle (kaynak bilgisi eklendi)
function urunFiyatiKaydet(barkod, fiyat, kaynak = 'satis') {
    var numFiyat = parseFloat(fiyat);
    if (numFiyat < 0) {
        console.warn('Geçersiz fiyat:', fiyat);
        return false;
    }
    
    // Mevcut fiyat bilgisini al
    var mevcutBilgi = localData.urunFiyatlari[barkod] || {};
    
    localData.urunFiyatlari[barkod] = {
        fiyat: numFiyat,
        guncellemeTarihi: new Date().toISOString(),
        guncellemeAdedi: (mevcutBilgi.guncellemeAdedi || 0) + 1,
        kaynak: kaynak, // 'satis', 'fiyat_modal', 'toplu', vs.
        oncekiFiyat: mevcutBilgi.fiyat || 0
    };
    
    // Ürün listesindeki fiyatı da güncelle
    var urun = urunListesi.find(u => u.Barkod === barkod);
    if (urun) {
        urun.Fiyat = numFiyat;
    }
    
    // LocalStorage'a kaydet
    var kaydedildi = localKaydet(STORAGE_KEYS.FIYATLAR, localData.urunFiyatlari);
    
    if (kaydedildi) {
        console.log('Fiyat kaydedildi:', barkod, numFiyat, 'Kaynak:', kaynak);
        return true;
    } else {
        console.error('Fiyat kaydetme hatası:', barkod);
        return false;
    }
}

// Fiyat geçmişi görüntüleme (opsiyonel)
function fiyatGecmisiGoster(barkod) {
    var fiyatBilgisi = localData.urunFiyatlari[barkod];
    if (fiyatBilgisi) {
        var mesaj = 'FİYAT GEÇMİŞİ\n\n' +
                   'Mevcut Fiyat: ' + fiyatBilgisi.fiyat.toFixed(2) + ' ₺\n' +
                   'Önceki Fiyat: ' + (fiyatBilgisi.oncekiFiyat || 0).toFixed(2) + ' ₺\n' +
                   'Güncelleme Sayısı: ' + (fiyatBilgisi.guncellemeAdedi || 0) + '\n' +
                   'Son Güncelleme: ' + new Date(fiyatBilgisi.guncellemeTarihi).toLocaleString('tr-TR') + '\n' +
                   'Kaynak: ' + (fiyatBilgisi.kaynak || 'Bilinmiyor');
        
        alert(mesaj);
    } else {
        alert('Bu ürün için fiyat bilgisi bulunamadı.');
    }
}

// Ürün fiyatı getirme
function urunFiyatiGetir(barkod) {
    var fiyatBilgisi = localData.urunFiyatlari[barkod];
    return fiyatBilgisi ? fiyatBilgisi.fiyat : 0;
}

// Toplu fiyat güncelleme
function toplufiyatGuncelle(fiyatListesi) {
    fiyatListesi.forEach(function(item) {
        urunFiyatiKaydet(item.barkod, item.fiyat);
    });
}

// Satış kaydetme
function satisKaydet(satisVerisi) {
    var satis = {
        id: 'S' + Date.now(),
        tarih: new Date().toISOString(),
        urunler: satisVerisi.urunler,
        toplamTutar: satisVerisi.toplamTutar,
        odemeTipi: satisVerisi.odemeTipi, // 'Nakit', 'Pos', 'Veresiye'
        musteri: satisVerisi.musteri || null,
        indirim: satisVerisi.indirim || 0,
        kdvTutar: satisVerisi.kdvTutar || 0
    };
    
    // Satış geçmişine ekle
    localData.satisGecmisi.push(satis);
    
    // Son 1000 satışı tut (performans için)
    if (localData.satisGecmisi.length > 1000) {
        localData.satisGecmisi = localData.satisGecmisi.slice(-1000);
    }
    
    // Günlük satışları güncelle
    gunlukSatisGuncelle(satis);
    
    // Favorilerde kullanım sayılarını artır
    satis.urunler.forEach(function(urun) {
        favoriKullanimArtir(urun.barkod);
    });
    
    // Verileri kaydet
    localKaydet(STORAGE_KEYS.SATIS_GECMISI, localData.satisGecmisi);
    localKaydet(STORAGE_KEYS.GUNLUK_SATISLAR, localData.gunlukSatislar);
    
    console.log('Satış kaydedildi:', satis.id);
    return satis.id;
}

// Günlük satış güncelleme
function gunlukSatisGuncelle(satis) {
    var gun = satis.tarih.split('T')[0]; // YYYY-MM-DD formatı
    
    if (!localData.gunlukSatislar[gun]) {
        localData.gunlukSatislar[gun] = {
            toplamSatis: 0,
            toplamTutar: 0,
            nakit: 0,
            pos: 0,
            veresiye: 0,
            satisAdedi: 0
        };
    }
    
    var gunluk = localData.gunlukSatislar[gun];
    gunluk.satisAdedi++;
    gunluk.toplamTutar += satis.toplamTutar;
    
    switch (satis.odemeTipi) {
        case 'Nakit': gunluk.nakit += satis.toplamTutar; break;
        case 'Pos': gunluk.pos += satis.toplamTutar; break;
        case 'Veresiye': gunluk.veresiye += satis.toplamTutar; break;
    }
}

// Veri export
function verileriExportEt() {
    var tumVeriler = {
        favoriler: localData.favoriler,
        fiyatlar: localData.urunFiyatlari,
        satisGecmisi: localData.satisGecmisi,
        gunlukSatislar: localData.gunlukSatislar,
        exportTarihi: new Date().toISOString()
    };
    
    var jsonString = JSON.stringify(tumVeriler, null, 2);
    var blob = new Blob([jsonString], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'pos_yedek_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    
    URL.revokeObjectURL(url);
}

// Veri import
function verileriImportEt(fileInput) {
    var file = fileInput.files[0];
    if (!file) return;
    
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var importData = JSON.parse(e.target.result);
            
            if (confirm('Mevcut veriler silinecek ve yedek yüklenecek. Devam edilsin mi?')) {
                localData = importData;
                
                // Verileri kaydet
                localKaydet(STORAGE_KEYS.FAVORILER, localData.favoriler);
                localKaydet(STORAGE_KEYS.FIYATLAR, localData.urunFiyatlari);
                localKaydet(STORAGE_KEYS.SATIS_GECMISI, localData.satisGecmisi);
                localKaydet(STORAGE_KEYS.GUNLUK_SATISLAR, localData.gunlukSatislar);
                
                alert('Veriler başarıyla yüklendi!');
                location.reload();
            }
        } catch (error) {
            alert('Dosya formatı hatalı!');
        }
    };
    reader.readAsText(file);
}

// Ürün listesindeki fiyatları localStorage'dan güncelle
function urunFiyatlariGuncelle() {
    var guncellenenSayisi = 0;
    
    // Her ürün için localStorage'da kayıtlı fiyat var mı kontrol et
    for (var i = 0; i < urunListesi.length; i++) {
        var urun = urunListesi[i];
        var kayitliFiyat = localData.urunFiyatlari[urun.Barkod];
        
        if (kayitliFiyat && kayitliFiyat.fiyat > 0) {
            // LocalStorage'daki fiyat varsa güncelle
            urunListesi[i].Fiyat = kayitliFiyat.fiyat;
            guncellenenSayisi++;
        }
    }
    
    console.log(guncellenenSayisi + ' ürünün fiyatı güncellendi.');
    return guncellenenSayisi;
}

// Belirli bir ürünün fiyatını güncelle
function tekUrunFiyatGuncelle(barkod, yeniFiyat) {
    // Ürün listesinde bul ve güncelle
    var urun = urunListesi.find(u => u.Barkod === barkod);
    if (urun) {
        urun.Fiyat = parseFloat(yeniFiyat);
    }
    
    // LocalStorage'a da kaydet
    urunFiyatiKaydet(barkod, yeniFiyat);
    
    console.log('Ürün fiyatı güncellendi:', barkod, yeniFiyat);
}

// Geçmiş satışları açma
function gecmisSatislariAc() {
    satislariListele();
    divgecmissatislar.style.visibility = 'visible';
    txtbarkod.blur(); // Odağı kaldır
}

// Geçmiş satışları kapatma
function gecmisSatislariKapat() {
    divgecmissatislar.style.visibility = 'hidden';
    txtbarkod.focus();
}

// Satışları listeleme
function satislariListele(filtreSatislar = null) {
    var tbody = document.getElementById('tblgecmissatislar');
    var gosterilecekSatislar = filtreSatislar || localData.satisGecmisi.slice().reverse(); // En yeniler üstte
    
    // Tabloyu temizle
    tbody.innerHTML = '';
    
    var toplamSatisSayisi = 0;
    var toplamTutar = 0;
    
    gosterilecekSatislar.forEach(function(satis) {
        var row = tbody.insertRow();
        
        // Tarih formatı
        var tarih = new Date(satis.tarih);
        var tarihStr = tarih.toLocaleDateString('tr-TR') + '<br>' + 
                      tarih.toLocaleTimeString('tr-TR', {hour: '2-digit', minute: '2-digit'});
        
        // Ürün özeti (ilk 2 ürün + toplam adet)
        var urunOzeti = '';
        var toplamAdet = 0;
        
        if (satis.urunler && satis.urunler.length > 0) {
            satis.urunler.forEach(function(urun) {
                toplamAdet += urun.miktar;
            });
            
            if (satis.urunler.length <= 2) {
                urunOzeti = satis.urunler.map(u => u.urunAdi.substring(0, 20) + '...').join('<br>');
            } else {
                urunOzeti = satis.urunler[0].urunAdi.substring(0, 20) + '...<br>' +
                           satis.urunler[1].urunAdi.substring(0, 20) + '...<br>' +
                           '<small>+' + (satis.urunler.length - 2) + ' ürün daha</small>';
            }
        }
        
        // Müşteri bilgisi
        var musteriStr = satis.musteri && satis.musteri !== '0' ? 
                        'Müşteri: ' + satis.musteri : 'Perakende';
        
        // Ödeme tipi rengi
        var odemeClass = '';
        switch(satis.odemeTipi) {
            case 'Nakit': odemeClass = 'text-success'; break;
            case 'Pos': odemeClass = 'text-primary'; break;
            case 'Veresiye': odemeClass = 'text-warning'; break;
        }
        
        row.innerHTML = 
            '<td><small><strong>' + satis.id + '</strong></small></td>' +
            '<td><small>' + tarihStr + '</small></td>' +
            '<td><small>' + urunOzeti + '</small></td>' +
            '<td class="text-center"><strong>' + toplamAdet + '</strong></td>' +
            '<td class="text-right"><strong>' + satis.toplamTutar.toFixed(2) + ' ₺</strong></td>' +
            '<td class="' + odemeClass + '"><strong>' + satis.odemeTipi + '</strong></td>' +
            '<td><small>' + musteriStr + '</small></td>' +
            '<td>' +
                '<a href="#" class="btn btn-info btn-xs" onclick="satisDetayGoster(\'' + satis.id + '\')" title="Detay">📋</a> ' +
                '<a href="#" class="btn btn-success btn-xs" onclick="satirMakbuzYazdir(\'' + satis.id + '\')" title="Fiş">🖨️</a> ' +
                '<a href="#" class="btn btn-warning btn-xs" onclick="satirIadeet(\'' + satis.id + '\')" title="İade">↩️</a>' +
            '</td>';
        
        toplamSatisSayisi++;
        toplamTutar += satis.toplamTutar;
    });
    
    // Özet bilgileri güncelle
    document.getElementById('lbltoplamsatis').innerText = toplamSatisSayisi;
    document.getElementById('lbltoplamtutar').innerText = toplamTutar.toFixed(2);
    
    console.log('Satış listesi güncellendi:', toplamSatisSayisi, 'satış');
}

// Satış detayını gösterme
function satisDetayGoster(satisId) {
    var satis = localData.satisGecmisi.find(s => s.id === satisId);
    if (!satis) {
        alert('Satış bulunamadı!');
        return;
    }
    
    // Detay bilgilerini doldur
    document.getElementById('lbldetaysatisid').innerText = satis.id;
    document.getElementById('lbldetaytarih').innerText = new Date(satis.tarih).toLocaleString('tr-TR');
    document.getElementById('lbldetayodeme').innerText = satis.odemeTipi;
    document.getElementById('lbldetaymusteri').innerText = satis.musteri || 'Perakende';
    document.getElementById('lbldetaytoplam').innerText = satis.toplamTutar.toFixed(2);
    
    // Ürün detaylarını listele
    var tbody = document.getElementById('tblsatisdetay');
    tbody.innerHTML = '';
    
    satis.urunler.forEach(function(urun) {
        var row = tbody.insertRow();
        row.innerHTML = 
            '<td><small>' + (urun.barkod || '-') + '</small></td>' +
            '<td>' + urun.urunAdi + '</td>' +
            '<td class="text-center">' + urun.miktar + '</td>' +
            '<td class="text-right">' + urun.birimFiyat.toFixed(2) + ' ₺</td>' +
            '<td class="text-right"><strong>' + urun.aratutar.toFixed(2) + ' ₺</strong></td>' +
            '<td>' + urun.birim + '</td>';
    });
    
    divsatisdetay.style.visibility = 'visible';
}

// Satışları filtreleme
function satislariFiltrele() {
    var filtre = document.getElementById('selfiltre').value;
    var filtrelenmis = [];
    var bugun = new Date();
    
    switch(filtre) {
        case 'bugun':
            var bugunStr = bugun.toISOString().split('T')[0];
            filtrelenmis = localData.satisGecmisi.filter(s => s.tarih.startsWith(bugunStr));
            break;
            
        case 'dun':
            var dun = new Date(bugun);
            dun.setDate(bugun.getDate() - 1);
            var dunStr = dun.toISOString().split('T')[0];
            filtrelenmis = localData.satisGecmisi.filter(s => s.tarih.startsWith(dunStr));
            break;
            
        case 'bu_hafta':
            var haftaBasi = new Date(bugun);
            haftaBasi.setDate(bugun.getDate() - bugun.getDay());
            filtrelenmis = localData.satisGecmisi.filter(s => 
                new Date(s.tarih) >= haftaBasi
            );
            break;
            
        case 'bu_ay':
            var ayBasi = new Date(bugun.getFullYear(), bugun.getMonth(), 1);
            filtrelenmis = localData.satisGecmisi.filter(s => 
                new Date(s.tarih) >= ayBasi
            );
            break;
            
        case 'nakit':
            filtrelenmis = localData.satisGecmisi.filter(s => s.odemeTipi === 'Nakit');
            break;
            
        case 'pos':
            filtrelenmis = localData.satisGecmisi.filter(s => s.odemeTipi === 'Pos');
            break;
            
        case 'veresiye':
            filtrelenmis = localData.satisGecmisi.filter(s => s.odemeTipi === 'Veresiye');
            break;
            
        default:
            filtrelenmis = localData.satisGecmisi;
    }
    
    // Arama filtresini de uygula
    var aramaMetni = document.getElementById('txtaramasatis').value.trim();
    if (aramaMetni) {
        filtrelenmis = filtrelenmis.filter(s => 
            s.urunler.some(u => 
                u.urunAdi.toUpperCase().includes(aramaMetni.toUpperCase()) ||
                u.barkod.includes(aramaMetni)
            )
        );
    }
    
    satislariListele(filtrelenmis);
}

// Satışlarda arama
function satislariAra() {
    satislariFiltrele(); // Filtre fonksiyonu aramayı da içeriyor
}

// Satışları Excel'e aktarma
function satirSatislariExport() {
    var satirlar = [];
    var tbody = document.getElementById('tblgecmissatislar');
    
    // Başlık satırı
    satirlar.push([
        'Satış ID', 'Tarih', 'Saat', 'Ürün Adı', 'Barkod', 'Miktar', 
        'Birim Fiyat', 'Ara Tutar', 'Ödeme Tipi', 'Müşteri', 'Toplam Tutar'
    ]);
    
    // Mevcut filtrelenmiş satışları al
    var gosterilecekSatislar = getCurrentFilteredSales();
    
    gosterilecekSatislar.forEach(function(satis) {
        var tarih = new Date(satis.tarih);
        var tarihStr = tarih.toLocaleDateString('tr-TR');
        var saatStr = tarih.toLocaleTimeString('tr-TR');
        
        satis.urunler.forEach(function(urun) {
            satirlar.push([
                satis.id,
                tarihStr,
                saatStr,
                urun.urunAdi,
                urun.barkod || '',
                urun.miktar,
                urun.birimFiyat,
                urun.aratutar,
                satis.odemeTipi,
                satis.musteri || 'Perakende',
                satis.toplamTutar
            ]);
        });
    });
    
    // CSV formatına çevir
    var csvContent = satirlar.map(satir => 
        satir.map(hucre => 
            typeof hucre === 'string' && hucre.includes(',') ? 
            '"' + hucre + '"' : hucre
        ).join(',')
    ).join('\n');
    
    // BOM ekle (Türkçe karakterler için)
    var bom = '\uFEFF';
    var blob = new Blob([bom + csvContent], { type: 'text/csv;charset=utf-8;' });
    
    // İndir
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'satislar_' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
    
    URL.revokeObjectURL(link.href);
}

// Mevcut filtrelenmiş satışları alma yardımcı fonksiyonu
function getCurrentFilteredSales() {
    var filtre = document.getElementById('selfiltre').value;
    var aramaMetni = document.getElementById('txtaramasatis').value.trim();
    
    // Filtreleme mantığını tekrarla (satislariFiltrele fonksiyonundan)
    // ... (Aynı filtre mantığı)
    
    return localData.satisGecmisi; // Basitleştirilmiş - gerçekte filtre uygula
}

// Geçmiş satıştan fiş yazdırma
function satirMakbuzYazdir(satisId) {
    var satis = localData.satisGecmisi.find(s => s.id === satisId);
    if (!satis) {
        alert('Satış bulunamadı!');
        return;
    }
    
    try {
        // Satış verilerini string formatına çevir
        var fiskodu = satis.urunler.map(function(urun) {
            return urun.urunAdi + ";" + urun.miktar + ";" + urun.aratutar;
        }).join("|");
        
        // Makbuz parametrelerini hazırla
        var parametreler = [
            'satislar=' + encodeURIComponent(fiskodu),
            'satisid=' + encodeURIComponent(satis.id),
            'tarih=' + encodeURIComponent(satis.tarih),
            'odeme=' + encodeURIComponent(satis.odemeTipi)
        ];
        
        if (satis.musteri && satis.musteri !== '0') {
            parametreler.push('musteri=' + encodeURIComponent(satis.musteri));
        }
        
        var url = 'Makbuz.html?' + parametreler.join('&');
        
        // Yeni pencerede makbuzu aç
        var makbuzWindow = window.open(url, 'makbuz_' + satis.id, 
            'width=400,height=600,scrollbars=yes,resizable=yes');
            
        if (!makbuzWindow) {
            alert('Pop-up engellendi! Lütfen pop-up engelleyiciyi kapatın.');
            return;
        }
        
        // Pencere odaklanması
        makbuzWindow.focus();
        
        console.log('Makbuz yazdırma penceresi açıldı:', satis.id);
        
    } catch (error) {
        console.error('Makbuz yazdırma hatası:', error);
        alert('Makbuz yazdırılırken hata oluştu: ' + error.message);
    }
}

// İade işlemi
function satirIadeet(satisId) {
    if (confirm('Bu satışı iade etmek istediğinizden emin misiniz?')) {
        var satis = localData.satisGecmisi.find(s => s.id === satisId);
        if (satis) {
            // İade kaydı oluştur
            var iadeKaydi = {
                id: 'I' + Date.now(),
                tarih: new Date().toISOString(),
                originalSatisId: satisId,
                urunler: satis.urunler,
                toplamTutar: -satis.toplamTutar, // Negatif tutar
                odemeTipi: 'İade',
                musteri: satis.musteri,
                tip: 'iade'
            };
            
            // İade kaydını ekle
            localData.satisGecmisi.push(iadeKaydi);
            localKaydet(STORAGE_KEYS.SATIS_GECMISI, localData.satisGecmisi);
            
            alert('İade işlemi kaydedildi. İade ID: ' + iadeKaydi.id);
            satislariListele(); // Listeyi yenile
        }
    }
}

// Favori ürünler için gelişmiş veri yapısı
var favoriData = {
    favoriler: [],
    sonGuncelleme: null,
    maksimumFavori: 50 // Maksimum favori sayısı
};

// Favori ürün verilerini localStorage'a kaydetme
function favoriVerileriniKaydet() {
    try {
        favoriData.sonGuncelleme = new Date().toISOString();
        localKaydet(STORAGE_KEYS.FAVORILER, favoriData);
        return true;
    } catch (error) {
        console.error('Favori veriler kaydedilirken hata:', error);
        return false;
    }
}

// Favori ürün verilerini localStorage'dan yükleme
function favoriVerileriniYukle() {
    try {
        var yuklenenveri = localOku(STORAGE_KEYS.FAVORILER);
        if (yuklenenveri && yuklenenveri.favoriler) {
            favoriData = {
                favoriler: yuklenenveri.favoriler || [],
                sonGuncelleme: yuklenenveri.sonGuncelleme || null,
                maksimumFavori: yuklenenveri.maksimumFavori || 50
            };
        } else {
            // Eski cookie sisteminden favori al (backward compatibility)
            eskiCookieFavorileriAl();
        }
        
        console.log('Favori veriler yüklendi:', favoriData.favoriler.length, 'favori');
        return true;
    } catch (error) {
        console.error('Favori veriler yüklenirken hata:', error);
        return false;
    }
}

// Eski cookie sisteminden favori alma (geriye uyumluluk)
function eskiCookieFavorileriAl() {
    try {
        var crz = getcerez("uruns");
        if (crz && crz !== "") {
            var eskiFavoriler = crz.split('|').filter(f => f.trim() !== '');
            
            eskiFavoriler.forEach(function(urunAdi) {
                if (urunAdi.trim() !== '') {
                    // Ürün adından ürün bilgisini bul
                    var urun = urunListesi.find(u => u.Stok_Adi === urunAdi.trim());
                    if (urun) {
                        favoriEkleInternal(urun, 'cookie_transfer');
                    }
                }
            });
            
            // Eski cookie'yi temizle
            document.cookie = "uruns=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
            console.log('Cookie\'den', eskiFavoriler.length, 'favori aktarıldı.');
        }
    } catch (error) {
        console.error('Cookie\'den favori aktarımında hata:', error);
    }
}

// Favori ürün ekleme (internal - kaydetmeden)
function favoriEkleInternal(urun, kaynak = 'manuel') {
    // Zaten var mı kontrol et
    var mevcutIndex = favoriData.favoriler.findIndex(f => f.Barkod === urun.Barkod);
    
    if (mevcutIndex >= 0) {
        // Mevcut ise kullanım sayısını artır
        favoriData.favoriler[mevcutIndex].KullanimSayisi++;
        favoriData.favoriler[mevcutIndex].SonKullanimTarihi = new Date().toISOString();
        return false; // Yeni eklenmedi
    } else {
        // Yeni favori ekle
        var yeniFavori = {
            id: 'fav_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            Barkod: urun.Barkod,
            Stok_Kodu: urun.Stok_Kodu,
            Stok_Adi: urun.Stok_Adi,
            Birim: urun.Birim,
            Fiyat: urun.Fiyat || 0,
            EklenmeTarihi: new Date().toISOString(),
            KullanimSayisi: 0,
            SonKullanimTarihi: null,
            Kaynak: kaynak,
            Aktif: true
        };
        
        favoriData.favoriler.push(yeniFavori);
        
        // Maksimum sayı kontrolü
        if (favoriData.favoriler.length > favoriData.maksimumFavori) {
            // En az kullanılan favoriyi çıkar
            favoriData.favoriler.sort((a, b) => a.KullanimSayisi - b.KullanimSayisi);
            favoriData.favoriler.shift();
        }
        
        return true; // Yeni eklendi
    }
}

// Favori ürün ekleme (public - kaydederek)
function favoriEkle(urun) {
    var eklendi = favoriEkleInternal(urun, 'manuel');
    
    if (eklendi) {
        favoriVerileriniKaydet();
        favoriTabloyuGuncelle();
        console.log('Favori eklendi:', urun.Stok_Adi);
        return true;
    } else {
        console.log('Ürün zaten favorilerde:', urun.Stok_Adi);
        favoriVerileriniKaydet(); // Kullanım sayısı güncellenmesi için
        return false;
    }
}

// Favori ürün silme
function favoriSil(favoriId) {
    var oncekiSayi = favoriData.favoriler.length;
    favoriData.favoriler = favoriData.favoriler.filter(f => f.id !== favoriId);
    
    if (favoriData.favoriler.length < oncekiSayi) {
        favoriVerileriniKaydet();
        favoriTabloyuGuncelle();
        console.log('Favori silindi:', favoriId);
        return true;
    } else {
        console.warn('Silinecek favori bulunamadı:', favoriId);
        return false;
    }
}

// Barkod ile favori silme
function favoriBarkodSil(barkod) {
    var oncekiSayi = favoriData.favoriler.length;
    favoriData.favoriler = favoriData.favoriler.filter(f => f.Barkod !== barkod);
    
    if (favoriData.favoriler.length < oncekiSayi) {
        favoriVerileriniKaydet();
        favoriTabloyuGuncelle();
        return true;
    }
    return false;
}

// Favori ürünler tablosunu güncelle
function favoriTabloyuGuncelle() {
    var tbody = document.getElementById('tblhaziruruns');
    if (!tbody) {
        console.warn('Favori tablosu bulunamadı!');
        return;
    }
    
    // Mevcut tabloyu temizle
    tbody.innerHTML = '';
    
    favoriVerileriniYukle();
    // Favorileri kullanım sıklığına göre sırala (çok kullanılan üstte)
    var siraliZavoriler = favoriData.favoriler
        .filter(f => f.Aktif !== false)
        .sort((a, b) => {
            // Önce kullanım sayısına göre, sonra son kullanım tarihine göre
            if (b.KullanimSayisi !== a.KullanimSayisi) {
                return b.KullanimSayisi - a.KullanimSayisi;
            }
            return new Date(b.SonKullanimTarihi || b.EklenmeTarihi) - new Date(a.SonKullanimTarihi || a.EklenmeTarihi);
        });
    
    siraliZavoriler.forEach(function(favori, index) {
        var row = tbody.insertRow();
        row.id = "trhazir" + index;
        row.setAttribute('data-favori-id', favori.id);
        
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        
        // Silme butonu
        cell0.innerHTML = 
            '<a href="#" class="btn btn-danger btn-sm" ' +
            'onclick="favoriSilButon(\'' + favori.id + '\')" ' +
            'title="Favoriden Çıkar">' +
            '<img src="./res/cikar.png" style="width:16px;height:16px;" />' +
            '</a>';
        cell0.style.width = "15%";
        cell0.style.textAlign = "center";
        
        // Ürün adı ve bilgileri
        var kullanimBilgisi = favori.KullanimSayisi > 0 ? 
                             ' (' + favori.KullanimSayisi + 'x)' : '';
        var fiyatBilgisi = favori.Fiyat > 0 ? 
                          ' - ' + favori.Fiyat.toFixed(2) + '₺' : '';
        
        var urunMetni = favori.Stok_Adi;
        if (urunMetni.length > 25) {
            urunMetni = urunMetni.substring(0, 25) + '...';
        }
        
        cell1.innerHTML = 
            '<a href="#" class="btn btn-light btn-sm w-100 text-left" ' +
            'onclick="urunara2(\'' + favori.Stok_Adi + '\')" ' +
            'title="' + favori.Stok_Adi + '">' +
            '<strong>' + urunMetni + '</strong>' +
            '<br><small class="text-muted">' + 
            favori.Stok_Kodu + kullanimBilgisi + fiyatBilgisi +
            '</small>' +
            '</a>';
    });
    
    // Favori sayısı bilgisi
    if (siraliZavoriler.length === 0) {
        var row = tbody.insertRow();
        var cell = row.insertCell(0);
        cell.colSpan = 2;
        cell.innerHTML = '<div class="text-center text-muted p-2">Henüz favori ürün yok</div>';
    }
    
    console.log('Favori tablosu güncellendi:', siraliZavoriler.length, 'ürün');
}

// Favori butondan silme
function favoriSilButon(favoriId) {
    var favori = favoriData.favoriler.find(f => f.id === favoriId);
    var mesaj = favori ? 
               '"' + favori.Stok_Adi + '" ürününü favorilerden çıkarmak istediğinizden emin misiniz?' :
               'Bu ürünü favorilerden çıkarmak istediğinizden emin misiniz?';
    
    if (confirm(mesaj)) {
        favoriSil(favoriId);
    }
}

// Favori ürün seçme
function favoriUrunSec(barkod) {
    var urun = urunBul(barkod);
    if (urun) {
        // Kullanım sayısını artır
        favoriKullanimArtir(barkod);
        
        // Sepete ekle
        urunSepeteEkle(urun);
        
        console.log('Favori ürün seçildi:', urun.Stok_Adi);
    } else {
        favoriEkle(urun);
    }
}

// Favori kullanım sayısını artırma
function favoriKullanimArtir(barkod) {
    var favori = favoriData.favoriler.find(f => f.Barkod === barkod);
    if (favori) {
        favori.KullanimSayisi++;
        favori.SonKullanimTarihi = new Date().toISOString();
        favoriVerileriniKaydet();
        
        // Tabloyu güncelleme (isteğe bağlı - performans için kapatılabilir)
        // favoriTabloyuGuncelle();
    }
}

function sayfaYuklendi() {
    console.log('Sayfa yükleniyor...');
    
    try {
        // Verileri yükle
        verileriYukle();
        
        yeniUrunVerileriniYukle();
        var eklenenUrunSayisi = yeniUrunleriEntegre();
        // Ürün fiyatlarını güncelle
        var guncellenenSayisi = urunFiyatlariGuncelle();
        
        // Diğer işlemler
        odaklan();
        
        // Ürün listesini hazırla
        if (typeof urunListesi !== 'undefined' && urunListesi.length > 0) {
            urunListesiGoster();
        }
        
        marketBilgileriYukle();
        musteriVerileriniYukle();
        // Favori tablosunu güncelle - ZORUNLU ÇAĞRI
        setTimeout(function() {
            favoriTabloyuGuncelle();
        }, 100);
        
        setTimeout(function() {
            firmaAdiArkaplanGuncelle();
        }, 500);
        // Favoriler durumunu kontrol et
        var favorilerDurum = getcerez("favoriler");
        if (favorilerDurum === "ac") {
            favori_ac();
        }
        
        console.log('Sistem hazır!', {
            toplamUrun: typeof urunListesi !== 'undefined' ? urunListesi.length : 0,
            fiyatiOlanUrun: typeof urunListesi !== 'undefined' ? urunListesi.filter(u => u.Fiyat > 0).length : 0,
            favoriler: favoriData.favoriler.length,
            guncellemeFiyat: guncellenenSayisi
        });
        
    } catch (error) {
        console.error('Sayfa yüklenirken hata:', error);
    }
}

// MARKET BİLGİLERİ YÖNETİMİ
// ============================================================================

// Market bilgileri veri yapısı
var marketBilgileri = {
    firmaAdi: '',
    telefon: '',
    website: '',
    adres: '',
    sonGuncelleme: null
};

// LocalStorage anahtarı
var MARKET_BILGILERI_KEY = 'pos_market_bilgileri';

// Market bilgilerini localStorage'a kaydetme
function marketBilgileriKaydet() {
    try {
        // Form verilerini al
        var firmaAdi = document.getElementById('txtfirmaadi').value.trim();
        var telefon = document.getElementById('txttelefon').value.trim();
        var website = document.getElementById('txtwebsite').value.trim();
        var adres = document.getElementById('txtadres').value.trim();
        
        // Zorunlu alan kontrolü
        if (firmaAdi === '') {
            alert('Firma adı zorunludur!');
            document.getElementById('txtfirmaadi').focus();
            return false;
        }
        
        // Website URL düzeltmesi
        if (website && !website.startsWith('http://') && !website.startsWith('https://')) {
            if (!website.startsWith('www.')) {
                website = 'www.' + website;
            }
            website = 'http://' + website;
        }
        
        // Veri yapısını güncelle
        marketBilgileri = {
            firmaAdi: firmaAdi,
            telefon: telefon,
            website: website,
            adres: adres,
            sonGuncelleme: new Date().toISOString()
        };
        
        // localStorage'a kaydet
        var kaydedildi = localKaydet(MARKET_BILGILERI_KEY, marketBilgileri);
        
        if (kaydedildi) 
        {
            setTimeout(function() {
            firmaAdiArkaplanGuncelle();
        }, 500);
            alert('Market bilgileri başarıyla kaydedildi!');
            marketBilgileriKapat();
            console.log('Market bilgileri kaydedildi:', marketBilgileri);
            return true;
        } else {
            alert('Bilgiler kaydedilirken hata oluştu!');
            return false;
        }
        
    } catch (error) {
        console.error('Market bilgileri kaydetme hatası:', error);
        alert('Bilgiler kaydedilirken hata oluştu: ' + error.message);
        return false;
    }
}

// Market bilgilerini localStorage'dan yükleme
function marketBilgileriYukle() {
    try {
        var yuklenenveri = localOku(MARKET_BILGILERI_KEY);
        
        if (yuklenenveri) {
            marketBilgileri = {
                firmaAdi: yuklenenveri.firmaAdi || '',
                telefon: yuklenenveri.telefon || '',
                website: yuklenenveri.website || '',
                adres: yuklenenveri.adres || '',
                sonGuncelleme: yuklenenveri.sonGuncelleme || null
            };
            
            console.log('Market bilgileri yüklendi:', marketBilgileri.firmaAdi);
            return true;
        } else {
            // İlk kullanım - varsayılan değerler
            marketBilgileri = {
                firmaAdi: 'MAĞAZA ADI',
                telefon: '0XXX XXX XX XX',
                website: 'www.firmaadi.com',
                adres: 'Adres Bilgisi',
                sonGuncelleme: null
            };
            console.log('İlk kullanım - varsayılan market bilgileri ayarlandı');
            return false;
        }
        
    } catch (error) {
        console.error('Market bilgileri yükleme hatası:', error);
        marketBilgileri = {
            firmaAdi: 'MAĞAZA ADI',
            telefon: '0XXX XXX XX XX',
            website: 'www.firmaadi.com',
            adres: 'Adres Bilgisi',
            sonGuncelleme: null
        };
        return false;
    }
}

// Market bilgileri modalını açma
function marketBilgileriAc() {
    try {
        // Mevcut verileri yükle
        marketBilgileriYukle();
        
        // Form alanlarını doldur
        document.getElementById('txtfirmaadi').value = marketBilgileri.firmaAdi;
        document.getElementById('txttelefon').value = marketBilgileri.telefon;
        
        // Website'den http(s):// kısmını çıkar
        var websiteGoster = marketBilgileri.website.replace(/^https?:\/\//, '');
        document.getElementById('txtwebsite').value = websiteGoster;
        
        document.getElementById('txtadres').value = marketBilgileri.adres;
        
        // Modal'ı göster
        document.getElementById('divmarketbilgileri').style.visibility = 'visible';
        document.getElementById('txtfirmaadi').focus();
        
        console.log('Market bilgileri modalı açıldı');
        
    } catch (error) {
        console.error('Market bilgileri modal açma hatası:', error);
        alert('Market bilgileri açılırken hata oluştu!');
    }
}

// Market bilgileri modalını kapatma
function marketBilgileriKapat() {
    document.getElementById('divmarketbilgileri').style.visibility = 'hidden';
    document.getElementById('txtbarkod').focus();
    console.log('Market bilgileri modalı kapatıldı');
}

// Market bilgilerini getirme (makbuz için)
function getMarketBilgileri() {
    return {
        firmaAdi: marketBilgileri.firmaAdi || 'MAĞAZA ADI',
        telefon: marketBilgileri.telefon || '0XXX XXX XX XX',
        website: marketBilgileri.website || 'www.firmaadi.com',
        adres: marketBilgileri.adres || 'Adres Bilgisi'
    };
}

// Telefon numarası formatla
function telefonFormatla(telefon) {
    if (!telefon) return '';
    
    // Sadece rakamları al
    var sadece_rakam = telefon.replace(/\D/g, '');
    
    // Türkiye formatına çevir
    if (sadece_rakam.length === 11 && sadece_rakam.startsWith('0')) {
        return sadece_rakam.substring(0, 4) + ' ' + 
               sadece_rakam.substring(4, 7) + ' ' + 
               sadece_rakam.substring(7, 9) + ' ' + 
               sadece_rakam.substring(9, 11);
    }
    
    return telefon; // Formatlanamazsa olduğu gibi döndür
}


// MÜŞTERİ YÖNETİMİ SİSTEMİ
// ============================================================================

// Müşteri verileri
var musteriData = {
    musteriler: [],
    secilenMusteri: null,
    sonGuncelleme: null
};

var veresiyeData = {
    satislar: [],
    sonGuncelleme: null
};

// LocalStorage anahtarları
var MUSTERI_KEY = 'pos_musteriler';
var VERESIYE_KEY = 'pos_veresiye_satislar';

// Müşteri verilerini localStorage'dan yükleme
function musteriVerileriniYukle() {
    try {
        var yuklenenveri = localOku(MUSTERI_KEY);
        var veresiyeVeri = localOku(VERESIYE_KEY);
        
        if (yuklenenveri && Array.isArray(yuklenenveri.musteriler)) {
            musteriData = {
                musteriler: yuklenenveri.musteriler,
                secilenMusteri: null, // Sayfa yüklendiğinde seçili müşteri olmasın
                sonGuncelleme: yuklenenveri.sonGuncelleme
            };
        } else {
            musteriData = { musteriler: [], secilenMusteri: null, sonGuncelleme: null };
        }
        
        if (veresiyeVeri && Array.isArray(veresiyeVeri.satislar)) {
            veresiyeData = veresiyeVeri;
        } else {
            veresiyeData = { satislar: [], sonGuncelleme: null };
        }
        
        console.log('Müşteri verileri yüklendi:', musteriData.musteriler.length, 'müşteri');
        return true;
        
    } catch (error) {
        console.error('Müşteri verileri yükleme hatası:', error);
        musteriData = { musteriler: [], secilenMusteri: null, sonGuncelleme: null };
        veresiyeData = { satislar: [], sonGuncelleme: null };
        return false;
    }
}

// Müşteri verilerini localStorage'a kaydetme
function musteriVerileriniKaydet() {
    try {
        musteriData.sonGuncelleme = new Date().toISOString();
        veresiyeData.sonGuncelleme = new Date().toISOString();
        
        localKaydet(MUSTERI_KEY, musteriData);
        localKaydet(VERESIYE_KEY, veresiyeData);
        
        console.log('Müşteri verileri kaydedildi');
        return true;
    } catch (error) {
        console.error('Müşteri verileri kaydetme hatası:', error);
        return false;
    }
}

// Müşteri kayıt modalını açma
function musteriKayitAc() {
    // Form alanlarını temizle
    document.getElementById('txtmusteriadi').value = '';
    document.getElementById('txtmusteritelefon').value = '';
    document.getElementById('txtmusteriadres').value = '';
    document.getElementById('txtmusteriborc').value = '0.00';
    
    // Modal'ı göster
    document.getElementById('divmusterikayit').style.visibility = 'visible';
    document.getElementById('txtmusteriadi').focus();
    
    console.log('Müşteri kayıt modalı açıldı');
}

// Müşteri kayıt modalını kapatma
function musteriKayitKapat() {
    document.getElementById('divmusterikayit').style.visibility = 'hidden';
    document.getElementById('txtbarkod').focus();
    console.log('Müşteri kayıt modalı kapatıldı');
}

// Yeni müşteri kaydetme
function musteriKaydet() {
    try {
        // Form verilerini al
        var musteriAdi = document.getElementById('txtmusteriadi').value.trim();
        var telefon = document.getElementById('txtmusteritelefon').value.trim();
        var adres = document.getElementById('txtmusteriadres').value.trim();
        
        // Zorunlu alan kontrolü
        if (musteriAdi === '') {
            alert('Müşteri adı zorunludur!');
            document.getElementById('txtmusteriadi').focus();
            return false;
        }
        
        // Aynı isimde müşteri var mı kontrol et
        var mevcutMusteri = musteriData.musteriler.find(m => 
            m.musteriAdi.toLowerCase() === musteriAdi.toLowerCase()
        );
        
        if (mevcutMusteri) {
            alert('Bu isimde bir müşteri zaten kayıtlı!\nMevcut müşteri: ' + mevcutMusteri.musteriAdi);
            return false;
        }
        
        // Telefon formatla
        var formatliTelefon = telefonFormatla(telefon);
        
        // Yeni müşteri objesi oluştur
        var yeniMusteri = {
            id: 'M' + Date.now(),
            musteriAdi: musteriAdi,
            telefon: formatliTelefon,
            adres: adres,
            borcMiktari: 0.00,
            kayitTarihi: new Date().toISOString(),
            sonIslemTarihi: new Date().toISOString(),
            aktif: true
        };
        
        // Müşteri listesine ekle
        musteriData.musteriler.push(yeniMusteri);
        
        // Verileri kaydet
        var kaydedildi = musteriVerileriniKaydet();
        
        if (kaydedildi) {
            alert('Müşteri başarıyla kaydedildi!\nMüşteri Adı: ' + musteriAdi);
            musteriKayitKapat();
            
            // Müşteri listesini güncelle (eğer açıksa)
            musteriListesiniGuncelle();
            
            console.log('Yeni müşteri kaydedildi:', yeniMusteri);
            return true;
        } else {
            alert('Müşteri kaydedilirken hata oluştu!');
            return false;
        }
        
    } catch (error) {
        console.error('Müşteri kaydetme hatası:', error);
        alert('Müşteri kaydedilirken hata oluştu: ' + error.message);
        return false;
    }
}

// Müşteri listesini güncelleme
function musteriListesiniGuncelle() {
    var tbody = document.querySelector('#tblmusteriler tbody');
    if (!tbody) {
        console.warn('Müşteri tablosu bulunamadı!');
        return;
    }
    
    // Önce müşteri verilerini yükle
    musteriVerileriniYukle();
    
    // Tabloyu tamamen temizle
    tbody.innerHTML = '';
    
    
    // Müşteri yoksa bilgi mesajı göster
    if (!musteriData.musteriler || musteriData.musteriler.length === 0) {
        var emptyRow = tbody.insertRow();
        emptyRow.innerHTML = 
            '<td colspan="4" style="text-align:center; padding:20px;">' +
                '<div class="text-muted">' +
                    '<p><strong>Henüz müşteri kaydı yok</strong></p>' +
                    '<p>Yukarıdaki butondan yeni müşteri ekleyebilirsiniz.</p>' +
                '</div>' +
            '</td>';
        console.log('Müşteri listesi boş');
        return;
    }
    
    // Müşterileri ekle
    musteriData.musteriler.forEach(function(musteri) {
        if (musteri.aktif !== false) {
            var row = tbody.insertRow();
            
            var borcDurumu = musteri.borcMiktari > 0 ? 
                '<span class="text-danger"><strong>' + musteri.borcMiktari.toFixed(2) + ' ₺</strong></span>' : 
                '<span class="text-success">Borcu Yok</span>';
            
            row.innerHTML = 
                '<td style="text-align:center; width:15%;">' +
                    '<a href="#" class="btn btn-success btn-sm" onclick="musteriSec(\'' + musteri.id + '\')">SEÇ</a>' +
                '</td>' +
                '<td style="width:35%;"><strong>' + musteri.musteriAdi + '</strong><br>' +
                    '<small class="text-muted">' + (musteri.telefon || 'Telefon yok') + '</small>' +
                '</td>' +
                '<td style="width:35%;"><small>' + (musteri.adres || 'Adres yok') + '</small></td>' +
                '<td style="width:15%; text-align:center;">' + borcDurumu + '</td>';
        }
    });
    
    console.log('Müşteri listesi güncellendi:', musteriData.musteriler.length, 'müşteri gösteriliyor');
}

// Müşteri seçme
function musteriSec(musteriId) {
    var musteri = musteriData.musteriler.find(m => m.id === musteriId);
    if (musteri) {
        musteriData.secilenMusteri = musteri;
        
        // Seçili müşteri bilgisini göster
        var txtmusteri = document.getElementById('txtmusteri');
        if (txtmusteri) {
            txtmusteri.value = musteri.id;
        }
        
        // Müşteri listesi modalını kapat
        document.getElementById('tblmusteriler').style.visibility = 'hidden';
        
        // Kullanıcıya bilgi ver
        alert('Müşteri seçildi: ' + musteri.musteriAdi + 
              (musteri.borcMiktari > 0 ? '\nMevcut Borç: ' + musteri.borcMiktari.toFixed(2) + ' ₺' : ''));
        
        document.getElementById('txtbarkod').focus();
        console.log('Müşteri seçildi:', musteri.musteriAdi);
    }
}

// VERESİYE SATIŞ SİSTEMİ
// ============================================================================

// Veresiye satış fonksiyonu
function veresiyeSatis() {
    // Müşteri seçimi kontrolü
    if (!musteriData.secilenMusteri) {
        alert('Veresiye satış yapmak için önce müşteri seçin!\n\nMüşteri listesinden bir müşteri seçin veya yeni müşteri ekleyin.');
        return false;
    }
    
    // Sepet kontrolü
    var tbluruns = document.getElementById("tbluruns");
    if (!tbluruns || tbluruns.rows.length == 0) {
        alert('Satılacak ürün yok!\n\nÖnce sepete ürün ekleyin.');
        return false;
    }
    
    try {
        // Satış verilerini topla
        var satisUrunleri = [];
        var toplamTutar = 0;
        
        for (var x = 0; x < 2000; x++) {
            if (document.getElementById("txturun" + x.toString()) != undefined) {
                var urunAdi = document.getElementById("txturun" + x.toString()).value;
                var miktar = parseFloat(document.getElementById("txtmiktar" + x.toString()).value) || 1;
                var fiyat = parseFloat(document.getElementById("txtfiyat" + x.toString()).value) || 0;
                var aratutar = parseFloat(document.getElementById("txtaratutar" + x.toString()).value) || 0;
                
                var urun = urunListesi.find(u => u.Stok_Adi === urunAdi);
                
                satisUrunleri.push({
                    barkod: urun ? urun.Barkod : '',
                    stokKodu: urun ? urun.Stok_Kodu : '',
                    urunAdi: urunAdi,
                    miktar: miktar,
                    birimFiyat: fiyat,
                    aratutar: aratutar,
                    birim: urun ? urun.Birim : 'ADET'
                });
                
                // Fiyatı kaydet
                if (urun && fiyat > 0) {
                    urunFiyatiKaydet(urun.Barkod, fiyat);
                }
                
                toplamTutar += aratutar;
            }
        }
        
        if (toplamTutar <= 0) {
            alert('Veresiye satış tutarı 0 olamaz!');
            return false;
        }
        
        // Onay al
        var onayMesaji = 'VERESİYE SATIŞ ONAYI\n\n' +
                        'Müşteri: ' + musteriData.secilenMusteri.musteriAdi + '\n' +
                        'Tutar: ' + toplamTutar.toFixed(2) + ' ₺\n' +
                        'Ürün Adedi: ' + satisUrunleri.length + '\n\n' +
                        'Mevcut Borç: ' + musteriData.secilenMusteri.borcMiktari.toFixed(2) + ' ₺\n' +
                        'Yeni Toplam Borç: ' + (musteriData.secilenMusteri.borcMiktari + toplamTutar).toFixed(2) + ' ₺\n\n' +
                        'Veresiye satışı onaylıyor musunuz?';
        
        if (!confirm(onayMesaji)) {
            return false;
        }
        
        // Veresiye satış kaydı oluştur
        var veresiyeSatisKaydi = {
            id: 'V' + Date.now(),
            tarih: new Date().toISOString(),
            musteriId: musteriData.secilenMusteri.id,
            musteriAdi: musteriData.secilenMusteri.musteriAdi,
            urunler: satisUrunleri,
            toplamTutar: toplamTutar,
            odemeTipi: 'Veresiye',
            odenmeDurumu: 'Ödenmedi',
            odemeTarihi: null,
            notlar: ''
        };
        
        // Veresiye satışları listesine ekle
        veresiyeData.satislar.push(veresiyeSatisKaydi);
        
        // Normal satış kaydı da oluştur
        var normalSatisVerisi = {
            urunler: satisUrunleri,
            toplamTutar: toplamTutar,
            odemeTipi: 'Veresiye',
            musteri: musteriData.secilenMusteri.musteriAdi
        };
        
        var satisId = satisKaydet(normalSatisVerisi);
        
        // Müşterinin borcunu güncelle
        musteriData.secilenMusteri.borcMiktari += toplamTutar;
        musteriData.secilenMusteri.sonIslemTarihi = new Date().toISOString();
        
        // Verileri kaydet
        musteriVerileriniKaydet();
        
        // Başarı mesajı
        alert('VERESİYE SATIŞ TAMAMLANDI!\n\n' +
              'Satış ID: ' + satisId + '\n' +
              'Veresiye ID: ' + veresiyeSatisKaydi.id + '\n' +
              'Müşteri: ' + musteriData.secilenMusteri.musteriAdi + '\n' +
              'Tutar: ' + toplamTutar.toFixed(2) + ' ₺\n' +
              'Yeni Toplam Borç: ' + musteriData.secilenMusteri.borcMiktari.toFixed(2) + ' ₺');
        
        // Seçili müşteriyi temizle
        musteriData.secilenMusteri = null;
        var txtmusteri = document.getElementById('txtmusteri');
        if (txtmusteri) {
            txtmusteri.value = '0';
        }
        
        console.log('Veresiye satış tamamlandı:', veresiyeSatisKaydi.id);
        
        return true;
        
    } catch (error) {
        console.error('Veresiye satış hatası:', error);
        alert('Veresiye satış sırasında hata oluştu: ' + error.message);
        return false;
    }
}

// Müşteri listesi modalını açma (mevcut sisteme entegre)
function musteriListesiAc() {
    // Önce müşteri verilerini yükle
    musteriVerileriniYukle();
    
    // Müşteri listesini güncelle
    musteriListesiniGuncelle();
    
    // Modal'ı göster
    document.getElementById('tblmusteriler').style.visibility = 'visible';
    
    console.log('Müşteri listesi açıldı, gösterilen müşteri sayısı:', musteriData.musteriler.length);
}

// ÜRÜN YÖNETİM SİSTEMİ
// ============================================================================

// Yeni ürün verileri
var yeniUrunData = {
    urunler: [],
    sonId: 0,
    sonGuncelleme: null
};

// LocalStorage anahtarı
var YENI_URUNLER_KEY = 'pos_urunler';

// Yeni ürün verilerini localStorage'dan yükleme
function yeniUrunVerileriniYukle() {
    try {
        var yuklenenveri = localOku(YENI_URUNLER_KEY);
        
        if (yuklenenveri && Array.isArray(yuklenenveri.urunler)) {
            yeniUrunData = {
                urunler: yuklenenveri.urunler,
                sonId: yuklenenveri.sonId || 0,
                sonGuncelleme: yuklenenveri.sonGuncelleme
            };
        } else {
            yeniUrunData = { urunler: [], sonId: 0, sonGuncelleme: null };
        }
        
        console.log('Yeni ürün verileri yüklendi:', yeniUrunData.urunler.length, 'ürün');
        return true;
        
    } catch (error) {
        console.error('Yeni ürün verileri yükleme hatası:', error);
        yeniUrunData = { urunler: [], sonId: 0, sonGuncelleme: null };
        return false;
    }
}

// Yeni ürün verilerini localStorage'a kaydetme
function yeniUrunVerileriniKaydet() {
    try {
        yeniUrunData.sonGuncelleme = new Date().toISOString();
        localKaydet(YENI_URUNLER_KEY, yeniUrunData);
        console.log('Yeni ürün verileri kaydedildi');
        return true;
    } catch (error) {
        console.error('Yeni ürün verileri kaydetme hatası:', error);
        return false;
    }
}

// Yeni ürünleri ana ürün listesine entegre etme
function yeniUrunleriEntegre() {
    try {
        if (!yeniUrunData.urunler || yeniUrunData.urunler.length === 0) {
            console.log('Entegre edilecek yeni ürün yok');
            return 0;
        }
        
        var eklenenSayisi = 0;
        
        yeniUrunData.urunler.forEach(function(yeniUrun) {
            // Aynı barkod var mı kontrol et
            var mevcutUrun = urunListesi.find(u => u.Barkod === yeniUrun.Barkod);
            
            if (!mevcutUrun) {
                // Yeni ürün ekle
                urunListesi.push({
                    id: yeniUrun.id,
                    Barkod: yeniUrun.Barkod,
                    Stok_Kodu: yeniUrun.Stok_Kodu,
                    Stok_Adi: yeniUrun.Stok_Adi,
                    Fiyat: yeniUrun.Fiyat,
                    Birim: yeniUrun.Birim
                });
                eklenenSayisi++;
                
                // Fiyatı localStorage'a kaydet
                if (yeniUrun.Fiyat > 0) {
                    urunFiyatiKaydet(yeniUrun.Barkod, yeniUrun.Fiyat, 'yeni_urun');
                }
            } else {
                // Mevcut ürünü güncelle (fiyat değişmiş olabilir)
                if (yeniUrun.Fiyat !== mevcutUrun.Fiyat && yeniUrun.Fiyat > 0) {
                    mevcutUrun.Fiyat = yeniUrun.Fiyat;
                    urunFiyatiKaydet(yeniUrun.Barkod, yeniUrun.Fiyat, 'urun_guncelleme');
                }
            }
        });
        
        console.log('Yeni ürünler entegre edildi:', eklenenSayisi, 'yeni ürün eklendi');
        return eklenenSayisi;
        
    } catch (error) {
        console.error('Ürün entegrasyonu hatası:', error);
        return 0;
    }
}

// Sonraki ID'yi hesapla
function sonrakiIdHesapla() {
    var enBuyukId = 0;
    
    // Mevcut ürünlerdeki en büyük ID'yi bul
    if (typeof urunListesi !== 'undefined') {
        urunListesi.forEach(function(urun) {
            if (urun.id && urun.id > enBuyukId) {
                enBuyukId = urun.id;
            }
        });
    }
    
    // Yeni ürünlerdeki en büyük ID'yi kontrol et
    yeniUrunData.urunler.forEach(function(urun) {
        if (urun.id && urun.id > enBuyukId) {
            enBuyukId = urun.id;
        }
    });
    
    // localStorage'daki son ID'yi kontrol et
    if (yeniUrunData.sonId > enBuyukId) {
        enBuyukId = yeniUrunData.sonId;
    }
    
    return enBuyukId + 1;
}

// Otomatik stok kodu oluştur
function otomatikStokKodu() {
    var yeniId = sonrakiIdHesapla();
    return 'ST' + yeniId.toString().padStart(5, '0');
}

// Ürün kayıt modalını açma
function urunKayitAc() {
    // Form alanlarını temizle
    document.getElementById('txtyeniurun_barkod').value = '';
    document.getElementById('txtyeniurun_adi').value = '';
    document.getElementById('txtyeniurun_stok').value = '';
    document.getElementById('txtyeniurun_fiyat').value = '';
    document.getElementById('txtyeniurun_birim').value = 'ADET';
    
    // Önizlemeyi temizle
    urunOnizlemeTemizle();
    
    // Modal'ı göster
    document.getElementById('divurunkayit').style.visibility = 'visible';
    document.getElementById('txtyeniurun_barkod').focus();
    
    console.log('Ürün kayıt modalı açıldı');
}

// Ürün kayıt modalını kapatma
function urunKayitKapat() {
    document.getElementById('divurunkayit').style.visibility = 'hidden';
    document.getElementById('txtbarkod').focus();
    console.log('Ürün kayıt modalı kapatıldı');
}

// Önizleme güncelleme
function urunOnizlemeGuncelle() {
    var barkod = document.getElementById('txtyeniurun_barkod').value.trim();
    var urunAdi = document.getElementById('txtyeniurun_adi').value.trim();
    var stokKodu = document.getElementById('txtyeniurun_stok').value.trim();
    var fiyat = document.getElementById('txtyeniurun_fiyat').value.trim();
    var birim = document.getElementById('txtyeniurun_birim').value;
    
    var yeniId = sonrakiIdHesapla();
    var otomatikStok = stokKodu || otomatikStokKodu();
    
    document.getElementById('lblyeni_id').innerText = yeniId;
    document.getElementById('lblyeni_barkod').innerText = barkod || '-';
    document.getElementById('lblyeni_urun').innerText = urunAdi || '-';
    document.getElementById('lblyeni_stok').innerText = otomatikStok;
    document.getElementById('lblyeni_fiyat').innerText = (parseFloat(fiyat) || 0).toFixed(2) + ' ₺';
}

// Önizleme temizleme
function urunOnizlemeTemizle() {
    document.getElementById('lblyeni_id').innerText = 'Otomatik';
    document.getElementById('lblyeni_barkod').innerText = '-';
    document.getElementById('lblyeni_urun').innerText = '-';
    document.getElementById('lblyeni_stok').innerText = 'Otomatik';
    document.getElementById('lblyeni_fiyat').innerText = '0.00 ₺';
}

// Barkod kontrol etme
function barkodKontrolEt() {
    var barkod = document.getElementById('txtyeniurun_barkod').value.trim();
    
    if (barkod === '') {
        alert('Önce barkod girin!');
        document.getElementById('txtyeniurun_barkod').focus();
        return;
    }
    
    // Mevcut ürünlerde kontrol et
    var mevcutUrun = urunBul(barkod);
    if (mevcutUrun) {
        alert('BARKOD ZATEN KAYITLI!\n\n' +
              'Barkod: ' + barkod + '\n' +
              'Ürün: ' + mevcutUrun.Stok_Adi + '\n' +
              'Stok Kodu: ' + mevcutUrun.Stok_Kodu + '\n' +
              'Fiyat: ' + (mevcutUrun.Fiyat || 0).toFixed(2) + ' ₺');
        return;
    }
    
    // Yeni ürünlerde kontrol et
    var yeniUrun = yeniUrunData.urunler.find(u => u.Barkod === barkod);
    if (yeniUrun) {
        alert('BARKOD YENİ ÜRÜNLERDE KAYITLI!\n\n' +
              'Barkod: ' + barkod + '\n' +
              'Ürün: ' + yeniUrun.Stok_Adi + '\n' +
              'Stok Kodu: ' + yeniUrun.Stok_Kodu + '\n' +
              'Fiyat: ' + yeniUrun.Fiyat.toFixed(2) + ' ₺');
        return;
    }
    
    alert('✅ BARKOD KULLANILMADI\n\n' +
          'Bu barkod kullanılabilir: ' + barkod);
}

// Yeni ürün kaydetme
function yeniUrunKaydet() {
    try {
        // Form verilerini al
        var barkod = document.getElementById('txtyeniurun_barkod').value.trim();
        var urunAdi = document.getElementById('txtyeniurun_adi').value.trim();
        var stokKodu = document.getElementById('txtyeniurun_stok').value.trim();
        var fiyat = document.getElementById('txtyeniurun_fiyat').value.trim();
        var birim = document.getElementById('txtyeniurun_birim').value;
        
        // Zorunlu alan kontrolleri
        if (barkod === '') {
            alert('Barkod zorunludur!');
            document.getElementById('txtyeniurun_barkod').focus();
            return false;
        }
        
        if (urunAdi === '') {
            alert('Ürün adı zorunludur!');
            document.getElementById('txtyeniurun_adi').focus();
            return false;
        }
        
        // Barkod benzersizlik kontrolü
        if (urunBul(barkod) || yeniUrunData.urunler.find(u => u.Barkod === barkod)) {
            alert('Bu barkod zaten kullanılıyor!\nBarkod: ' + barkod);
            document.getElementById('txtyeniurun_barkod').focus();
            return false;
        }
        
        // Fiyat kontrolü
        var fiyatSayi = parseFloat(fiyat) || 0;
        if (fiyatSayi < 0) {
            alert('Fiyat negatif olamaz!');
            document.getElementById('txtyeniurun_fiyat').focus();
            return false;
        }
        
        // Stok kodu otomatik oluştur
        if (stokKodu === '') {
            stokKodu = otomatikStokKodu();
        }
        
        // Yeni ID hesapla
        var yeniId = sonrakiIdHesapla();
        
        // Onay al
        var onayMesaji = 'YENİ ÜRÜN KAYIT ONAYI\n\n' +
                        'ID: ' + yeniId + '\n' +
                        'Barkod: ' + barkod + '\n' +
                        'Ürün: ' + urunAdi + '\n' +
                        'Stok: ' + stokKodu + '\n' +
                        'Fiyat: ' + fiyatSayi.toFixed(2) + ' ₺\n' +
                        'Birim: ' + birim + '\n\n' +
                        'Ürünü kaydetmek istediğinizden emin misiniz?';
        
        if (!confirm(onayMesaji)) {
            return false;
        }
        
        // Yeni ürün objesi oluştur
        var yeniUrun = {
            id: yeniId,
            Barkod: barkod,
            Stok_Kodu: stokKodu,
            Stok_Adi: urunAdi,
            Fiyat: fiyatSayi,
            Birim: birim,
            kayitTarihi: new Date().toISOString(),
            aktif: true
        };
        
        // Yeni ürünler listesine ekle
        yeniUrunData.urunler.push(yeniUrun);
        yeniUrunData.sonId = yeniId;
        
        // Ana ürün listesine de hemen ekle
        urunListesi.push({
            id: yeniId,
            Barkod: barkod,
            Stok_Kodu: stokKodu,
            Stok_Adi: urunAdi,
            Fiyat: fiyatSayi,
            Birim: birim
        });
        
        // Verileri kaydet
        var kaydedildi = yeniUrunVerileriniKaydet();
        
        // Fiyatı localStorage'a kaydet
        if (fiyatSayi > 0) {
            urunFiyatiKaydet(barkod, fiyatSayi, 'yeni_urun');
        }
        
        if (kaydedildi) {
            alert('✅ ÜRÜN BAŞARIYLA KAYDEDİLDİ!\n\n' +
                  'ID: ' + yeniId + '\n' +
                  'Ürün: ' + urunAdi + '\n' +
                  'Barkod: ' + barkod + '\n\n' +
                  'Ürün artık satış sisteminde kullanılabilir.');
            
            urunKayitKapat();
            
            // Ürün listesi açıksa güncelle
            if (document.getElementById('divurunlist').style.visibility === 'visible') {
                urunListesiGoster();
            }
            
            console.log('Yeni ürün kaydedildi:', yeniUrun);
            return true;
        } else {
            alert('❌ Ürün kaydedilirken hata oluştu!');
            return false;
        }
        
    } catch (error) {
        console.error('Ürün kaydetme hatası:', error);
        alert('Ürün kaydedilirken hata oluştu: ' + error.message);
        return false;
    }
}

// VERİ YÖNETİMİ VE YEDEKLEME SİSTEMİ
// ============================================================================

// Tüm localStorage anahtarları
var TUM_STORAGE_KEYS = [
    'pos_favoriler',
    'pos_fiyatlar', 
    'pos_gunluk_satislar',
    'pos_market_bilgileri',
    'pos_musteriler',
    'pos_satis_gecmisi',
    'pos_urunler',
    'pos_veresiye_satislar'
];

// Veri yönetimi modalını açma
function veriYonetimiAc() {
    document.getElementById('divveriyonetimi').style.visibility = 'visible';
    veriIstatistikleriGuncelle();
    console.log('Veri yönetimi modalı açıldı');
}

// Veri yönetimi modalını kapatma
function veriYonetimiKapat() {
    document.getElementById('divveriyonetimi').style.visibility = 'hidden';
    document.getElementById('txtbarkod').focus();
    console.log('Veri yönetimi modalı kapatıldı');
}

// Veri istatistiklerini güncelleme
function veriIstatistikleriGuncelle() {
    try {
        var toplamKayit = 0;
        var toplamBoyut = 0;
        
        // Ürünler
        var urunlerData = localOku('pos_urunler') || {urunler: []};
        var urunSayisi = urunlerData.urunler ? urunlerData.urunler.length : 0;
        var urunBoyut = JSON.stringify(urunlerData).length;
        document.getElementById('stat_urunler').innerText = urunSayisi + ' ürün';
        document.getElementById('stat_urunler_boyut').innerText = formatBoyut(urunBoyut);
        toplamKayit += urunSayisi;
        toplamBoyut += urunBoyut;
        
        // Fiyatlar
        var fiyatlarData = localOku('pos_fiyatlar') || {};
        var fiyatSayisi = Object.keys(fiyatlarData).length;
        var fiyatBoyut = JSON.stringify(fiyatlarData).length;
        document.getElementById('stat_fiyatlar').innerText = fiyatSayisi + ' fiyat';
        document.getElementById('stat_fiyatlar_boyut').innerText = formatBoyut(fiyatBoyut);
        toplamKayit += fiyatSayisi;
        toplamBoyut += fiyatBoyut;
        
        // Satışlar
        var satislarData = localOku('pos_satis_gecmisi') || [];
        var satisSayisi = satislarData.length;
        var satisBoyut = JSON.stringify(satislarData).length;
        document.getElementById('stat_satislar').innerText = satisSayisi + ' satış';
        document.getElementById('stat_satislar_boyut').innerText = formatBoyut(satisBoyut);
        toplamKayit += satisSayisi;
        toplamBoyut += satisBoyut;
        
        // Müşteriler
        var musterilerData = localOku('pos_musteriler') || {musteriler: []};
        var musteriSayisi = musterilerData.musteriler ? musterilerData.musteriler.length : 0;
        var musteriBoyut = JSON.stringify(musterilerData).length;
        document.getElementById('stat_musteriler').innerText = musteriSayisi + ' müşteri';
        document.getElementById('stat_musteriler_boyut').innerText = formatBoyut(musteriBoyut);
        toplamKayit += musteriSayisi;
        toplamBoyut += musteriBoyut;
        
        // Favoriler
        var favorilerData = localOku('pos_favoriler') || {favoriler: []};
        var favoriSayisi = favorilerData.favoriler ? favorilerData.favoriler.length : 0;
        var favoriBoyut = JSON.stringify(favorilerData).length;
        document.getElementById('stat_favoriler').innerText = favoriSayisi + ' favori';
        document.getElementById('stat_favoriler_boyut').innerText = formatBoyut(favoriBoyut);
        toplamKayit += favoriSayisi;
        toplamBoyut += favoriBoyut;
        
        // Günlük satışlar
        var gunlukData = localOku('pos_gunluk_satislar') || {};
        var gunlukSayisi = Object.keys(gunlukData).length;
        var gunlukBoyut = JSON.stringify(gunlukData).length;
        document.getElementById('stat_gunluk').innerText = gunlukSayisi + ' gün';
        document.getElementById('stat_gunluk_boyut').innerText = formatBoyut(gunlukBoyut);
        toplamKayit += gunlukSayisi;
        toplamBoyut += gunlukBoyut;
        
        // Market bilgileri
        var marketData = localOku('pos_market_bilgileri') || {};
        var marketVarMi = marketData.firmaAdi ? 1 : 0;
        var marketBoyut = JSON.stringify(marketData).length;
        document.getElementById('stat_market').innerText = marketVarMi ? 'Kayıtlı' : 'Boş';
        document.getElementById('stat_market_boyut').innerText = formatBoyut(marketBoyut);
        toplamKayit += marketVarMi;
        toplamBoyut += marketBoyut;
        
        // Veresiye satışlar
        var veresiyeData = localOku('pos_veresiye_satislar') || {satislar: []};
        var veresiyeSayisi = veresiyeData.satislar ? veresiyeData.satislar.length : 0;
        var veresiyeBoyut = JSON.stringify(veresiyeData).length;
        document.getElementById('stat_veresiye').innerText = veresiyeSayisi + ' veresiye';
        document.getElementById('stat_veresiye_boyut').innerText = formatBoyut(veresiyeBoyut);
        toplamKayit += veresiyeSayisi;
        toplamBoyut += veresiyeBoyut;
        
        // Toplam
        document.getElementById('stat_toplam_kayit').innerText = toplamKayit + ' kayıt';
        document.getElementById('stat_toplam_boyut').innerText = formatBoyut(toplamBoyut);
        
        console.log('Veri istatistikleri güncellendi:', {
            toplamKayit: toplamKayit,
            toplamBoyut: formatBoyut(toplamBoyut)
        });
        
    } catch (error) {
        console.error('İstatistik güncelleme hatası:', error);
        alert('İstatistikler güncellenirken hata oluştu!');
    }
}

// Boyut formatla (bytes to KB/MB)
function formatBoyut(bytes) {
    if (bytes === 0) return '0 B';
    
    var k = 1024;
    var sizes = ['B', 'KB', 'MB', 'GB'];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Tüm verileri yedekleme
function tumVerileriYedekle() {
    try {
        var yedekVerisi = {
            yedekBilgileri: {
                tarih: new Date().toISOString(),
                versiyon: '1.0',
                sistem: 'POS Satış Sistemi',
                tarayici: navigator.userAgent,
                toplamBoyut: 0
            },
            veriler: {}
        };
        
        var toplamBoyut = 0;
        var toplamKayit = 0;
        
        // Her localStorage anahtarını yedekle
        TUM_STORAGE_KEYS.forEach(function(anahtar) {
            var veri = localOku(anahtar);
            if (veri) {
                yedekVerisi.veriler[anahtar] = veri;
                var veriBoyutu = JSON.stringify(veri).length;
                toplamBoyut += veriBoyutu;
                
                // Kayıt sayısını hesapla
                if (anahtar.includes('fiyatlar') || anahtar.includes('gunluk')) {
                    toplamKayit += Object.keys(veri).length;
                } else if (Array.isArray(veri)) {
                    toplamKayit += veri.length;
                } else if (veri.urunler) {
                    toplamKayit += veri.urunler.length;
                } else if (veri.musteriler) {
                    toplamKayit += veri.musteriler.length;
                } else if (veri.favoriler) {
                    toplamKayit += veri.favoriler.length;
                } else if (veri.satislar) {
                    toplamKayit += veri.satislar.length;
                } else {
                    toplamKayit += 1;
                }
            }
        });
        
        yedekVerisi.yedekBilgileri.toplamBoyut = toplamBoyut;
        yedekVerisi.yedekBilgileri.toplamKayit = toplamKayit;
        
        // JSON dosyası oluştur
        var jsonString = JSON.stringify(yedekVerisi, null, 2);
        var blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
        
        // Dosya adı oluştur
        var tarih = new Date();
        var dosyaAdi = 'POS_Yedek_' + 
                      tarih.getFullYear() + 
                      String(tarih.getMonth() + 1).padStart(2, '0') + 
                      String(tarih.getDate()).padStart(2, '0') + '_' +
                      String(tarih.getHours()).padStart(2, '0') + 
                      String(tarih.getMinutes()).padStart(2, '0') + 
                      '.json';
        
        // Dosyayı indir
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = dosyaAdi;
        a.click();
        
        URL.revokeObjectURL(url);
        
        alert('✅ YEDEK BAŞARIYLA OLUŞTURULDU!\n\n' +
              'Dosya: ' + dosyaAdi + '\n' +
              'Toplam Kayıt: ' + toplamKayit + '\n' +
              'Dosya Boyutu: ' + formatBoyut(jsonString.length) + '\n\n' +
              'Yedek dosyasını güvenli bir yerde saklayın.');
        
        console.log('Yedek oluşturuldu:', {
            dosya: dosyaAdi,
            toplamKayit: toplamKayit,
            boyut: formatBoyut(jsonString.length)
        });
        
    } catch (error) {
        console.error('Yedekleme hatası:', error);
        alert('❌ Yedekleme sırasında hata oluştu:\n' + error.message);
    }
}

// Yedek dosyası yükleme
function yedekDosyasiYukle(input) {
    var dosya = input.files[0];
    if (!dosya) return;
    
    if (dosya.type !== 'application/json') {
        alert('❌ Lütfen sadece JSON dosyası seçin!');
        input.value = '';
        return;
    }
    
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var yedekVerisi = JSON.parse(e.target.result);
            
            // Yedek dosyası formatını kontrol et
            if (!yedekVerisi.yedekBilgileri || !yedekVerisi.veriler) {
                alert('❌ Geçersiz yedek dosyası formatı!');
                input.value = '';
                return;
            }
            
            var bilgiler = yedekVerisi.yedekBilgileri;
            var yedekTarihi = new Date(bilgiler.tarih);
            
            // Onay al
            var onayMesaji = '⚠️ VERİ GERİ YÜKLEME ONAYI\n\n' +
                            'MEVCUT TÜM VERİLER SİLİNECEK!\n\n' +
                            'Yedek Bilgileri:\n' +
                            '📅 Tarih: ' + yedekTarihi.toLocaleString('tr-TR') + '\n' +
                            '📊 Kayıt: ' + (bilgiler.toplamKayit || 'Bilinmiyor') + '\n' +
                            '💾 Boyut: ' + formatBoyut(bilgiler.toplamBoyut || 0) + '\n' +
                            '🔧 Versiyon: ' + (bilgiler.versiyon || 'Bilinmiyor') + '\n\n' +
                            'Bu işlem GERİ ALINAMAZ!\n' +
                            'Devam etmek istediğinizden emin misiniz?';
            
            if (!confirm(onayMesaji)) {
                input.value = '';
                return;
            }
            
            // İkinci onay
            if (!confirm('⚠️ SON UYARI!\n\nTüm mevcut verileriniz silinecek!\nGerçekten devam etmek istiyor musunuz?')) {
                input.value = '';
                return;
            }
            
            // Mevcut verileri temizle
            TUM_STORAGE_KEYS.forEach(function(anahtar) {
                localStorage.removeItem(anahtar);
            });
            
            // Yedek verilerini geri yükle
            var basariliSayisi = 0;
            Object.keys(yedekVerisi.veriler).forEach(function(anahtar) {
                try {
                    localKaydet(anahtar, yedekVerisi.veriler[anahtar]);
                    basariliSayisi++;
                } catch (error) {
                    console.error('Veri yükleme hatası:', anahtar, error);
                }
            });
            
            alert('✅ VERİ GERİ YÜKLEME TAMAMLANDI!\n\n' +
                  'Başarıyla yüklenen: ' + basariliSayisi + '/' + Object.keys(yedekVerisi.veriler).length + '\n' +
                  'Yedek Tarihi: ' + yedekTarihi.toLocaleDateString('tr-TR') + '\n\n' +
                  'Sayfa yeniden yüklenecek...');
            
            // Sayfayı yenile
            setTimeout(function() {
                window.location.reload();
            }, 2000);
            
        } catch (error) {
            console.error('Yedek dosyası okuma hatası:', error);
            alert('❌ Yedek dosyası okunamadı:\n' + error.message);
        }
        
        input.value = '';
    };
    
    reader.readAsText(dosya, 'UTF-8');
}

// Temizlik araçları modalını açma
function veriTemizlikAraclari() {
    document.getElementById('divtemizlikaraclari').style.visibility = 'visible';
}

// Gelişmiş veri seçenekleri
function gelismisVeriSecenekleri() {
    var secenekler = 'GELİŞMİŞ VERİ SEÇENEKLERİ\n\n' +
                    '1. Sadece belirli veri türünü yedekle\n' +
                    '2. Belirli tarih aralığındaki verileri temizle\n' +
                    '3. Veri bütünlük kontrolü yap\n' +
                    '4. İstatistiksel analiz raporu\n' +
                    '5. Otomatik yedekleme ayarları\n\n' +
                    'Bu özellikler geliştirilme aşamasındadır.';
    
    alert(secenekler);
}

// TEMİZLİK FONKSİYONLARI
// ============================================================================

// Eski satışları temizle
function eskiSatislariTemizle() {
    if (!confirm('30 günden eski satışlar silinecek!\nDevam edilsin mi?')) return;
    
    try {
        var satislar = localOku('pos_satis_gecmisi') || [];
        var otuzGunOnce = new Date();
        otuzGunOnce.setDate(otuzGunOnce.getDate() - 30);
        
        var oncekiSayi = satislar.length;
        var filtrelenmis = satislar.filter(function(satis) {
            return new Date(satis.tarih) > otuzGunOnce;
        });
        
        localKaydet('pos_satis_gecmisi', filtrelenmis);
        
        var silinenSayi = oncekiSayi - filtrelenmis.length;
        alert('✅ ' + silinenSayi + ' adet eski satış silindi.');
        
        veriIstatistikleriGuncelle();
        
    } catch (error) {
        console.error('Eski satış temizleme hatası:', error);
        alert('❌ Temizleme sırasında hata oluştu!');
    }
}

// Kullanılmayan fiyatları temizle
function kullanilmayanFiyatlariTemizle() {
    if (!confirm('Sistemde olmayan ürünlerin fiyatları silinecek!\nDevam edilsin mi?')) return;
    
    try {
        var fiyatlar = localOku('pos_fiyatlar') || {};
        var temizlenmis = {};
        var silinenSayi = 0;
        
        Object.keys(fiyatlar).forEach(function(barkod) {
            if (urunBul(barkod)) {
                temizlenmis[barkod] = fiyatlar[barkod];
            } else {
                silinenSayi++;
            }
        });
        
        localKaydet('pos_fiyatlar', temizlenmis);
        
        alert('✅ ' + silinenSayi + ' adet kullanılmayan fiyat silindi.');
        
        veriIstatistikleriGuncelle();
        
    } catch (error) {
        console.error('Fiyat temizleme hatası:', error);
        alert('❌ Temizleme sırasında hata oluştu!');
    }
}

// Tüm verileri sil
function tumVerileriSil() 
{
    if (!confirm('⚠️ UYARI!\n\nTÜM VERİLER SİLİNECEK!\nBu işlem geri alınamaz!')) return;
    if (!confirm('⚠️ SON UYARI!\n\nGerçekten tüm verileri silmek istiyor musunuz?')) return;
    
    try {
        // Tüm localStorage verilerini sil
        TUM_STORAGE_KEYS.forEach(function(anahtar) {
            localStorage.removeItem(anahtar);
        });
        
        // Bellek verilerini de temizle
        localData = {
            urunFiyatlari: {},
            satisGecmisi: [],
            gunlukSatislar: {}
        };
        
        favoriData = {
            favoriler: [],
            sonGuncelleme: null,
            maksimumFavori: 50
        };
        
        musteriData = {
            musteriler: [],
            secilenMusteri: null,
            sonGuncelleme: null
        };
        
        veresiyeData = {
            satislar: [],
            sonGuncelleme: null
        };
        
        yeniUrunData = {
            urunler: [],
            sonId: 0,
            sonGuncelleme: null
        };
        
        marketBilgileri = {
            firmaAdi: '',
            telefon: '',
            website: '',
            adres: '',
            sonGuncelleme: null
        };
        
        alert('✅ TÜM VERİLER SİLİNDİ!\n\nSayfa yeniden yüklenecek...');
        
        // Sayfayı yenile
        setTimeout(function() {
            window.location.reload();
        }, 2000);
        
    } catch (error) {
        console.error('Veri silme hatası:', error);
        alert('❌ Veri silme sırasında hata oluştu!');
    }
}

// SEÇİCİ YEDEKLEME FONKSİYONLARI (Bonus)
// ============================================================================

// Sadece belirli veri türünü yedekle
function seciciVeriYedekle(veriTuru) {
    try {
        var secilmisAnahtar = '';
        var dosyaOneki = '';
        
        switch(veriTuru) {
            case 'satislar':
                secilmisAnahtar = 'pos_satis_gecmisi';
                dosyaOneki = 'Satislar';
                break;
            case 'musteriler':
                secilmisAnahtar = 'pos_musteriler';
                dosyaOneki = 'Musteriler';
                break;
            case 'urunler':
                secilmisAnahtar = 'pos_urunler';
                dosyaOneki = 'Urunler';
                break;
            case 'fiyatlar':
                secilmisAnahtar = 'pos_fiyatlar';
                dosyaOneki = 'Fiyatlar';
                break;
            default:
                alert('Geçersiz veri türü!');
                return;
        }
        
        var veri = localOku(secilmisAnahtar);
        if (!veri) {
            alert('Bu veri türünde kayıt bulunamadı!');
            return;
        }
        
        var yedekVerisi = {
            yedekBilgileri: {
                tarih: new Date().toISOString(),
                veriTuru: veriTuru,
                sistem: 'POS Satış Sistemi - Seçici Yedek'
            },
            veri: veri
        };
        
        var jsonString = JSON.stringify(yedekVerisi, null, 2);
        var blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
        
        var tarih = new Date();
        var dosyaAdi = dosyaOneki + '_Yedek_' + 
                      tarih.getFullYear() + 
                      String(tarih.getMonth() + 1).padStart(2, '0') + 
                      String(tarih.getDate()).padStart(2, '0') + '_' +
                      String(tarih.getHours()).padStart(2, '0') + 
                      String(tarih.getMinutes()).padStart(2, '0') + 
                      '.json';
        
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = dosyaAdi;
        a.click();
        
        URL.revokeObjectURL(url);
        
        alert('✅ ' + dosyaOneki + ' verisi yedeklendi!\nDosya: ' + dosyaAdi);
        
    } catch (error) {
        console.error('Seçici yedekleme hatası:', error);
        alert('❌ Yedekleme sırasında hata oluştu!');
    }
}

// Veri bütünlük kontrolü
function veriButunlukKontrol() {
    try {
        var sorunlar = [];
        
        // Fiyat-Ürün bütünlüğü
        var fiyatlar = localOku('pos_fiyatlar') || {};
        var orphanFiyatSayisi = 0;
        
        Object.keys(fiyatlar).forEach(function(barkod) {
            if (!urunBul(barkod)) {
                orphanFiyatSayisi++;
            }
        });
        
        if (orphanFiyatSayisi > 0) {
            sorunlar.push('📊 ' + orphanFiyatSayisi + ' adet ürünsüz fiyat kaydı');
        }
        
        // Müşteri-Veresiye bütünlüğü
        var veresiyeler = localOku('pos_veresiye_satislar') || {satislar: []};
        var musteriler = localOku('pos_musteriler') || {musteriler: []};
        var orphanVeresiye = 0;
        
        if (veresiyeler.satislar) {
            veresiyeler.satislar.forEach(function(veresiye) {
                var musteriVar = musteriler.musteriler && 
                                musteriler.musteriler.find(m => m.id === veresiye.musteriId);
                if (!musteriVar) {
                    orphanVeresiye++;
                }
            });
        }
        
        if (orphanVeresiye > 0) {
            sorunlar.push('💳 ' + orphanVeresiye + ' adet müşterisiz veresiye kaydı');
        }
        
        // Favori-Ürün bütünlüğü
        var favoriler = localOku('pos_favoriler') || {favoriler: []};
        var orphanFavori = 0;
        
        if (favoriler.favoriler) {
            favoriler.favoriler.forEach(function(favori) {
                if (!urunBul(favori.Barkod)) {
                    orphanFavori++;
                }
            });
        }
        
        if (orphanFavori > 0) {
            sorunlar.push('⭐ ' + orphanFavori + ' adet ürünsüz favori kaydı');
        }
        
        // Sonuçları göster
        if (sorunlar.length === 0) {
            alert('✅ VERİ BÜTÜNLÜK KONTROLÜ\n\nTüm veriler tutarlı!\nHerhangi bir sorun bulunamadı.');
        } else {
            var mesaj = '⚠️ VERİ BÜTÜNLÜK KONTROLÜ\n\nTespit edilen sorunlar:\n\n' + 
                       sorunlar.join('\n') + 
                       '\n\nBu sorunları temizlik araçları ile düzeltebilirsiniz.';
            alert(mesaj);
        }
        
    } catch (error) {
        console.error('Bütünlük kontrol hatası:', error);
        alert('❌ Bütünlük kontrolü sırasında hata oluştu!');
    }
}

// Otomatik yedekleme kontrolü
function otomatikYedekKontrol() {
    try {
        var sonYedekTarihi = localStorage.getItem('pos_son_yedek_tarihi');
        var bugun = new Date();
        
        if (!sonYedekTarihi) {
            // İlk kullanım
            localStorage.setItem('pos_son_yedek_tarihi', bugun.toISOString());
            return;
        }
        
        var sonYedek = new Date(sonYedekTarihi);
        var gunFarki = Math.floor((bugun - sonYedek) / (1000 * 60 * 60 * 24));
        
        // 7 günden fazla yedek alınmamışsa uyar
        if (gunFarki >= 7) {
            var mesaj = '📅 YEDEKLİ HATIRLATMASI\n\n' +
                       'Son yedekleme: ' + gunFarki + ' gün önce\n' +
                       '(' + sonYedek.toLocaleDateString('tr-TR') + ')\n\n' +
                       'Düzenli yedekleme yaparak verilerinizi güvende tutun.\n\n' +
                       'Şimdi yedek almak ister misiniz?';
            
            if (confirm(mesaj)) {
                veriYonetimiAc();
                setTimeout(function() {
                    tumVerileriYedekle();
                    localStorage.setItem('pos_son_yedek_tarihi', bugun.toISOString());
                }, 1000);
            }
        }
        
    } catch (error) {
        console.error('Otomatik yedek kontrol hatası:', error);
    }
}

// KONSOL DEBUG KOMUTLARI (Geliştiriciler için)
// ============================================================================

// Konsol komutları tanımla
window.posDebug = {
    veriler: function() {
        console.log('=== POS SİSTEM VERİLERİ ===');
        TUM_STORAGE_KEYS.forEach(function(anahtar) {
            var veri = localOku(anahtar);
            console.log(anahtar + ':', veri);
        });
    },
    istatistikler: function() {
        veriIstatistikleriGuncelle();
        console.log('İstatistikler güncellendi ve modal açılacak');
        veriYonetimiAc();
    },
    temizle: function(veriTuru) {
        if (!veriTuru) {
            console.log('Kullanım: posDebug.temizle("fiyatlar") veya posDebug.temizle("hepsi")');
            return;
        }
        
        if (veriTuru === 'hepsi') {
            tumVerileriSil();
        } else {
            localStorage.removeItem('pos_' + veriTuru);
            console.log('pos_' + veriTuru + ' silindi');
        }
    },
    yedekle: function(veriTuru) {
        if (veriTuru) {
            seciciVeriYedekle(veriTuru);
        } else {
            tumVerileriYedekle();
        }
    },
    kontrol: function() {
        veriButunlukKontrol();
    }
};

console.log('🔧 POS Debug komutları yüklendi. Kullanım için: posDebug.veriler()');

// 3D FIRMA ADI ARKAPLAN SİSTEMİ
// ============================================================================

// Firma adı arkaplanını güncelle
function firmaAdiArkaplanGuncelle() {
    try {
        var firmaAdi = marketBilgileri.firmaAdi || '';
        var divSol = document.getElementById('divsol');
        
        if (!divSol) {
            console.warn('divsol elementi bulunamadı');
            return;
        }
        
        if (firmaAdi.trim() === '' || firmaAdi === 'MAĞAZA ADI') {
            // Firma adı yoksa arkaplanı temizle
            divSol.style.backgroundImage = 'none';
            divSol.style.position = 'relative';
            
            // Mevcut 3D text overlay'i kaldır
            var mevcutOverlay = divSol.querySelector('.firma-adi-overlay');
            if (mevcutOverlay) {
                mevcutOverlay.remove();
            }
            return;
        }
        
        // 3D Text overlay oluştur
        create3DTextOverlay(firmaAdi, divSol);
        
        console.log('Firma adı arkaplanı güncellendi:', firmaAdi);
        
    } catch (error) {
        console.error('Firma adı arkaplan güncelleme hatası:', error);
    }
}

// 3D Text overlay oluşturma
function create3DTextOverlay(firmaAdi, container) {
    // Mevcut overlay'i kaldır
    var mevcutOverlay = container.querySelector('.firma-adi-overlay');
    if (mevcutOverlay) {
        mevcutOverlay.remove();
    }
    
    // Yeni overlay div oluştur
    var overlay = document.createElement('div');
    overlay.className = 'firma-adi-overlay';
    overlay.innerText = firmaAdi;
    
    // 3D CSS stilleri
    overlay.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateY(-15deg) rotateX(10deg);
        font-family: 'Arial Black', 'Impact', sans-serif;
        font-size: clamp(24px, 8vw, 48px);
        font-weight: 900;
        color: #f0f8ff;
        text-align: center;
        white-space: nowrap;
        z-index: 0;
        pointer-events: none;
        user-select: none;
        opacity: 0.15;
        text-shadow: 
            2px 2px 0px #c0c0c0,
            4px 4px 0px #a0a0a0,
            6px 6px 0px #808080,
            8px 8px 0px #606060,
            10px 10px 0px #404040,
            12px 12px 12px rgba(0,0,0,0.3);
        text-transform: uppercase;
        letter-spacing: 2px;
        animation: firma3dPulse 6s ease-in-out infinite;
    `;
    
    // Container'ı relative yap
    if (container.style.position !== 'relative') {
        container.style.position = 'relative';
    }
    
    // Overlay'i ekle
    container.appendChild(overlay);
    
    // CSS animasyonu ekle (eğer yoksa)
    if (!document.getElementById('firma3d-styles')) {
        var styleSheet = document.createElement('style');
        styleSheet.id = 'firma3d-styles';
        styleSheet.innerHTML = `
            @keyframes firma3dPulse {
                0%, 100% { 
                    transform: translate(-50%, -50%) rotateY(-15deg) rotateX(10deg) scale(1);
                    opacity: 0.15;
                }
                50% { 
                    transform: translate(-50%, -50%) rotateY(-15deg) rotateX(10deg) scale(1.05);
                    opacity: 0.25;
                }
            }
            
            @media (max-width: 768px) {
                .firma-adi-overlay {
                    font-size: 18px !important;
                    transform: translate(-50%, -50%) rotateY(-10deg) rotateX(5deg) !important;
                    text-shadow: 
                        1px 1px 0px #c0c0c0,
                        2px 2px 0px #a0a0a0,
                        3px 3px 0px #808080,
                        4px 4px 4px rgba(0,0,0,0.3) !important;
                }
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Global link kontrol sistemi
function globalLinkKontrolu() {
    // Tüm sayfa için click event listener
    document.addEventListener('click', function(event) {
        var element = event.target;
        
        // A etiketi veya A etiketinin child'ı mı kontrol et
        while (element && element !== document) {
            if (element.tagName === 'A') {
                var href = element.getAttribute('href');
                var onclick = element.getAttribute('onclick');
                
                // Korunacak linkler
                if (href && (
                    href.includes('Makbuz.') ||
                    href.includes('.pdf') ||
                    href.includes('http://') ||
                    href.includes('https://') ||
                    href.includes('mailto:') ||
                    href.includes('tel:') ||
                    href.includes('.aspx') ||
                    href.includes('.php')
                )) {
                    console.log('Link korundu ve çalışmasına izin verildi:', href);
                    return true; // Normal link davranışına izin ver
                }
                
                // Diğer tüm linkler için yönlendirmeyi iptal et
                event.preventDefault();
                event.stopPropagation();
                
                // onclick varsa çalıştır
                if (onclick && onclick.trim() !== '') {
                    try {
                        eval(onclick);
                    } catch (error) {
                        console.error('onclick çalıştırma hatası:', error);
                    }
                }
                
                return false;
            }
            element = element.parentElement;
        }
    }, true); // Capture phase'de yakala
    
    console.log('Global link kontrolü aktifleştirildi');
}

// Form submit'lerini de kontrol et
function formSubmitKontrolu() {
    document.addEventListener('submit', function(event) {
        var form = event.target;
        var action = form.getAttribute('action');
        
        // Makbuz formları hariç tüm form submit'lerini iptal et
        if (!action || (!action.includes('Makbuz') && !action.includes('.aspx'))) {
            event.preventDefault();
            console.log('Form submit iptal edildi:', action);
            return false;
        }
        
        console.log('Form submit izin verildi:', action);
        return true;
    });
}