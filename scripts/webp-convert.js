import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convertToWebP() {
  const imageDir = 'public/images';
  const webpDir = 'public/images/webp';
  
  // Create webp directories
  if (!fs.existsSync(webpDir)) {
    fs.mkdirSync(webpDir, { recursive: true });
    console.log('📁 Created webp directory');
  }
  
  if (!fs.existsSync(`${webpDir}/testimonials`)) {
    fs.mkdirSync(`${webpDir}/testimonials`, { recursive: true });
    console.log('📁 Created webp/testimonials directory');
  }

  let convertedCount = 0;

  // Convert images from main folder
  if (fs.existsSync(imageDir)) {
    const mainImages = fs.readdirSync(imageDir).filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    console.log(`\n🔍 Found ${mainImages.length} images in main folder`);

    for (const image of mainImages) {
      try {
        const inputPath = path.join(imageDir, image);
        const outputPath = path.join(webpDir, `${path.parse(image).name}.webp`);
        
        await sharp(inputPath)
          .webp({ quality: 75 })
          .toFile(outputPath);
        
        console.log(`✅ Converted: ${image} → webp/${path.parse(image).name}.webp`);
        convertedCount++;
      } catch (error) {
        console.error(`❌ Failed to convert ${image}:`, error.message);
      }
    }
  }

  // Convert testimonial images
  const testimonialsDir = `${imageDir}/testimonials`;
  if (fs.existsSync(testimonialsDir)) {
    const testimonialImages = fs.readdirSync(testimonialsDir).filter(file => 
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    console.log(`\n🔍 Found ${testimonialImages.length} images in testimonials folder`);

    for (const image of testimonialImages) {
      try {
        const inputPath = path.join(testimonialsDir, image);
        const outputPath = path.join(webpDir, 'testimonials', `${path.parse(image).name}.webp`);
        
        await sharp(inputPath)
          .webp({ quality: 75 })
          .toFile(outputPath);
        
        console.log(`✅ Converted: testimonials/${image} → webp/testimonials/${path.parse(image).name}.webp`);
        convertedCount++;
      } catch (error) {
        console.error(`❌ Failed to convert testimonials/${image}:`, error.message);
      }
    }
  }

  console.log(`\n🎉 Conversion completed! ${convertedCount} images converted to WebP format.`);
  console.log('📂 Check public/images/webp/ for your WebP images');
}

convertToWebP().catch(error => {
  console.error('❌ Conversion failed:', error);
  process.exit(1);
});