const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'Math-01');
const outputDir = path.join(__dirname, 'web');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const folders = fs.readdirSync(baseDir).filter(f => {
    return fs.statSync(path.join(baseDir, f)).isDirectory() && f.startsWith('Page_');
}).sort();

const chapterMeta = {
    "Page_30_Basic_Derivatives": {
        title: "Basic Derivatives & First Principle",
        titleBn: "মৌলিক অন্তরজ ও প্রথম নীতি",
        pageRange: "Page 30",
        category: "Foundations"
    },
    "Page_31_Product_Quotient_ChainRule": {
        title: "Product, Quotient & Chain Rule",
        titleBn: "গুণন, ভাগফল ও চেইন রুল",
        pageRange: "Page 31",
        category: "Core Calculus"
    },
    "Page_32_ChainRule_Trig_InverseTrig": {
        title: "Trigonometric & Inverse Chain Rule",
        titleBn: "ত্রিকোণমিতিক ও ইনভার্স চেইন রুল",
        pageRange: "Page 32",
        category: "Inverse Trig"
    },
    "Page_33_ChainRule_Homework": {
        title: "Chain Rule Practice & Board Exam Problems",
        titleBn: "চেইন রুল প্র্যাকটিস ও বোর্ড প্রশ্ন",
        pageRange: "Page 33",
        category: "Exam Practice"
    },
    "Page_34_Explicit_Implicit_Functions": {
        title: "Explicit & Implicit Differentiation",
        titleBn: "ব্যক্ত ও অব্যক্ত ফাংশন",
        pageRange: "Page 34",
        category: "Implicit Functions"
    },
    "Page_35_Advanced_Differentiation_Exam_Problems": {
        title: "Advanced Logarithmic & Power Differentiation",
        titleBn: "লগারিদমিক ও চলক-ঘাত অন্তরজ",
        pageRange: "Page 35",
        category: "Logarithmic Diff"
    },
    "Page_36_Advanced_Log_Trig_Derivatives": {
        title: "Advanced Inverse & Dual Variable-Power Equations",
        titleBn: "দ্বৈত ঘাত অব্যক্ত সমীকরণ",
        pageRange: "Page 36",
        category: "Advanced Calculus"
    },
    "Page_37_Parametric_Inverse_Derivatives": {
        title: "Multi-Term Power & Parametric Inverse Derivatives",
        titleBn: "বহুপদী ঘাত ও প্যারামেট্রিক ইনভার্স",
        pageRange: "Page 37",
        category: "Parametric Forms"
    },
    "Page_38_Parametric_Substitution_Derivatives": {
        title: "Relative Derivatives & Folium of Descartes",
        titleBn: "আপেক্ষিক ব্যবকলন ও ডেকার্টেস ফলিয়াম",
        pageRange: "Page 38",
        category: "Parametric Forms"
    },
    "Page_39_Parametric_Cycloid_Derivatives": {
        title: "Cycloid Kinematics & Angle Linearization",
        titleBn: "সাইক্লয়েড গতিবিদ্যা ও অংশকোণ অন্তরজ",
        pageRange: "Page 39",
        category: "Kinematics & Cycloid"
    },
    "Page_40_Partial_Differentiation_Laplace": {
        title: "Partial Differentiation & Laplace Potentials",
        titleBn: "আংশিক অন্তরীকরণ ও ল্যাপ্লাস সমীকরণ",
        pageRange: "Page 40",
        category: "Partial Derivatives"
    }
};

const catalog = {
    metadata: {
        course: "AMIE Section-A Engineering Mathematics-1",
        syllabus: "Institution of Engineers, Bangladesh (IEB)",
        totalChapters: folders.length,
        totalProblems: 0,
        lastUpdated: new Date().toISOString()
    },
    chapters: [],
    problems: []
};

folders.forEach((folderName, index) => {
    const folderPath = path.join(baseDir, folderName);
    const meta = chapterMeta[folderName] || {
        title: folderName,
        titleBn: folderName,
        pageRange: folderName,
        category: "General"
    };

    const chapterObj = {
        id: folderName,
        index: index + 1,
        title: meta.title,
        titleBn: meta.titleBn,
        pageRange: meta.pageRange,
        category: meta.category,
        problemCount: 0
    };

    const mdFiles = fs.readdirSync(folderPath).filter(f => f.endsWith('.md')).sort();

    mdFiles.forEach(mdFile => {
        if (mdFile === 'README.md' || mdFile === 'INDEX.md' || mdFile === 'MASTER_INDEX.md') return;

        const mdPath = path.join(folderPath, mdFile);
        const mdContent = fs.readFileSync(mdPath, 'utf8');
        const probId = mdFile.replace('_Explanation.md', '');

        // Extract Problem Statement and Answer
        let statement = '';
        let finalAnswer = '';
        let examTag = '';

        const stmtMatch = mdContent.match(/সমস্যা[^\n:]*:\s*\*\*([\s\S]*?)(?=\n\n|\n###|\n---)/i) ||
                          mdContent.match(/### \*\*১\. সমস্যা চিহ্নিতকরণ[^\n]*\*\*([\s\S]*?)(?=\n\n###|\n---)/i) ||
                          mdContent.match(/### \*\*গাণিতিক সমস্যা[^\n]*\*\*([\s\S]*?)(?=\n\n###|\n---)/i);
        if (stmtMatch) {
            statement = stmtMatch[1].trim().replace(/\n+/g, ' ');
        }

        const ansMatch = mdContent.match(/### \*\*.*চূড়ান্ত উত্তর[^\n]*\*\*([\s\S]*?)(?=\n\n###|\n---|---|$)/i) ||
                         mdContent.match(/### \*\*.*চূড়ান্ত উত্তর[^\n]*\*\*([\s\S]*?)(?=\n\n###|\n---|---|$)/i);
        if (ansMatch) {
            finalAnswer = ansMatch[1].trim();
        }

        const examMatch = mdContent.match(/\[([^\]]*(?:Exam|Oct|Nov|Apr|AMIE)[^\]]*)\]/i);
        if (examMatch) {
            examTag = examMatch[1].trim();
        }

        const pdfFile = `${probId}_AMIE_Solution.pdf`;
        const pdfRelPath = `Math-01/${folderName}/${pdfFile}`;
        const htmlRelPath = `Math-01/${folderName}/${probId}_Solution.html`;
        const mdRelPath = `Math-01/${folderName}/${mdFile}`;

        catalog.problems.push({
            id: probId,
            chapterId: folderName,
            chapterTitle: meta.title,
            pageRange: meta.pageRange,
            category: meta.category,
            statement: statement || probId,
            finalAnswer: finalAnswer,
            examTag: examTag || "IEB Core Standard",
            pdfPath: pdfRelPath,
            htmlPath: htmlRelPath,
            mdPath: mdRelPath
        });

        chapterObj.problemCount++;
        catalog.metadata.totalProblems++;
    });

    catalog.chapters.push(chapterObj);
});

// Save to web/problems_catalog.json and root problems_catalog.json
fs.writeFileSync(path.join(outputDir, 'problems_catalog.json'), JSON.stringify(catalog, null, 2), 'utf8');
fs.writeFileSync(path.join(__dirname, 'problems_catalog.json'), JSON.stringify(catalog, null, 2), 'utf8');

console.log(`Successfully generated catalog with ${catalog.metadata.totalProblems} problems across ${catalog.chapters.length} chapters.`);
