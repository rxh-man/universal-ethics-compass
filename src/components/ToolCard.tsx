
import React from "react";
import { LucideIcon } from "lucide-react";

export interface ToolCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  locked?: boolean;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, description, children, action, locked }) => (
  <div className="ethics-marble p-6 flex flex-col gap-2 h-full relative overflow-hidden">
    {locked && (
      <span className="absolute top-3 right-4 text-xs font-semibold text-[#cabf9a] bg-[#f1efe6] px-2 py-0.5 rounded-full z-10 shadow-sm border border-[#e5e0d0]">
        Coming Soon
      </span>
    )}
    <Icon size={32} className="ethics-gold mb-1" strokeWidth={2.05} aria-hidden />
    <h2 className="text-2xl font-semibold mb-1 text-[#2d624d] font-sans">{title}</h2>
    <p className="text-[1.08rem] text-left text-[#49433a] font-sans">{description}</p>
    {children}
    {action && <div className="flex-1 flex items-end">{action}</div>}
  </div>
);

export default ToolCard;
