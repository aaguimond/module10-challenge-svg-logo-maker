class Shape {
    constructor(fill, stroke, text = '', textColor = 'black') {
        this.fill = fill;
        this.stroke = stroke;
        this.text = text;
        this.textColor = textColor;
    }

    toSvgAttributes() {
        return `fill="${this.fill}" stroke="${this.stroke}"`
    }

    generateSvgText() {
        return `<text fill="${this.textColor}">${this.text}</text>`
    }
}