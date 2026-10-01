import React from 'react';
import MathView from './MathView';

/**
 * Custom lightweight Markdown + KaTeX parser without heavy dependencies
 */
export default function MarkdownMath({ content }) {
  if (!content) return null;

  // Split by code blocks or major sections
  const lines = content.split('\n');

  const renderedElements = [];
  let inCodeBlock = false;
  let codeBuffer = [];

  const renderTextWithMath = (text) => {
    // Match $$...$$ or $...$
    const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        return <MathView key={idx} math={part} block={true} className="my-2 block text-center" />;
      }
      if (part.startsWith('$') && part.endsWith('$')) {
        return <MathView key={idx} math={part} block={false} className="mx-1" />;
      }
      return <span key={idx}>{part}</span>;
    });
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        renderedElements.push(
          <pre key={`code-${i}`} className="bg-slate-900 text-emerald-400 p-3 rounded-lg my-2 font-mono text-xs overflow-x-auto border border-slate-800">
            <code>{codeBuffer.join('\n')}</code>
          </pre>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    if (!trimmed) {
      renderedElements.push(<div key={`empty-${i}`} className="h-2" />);
      return;
    }

    // Headings
    if (trimmed.startsWith('# ')) {
      renderedElements.push(
        <h1 key={`h1-${i}`} className="text-xl font-bold text-violet-300 mt-4 mb-2 pb-1 border-b border-slate-700/60">
          {renderTextWithMath(trimmed.replace('# ', ''))}
        </h1>
      );
    } else if (trimmed.startsWith('## ')) {
      renderedElements.push(
        <h2 key={`h2-${i}`} className="text-lg font-semibold text-cyan-300 mt-3 mb-1">
          {renderTextWithMath(trimmed.replace('## ', ''))}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      renderedElements.push(
        <h3 key={`h3-${i}`} className="text-sm font-semibold text-amber-300 mt-2 mb-1 uppercase tracking-wider">
          {renderTextWithMath(trimmed.replace('### ', ''))}
        </h3>
      );
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      renderedElements.push(
        <li key={`li-${i}`} className="ml-5 list-disc text-slate-300 text-sm leading-relaxed my-0.5">
          {renderTextWithMath(trimmed.slice(2))}
        </li>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s(.*)/);
      renderedElements.push(
        <li key={`ol-${i}`} className="ml-5 list-decimal text-slate-300 text-sm leading-relaxed my-0.5">
          {renderTextWithMath(match[2])}
        </li>
      );
    } else if (trimmed.startsWith('>')) {
      renderedElements.push(
        <blockquote key={`quote-${i}`} className="border-l-4 border-violet-500 pl-3 py-1 my-2 bg-violet-950/20 text-slate-300 text-sm italic rounded-r">
          {renderTextWithMath(trimmed.replace(/^>\s*/, ''))}
        </blockquote>
      );
    } else {
      renderedElements.push(
        <p key={`p-${i}`} className="text-slate-200 text-sm leading-relaxed my-1">
          {renderTextWithMath(line)}
        </p>
      );
    }
  });

  return <div className="space-y-1 font-sans">{renderedElements}</div>;
}
