"use client";

import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { TechnicalContents } from "@/lib/types";
import BadgesList from "./BadgesList";
import { motion } from "framer-motion";

export default function TechnicalCard({
  title,
  labels,
}: Omit<TechnicalContents, "icon">) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="bg-zinc-900/10 border-zinc-900 hover:border-zinc-850 transition-all duration-300 h-full group">
        <CardHeader className="pb-3">
          <CardTitle className="text-md font-serif font-bold text-zinc-200 group-hover:text-white transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <BadgesList
              labels={labels}
              className="border-zinc-950/20 bg-zinc-950/20 text-zinc-400 hover:text-zinc-300 hover:border-zinc-800 transition-colors text-[10px]"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
