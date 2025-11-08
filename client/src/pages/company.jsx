import React, { useState,Link } from "react";


const translations = {
  en: {
    brand: "NovaLearn",
    tagline: "Gamified learning platform for students",
    heroTitle: "Learn languages and skills with game-like challenges.",
    heroSubtitle:
      "NovaLearn turns short lessons, quizzes and streaks into a daily learning habit.",
    ctaPrimary: "Start Learning",
    ctaSecondary: "View Features",

    navHome: "Home",
    navServices: "Features",
    navAbout: "About",
    navContact: "Contact",

    servicesTitle: "Key Features",
    services: [
      {
        title: "Gamified Lessons",
        text: "Bite-sized interactive lessons with XP, levels and streaks to keep students motivated."
      },
      {
        title: "Adaptive Quizzes",
        text: "Question sets that adjust to learners' performance and provide instant feedback."
      },
      {
        title: "Progress Dashboard",
        text: "A simple dashboard to track XP, completed lessons and daily activity."
      }
    ],

    recentTitle: "Example Use Cases",
    recentItems: [
      "University students practising vocabulary with daily streaks.",
      "Secondary school learners revising grammar through quizzes.",
      "Self-learners tracking progress for languages or digital skills."
    ],

    aboutTitle: "About NovaLearn",
    aboutText:
      "NovaLearn is a web-based learning system inspired by apps like Duolingo. It is developed as a university project to help students stay consistent with their studies through gamification – points, streaks and levels.",

    whyTitle: "Why learners and educators choose NovaLearn",
    whyItems: [
      "Simple interface focused on consistency, not complexity.",
      "Clear progress tracking with XP, levels and streaks.",
      "Designed as a lightweight web app that works on laptop and mobile."
    ],

    contactTitle: "Interested in NovaLearn?",
    contactText:
      "If you are an educator or student who would like to test this gamified learning system or share feedback, please contact us using the form below.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formButton: "Send Message",

    contactEmailLabel: "Email",
    contactPhoneLabel: "WhatsApp",
    contactLocationLabel: "Location",
    contactEmailValue: "hello@novalearn.app",
    contactPhoneValue: "+60 12-345 6789",
    contactLocationValue: "Johor, Malaysia",

    footerText: "© 2025 NovaLearn. Gamified Learning System."
  },

  ms: {
    brand: "NovaLearn",
    tagline: "Platform pembelajaran bergamifikasi untuk pelajar",
    heroTitle:
      "Belajar bahasa dan kemahiran melalui cabaran seperti permainan.",
    heroSubtitle:
      "NovaLearn menukar pelajaran pendek, kuiz dan streak harian kepada tabiat belajar setiap hari.",
    ctaPrimary: "Mula Belajar",
    ctaSecondary: "Lihat Ciri",

    navHome: "Laman Utama",
    navServices: "Ciri",
    navAbout: "Tentang",
    navContact: "Hubungi",

    servicesTitle: "Ciri Utama",
    services: [
      {
        title: "Pelajaran Bergamifikasi",
        text: "Pelajaran interaktif yang ringkas dengan XP, tahap dan streak untuk kekalkan motivasi pelajar."
      },
      {
        title: "Kuiz Adaptif",
        text: "Set soalan yang menyesuaikan tahap berdasarkan prestasi pelajar dan memberi maklum balas segera."
      },
      {
        title: "Papan Pemuka Kemajuan",
        text: "Paparan ringkas untuk menjejak XP, bilangan pelajaran siap dan aktiviti harian."
      }
    ],

    recentTitle: "Contoh Penggunaan",
    recentItems: [
      "Pelajar universiti berlatih kosa kata dengan streak harian.",
      "Pelajar sekolah menengah mengulang kaji tatabahasa melalui kuiz.",
      "Pembelajar sendiri menjejak kemajuan bahasa atau kemahiran digital."
    ],

    aboutTitle: "Tentang NovaLearn",
    aboutText:
      "NovaLearn ialah sistem pembelajaran berasaskan web yang diinspirasikan oleh aplikasi seperti Duolingo. Projek ini dibangunkan sebagai projek universiti untuk membantu pelajar kekal konsisten belajar melalui gamifikasi – mata, streak dan tahap.",

    whyTitle: "Mengapa pelajar dan pensyarah memilih NovaLearn",
    whyItems: [
      "Antara muka yang ringkas, fokus kepada konsistensi bukannya kerumitan.",
      "Jejak kemajuan yang jelas dengan XP, tahap dan streak.",
      "Direka sebagai aplikasi web ringan yang berfungsi di komputer riba dan telefon."
    ],

    contactTitle: "Berminat dengan NovaLearn?",
    contactText:
      "Jika anda pensyarah atau pelajar yang ingin menguji platform pembelajaran bergamifikasi ini atau memberi maklum balas, sila hubungi kami melalui borang di bawah.",
    formName: "Nama",
    formEmail: "Emel",
    formMessage: "Mesej",
    formButton: "Hantar Mesej",

    contactEmailLabel: "Emel",
    contactPhoneLabel: "WhatsApp",
    contactLocationLabel: "Lokasi",
    contactEmailValue: "hello@novalearn.app",
    contactPhoneValue: "+60 12-345 6789",
    contactLocationValue: "Johor, Malaysia",

    footerText: "© 2025 NovaLearn. Sistem Pembelajaran Bergamifikasi."
  },

  zh: {
    brand: "NovaLearn 学习系统",
    tagline: "面向学生的游戏化学习平台",
    heroTitle: "用闯关、积分和连胜打卡来学习语言与技能。",
    heroSubtitle:
      "NovaLearn 把短课、测验和每日任务变成像玩游戏一样的学习习惯。",
    ctaPrimary: "开始学习",
    ctaSecondary: "查看功能",

    navHome: "首页",
    navServices: "功能",
    navAbout: "关于",
    navContact: "联系",

    servicesTitle: "核心功能",
    services: [
      {
        title: "游戏化课程",
        text: "短小的互动练习，配合经验值 XP、等级、连胜打卡，帮助学生保持学习动力。"
      },
      {
        title: "自适应测验",
        text: "根据答题表现自动调整难度，并提供即时反馈，让练习不过难也不过简单。"
      },
      {
        title: "学习进度面板",
        text: "清晰展示 XP、完成的关卡数量以及每日活跃情况，方便学生和老师查看进度。"
      }
    ],

    recentTitle: "典型使用场景",
    recentItems: [
      "大学生通过每日打卡背单词、练听力。",
      "中学生用小测验复习语法和考试重点。",
      "自学者跟踪语言或编程等技能的长期进度。"
    ],

    aboutTitle: "关于 NovaLearn",
    aboutText:
      "NovaLearn 是一个受 Duolingo 启发的网页学习系统，本项目作为大学作业开发，目标是通过积分、等级、连胜等游戏化机制，让学生更愿意持续学习。",

    whyTitle: "为什么学生和老师会选择 NovaLearn",
    whyItems: [
      "界面简单，上手快，重点是让学生每天愿意打开来学。",
      "用 XP、等级和连胜把学习进度可视化。",
      "基于浏览器的轻量级应用，在电脑和手机上都可以使用。"
    ],

    contactTitle: "想体验 NovaLearn？",
    contactText:
      "如果你是老师或学生，想试用这个游戏化学习系统或提供意见，可以通过下方表单联系我们。",
    formName: "姓名",
    formEmail: "邮箱",
    formMessage: "留言",
    formButton: "发送",

    contactEmailLabel: "邮箱",
    contactPhoneLabel: "WhatsApp",
    contactLocationLabel: "所在地",
    contactEmailValue: "hello@novalearn.app",
    contactPhoneValue: "+60 12-345 6789",
    contactLocationValue: "马来西亚柔佛",

    footerText: "© 2025 NovaLearn 游戏化学习系统."
  }
};

const Company = () => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    
    <div className="d-flex flex-column min-vh-100">
      
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">
            {t.brand}
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  {t.navHome}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  {t.navServices}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  {t.navAbout}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  {t.navContact}
                </a>
              </li>
            </ul>

            {/* 语言切换按钮 */}
            <div className="btn-group" role="group" aria-label="Language switcher">
              <button
                type="button"
                className={`btn btn-sm ${
                  lang === "en" ? "btn-primary" : "btn-outline-light"
                }`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`btn btn-sm ${
                  lang === "ms" ? "btn-primary" : "btn-outline-light"
                }`}
                onClick={() => setLang("ms")}
              >
                BM
              </button>
              <button
                type="button"
                className={`btn btn-sm ${
                  lang === "zh" ? "btn-primary" : "btn-outline-light"
                }`}
                onClick={() => setLang("zh")}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1" id="home">
        {/* Hero 区 */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-md-6">
                <span className="badge bg-primary-subtle text-primary mb-2">
                  {t.tagline}
                </span>
                <h1 className="fw-bold mb-3">{t.heroTitle}</h1>
                <p className="text-muted mb-4">{t.heroSubtitle}</p>
                <div className="d-flex gap-2">
                  <button className="btn btn-primary">{t.ctaPrimary}</button>
                  <a href="#services" className="btn btn-outline-secondary">
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <div className="border rounded-4 p-4 shadow-sm bg-white">
                  <p className="mb-2 fw-semibold">{t.recentTitle}</p>
                  <ul className="list-unstyled mb-0 text-muted small">
                    {t.recentItems.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services 区 */}
        <section id="services" className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">{t.servicesTitle}</h2>
            <div className="row g-4">
              {t.services.map((service, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text text-muted small">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About 区 */}
        <section id="about" className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center gy-4">
              <div className="col-md-6">
                <h2 className="mb-3">{t.aboutTitle}</h2>
                <p className="text-muted">{t.aboutText}</p>
              </div>
              <div className="col-md-6">
                <div className="border rounded-4 p-4 bg-white shadow-sm">
                  <p className="mb-1 small text-muted">{t.whyTitle}</p>
                  <ul className="small text-muted mb-0">
                    {t.whyItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact 区 */}
        <section id="contact" className="py-5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-6">
                <h2 className="mb-3">{t.contactTitle}</h2>
                <p className="text-muted">{t.contactText}</p>
                <p className="small text-muted mb-1">
                  {t.contactEmailLabel}: {t.contactEmailValue}
                </p>
                <p className="small text-muted mb-1">
                  {t.contactPhoneLabel}: {t.contactPhoneValue}
                </p>
                <p className="small text-muted">
                  {t.contactLocationLabel}: {t.contactLocationValue}
                </p>
              </div>
              <div className="col-md-6">
                <form className="card shadow-sm">
                  <div className="card-body">
                    <div className="mb-3">
                      <label className="form-label">{t.formName}</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">{t.formEmail}</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">{t.formMessage}</label>
                      <textarea className="form-control" rows="3" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      {t.formButton}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3 mt-auto">
        <div className="container small">{t.footerText}</div>
      </footer>
      
    </div>
  );
};

export default Company;
