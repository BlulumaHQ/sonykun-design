import { useState } from "react";
import { Phone, Mail, MessageSquare, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-background rounded-2xl shadow-xl border border-border p-4 w-56 animate-fade-up">
          <p className="font-display font-semibold text-foreground mb-3 text-sm">Contact Sony</p>
          <div className="space-y-2">
            <a
              href="tel:7786535353"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call</span>
            </a>
            <a
              href="sms:7786535353"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Text</span>
            </a>
            <a
              href="mailto:support@sonykundesign.com"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary-hover transition-all text-sm font-semibold"
        aria-label="Call / Text Sony"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <>
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call / Text Sony</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingContactButton;
