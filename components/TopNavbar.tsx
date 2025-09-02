"use client";
import { useLanguage } from "@/hooks/use-language";
import { Fragment } from "react";

export default function TopNavbar() {
  const { t } = useLanguage();

  return (
    <Fragment>
      <div className="flex justify-center bg-[#248406] py-0.5 items-center">
        <p className="font-semibold text-sm text-white ">{t("title")}</p>
      </div>
    </Fragment>
  );
}
