"use client";

import { useState, useEffect } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const images = [
  "/images/main.PNG",
  "/images/main2.PNG",
  "/images/main3.PNG",
  "/images/main4.PNG",
  "/images/main5.PNG",
];

const products = [
  {
    id: 1,
    name: "Performance Tee",
    price: "$85.00",
    image: "/images/product2.PNG",
  },
  {
    id: 2,
    name: "Training Short",
    price: "$65.00",
    image: "/images/produce3.PNG",
  },
  {
    id: 3,
    name: "Tech Hoodie",
    price: "$120.00",
    image: "/images/product4.PNG",
  },
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImageIndex]}
                  alt="Athletic Wear Model"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-9xl font-bold font-serif tracking-tighter mb-6"
            >
              AGAINST THE ODDS
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
            >
              Premium athletic wear designed for those who refuse to settle.
              Elevate your performance with style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                Shop Collection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-black">
                View Lookbook
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Featured Collection */}
        <section id="collection" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight mb-2">
                  New Arrivals
                </h2>
                <p className="text-muted-foreground">Masterfully crafted for movement.</p>
              </div>
              <Button variant="link" className="group">
                View All <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: product.id * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium text-lg group-hover:underline underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{product.price}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Minimalist Section */}
        <section id="about" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-neutral-300" />
              <Image
                src="/images/model.PNG"
                alt="Athletic Wear Model"
                fill
                className="object-cover object-center"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif tracking-tight mb-6">
                Engineered for Excellence
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                At Athletory, we believe that your gear should work as hard as you do.
                Our fabrics are sourced from the finest mills, ensuring breathability,
                durability, and a fit that moves with you.
              </p>
              <ul className="space-y-4 mb-8">
                {["Advanced Moisture Wicking", "4-Way Stretch Technology", "Sustainable Materials"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button>Learn More</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
