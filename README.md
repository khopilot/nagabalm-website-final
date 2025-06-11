# <img src="public/images/Logo/Naga Balm__Brandmark_Fire.png" alt="Naga Balm Logo" width="48" style="vertical-align:middle;"/> Naga Balm Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-blue?logo=nextdotjs)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0.0-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com/)

---

> **Ancient Khmer healing traditions meet modern innovation.**
> 
> **Naga Balm** offers premium balms handcrafted in Cambodia, blending tradition with science for clean, effective pain relief and wellness.

---

## ✨ Features

- **Modern, Responsive UI**: Beautiful, mobile-first design with smooth animations.
- **Product Catalog**: Explore a full range of balms, oils, sprays, and more.
- **Retailer Finder**: Interactive section to find Naga Balm at trusted partners across Cambodia.
- **Brand Story**: Learn about the heritage, mission, and team behind Naga Balm.
- **FAQ & Contact**: Get answers and reach out directly.
- **Multilingual Ready**: Khmer and English support (in progress).
- **PWA Ready**: Installable, with manifest and icons for a native feel.

---

## 🖼️ Screenshots

<p align="center">
  <img src="public/images/Images for NB/MainNB-ProductDisplay.png" alt="Naga Balm Product Display" width="600"/>
</p>

---

## 🛍️ Product Lineup

- **Naga Balm Original** – All-purpose pain relief powerhouse
- **Naga Balm Ice** – Naturally cool, soothing for sensitive areas
- **Naga Balm Fire** – Deep, long-lasting heat for muscle & joint pain
- **Naga Balm Go** – Fast-acting, energizing relief for active lifestyles
- **Energizing Liniment Oil** – For massage, warm-up, and recovery
- **Extreme Liniment Oil** – Maximum heat for chronic pain
- **Pain Relief Spray** – Quick, non-greasy relief
- **Inhaler & Roll-On** – 2-in-1 for headaches, congestion, and tension
- **Mosquito Repellent** – DEET-free, family-safe
- **Medicated Oil** – For nausea, headaches, and more
- **Liniment Roll-On** – Targeted, easy application

---

## 📍 Where to Find Naga Balm

Available at:
- 7-Eleven
- Bonjour Mart
- Aosot Plus
- Circle K
- Super Duper
- Point Sante Pharmacy
- 21 Degree
- ...and many more retailers across Cambodia!

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm start
```

### PHP Email Setup

Install PHP dependencies for the contact form:

```bash
composer install
```

Update `sendmail.php` with your Hostinger SMTP credentials:

```php
$mail->Host = 'smtp.hostinger.com';
$mail->Username = 'info@yourdomain.com';
$mail->Password = 'your-password';
$mail->setFrom('info@yourdomain.com', 'Your Site');
$mail->addAddress('info@yourdomain.com');
```

Deploy `sendmail.php` (along with the `vendor/` folder) to your Hostinger `public_html` directory. 
Ensure PHP is enabled and your Next.js contact form sends POST requests to `https://yourdomain.com/sendmail.php`.

---

## 🛠️ Tech Stack
- **Framework:** [Next.js 15](https://nextjs.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **State/UX:** React 19, Intersection Observer
- **PWA:** Manifest, icons, installable

---

## 📁 Folder Structure
```
├── app/                # Main Next.js app directory
│   ├── home/           # Homepage sections/components
│   ├── products/       # Product pages & components
│   ├── about/          # About/brand story
│   ├── faq/            # FAQ page
│   ├── contact/        # Contact form/page
│   ├── where-to-find/  # Retailer locator
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main entry page
│   └── ...
├── public/             # Static assets (images, video, icons)
├── lib/                # Fonts and utilities
├── tailwind.config.ts  # Tailwind CSS config
├── next.config.ts      # Next.js config
├── tsconfig.json       # TypeScript config
└── ...
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br>
Feel free to open an [issue](https://github.com/nagabalm/nagabalm-website-final/issues) or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 📬 Contact & Links

- **Website:** [nagabalm.com](https://nagabalm.com)
- **Facebook:** [facebook.com/nagabalmkh](https://facebook.com/nagabalmkh)
- **Instagram:** [instagram.com/nagabalm](https://instagram.com/nagabalm)
- **Email:** info@nagabalm.com

---

> _Handcrafted in Cambodia with care, tradition, and innovation._
