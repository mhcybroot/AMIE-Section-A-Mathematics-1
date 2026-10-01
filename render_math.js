const fs = require('fs');
const path = require('path');
const katex = require('katex');

function renderMathInHtml(htmlContent) {
    // 1. Replace display math \[ ... \] or $$ ... $$
    let result = htmlContent.replace(/\\\[([\s\S]*?)\\\]/g, (match, formula) => {
        try {
            return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
        } catch (e) {
            console.error('Error rendering display math:', formula, e);
            return match;
        }
    });

    result = result.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
        try {
            return katex.renderToString(formula.trim(), { displayMode: true, throwOnError: false });
        } catch (e) {
            console.error('Error rendering display math:', formula, e);
            return match;
        }
    });

    // 2. Replace inline math \( ... \) and $ ... $
    result = result.replace(/\\\(([\s\S]*?)\\\)/g, (match, formula) => {
        try {
            return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
        } catch (e) {
            console.error('Error rendering inline math:', formula, e);
            return match;
        }
    });

    result = result.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
        try {
            return katex.renderToString(formula.trim(), { displayMode: false, throwOnError: false });
        } catch (e) {
            console.error('Error rendering inline math:', formula, e);
            return match;
        }
    });

    // Embed KaTeX CSS directly so it works offline and during PDF generation instantly
    const katexCssPath = path.join(__dirname, 'node_modules/katex/dist/katex.min.css');
    let katexCss = '';
    if (fs.existsSync(katexCssPath)) {
        katexCss = fs.readFileSync(katexCssPath, 'utf8');
        katexCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">\n<style>${katexCss}</style>`;
    } else {
        katexCss = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css">`;
    }

    // Insert CSS before </head> and remove old MathJax scripts
    result = result.replace(/<script[^>]*mathjax[^>]*>[\s\S]*?<\/script>/gi, '');
    result = result.replace(/<script id="MathJax-script"[^>]*>[\s\S]*?<\/script>/gi, '');
    result = result.replace('</head>', `${katexCss}\n</head>`);

    return result;
}

function getAllHtmlFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllHtmlFiles(fullPath, arrayOfFiles);
        } else if (file.endsWith('.html')) {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

const mathDir = path.join(__dirname, 'Math-01');
const allHtmlFiles = getAllHtmlFiles(mathDir);

allHtmlFiles.forEach(fullPath => {
    const relPath = path.relative(__dirname, fullPath);
    console.log(`Processing: ${relPath}`);
    const content = fs.readFileSync(fullPath, 'utf8');
    const rendered = renderMathInHtml(content);
    fs.writeFileSync(fullPath, rendered, 'utf8');
    console.log(`Successfully pre-rendered math for ${relPath}`);
});
