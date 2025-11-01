# 🔐 Smart Password Generator

A beautiful, animated password generator that creates **memorable yet secure** passwords based on your email or username. Fully compliant with **Gmail's password requirements** and features stunning UI animations.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎯 Password Generation
- **10-character passwords** with optimal security
- **Memorable patterns** based on your email/username
- **1 Uppercase letter** for strength
- **Special character (@)** for enhanced security
- **Multiple numbers** for randomization
- **Word-based approach** for easy memorization

### 📧 Gmail Compliance
✅ 8-100 character length requirement  
✅ Uppercase and lowercase letters  
✅ Numeric characters included  
✅ Special character (@) present  
✅ Not a commonly used weak password  

### 🎨 Beautiful UI/UX
- **Glassmorphism design** with backdrop blur effects
- **Gradient animations** and floating elements
- **Real-time validation** with visual feedback
- **Smooth transitions** and micro-interactions
- **Particle effects** on button clicks
- **Responsive design** for all devices
- **Copy-to-clipboard** with success notifications
- **Email display** showing which account the password is for

## 🚀 Demo

### How It Works:
1. **Enter** your email or username (e.g., `john@gmail.com`)
2. **Click** "Generate Password" or press Enter
3. **Get** a secure, memorable password like `Johnswift@823`
4. **Copy** with one click and use it!

### Password Pattern:
```
Format: Xxxxxx@NNN
        │    │ │
        │    │ └─ Random numbers (2-3 digits)
        │    └─── @ symbol (required)
        └──────── Capital letter + lowercase letters

Example: john@gmail.com → Johnsw@823
```

## 📦 Installation

### Clone Repository
```bash
git clone https://github.com/MarutiNandan2796/Password-Generator-.git
cd Password-Generator-
```

Then open `index.html` in your browser.

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, and gradients |
| **JavaScript (ES6+)** | Logic, DOM manipulation, and interactivity |
| **Regular Expressions** | Input validation and pattern matching |

## 📁 Project Structure

```
passwordgen/
│
├── index.html          # Main HTML structure
├── style.css           # All styles and animations
├── script.js           # Password generation logic
└── README.md           # Project documentation
```

## 💻 Code Highlights

### Password Generation Algorithm
```javascript
// Extract base from user input
let cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
let baseWord = cleanInput.substring(0, 4);

// Add random memorable word
const randomWord = allWords[Math.floor(Math.random() * allWords.length)];

// Capitalize + @ + Numbers = 10 characters
let password = baseWord.charAt(0).toUpperCase() + 
               baseWord.slice(1) + 
               randomWord + '@' + numbers;
```

### Gmail Validation
```javascript
const criteria = {
    length: password.length >= 8 && password.length <= 100,
    letters: /[a-z]/.test(password) && /[A-Z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[@#$%^&*()_+]/.test(password),
    strong: !/^(password|12345678|qwerty)$/i.test(password)
};
```

## 🎨 Design Features

### Animations
- ⚡ **Background Pulse** - Dynamic gradient animation
- 🎈 **Floating Circles** - Ambient background elements
- 💫 **Particle Burst** - Button click effects
- 📊 **Strength Indicators** - Animated dots showing password strength
- ✨ **Glow Effects** - Pulsing highlights on important elements
- 🌊 **Smooth Transitions** - All state changes are animated

### Color Scheme
```css
Primary: #6366f1 (Indigo)
Secondary: #8b5cf6 (Purple)
Accent: #ec4899 (Pink)
Success: #10b981 (Green)
```

## 📱 Responsive Design

✅ **Desktop** - Full-featured experience  
✅ **Tablet** - Optimized layout  
✅ **Mobile** - Touch-friendly interface  

## 🔐 Security Features

- Client-side generation (no server storage)
- Random word selection from 40+ words
- Randomized number generation
- No password history saved
- No data transmission

### Password Strength
- **40+ word combinations** × **1,000 number combinations** = **40,000+ unique passwords**
- No two generations produce the same password
- Meets all modern password requirements

## 🎯 Use Cases

Perfect for:
- 📧 Gmail/Google accounts
- 📱 Social media (Instagram, Facebook, Twitter)
- 💼 Professional email accounts
- 🎮 Gaming accounts
- 🛒 E-commerce sites
- 🏦 Banking applications

## 📊 Word Lists

### Common Words (20)
`swift`, `brave`, `smart`, `quick`, `cool`, `star`, `dash`, `zoom`, `glow`, `bolt`, `wave`, `fire`, `sky`, `moon`, `sun`, `wind`, `rain`, `snow`, `peak`, `flow`

### Tech Words (10)
`cyber`, `pixel`, `code`, `data`, `cloud`, `hack`, `byte`, `link`, `node`, `sync`

### Nature Words (10)
`ocean`, `forest`, `river`, `tiger`, `eagle`, `lion`, `wolf`, `bear`, `fox`, `hawk`

### Action Words (10)
`jump`, `fly`, `run`, `climb`, `dive`, `race`, `rush`, `soar`, `leap`, `dash`

## 🤝 Contributing

Contributions are welcome! 

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📝 License

This project is licensed under the **MIT License**.

```
Copyright (c) 2025 Maruti Nandan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 👨‍💻 Author

**Maruti Nandan**
- GitHub: [@MarutiNandan2796](https://github.com/MarutiNandan2796)
- Repository: [Password-Generator-](https://github.com/MarutiNandan2796/Password-Generator-)

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Total Lines** | ~1,250+ |
| **Files** | 3 main files |
| **Dependencies** | 0 (Pure Vanilla JS) |
| **Load Time** | < 1 second |

## 💡 Tips for Users

1. **Remember the pattern** - Password starts with part of your email
2. **Use immediately** - Generate when needed, don't store in plain text
3. **Unique per site** - Generate a new password for each account
4. **Password manager** - Use a secure password manager to store
5. **Regular updates** - Change passwords every 3-6 months

## 🆘 FAQ

**Q: Is this password generator safe?**  
A: Yes! All generation happens in your browser. Nothing is sent to any server.

**Q: Why only 10 characters?**  
A: 10 characters balances security and memorability, exceeding Gmail's 8-char minimum.

**Q: Can I use this for business accounts?**  
A: Yes, but check your organization's password policy first.

**Q: Does it work offline?**  
A: Yes! Once loaded, it works completely offline.

## 📞 Support

- 📧 [Open an Issue](https://github.com/MarutiNandan2796/Password-Generator-/issues)
- ⭐ Star this repository if you find it helpful
- 🔀 Fork and customize for your needs

---

<div align="center">

### ⭐ Don't forget to star this repo if you found it helpful! ⭐

Made with 💜 by **Maruti Nandan** | © 2025

**[⬆ Back to Top](#-smart-password-generator)**

</div>
