import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Robust KaTeX Math Renderer for inline ($...$) and block ($$...$$) expressions
 */
export default function MathView({ math, block = false, className = '' }) {
  const html = useMemo(() => {
    if (!math) return '';

    // Strip outer $$ if provided
    let cleanMath = math.trim();
    let isBlock = block;

    if (cleanMath.startsWith('$$') && cleanMath.endsWith('$$') && cleanMath.length >= 4) {
      cleanMath = cleanMath.slice(2, -2).trim();
      isBlock = true;
    } else if (cleanMath.startsWith('$') && cleanMath.endsWith('$') && cleanMath.length >= 2) {
      cleanMath = cleanMath.slice(1, -1).trim();
    }

    try {
      return katex.renderToString(cleanMath, {
        displayMode: isBlock,
        throwOnError: false,
        strict: false,
        trust: true
      });
    } catch (err) {
      console.warn('KaTeX render error:', err);
      return `<span class="text-rose-400 font-mono text-sm">${cleanMath}</span>`;
    }
  }, [math, block]);

  return (
    <span
      className={`inline-block select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
