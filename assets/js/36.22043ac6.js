(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{495:function(i,e,r){"use strict";r.r(e);var a=r(62),l=Object(a.a)({},(function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[r("h1",{attrs:{id:"guclu-kimlik-dogrulama"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#guclu-kimlik-dogrulama"}},[i._v("#")]),i._v(" Güçlü Kimlik Doğrulama ")]),i._v(" "),r("p",[i._v("ÖHK'nın YÖS uygulamasından HHS uygulamasına yönlendirilmesi ile başlanan güçlü kimlik doğrulama süreci,"),r("br"),i._v(" Oauth 2.0 standartları gereği öncelikle yetkod değerinin YÖS'e iletilmesi ile başlar ve erişim belirtecinin alınması sonucunda başarı ile sonuçlanmış olur.")]),i._v(" "),r("h1",{attrs:{id:"guclu-kimlik-dogrulama-icin-erisim-adresleri-endpoints"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#guclu-kimlik-dogrulama-icin-erisim-adresleri-endpoints"}},[i._v("#")]),i._v(" Güçlü Kimlik Doğrulama için Erişim Adresleri (Endpoints)")]),i._v(" "),r("p",[r("strong",[i._v('Etki Alanı (Scope) =“hesap_bilgisi”  "odeme_emri"')])]),i._v(" "),r("table",[r("thead",[r("tr",[r("th",[i._v("No")]),i._v(" "),r("th",[i._v("Kaynak")]),i._v(" "),r("th",[i._v("HTTP işlemi")]),i._v(" "),r("th",[i._v("Erişim Adresi")]),i._v(" "),r("th",[i._v("Zorunlu (Z)/ İsteğe Bağlı(İ)")]),i._v(" "),r("th",[i._v("Yetkilendirme Türü")]),i._v(" "),r("th",[i._v("İmzalama")]),i._v(" "),r("th",[i._v("Parametre")]),i._v(" "),r("th",[i._v("İstem Nesnesi")]),i._v(" "),r("th",[i._v("Yanıt Nesnesi")])])]),i._v(" "),r("tbody",[r("tr",[r("td",[i._v("1")]),i._v(" "),r("td",[i._v("yetkilendirme-kodu")]),i._v(" "),r("td",[i._v("POST")]),i._v(" "),r("td",[i._v("/yetkilendirme-kodu")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("İstemci Kimlik Bilgileri")]),i._v(" "),r("td",[i._v("İmzalı İstek ve Yanıt")]),i._v(" "),r("td"),i._v(" "),r("td"),i._v(" "),r("td",[i._v("yetkilendirmeKodu")])]),i._v(" "),r("tr",[r("td",[i._v("2")]),i._v(" "),r("td",[i._v("erisim-belirteci")]),i._v(" "),r("td",[i._v("POST")]),i._v(" "),r("td",[i._v("/erisim-belirteci")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("İstemci Kimlik Bilgileri")]),i._v(" "),r("td",[i._v("İmzalı İstek ve Yanıt")]),i._v(" "),r("td"),i._v(" "),r("td",[i._v("ErisimBelirteciIstegi")]),i._v(" "),r("td",[i._v("ErisimBelirteci")])])])]),i._v(" "),r("h2",{attrs:{id:"yetkilendirme-kodu-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yetkilendirme-kodu-api"}},[i._v("#")]),i._v(" Yetkilendirme Kodu API")]),i._v(" "),r("p",[r("strong",[i._v("GET /yetkilendirme-kodu")])]),i._v(" "),r("p",[i._v("Ayrık GKD sürecinde kullanılacak olan Yetkilendirme Kodu API'nin  HHS tarafından sunulması gerekmektedir.")]),i._v(" "),r("p",[i._v("Ayrık GKD akışında; HHS, YÖS'ün olay dinleme servisine \"AYRIK_GKD_BASARILI\" olay tipi ile olay bildirimi yapar. Böylece ÖHK'nın kendi sistemine başarı ile login olduğunu ve yetKod değerinin ÖHK ile ilişkilendirildiğinin bilgisini YÖS'e iletmiş olur. "),r("br"),i._v("\nHHS olay bildirimi için retry policy süreçleri kapsamında 1 dakikada 3 kez deneme yapabilir. YÖS'e olay bildirimi yapılmamış ise, kendisine gelmeyen olay bildirimi için yetkod'un geçerli olduğu 5 dakika boyunca yetkilendirme-kodu endpointi ile sorgulama yaparak yetkod değerini alabilir.")]),i._v(" "),r("p",[i._v('YÖS, "ODEME_EMRI_RIZASI" kaynağı için bildirim yapıldı ise; GET /yetkilendirme-kodu endpointi ile yetkod sorgusu yapılır.'),r("br"),i._v("\nÖrnek çağrım :\n"),r("strong",[i._v("GET /yetkilendirme-kodu?rizaNo=123&rizaTip=O")])]),i._v(" "),r("p",[i._v('YÖS, "HESAP_BILGISI_RIZASI" kaynağı için bildirim yapıldı ise; GET /yetkilendirme-kodu endpointi ile yetkod sorgusu yapılır.'),r("br"),i._v("\nÖrnek çağrım :\n"),r("strong",[i._v("GET /yetkilendirme-kodu?rizaNo=123&rizaTip=H")])]),i._v(" "),r("p",[r("strong",[i._v("İSTEK:")])]),i._v(" "),r("p",[i._v("YÖS, rıza numarasını ve isteğin ÖBH ya da HBH olmasına göre değişen rıza tipini parametre olarak istek talebine ekler. Rıza tipinin alabileceği değerler "),r("strong",[i._v("TR.OHVPS.DataCode.RizaTip")]),i._v(" sıralı veri tiplerinde belirtilmiştir.")]),i._v(" "),r("p",[i._v('HHS\'nin, yetkilendirme yöntemi "Ayrık Gkd" ise  rıza numarası ile yetki kodu değerini dönmesi beklenmektedir. Yönlendirmeli GKD için bu endpoint "yetKod" değerini dönmemelidir.')]),i._v(" "),r("p",[r("strong",[i._v("YANIT:")])]),i._v(" "),r("p",[i._v("HHS yanıt nesnesi içerisinde, ÖHK'ya ait yetki kodunu, rıza no ve rıza durumu ile birlikte YÖS'e iletir.")]),i._v(" "),r("table",[r("thead",[r("tr",[r("th",[i._v("Alan Adı")]),i._v(" "),r("th",[i._v("JSON Alan Adı")]),i._v(" "),r("th",[i._v("Format:Veri modeli İsmi")]),i._v(" "),r("th",[i._v("Zorunlu / Koşullu /  İsteğe bağlı")]),i._v(" "),r("th",[i._v("Açıklama")])])]),i._v(" "),r("tbody",[r("tr",[r("td",[i._v("Yetkilendirme Kodu")]),i._v(" "),r("td",[i._v("yetkilendirmeKodu")]),i._v(" "),r("td",[i._v("AN1..128")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı")])]),i._v(" "),r("tr",[r("td",[i._v("> Yetki Kodu")]),i._v(" "),r("td",[i._v("yetKod")]),i._v(" "),r("td",[i._v("AN1..255")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("GKD sürecinde üretilen yetkilendirme kodudur. Tek kullanımlık olup, aynı yetKod ile birden fazla token alınamaz. yetKod Parametresinin yaşam ömrü 5 dakika olmalıdır.")])]),i._v(" "),r("tr",[r("td",[i._v("> RızaNo")]),i._v(" "),r("td",[i._v("rizaNo")]),i._v(" "),r("td",[i._v("AN1..128")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı")])]),i._v(" "),r("tr",[r("td",[i._v("> Rıza Durumu")]),i._v(" "),r("td",[i._v("rizaDrm")]),i._v(" "),r("td",[i._v("AN1")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[r("strong",[i._v("TR.OHVPS.DataCode.RizaDurumu")]),i._v(" sıralı veri tipini değerlerinden birini alır.")])])])]),i._v(" "),r("p",[i._v("Ayrık GKD sürecinde, yetkod değerini alan YÖS; erişim belirteci API ile GKD sürecini tamamlar.")]),i._v(" "),r("h2",{attrs:{id:"erisim-belirteci-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#erisim-belirteci-api"}},[i._v("#")]),i._v(" Erişim Belirteci API")]),i._v(" "),r("p",[r("strong",[i._v("POST /erisim-belirteci")])]),i._v(" "),r("p",[r("strong",[i._v("İSTEK:")])]),i._v(" "),r("p",[i._v("YÖS erisim-belirteci erişim adresini 2 amaçla kullanır:")]),i._v(" "),r("ol",[r("li",[r("p",[i._v("Bir önceki adımdan aldığı rizaNo, rizaTip (ödeme emri başlatma hizmetinde “O”, hesap bilgisi hizmetinde “H”) ve GKD sonrası dönülen yetKod bilgilerini kullanarak HHS nezdinde ErisimBelirteci nesnesi oluşturmak üzere istekte bulunur. YÖS’ün istekte bulunabilmesi için GKD adımının başarılı bir şekilde tamamlanması rizaDrm bilgisinin ‘yetkilendirildi’ olması gerekir. Erişim Belirteci nesnesi ile rızası nesnesi (Ödeme Emri Rızası veya Hesap Bilgisi Rızası) arasındaki ilişki rıza numarası üzerinden sağlanır.")])]),i._v(" "),r("li",[r("p",[i._v("Aldığı erişim belirtecinin Geçerlilik Süresinin dolduğu durumda, yenileme belirteci karşılığında yeni bir erişim belirteci alması gerekmektedir.")])])]),i._v(" "),r("p",[i._v("POST /erisim-belirteci isteğinin (REQUEST) gövdesinde (BODY)  “ErisimBelirteciIstegi” nesnesi (Tablo-23) kullanılır. İstek başarıyla sonuçlanırsa HHS kaynak sunucusunda “ErisimBelirteci” nesnesi (Tablo 24) oluşturulur veya (Yenileme Belirteci için) güncellenir. Rıza durumu “Yetki Kullanıldı” olarak güncellenir.")]),i._v(" "),r("p",[i._v("Erişim Belirteci POST işlemi sonucunda HTTP 200 dönülmesi gerekmektedir.")]),i._v(" "),r("p",[r("strong",[i._v("“ErisimBelirteciIstegi” nesnesi")])]),i._v(" "),r("table",[r("thead",[r("tr",[r("th",[i._v("Alan Adı")]),i._v(" "),r("th",[i._v("JSON Alan Adı")]),i._v(" "),r("th",[i._v("Format:Veri modeli İsmi")]),i._v(" "),r("th",[i._v("Zorunlu / Koşullu /  İsteğe bağlı")]),i._v(" "),r("th",[i._v("Açıklama")])])]),i._v(" "),r("tbody",[r("tr",[r("td",[i._v("RızaNo")]),i._v(" "),r("td",[i._v("rizaNo")]),i._v(" "),r("td",[i._v("AN1..128")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Rıza nesnesinin oluşturulması esnasında HHS kaynak sunucusu tarafından atanan biricik tanımlayıcı")])]),i._v(" "),r("tr",[r("td",[i._v("Rıza Tipi")]),i._v(" "),r("td",[i._v("rizaTip")]),i._v(" "),r("td",[i._v("AN1")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[r("strong",[i._v("O veya H (TR.OHVPS.DataCode.RizaTip)")])])]),i._v(" "),r("tr",[r("td",[i._v("Yetki Tipi")]),i._v(" "),r("td",[i._v("yetTip")]),i._v(" "),r("td",[i._v("AN1..50")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("“yet_kod” yada “yenileme_belirteci” değerini alabilir. "),r("strong",[i._v("(TR.OHVPS.DataCode.YetTip)")])])]),i._v(" "),r("tr",[r("td",[i._v("Yetki Kodu")]),i._v(" "),r("td",[i._v("yetKod")]),i._v(" "),r("td",[i._v("AN1..255")]),i._v(" "),r("td",[i._v("K")]),i._v(" "),r("td",[i._v("GKD işleminden dönen yetkilendirme kodudur. Tek kullanımlık olup, aynı yetKod ile birden fazla token alınamaz. yetKod Parametresinin yaşam ömrü 5 dakika olmalıdır."),r("br"),i._v("yetTip = “yet_kod” ise zorunludur.")])]),i._v(" "),r("tr",[r("td",[i._v("Yenilenme Belirteci")]),i._v(" "),r("td",[i._v("yenilemeBelirteci")]),i._v(" "),r("td",[i._v("AN1..4096")]),i._v(" "),r("td",[i._v("K")]),i._v(" "),r("td",[i._v("Erişim belirtecinin yenilenmesi amacıyla kullanılır."),r("br"),i._v("yetTip = “yenileme_belirteci” ise kullanımı zorunludur.")])])])]),i._v(" "),r("p",[r("strong",[i._v("BAŞARILI YANIT:")])]),i._v(" "),r("p",[i._v("POST işleminin RESPONSE gövdesini (BODY) oluşturan “erisimBelirteci” nesnesinde bulunan erişim belirteci değeri ödeme emrinin başlatılması esnasında kullanılır.")]),i._v(" "),r("p",[r("strong",[i._v('"ErisimBelirteci" nesnesi')])]),i._v(" "),r("table",[r("thead",[r("tr",[r("th",[i._v("Alan Adı")]),i._v(" "),r("th",[i._v("JSON Alan Adı")]),i._v(" "),r("th",[i._v("Format:Veri modeli İsmi")]),i._v(" "),r("th",[i._v("Zorunlu / Koşullu /  İsteğe bağlı")]),i._v(" "),r("th",[i._v("Açıklama")])])]),i._v(" "),r("tbody",[r("tr",[r("td",[i._v("Erişim Belirteci")]),i._v(" "),r("td",[i._v("erisimBelirteci")]),i._v(" "),r("td",[i._v("AN1..4096")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Yetkilendirme Kodu karşılığında HHS tarafından dönülen ve sonraki hesap bilgisi ve ödeme emri servislerine erişimde kullanılan bilgidir."),r("br"),r("RouterLink",{attrs:{to:"/v1.1.0/contents/temel-prensipler.html#_3-6-karakter-kodlama"}},[i._v("Bölüm 3.6 Karakter Kodlama")]),i._v("  bölümünde açıklanan karakter formatında gönderilmesi beklenmektedir.")],1)]),i._v(" "),r("tr",[r("td",[i._v("Geçerlilik Süresi")]),i._v(" "),r("td",[i._v("gecerlilikSuresi")]),i._v(" "),r("td",[i._v("N1..9")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Erişim Belirtecini saniye cinsinden geçerlilik süresidir."),r("br"),i._v(" Erişim belirteci geçerli olduğu son tarih ;"),r("br"),i._v("Hesap Bilgisi Rızası için en fazla 30 gün olmalıdır. Erişimin Geçerli Olduğu Son Tarih(erisimIzniSonTrh); Erişim Belirteci Geçerlilik Süresi'nden küçük ise Erişimin Geçerli Olduğu Son Tarih değeri ile sınırlıdır."),r("br"),i._v("Ödeme Başlatma Rızası için 5 dakika olmalıdır.")])]),i._v(" "),r("tr",[r("td",[i._v("Yenileme Belirteci")]),i._v(" "),r("td",[i._v("yenilemeBelirteci")]),i._v(" "),r("td",[i._v("AN1..4096")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Erişim belirtecinin yenilenmesi amacıyla kullanılır."),r("br"),i._v(" "),r("RouterLink",{attrs:{to:"/v1.1.0/contents/temel-prensipler.html#_3-6-karakter-kodlama"}},[i._v("Bölüm 3.6 Karakter Kodlama")]),i._v(" bölümünde açıklanan karakter formatında gönderilmesi beklenmektedir.")],1)]),i._v(" "),r("tr",[r("td",[i._v("Yenileme Belirteci Geçerlik Süresi")]),i._v(" "),r("td",[i._v("yenilemeBelirteciGecerlilikSuresi")]),i._v(" "),r("td",[i._v("N1..9")]),i._v(" "),r("td",[i._v("Z")]),i._v(" "),r("td",[i._v("Yenileme belirtecinin saniye cinsinden geçerlilik süresidir."),r("br"),i._v("Yenileme belirtecinin geçerli olduğu son tarih ;"),r("br"),i._v("Hesap Bilgisi için Erişimin Geçerli Olduğu Son Tarih ile sınırlı olmalıdır."),r("br"),i._v("Bu tarih geldiği zaman Hesap Bilgisi Rıza Durumunu ”Yetki Sonlandırıldı” statüsüne çekilmesi gerekir."),r("br"),i._v("Ödeme Başlatma için Rıza Oluşturma Zamanından 15 gün sonrası olmalıdır."),r("br"),r("br"),i._v("15 gün süresi sorgulama servislerinin çağrımını destekleyecek şekilde uzun tutulmuştur. İleri vadeli işlemler bu kapsamda değildir. "),r("br"),i._v("Ödeme emri 5 dakika içinde gerçekleştirilmelidir. Gerçekleşmediğinde 4.2.8 bölümünde aktarılan rıza statü güncellemesi yapılmalıdır.")])])])]),i._v(" "),r("p",[i._v("erisim-belirteci erisim noktasından elde edilen erisimBelirteci, ilişkilendirildiği nesne veya işlem için gönderilen POST isteği başlığında x-access-token alanında iletilir.")]),i._v(" "),r("p",[i._v("Yenilenme Belirteci (refreshToken) kullanılarak Erişim Belirteci (accessToken) alındığında, dönen yanıttaki Yenileme Belirteci Geçerlik Süresi (yenilemeBelirteciGecerlilikSuresi) geçen süre eksiltilerek, kalan zamanın saniye cinsinden hesaplanmasıyla iletilmelidir.")]),i._v(" "),r("p",[i._v("Yenileme Belirteci ile Erişim Belirteci güncellendiğinde, HHS'den dönen yenilemeBelirteci değeri değişebilir, YÖS bu güncel anahtarı saklamalı ve sonraki erisimBelirteci isteğini yenilenmiş olan yenilemeBelirteci ile yapmalıdır.")]),i._v(" "),r("p",[i._v("Erişim Belirteci API çağrımı sırasında rıza durumları kontrol edilmelidir. Bu kontrollerin nasıl yapılması gerektiği 4-Rıza Durumları bölümünde aktarılmıştır.")]),i._v(" "),r("p",[i._v('Yenileme belirteci karşılığında yeni bir erişim belirteci alınması sırasında HHS\'nin döndüğü hata yanıtında httpCode = 401 ve errorCode = "TR.OHVPS.Connection.InvalidToken" gelirse YÖS önce rızanın durumu sorgulamalıdır. '),r("br"),i._v("\nEğer geçerli bir rıza ise; HHS veya YÖS tarafında bir sorun olduğu anlaşılmalıdır. Sistem tarafından hata üretilmeli ve sorun incelenmelidir."),r("br"),i._v("\nEğer geçerli bir rıza değil ise YÖS tarafındaki rıza durumu güncellenmelidir."),r("br")])])}),[],!1,null,null,null);e.default=l.exports}}]);