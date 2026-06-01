"use client";
import dynamic from "next/dynamic";
import ScrollReveal from "./ScrollReveal";
const Cursor = dynamic(()=>import("./Cursor"),{ssr:false});
export default function ClientWrapper(){return(<><Cursor/><ScrollReveal/></>)}
