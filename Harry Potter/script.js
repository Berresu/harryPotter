document.getElementById("listeKitaplar").addEventListener("change", kitaplar);
let sonuc=document.getElementById("sonucBaslik");

function kitaplar(){
    sonuc.classList.remove("ft", "so", "at", "ak", "zy", "mp", "oy", "normal");
    kitaplar=document.getElementById("listeKitaplar").selectedIndex;
    console.log(kitaplar);

    if(kitaplar==0){
        document.body.style.backgroundColor="rgb(156, 11, 11)";
        sonuc.innerHTML="'Harry, elleri titreyerek zarfı çevirince mor balmumundan bir mühür gördü; bir arma - koca bir 'H' harfinin çevresinde bir aslan, bir kartal, bir porsuk,bir de yılan' Harry Potter sıradan bir çocuk olduğunu sanırken, bir baykuşun getirdiği mektupla yaşamı değişir: Başvurmadığı halde Hogwarts Cdılık ve Büyücülük Okulu'na kabul edilmiştir. Burada birbirinden ilginç dersler alır, iki arkadaşıyla birlikte maceradan maceraya koşar. Yaşayarak öğrendikleri sayesinde küçük yaşta becerikli bir büyücü olup çıkar.";
        sonuc.classList.add("ft");
        document.getElementById("resim").setAttribute("src", "images/ft.jpg");
    }
    else if(kitaplar==1){
        document.body.style.backgroundColor="rgb(5, 44, 18)";
        sonuc.innerHTML="'Bir komplo var, Harry Potter. Bu yıl Hogwarts Cadılık ve Büyücülük Okulu'nda dehşet verici şeyler yapmak için bir komplo' Dursley'ler o yaz öylesine çekilmez olmuşlardı ki, Harry bir an önce Hogwarts'a geri dönmek için can atmaktadır. Eşyalarını toplarken ortaya çıkan bir ev cini Dobby ise onu uyarır: Hogwarts'a dönerse, bir felaket olacaktır. Olur da: Sırlar Odası'nın açılmasıyla ortaya çıkan karanlık bir güç, Hogwarts'takileri taşa çevirmeye başlar. Harry, hayatını tehlikeye atarak, Oda'nın elli yıllık ölümcül gizemini çözmeye çalışır. Ve gerçektende başına gelmedik felaket kalmaz.";
        sonuc.classList.add("so");
        document.getElementById("resim").setAttribute("src", "images/so.jpg");
    }
    else if(kitaplar==2){
        document.body.style.backgroundColor="rgb(67, 183, 250)";
        sonuc.innerHTML="'Mahsur kalmış cadıların ve büyücülerin acil durum taşıtı Hızır Otobüs'e hoş geldiniz. Asanızı tuttuğunuz elinizi uzatın, otobüse atlayın, sizi istediğiniz yere götürelim.' Sirius Black adında azılı bir katil, tüyler ürpertici Azkaban kalesinde tam on iki yıl boyunca tutsak kalmıştır. tek lanetle on üç kişiyi birden öldüren Black'in, Karanlık Lord Voldemort'un hizmetkarı olduğuna kesin gözüyle bakılmaktadır. Bir yolunu bulup Azkaban'dan kaçan Black'in peşinde olduğu bir tek kişi vardır: Harry Potter. Harry büyücülük okulunun sihirli duvarları arasındayken, arkadaşları ve öğretmenleriyle birlikteyken bile güvende değildir. Çünkü aralarında bir hain olabilir.";
        sonuc.classList.add("at");
        document.getElementById("resim").setAttribute("src", "images/at.jpg");
    }
    else if(kitaplar==3){
        document.body.style.backgroundColor="rgb(253, 74, 4)";
        sonuc.innerHTML="'Okul yılı boyunca üç görev yerine getirilecek ve bunlar şampiyonların farklı farklı niteliklerini sınayacak... sihirli güçlerini - cesaretlerini - sonuca varma yeteneklerini - ve, elbette, tehlikeyle başa çıkma yeteneklerini.' Büyücülük okulunda dördüncü sınıfa geçen Harry, yaz tatilinde Durley'lerden izin koparıp arkadaşlarıyla birlikte Quidditch Dünya Kupası finalini izlemeye gider. Bu yıl Hogwarts'taki en büyük yenilik ise, Üçbüyücü Turnuvası'dır. Üç rakip büyücülük okulunun katılımıyla gerçekleşen bu etkinlik yüz yıldan beri ilk kez düzenlenmektedir. Harry, istemediği, yaşı bile tutmadığı halde, kendini bu Turnuva'nın içinde bulur. Oysa onun tek istediği, büyücülük standartları içinde olabildiğince 'normal' bir yaşam sürmek, yeni büyüler öğrenerek kendini geliştirmek, Cho'yla ilgili hayaller kurmak, Ron ve Hermione'yle hoşça vakit geçirmektir. Ancak, alnındaki yara izinin ikide bir acıması, korkunç olayların yaklaşmakta olduğunun habercisidir...";
        sonuc.classList.add("ak");
        document.getElementById("resim").setAttribute("src", "images/ak.jpg");
    }
    else if(kitaplar==4){
        document.body.style.backgroundColor="rgb(190, 184, 184)";
        sonuc.innerHTML="'Kanıtlar, bazen, zihnin en rahat ve etkiye açık durumdayken - örneğin uyurken - Karanlık Lord'un düşüncelerini ve duyguların paylaştığına işaret ediyor. Müdür bunun devam etmesini uygun bulmuyor. Benim sana, zihnini Karanlık Lord'a karşı nasıl kapatacağını öğretmemi istiyor.' Hogwarts Cadılık ve Büyücülük Okulu'ndaki beşinci yılında Harry, hayatını cehenneme çeviren sihirli/sihirsiz pek çok şeyle başa çıkmak zorunda: Yaz tatilini yanlarında harcadığı aptal akrabaları; ergenlik çağının isyanları, heycanları, korkuları; onun gösteriş düşkünü bir yalancı olduğunu düşünenler; okulun işleyişine burnunu sokan Sihir Bakanlığı; öncekileri mumla aratan yeni bir Karanlık Sanatlara Karşı Savunma öğretmeni; yine karşı karşıya geldiği Ruh Emici'ler ve Ölüm Yiyen'ler; varlığını her zamankinden çok hissetiren Voldemort; ağır dersler, zor sınavlar, acımasız cezalar; sürekli yinelenen bir kabus ve acıyan yara izi; ona en yakın insanlardan birinin ölümü; beş yıl gecikmeyle öğrendiği bir gerçek...";
        sonuc.classList.add("zy");
        document.getElementById("resim").setAttribute("src", "images/zy.jpg");
    }
    else if(kitaplar==5){
        document.body.style.backgroundColor="rgb(45, 73, 47)";
        sonuc.innerHTML="'işte orada, okulun tepesinde, gökte asılı duruyordu: o yıllan dilli, parıl parıl parlayan yeşil kafatası;Ölüm Yiyen'lerin bir binaya girdiklerinde... birilerini öldürdüklerinde arkalarında bıraktıkları işaret...' Büyücüler dünyasında devam eden karmaşa artık Muggle'ların dünyasını da etkilemeye başlamıştır. Harry Potter, Hogwarts'taki altıncı yılını yılını Feci Yorucu Büyücülük Sınavlarına hazırlanarak geçireceğini düşünmektedir. Artık Quidditch takımını da kaptanıdır. Ancak Diagon Yolu'ndaki okul alışverişi sırasında Draco Malfoy'un bir şeyler çevirdiğini fark eder. Lord Voldemort'un geçmişiyle ilgili pek çok bilinmeyen ortaya çıkarken bir yanadan da Malfoy'un neyin peşinde olduğunu öğrenmeye çalışan Harry'yi yine zor günler beklemektedir.";
        sonuc.classList.add("mp");
        document.getElementById("resim").setAttribute("src", "images/mp.jpg");
    }
    else if(kitaplar==6){
        document.body.style.backgroundColor="#000";
        sonuc.innerHTML="''Bana Harry Potter'ı verin,' dedi Voldemort'un sesi, 'kimseye zarar gelmesin. Bana Harry Pooter'ı verin, okula dokunmayayım. Bana Harry Potter'ı verin ödüllendirilin.'' Sihir dünyası savaşta! Karanlık Lord iyice güç kazanırken iyiler de boş durmuyor. Yedinci yılında Hogwarts Cadılık ve Büyücülük Okulu'na dönmeyen Harry Potter, Dumbledore'un ona bıraktığı görevi tamamlamaya çalışıyor. Yanında - her zamanki gibi - Ron ve Hermione'yle, bir yandan Voldemort'tan ve onun Ölüm Yiyen'lerinden kaçarken bir yandan da Hortkuluklar'ı yok etmek, Ölüm Yadigarları'nın sırrın keşfetmek zorunda olan Harry kendi geçmişiyle ilgili de pek çok şey öğreniyor.";
        sonuc.classList.add("oy");
        document.getElementById("resim").setAttribute("src", "images/oy.jpg");
    }
}
