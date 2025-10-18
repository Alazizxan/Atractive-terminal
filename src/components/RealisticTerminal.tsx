import React, { useState, useEffect, useRef } from "react";
import { commands } from "../data/command";


// Terminal buyruqlari ro‘yxati


export default function RealisticTerminal() {
  const [history, setHistory] = useState<
    Array<{ type: "command" | "output"; content: string }>
  >([
    {
      type: "output",
      content:
        "Welcome to AZIZKHON's Portfolio Terminal\nType 'help' to see available commands.",
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, currentInput]);

  useEffect(() => {
    if (inputRef.current && !isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping, history]);

  const typeWriter = (text: string) => {
    setIsTyping(true);
    let index = 0;
    const typingSound = new Audio("/typing.mp3");
    typingSound.volume = 0.3;

    setHistory((prev) => [...prev, { type: "output", content: "" }]);

    const interval = setInterval(() => {
      if (index < text.length) {
        setHistory((prev) => {
          const newHistory = [...prev];
          const lastItem = newHistory[newHistory.length - 1];
          if (lastItem && lastItem.type === "output") {
            lastItem.content = text.substring(0, index + 1);
          }
          return newHistory;
        });
        typingSound.currentTime = 0;
        typingSound.play();
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 6);
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    setHistory((prev) => [
      ...prev,
      { type: "command", content: `alazizxan@portfolio:~$ ${cmd}` },
    ]);

    if (command === "clear") {
      setTimeout(() => {
        setHistory([
          {
            type: "output",
            content:
              "Welcome to AL AZIZKHON's Portfolio Terminal\nType 'help' to see available commands.",
          },
        ]);
      }, 100);
      return;
    }

    if (commands[command as keyof typeof commands]) {
      const output = commands[command as keyof typeof commands].output;
      typeWriter(output);
    } else if (command) {
      const output = `bash: ${command}: command not found\nType 'help' to see available commands.`;
      typeWriter(output);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isTyping && currentInput.trim()) {
      handleCommand(currentInput);
      setCurrentInput("");
    }
  };

  const handleClick = () => {
    if (inputRef.current && !isTyping) inputRef.current.focus();
  };

  return (
    <div
      className="h-full bg-black p-6 font-mono text-green-400 overflow-hidden flex flex-col relative"
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4 border-b border-green-900/50 pb-3">
        <div>
          <h1 className="text-1xl font-bold text-green-400 tracking-wide">
            AL AZIZKHON
          </h1>
          <p className="text-green-300 text-[0.7rem] opacity-80">
            AI/ML Engineer | Full Stack Developer | Cybersecurity Expert
          </p>
        </div>
        <div className="ml-[10rem] text-green-300 text-xs font-mono opacity-70">
          {new Date().toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </div>

      {/* Command shortcuts */}
      <div className="flex flex-wrap gap-2 mb-4 text-[0.6rem] border border-green-900/50 rounded-lg p-2 bg-green-950/10">
        {Object.keys(commands).map((cmd) => (
          <button
            key={cmd}
            onClick={() => !isTyping && handleCommand(cmd)}
            className="text-green-400 hover:text-green-200 transition-colors px-2 py-1 rounded hover:bg-green-900/30"
            disabled={isTyping}
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto mb-2 space-y-2 text-[0.6rem] leading-relaxed scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-900 pr-2"
      >
        {history.map((item, index) => (
          <div
            key={index}
            className={`whitespace-pre-wrap break-words ${
              item.type === "command"
                ? "text-green-400 font-semibold"
                : "text-green-300"
            }`}
          >
            {item.content}
          </div>
        ))}

        {/* Active command line */}
        {!isTyping && (
          <div className="flex items-center mt-3">
            <span className="text-green-400 font-bold">
              alazizxan@portfolio:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="ml-2 w-full bg-transparent border-none outline-none text-green-400 font-mono caret-green-400 text-[0.6rem]"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        )}
      </div>

      {/* CRT overlay effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,0,0.15) 2px)",
          }}
        />
      </div>
    </div>
  );
}
