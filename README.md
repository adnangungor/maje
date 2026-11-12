# Maje Müşavirlik — Resmi Kurumsal Web Sitesi

1992'den beri yatırım teşvik müşavirliği, gümrükleme ve dış ticaret mevzuat danışmanlığı alanında hizmet veren **Maje**'nin modern, erişilebilir ve kurumsal web sitesi.

---

## 🌟 Öne Çıkan Özellikler

- **Sıfır Dış Bağımlılık (Zero External Dependencies):** Harici CDN, Google Fonts, Bootstrap, jQuery vb. üçüncü parti kütüphanelere bağımlı değildir. Tüm fontlar (WOFF2), CSS ve Vanilla JavaScript dosyaları self-hosted olarak proje içinde yer alır.
- **Çift Dil Desteği:** Türkçe (`/`) ve tam pariteye sahip İngilizce (`/en/`) içerik mimarisi.
- **Tasarım Sistemi:** `--paper`, `--ink`, `--accent` (kiremit) renk paletine sahip, tipografik hiyerarşisi (Newsreader Serif + Hanken Grotesk Sans) özenle kurgulanmış tasarım sistemi.
- **9903 Sayılı Karar Uyumu:** 30 Mayıs 2025 tarihli ve 9903 sayılı Cumhurbaşkanı Kararı (*Yatırımlarda Devlet Yardımları Hakkında Karar*) terminolojisi ile %100 güncel teşvik yapısı (Türkiye Yüzyılı Kalkınma Hamlesi, Sektörel ve Hedef Yatırımlar, Öncelikli ve Bölgesel Destekler).
- **Kurumsal Ofis Ağı:** Ankara (Merkez - Viatower Plaza), İstanbul (Levent Şube) ve İstanbul (Maltepe Gümrük Operasyon) olmak üzere 3 fiziki ofis koordinasyonu.
- **Performans & SEO:** Schema.org ProfessionalService JSON-LD yapılandırılmış verileri, Open Graph etiketleri, XML sitemap ve %100 semantik HTML5 mimarisi.

---

## 📁 Proje Dizin Yapısı

```text
├── assets/
│   ├── css/
│   │   ├── tokens.css        # Tasarım değişkenleri (renkler, fontlar, boşluklar)
│   │   ├── base.css          # Tipografi, font yüklemeleri, sıfırlamalar
│   │   ├── components.css    # Butonlar, kartlar, formlar, navigasyon, footer
│   │   └── pages.css         # Sayfa bazlı özel ızgaralar ve stiller
│   ├── fonts/                # Self-hosted WOFF2 fontlar (Latin & Latin-ext)
│   ├── img/                  # Logo, favicon, Open Graph görseli
│   ├── js/
│   │   └── main.js           # Mobil menü, observer animasyonları, intro yönetimi
│   └── video/                # Kurumsal introlar (maje-intro.mp4)
├── en/                       # İngilizce site versiyonu
│   ├── index.html            # English Homepage
│   ├── about.html            # About Us
│   ├── investment-incentives.html # Investment Incentives Advisory
│   ├── foreign-trade-customs.html # Foreign Trade & Customs
│   ├── contact.html          # Contact & Inquiry
│   └── privacy.html          # Privacy Notice
├── index.html                # Ana Sayfa (Türkçe)
├── kurumsal.html             # Hakkımızda & Tarihçe & Değerler
├── yatirim-tesvik.html       # Yatırım Teşvik Müşavirliği (7 Adımlı Süreç)
├── dis-ticaret-gumruk.html   # Dış Ticaret & Gümrük Danışmanlığı
├── iletisim.html             # İletişim & Danışma Formu (3 Ofis)
├── kvkk.html                 # KVKK Aydınlatma Metni
├── intro-demo.html           # Giriş Animasyonu Demo Sayfası
├── sitemap.xml               # Arama Motoru Haritası
├── robots.txt                # Arama Motoru Direktifleri
└── .htaccess                 # Apache / LiteSpeed 301 yönlendirmeleri
```

---

## 🚀 Çalıştırma & Yayına Alma

### 1. Yerel Olarak Çalıştırma (Local Preview)

Herhangi bir derleme (build) veya paket yöneticisi gerekmez. Proje kök dizininde herhangi bir statik sunucu başlatmanız yeterlidir:

**Python ile:**
```bash
python -m http.server 8000
```
Ardından tarayıcınızdan `http://localhost:8000` adresine gidin.

**VS Code Live Server ile:**
Proje klasörünü VS Code ile açıp `index.html` dosyasına sağ tıklayarak **"Open with Live Server"** seçeneğini kullanabilirsiniz.

---

### 2. GitHub Pages ile Yayına Alma

1. Bu klasörün içeriğini GitHub'da bir depoya (repository) push edin.
2. Depo ayarlarından **Settings > Pages** sekmesine gidin.
3. **Build and deployment > Source** kısmını **Deploy from a branch** olarak seçin.
4. Branch olarak `main` (veya `master`) ve klasör olarak `/ (root)` seçip **Save** butonuna tıklayın.
5. Birkaç dakika içinde siteniz `https://kullaniciadiniz.github.io/depo-adi/` adresinde canlıya çıkacaktır.

---

### 3. Klasik Web Sunucusuna (cPanel, Nginx, Plesk) Yükleme

Bu klasörün içindeki tüm dosyaları sunucunuzun `public_html` veya `www` dizinine kopyalamanız yeterlidir.
- Apache veya LiteSpeed sunucularda `.htaccess` dosyası eski URL yönlendirmelerini otomatik olarak yönetir.
