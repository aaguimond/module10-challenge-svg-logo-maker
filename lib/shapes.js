class Shape {
    constructor(fill, stroke, text = '', textColor = 'black') {
        this.fill = fill;
        this.stroke = stroke;
        this.text = text;
        this.textColor = textColor;
    }

    toSVGAttributes() {
        return `fill="${this.fill}"${this.stroke !== 'none' ? ` stroke="${this.stroke}" stroke-width="2"` : ''}`
    }
}

class Square extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', width = 200, height = 200) {
        super(fill, stroke, text, textColor);
        this.width = width;
        this.height = height;
    }

    toSVG() {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <rect width="${this.width}" height="${this.height}" ${this.toSVGAttributes()}/>
    <text x="50%" y="130" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

class Rectangle extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', width = 300, height = 200) {
        super(fill, stroke, text, textColor);
        this.width = width;
        this.height = height;
    }

    toSVG() {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <rect width="${this.width}" height="${this.height}" ${this.toSVGAttributes()}/>
    <text x="50%" y="130" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

class Circle extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', radius = 100) {
        super(fill, stroke, text, textColor);
        this.radius = radius;
    }

    toSVG() {
        const centerX = this.radius;
        const centerY = this.radius;
        return `<svg width="${this.radius * 2}" height="${this.radius * 2}" viewBox="0 0 200 200">
    <circle cx="${centerX}" cy="${centerY}" r="${this.radius}" ${this.toSVGAttributes()}/>
    <text x="50%" y="130" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

class Triangle extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', width = 300, height = 200) {
        super(fill, stroke, text, textColor);
        this.width = width;
        this.height = height;
    }

    toSVG() {
        const points = `0,${this.height} ${this.width / 2},0 ${this.width},${this.height}`
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        if (this.text.length === 3) {
        return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="180" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
        } else  if (this.text.length == 2) {
            return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="165" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
        } else {
            return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="150" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
        }
    }
}

class InvertedTriangle extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', width = 300, height = 200) {
        super(fill, stroke, text, textColor);
        this.width = width;
        this.height = height;
    }

    toSVG() {
        const points = `0,0 ${this.width / 2},${this.height} ${this.width},0`
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        if (this.text.length === 3) {
        return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="80" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
        } else  if (this.text.length == 2) {
            return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="95" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
        } else {
            return `<svg width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width} ${this.height}">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="110" font-size="85px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
        }
    }
}

class Pentagon extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', radius = 100) {
        super(fill, stroke, text, textColor);
        this.radius = radius;
    }

    toSVG() {
        const angle = (2 * Math.PI) / 5;
        const points = Array.from({ length: 5 }).map((_, i) => {
            const x = this.radius + this.radius * Math.sin(i * angle);
            const y = this.radius - this.radius * Math.cos(i * angle);
            return `${x},${y}`
        })

        const pentSize = this.radius * 2;
        return `<svg width="${pentSize}" height="${pentSize}" viewBox="0 0 200 200">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="115" font-size="75px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

class Hexagon extends Shape {
    constructor(fill, stroke, text = '', textColor = 'black', radius = 100) {
        super(fill, stroke, text, textColor);
        this.radius = radius;
    }

    toSVG() {
        const angle = (2 * Math.PI) / 6;
        const points = Array.from({ length: 6 }).map((_, i) => {
            const x = this.radius + this.radius * Math.sin(i * angle);
            const y = this.radius - this.radius * Math.cos(i * angle);
            return `${x},${y}`
        })

        const hexSize = this.radius * 2;
        return `<svg width="${hexSize}" height="${hexSize}" viewBox="0 0 200 200">
    <polygon points="${points}" ${this.toSVGAttributes()}/>
    <text x="50%" y="130" font-size="77px" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`
    }
}

module.exports = { Shape, Square, Rectangle, Circle, Triangle, InvertedTriangle, Pentagon, Hexagon }