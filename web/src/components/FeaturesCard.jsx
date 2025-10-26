import React from "react";
import { QrCode } from "lucide-react";

const FeaturesCard = ({ Icon, title, text, bgColor, iconColor }) => {
  return (
    <div className="p-6 bg-surface rounded-2xl shadow-card hover:shadow-medical transition-shadow">
      <div className={`p-3 ${bgColor} rounded-xl w-fit mb-4`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
};

export default FeaturesCard;
