import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Universal Math & Text Renderer:
 * Handles pure LaTeX, mixed prose with $inline$ / $$block$$ LaTeX, and Bengali text seamlessly.
 */
export default function MathView({ math, block = false, className = '' }) {
  const html = useMemo(() => {
    if (!math) return '';

    const text = math.trim();

    // Check if it's a pure single block equation: "$$...$$"
    if (text.startsWith('$$') && text.endsWith('$$') && (text.match(/\$\$/g) || []).length === 2 && !text.slice(2, -2).includes('$')) {
      const pureFormula = text.slice(2, -2).trim();
      try {
        return katex.renderToString(pureFormula, {
          displayMode: true,
          throwOnError: false,
          strict: false,
          trust: true
        });
      } catch (e) {
        return `<span class="text-slate-200">${pureFormula}</span>`;
      }
    }

    // If text contains '$' delimiters (mixed sentence + formulas)
    if (text.includes('$')) {
      const parts = text.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
      return parts.map((part) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const formula = part.slice(2, -2).trim();
          try {
            return katex.renderToString(formula, {
              displayMode: true,
              throwOnError: false,
              strict: false,
              trust: true
            });
          } catch (e) {
            return `<span class="text-slate-200">${formula}</span>`;
          }
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          const formula = part.slice(1, -1).trim();
          try {
            return katex.renderToString(formula, {
              displayMode: false,
              throwOnError: false,
              strict: false,
              trust: true
            });
          } catch (e) {
            return `<span class="text-slate-200">${formula}</span>`;
          }
        }
        // Regular text (Bengali or English)
        return `<span class="text-slate-200 font-sans text-sm">${part}</span>`;
      }).join('');
    }

    // Default: try rendering as pure math expression
    try {
      return katex.renderToString(text, {
        displayMode: block,
        throwOnError: false,
        strict: false,
        trust: true
      });
    } catch (err) {
      return `<span class="text-slate-200 font-sans text-sm">${text}</span>`;
    }
  }, [math, block]);

  return (
    <span
      className={`inline-block select-text ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
