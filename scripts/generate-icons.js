// scripts/generate-icons.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputImage = path.join(__dirname, '../public/images/logo.png'); // Mettez votre logo ici

// Créer le dossier icons s'il n'existe pas
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

sizes.forEach(size => {
  sharp(inputImage)
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, `icon-${size}x${size}.png`))
    .then(info => console.log(`✅ Icon ${size}x${size} created`))
    .catch(err => console.error(`❌ Error creating icon ${size}x${size}:`, err));
});