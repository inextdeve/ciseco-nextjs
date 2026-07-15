'use server'

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { user } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function addToCart(formData: FormData) {
  // Handle form submission logic here
  const formObjectEntries = Object.fromEntries(formData.entries())
  console.log('Add to cart submitted:', formObjectEntries)
  // You can add your cart logic here, such as updating the cart state or making an API call
}
