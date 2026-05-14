import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

interface ColumnProps {
  items: { item: FaqItem; idx: number }[];
}

const FaqColumn = ({ items }: ColumnProps) => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map(({ item }, i) => {
        const isOpen = open === i;
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              aria-expanded={isOpen}
            >
              <h3 className="font-display text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {item.q}
              </h3>
              <span className="flex-shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors">
                {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground leading-[1.7] pb-6 pr-10">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
};

const FaqAccordion = ({ items }: FaqAccordionProps) => {
  const indexed = items.map((item, idx) => ({ item, idx }));
  const mid = Math.ceil(indexed.length / 2);
  const left = indexed.slice(0, mid);
  const right = indexed.slice(mid);

  if (right.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <FaqColumn items={left} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 max-w-6xl mx-auto">
      <FaqColumn items={left} />
      <FaqColumn items={right} />
    </div>
  );
};

export default FaqAccordion;
