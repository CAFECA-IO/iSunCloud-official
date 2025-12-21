/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const inputPath = path.join(__dirname, '../public/world_dots.svg');
const outputPath = path.join(__dirname, '../src/data/world_points.json');

const parser = new xml2js.Parser();

fs.readFile(inputPath, (err, data) => {
  if (err) {
    console.error('Error reading SVG:', err);
    return;
  }

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    const circles = result.svg.circle;
    const width = parseFloat(result.svg.$.width);
    const height = parseFloat(result.svg.$.height);

    const points = circles.map(circle => ({
      x: parseFloat(circle.$.cx),
      y: parseFloat(circle.$.cy),
      r: parseFloat(circle.$.r)
    }));

    // Normalize points to lat/lon (assuming Equirectangular)
    // x: 0..width -> -180..180 (lng)
    // y: 0..height -> 90..-90 (lat)
    const geoPoints = points.map(p => {
      const u = p.x / width;
      const v = p.y / height;

      const lng = u * 360 - 180;
      const lat = 90 - v * 180;

      return { lat, lng };
    });

    // Create directory if not exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(geoPoints));
    console.log(`Extracted ${geoPoints.length} points to ${outputPath}`);
  });
});
