"use client"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import { useEffect, useState } from "react"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let wishlist: string[] = []    
  let storedArrayString = localStorage.getItem("wishlist")
  
  useEffect(() => {
    if (storedArrayString === null)
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }, [])
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
