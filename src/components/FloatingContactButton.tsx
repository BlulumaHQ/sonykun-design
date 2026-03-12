import { useState } from "react";
import { MessageCircle, Phone, Mail, MessageSquare, X } from "lucide-react";

const FloatingContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-background rounded-2xl shadow-xl border border-border p-4 w-56 animate-fade-up">
          <p className="font-display font-semibold text-foreground mb-3 text-sm">Contact Sony</p>
          <div className="space-y-2">
            <a
              href="tel:7786535353"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call Sony</span>
            </a>
            <a
              href="sms:7786535353"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Text Message</span>
            </a>
            <a
              href="mailto:support@sonykundesign.com"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-foreground"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Send Email</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        aria-label="Chat / Call Sony"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingContactButton;
