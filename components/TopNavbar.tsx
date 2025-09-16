"use client";
import { useLanguage } from "@/hooks/use-language";
import { Fragment } from "react";

export default function TopNavbar() {
  const { t, getFontClass } = useLanguage();

  return (
    <Fragment>
      <div className={`flex justify-center bg-gradient-to-r from-[#248406] to-[#1a5d04] py-2 px-4 items-center shadow-sm ${getFontClass()}`}>
        <p className="font-medium text-base text-white text-center leading-tight tracking-wide">
          {t("title")}
        </p>
      </div>
    </Fragment>
  );
}
