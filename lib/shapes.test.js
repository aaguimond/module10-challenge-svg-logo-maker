// Importing the shapes
const { Square, Rectangle, Circle, Triangle, InvertedTriangle, Pentagon, Hexagon } = require('./shapes')

// Testing each shape class with example code
describe('Shape Classes', () => {
    describe('Square', ()=> {
        test('should generate correct SVG for a square', () => {
            const square = new Square('#ff0000', 'none', 'AB', 'white');
            const expectedSVG = `<svg width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#ff0000"/>
    <text x="50%" y="130" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="white">AB</text>
</svg>`
        expect(square.toSVG()).toBe(expectedSVG);
        });
    });
    describe('Rectangle', ()=> {
        test('should generate correct SVG for a rectangle', () => {
            const square = new Rectangle('red', 'blue', 'HER', '#ffffff');
            const expectedSVG = `<svg width="300" height="200" viewBox="0 0 300 200">
    <rect width="300" height="200" fill="red" stroke="blue" stroke-width="2"/>
    <text x="50%" y="130" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="#ffffff">HER</text>
</svg>`
        expect(square.toSVG()).toBe(expectedSVG);
        });
    });
    describe('Circle', () => {
        test('should generate correct SVG for a circle', () => {
          const circle = new Circle('blue', 'black', 'C', 'yellow', 100);
          const expectedSvg = `<svg width="200" height="200" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="100" fill="blue" stroke="black" stroke-width="2"/>
    <text x="50%" y="130" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="yellow">C</text>
</svg>`;
        expect(circle.toSVG()).toBe(expectedSvg);
        });
      });
    describe('Triangle', () => {
        test('should generate correct SVG for a triangle', () => {
            const triangle = new Triangle('#a408c3', 'none', 'BO', 'cornsilk');
            const expectedSvg = `<svg width="300" height="200" viewBox="0 0 300 200">
    <polygon points="0,200 150,0 300,200" fill="#a408c3"/>
    <text x="50%" y="165" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="cornsilk">BO</text>
</svg>`
        expect(triangle.toSVG()).toBe(expectedSvg);
        });
    });
    describe('Inverted triangle', () => {
        test('should generate correct SVG for an inverted triangle', () => {
            const invertedTriangle = new InvertedTriangle('black', 'yellow', 'TiE', 'yellow');
            const expectedSvg = `<svg width="300" height="200" viewBox="0 0 300 200">
    <polygon points="0,0 150,200 300,0" fill="black" stroke="yellow" stroke-width="2"/>
    <text x="50%" y="80" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="yellow">TiE</text>
</svg>`
        expect(invertedTriangle.toSVG()).toBe(expectedSvg);
        });
    });
    describe('Pentagon', () => {
        test('should generate correct SVG for a pentagon', () => {
            const pentagon = new Pentagon('#abcde1', 'none', 'abc', '#000220');
            const expectedSvg = `<svg width="200" height="200" viewBox="0 0 200 200">
    <polygon points="100,0,195.10565162951536,69.09830056250526,158.77852522924732,180.90169943749473,41.2214747707527,180.90169943749476,4.894348370484636,69.09830056250527" fill="#abcde1"/>
    <text x="50%" y="115" font-size="75px" dominant-baseline="middle" text-anchor="middle" fill="#000220">abc</text>
</svg>`
        expect(pentagon.toSVG()).toBe(expectedSvg);
        });
    });
    describe('Hexagon', () => {
        test('should generate correct SVG for a hexagon', () => {
            const hexagon = new Hexagon('black', 'yellow', 'BEE', 'yellow');
            const expectedSvg = `<svg width="200" height="200" viewBox="0 0 200 200">
    <polygon points="100,0,186.60254037844385,49.999999999999986,186.60254037844388,149.99999999999997,100.00000000000001,200,13.397459621556152,150.00000000000006,13.397459621556095,50.000000000000064" fill="black" stroke="yellow" stroke-width="2"/>
    <text x="50%" y="130" font-size="77px" dominant-baseline="middle" text-anchor="middle" fill="yellow">BEE</text>
</svg>`
        expect(hexagon.toSVG()).toBe(expectedSvg);
        });
    });
})