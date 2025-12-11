import { useState, useEffect, useCallback } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  startDelay?: number;
}

const TypeWriter = ({ 
  text, 
  delay = 80, 
  className = '', 
  onComplete,
  startDelay = 500,
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const typeText = useCallback(() => {
    setIsTyping(true);
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        // Add slight randomness for natural feel
        const nextDelay = delay + (Math.random() * 40 - 20);
        setTimeout(typeNextChar, nextDelay);
      } else {
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
      }
    };
    
    typeNextChar();
  }, [text, delay, onComplete]);

  useEffect(() => {
    const timer = setTimeout(typeText, startDelay);
    return () => clearTimeout(timer);
  }, [typeText, startDelay]);

  return (
    <span className={`relative ${className}`}>
      <span className="relative">
        {displayText}
        {/* Animated Cursor */}
        <span 
          className={`inline-block w-[4px] h-[0.9em] ml-1 align-middle rounded-sm ${
            isComplete ? 'animate-cursor-blink' : 'opacity-100'
          }`}
          style={{
            background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--neon-purple)))',
            boxShadow: `
              0 0 8px hsl(var(--primary)),
              0 0 16px hsl(var(--primary) / 0.6),
              0 0 24px hsl(var(--neon-purple) / 0.4)
            `,
            verticalAlign: 'middle',
            marginBottom: '0.1em',
          }}
        />
      </span>
    </span>
  );
};

export default TypeWriter;
