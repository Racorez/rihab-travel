import React from "react";
import { packagesData, PackageItem } from "@/data/packages";
import PackageDetailClient from "./PackageDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return packagesData.flatMap((pkg) => [
    { id: pkg.id },
    { id: String(pkg.numId) },
  ]);
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pkg = packagesData.find(
    (p) => p.id === resolvedParams.id || String(p.numId) === resolvedParams.id
  );

  if (!pkg) {
    return {
      title: "الباقة غير موجودة | وكالة رحاب",
    };
  }

  return {
    title: `${pkg.title} | وكالة رحاب للعمرة والحج`,
    description: pkg.subtitle,
  };
}

export default async function PackageDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const pkg: PackageItem | undefined = packagesData.find(
    (p) => p.id === resolvedParams.id || String(p.numId) === resolvedParams.id
  );

  if (!pkg) {
    notFound();
  }

  return <PackageDetailClient pkg={pkg} />;
}
