# 🔄 Flip Text App

A modern web application that transforms your text into upside-down characters for easy copying and sharing. Perfect for social media, messaging, and creative text effects!

## ✨ Features

- **🔄 Instant Text Flipping**: Transform any text into upside-down Unicode characters
- **📋 One-Click Copy**: Copy flipped text to clipboard with a single click
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful, intuitive interface with smooth animations
- **⌨️ Keyboard Shortcuts**: Quick actions with keyboard shortcuts
- **🌙 Dark Mode Support**: Automatic dark mode detection
- **📊 Character Counter**: Real-time character count display
- **🎯 Example Texts**: Quick-start examples to try the app

## 🚀 Live Demo

[Deploy on Railway](https://railway.app) - One-click deployment to Railway hosting platform.

## 🛠️ Local Development

### Prerequisites
- Node.js (version 18 or higher)
- npm (version 8 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flip-text-app.git
   cd flip-text-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload
- `npm test` - Run tests (placeholder)

## 🚂 Railway Deployment

### Option 1: One-Click Deploy

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/your-template-id)

### Option 2: Manual Deployment

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway**
   ```bash
   railway login
   ```

3. **Initialize Railway project**
   ```bash
   railway init
   ```

4. **Deploy to Railway**
   ```bash
   railway up
   ```

5. **Get your live URL**
   ```bash
   railway domain
   ```

### Railway Configuration

The app includes a `railway.json` configuration file with:
- Health check endpoint at `/health`
- Automatic restart on failure
- Optimized build settings

## 🎯 How to Use

1. **Enter Text**: Type or paste your text in the input field
2. **See Magic**: Watch your text transform into upside-down characters
3. **Copy & Share**: Click the copy button to copy the flipped text
4. **Try Examples**: Use the example buttons to see the app in action

## ⌨️ Keyboard Shortcuts

- `Ctrl+Enter` (or `Cmd+Enter` on Mac): Copy flipped text
- `Ctrl+K` (or `Cmd+K` on Mac): Clear all text
- `F1`: Show help dialog

## 🔧 Technical Details

### Character Mapping
The app uses Unicode characters that appear upside-down when displayed:
- Letters: `a` → `ɐ`, `b` → `q`, `c` → `ɔ`, etc.
- Numbers: `1` → `Ɩ`, `2` → `ᄅ`, `6` → `9`, etc.
- Symbols: `!` → `¡`, `?` → `¿`, `(` → `)`, etc.

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### API Endpoints
- `GET /` - Main application
- `POST /api/flip` - API endpoint for text flipping
- `GET /health` - Health check for Railway

## 🎨 Customization

### Styling
Modify `styles.css` to customize:
- Color scheme
- Typography
- Layout
- Animations

### Functionality
Extend `script.js` to add:
- Additional character mappings
- New keyboard shortcuts
- Export options
- Text effects

## 📱 Mobile Support

The app is fully responsive and includes:
- Touch-friendly interface
- Mobile-optimized layouts
- Swipe gestures support
- iOS/Android compatibility

## 🔒 Privacy & Security

- **No Data Storage**: All text processing happens in your browser
- **No Tracking**: No analytics or user tracking
- **HTTPS Ready**: Secure deployment configuration
- **Open Source**: Full source code available for review

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Unicode Consortium for upside-down character support
- Railway for hosting platform
- Inter font family for beautiful typography
- Modern CSS techniques for responsive design

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/flip-text-app/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/yourusername/flip-text-app/discussions)
- 📧 **Contact**: your.email@example.com

---

Made with ❤️ for the internet's upside-down text needs!
