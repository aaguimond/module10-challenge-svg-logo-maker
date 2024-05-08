// Importing dependencies, shape data
const fs = require('fs')
const { Square, Rectangle, Circle, Triangle, InvertedTriangle, Pentagon, Hexagon } = require('./lib/shapes.js')
const inquirer = require('inquirer')

// Defining our shape choices for Inquirer
const shapeChoices = [
    { name: "Square", value: "Square" },
    { name: "Rectangle", value: "Rectangle" },
    { name: "Circle", value: "Circle" },
    { name: "Triangle", value: "Triangle" },
    { name: "Inverted Triangle", value: "InvertedTriangle" },
    { name: "Pentagon", value: "Pentagon" },
    { name: "Hexagon", value: "Hexagon" }
]

// Defining our hexadecimal notation and all of the color keywords to help us later validate if a
// user's color input is a valid keyword
function validColor(value) {
    // Hexadecimal using Regex
    const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
    // Color keywords
    const colorKeywords = [
        `aliceblue`,
        `antiquewhite`,
        `aqua`,
        `aquamarine`,
        `azure`,
        `beige`,
        `bisque`,
        `black`,
        `blanchedalmond`,
        `blue`,
        `blueviolet`,
        `brown`,
        `burlywood`,
        `cadetblue`,
        `chartreuse`,
        `chocolate`,
        `coral`,
        `cornflowerblue`,
        `cornsilk`,
        `crimson`,
        `cyan`,
        `darkblue`,
        `darkcyan`,
        `darkgoldenrod`,
        `darkgray`,
        `darkgrey`,
        `darkgreen`,
        `darkkhaki`,
        `darkmagenta`,
        `darkolivegreen`,
        `darkorange`,
        `darkorchid`,
        `darkred`,
        `darksalmon`,
        `darkseagreen`,
        `darkslateblue`,
        `darkslategray`,
        `darkslategrey`,
        `darkturquoise`,
        `darkviolet`,
        `deeppink`,
        `deepskyblue`,
        `dimgray`,
        `dimgrey`,
        `dodgerblue`,
        `firebrick`,
        `floralwhite`,
        `forestgreen`,
        `fuchsia`,
        `gainsboro`,
        `ghostwhite`,
        `gold`,
        `goldenrod`,
        `gray`,
        `grey`,
        `green`,
        `greenyellow`,
        `honeydew`,
        `hotpink`,
        `indianred`,
        `indigo`,
        `ivory`,
        `khaki`,
        `lavender`,
        `lavenderblush`,
        `lawngreen`,
        `lemonchiffon`,
        `lightblue`,
        `lightcoral`,
        `lightcyan`,
        `lightgoldenrodyellow`,
        `lightgray`,
        `lightgrey`,
        `lightgreen`,
        `lightpink`,
        `lightsalmon`,
        `lightseagreen`,
        `lightskyblue`,
        `lightslategray`,
        `lightslategrey`,
        `lightsteelblue`,
        `lightyellow`,
        `lime`,
        `limegreen`,
        `linen`,
        `magenta`,
        `maroon`,
        `mediumaquamarine`,
        `mediumblue`,
        `mediumorchid`,
        `mediumpurple`,
        `mediumseagreen`,
        `mediumslateblue`,
        `mediumspringgreen`,
        `mediumturquoise`,
        `mediumvioletred`,
        `midnightblue`,
        `mintcream`,
        `mistyrose`,
        `moccasin`,
        `navajowhite`,
        `navy`,
        `oldlace`,
        `olive`,
        `olivedrab`,
        `orange`,
        `orangeRed`,
        `orchid`,
        `palegoldenRod`,
        `palegreen`,
        `paleturquoise`,
        `palevioletred`,
        `papayawhip`,
        `peachpuff`,
        `peru`,
        `pink`,
        `plum`,
        `powderblue`,
        `purple`,
        `red`,
        `rosybrown`,
        `royalblue`,
        `saddlebrown`,
        `salmon`,
        `sandybrown`,
        `seagreen`,
        `seashell`,
        `sienna`,
        `silver`,
        `skyblue`,
        `slateblue`,
        `slategray`,
        `slategrey`,
        `snow`,
        `springgreen`,
        `steelblue`,
        `tan`,
        `teal`,
        `thistle`,
        `tomato`,
        `turquoise`,
        `violet`,
        `wheat`,
        `white`,
        `whitesmoke`,
        `yellow`,
        `yellowgreen`,
      ]
    return hexRegex.test(value) || colorKeywords.includes(value.toLowerCase());
}

// Inquirer questions for users. Validate checks if user input is within defined boundaries
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please enter between one and three characters for your logo.',
        validate: input => input.length >= 1 && input.length <= 3 ? true : 'Please enter one to three characters.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color or a hexadecimal color code for your text.',
        filter: textColor => textColor.trim(),
        validate: color => validColor(color) ? true : 'Invalid color. Please enter a valid color or hexadecimal color code.'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Which shape would you like for your logo?', 
        choices: shapeChoices
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color or a hexadecimal color code for your shape.',
        filter: shapeColor => shapeColor.trim(),
        validate: color => validColor(color) ? true : 'Please enter a valid color or hexadecimal color code.'
    },
    {
        type: 'confirm',
        name: 'outline',
        message: 'Would you like an outline for the shape in your logo?',
        default: false
    },
    {
        type: 'input',
        name: 'outlineColor',
        message: 'What color would you like for the outline?',
        // Only asking this question if the response to the above question is true
        when: function(answers) {
            return answers.outline;
        },
        filter: outlineColor => outlineColor.trim()
    }
];

// Writing our data to our SVG file or returning an error if unable to
function writeToFile(filename, response) {
    fs.writeFile(`./examples/${filename}`, response, (error) => {
        if (error) {
            console.error('There was an error creating the SVG file: ', error);
        } else {
            console.log('SVG file was successfully created');
        }
    });
}

// Creating our SVG code based on the user responses or returning an error if a problem occurs
function createShape(response) {
    const { shape, shapeColor, text, textColor, stroke } = response;
    const shapeClassMap = {
        Square: Square,
        Rectangle: Rectangle,
        Circle: Circle,
        Triangle: Triangle,
        InvertedTriangle: InvertedTriangle,
        Pentagon: Pentagon,
        Hexagon: Hexagon
    };

    const ShapeClass = shapeClassMap[shape];
    if (!ShapeClass) {
        throw new Error('Invalid shape selected')
    }

    return new ShapeClass(shapeColor, response.outlineColor || 'none', text, textColor)
}

// Initializing our application, logging the user responses, creating the SVG, or returning an error message
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            console.log('Answers: ', response);
            const shapeInstance = createShape(response);
            const svgContent = shapeInstance.toSVG();
            writeToFile(`${response.text}_logo.svg`, svgContent);
        })
        .catch((error) => {
            console.error('An error occurred: ', error);
        });
}

init();