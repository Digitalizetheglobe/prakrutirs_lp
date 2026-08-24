import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeWebpFile(filePath, quality = 82) {
  const originalSize = fs.statSync(filePath).size;
  const tempPath = filePath + '.temp.webp';
  
  await sharp(filePath)
    .webp({ quality, effort: 6 })
    .toFile(tempPath);
    
  const newSize = fs.statSync(tempPath).size;
  fs.renameSync(tempPath, filePath);
  
  console.log(`Optimized ${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(1)}KB (${Math.round((1 - newSize / originalSize) * 100)}% reduction)`);
}

async function convertJpgToWebp(inputPath, outputPath, quality = 82) {
  const originalSize = fs.statSync(inputPath).size;
  await sharp(inputPath)
    .webp({ quality, effort: 6 })
    .toFile(outputPath);
  const newSize = fs.statSync(outputPath).size;
  console.log(`Converted ${path.basename(inputPath)} -> ${path.basename(outputPath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024).toFixed(1)}KB`);
}

async function main() {
  try {
    console.log('--- Processing Main Banners used in Home.jsx ---');
    await optimizeWebpFile('src/assets/Prakriti_Web Banner-01.webp');
    await optimizeWebpFile('src/assets/Prakriti_Web Banner-02.webp');
    await optimizeWebpFile('src/assets/Prakriti_Web Banner-03.webp');

    console.log('\n--- Processing Alternate New Banners ---');
    if (fs.existsSync('src/assets/prakruti_new.jpg')) {
      await convertJpgToWebp('src/assets/prakruti_new.jpg', 'src/assets/prakruti_new.webp');
    }
    if (fs.existsSync('src/assets/parkruti_new_tab.jpg')) {
      await convertJpgToWebp('src/assets/parkruti_new_tab.jpg', 'src/assets/parkruti_new_tab.webp');
    }
    if (fs.existsSync('src/assets/prakruti_new_mobile.jpg')) {
      await convertJpgToWebp('src/assets/prakruti_new_mobile.jpg', 'src/assets/prakruti_new_mobile.webp');
    }

    console.log('\nAll banners converted & optimized successfully to WebP!');
  } catch (err) {
    console.error('Error during conversion:', err);
  }
}

main();
