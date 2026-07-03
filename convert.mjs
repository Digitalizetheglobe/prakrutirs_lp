import sharp from 'sharp';

async function convert() {
  try {
    await sharp('src/assets/prakruti_new.jpg').webp({ quality: 80 }).toFile('src/assets/prakruti_new.webp');
    console.log('Converted desktop banner');
    await sharp('src/assets/parkruti_new_tab.jpg').webp({ quality: 80 }).toFile('src/assets/parkruti_new_tab.webp');
    console.log('Converted tablet banner');
    await sharp('src/assets/prakruti_new_mobile.jpg').webp({ quality: 80 }).toFile('src/assets/prakruti_new_mobile.webp');
    console.log('Converted mobile banner');
    console.log('All conversions done');
  } catch (err) {
    console.error('Error during conversion:', err);
  }
}

convert();
