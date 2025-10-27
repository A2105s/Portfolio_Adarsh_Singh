import { generateIcons } from '@react-zero-ui/icon-sprite';

async function run() {
  try {
    await generateIcons();
    console.log('Icons generated successfully');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

run();