const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const projectsDir = path.join(__dirname, '../public/projects');
const projects = [
  { name: 'restaurant.png', text: 'Restaurant App' },
  { name: 'ecommerce.png', text: 'E-commerce' },
  { name: 'portfolio.png', text: 'Portfolio' },
  { name: 'blog.png', text: 'Blog' },
  { name: 'taskmanager.png', text: 'Task Manager' },
  { name: 'landingpage.png', text: 'Landing Page' },
];

// Create the projects directory if it doesn't exist
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Generate placeholder images
projects.forEach((project) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Background color
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A373'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  context.fillStyle = color;
  context.fillRect(0, 0, width, height);

  // Add text
  context.fillStyle = '#FFFFFF';
  context.font = 'bold 48px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(project.text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(projectsDir, project.name), buffer);
});

console.log(`Generated ${projects.length} placeholder images in ${projectsDir}`);
