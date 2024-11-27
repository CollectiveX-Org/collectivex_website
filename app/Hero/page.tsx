'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
// import Image from 'next/image'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Enhanced parallax effects with smoother values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-[#1C2936] to-[#0F0121] overflow-hidden">
        {/* Enhanced grid pattern with smoother movement */}
        <motion.div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(#4CEBBB 1px, transparent 1px), linear-gradient(90deg, #4CEBBB 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 100,
            mass: 0.5
          }}
        />

        {/* Enhanced floating shapes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute backdrop-blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              background: i % 2 === 0 ? '#4CEBBB' : '#3EA0F4',
              borderRadius: i % 3 === 0 ? '50%' : '8px',
              opacity: 0.1,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360],
              scale: [1, Math.random() + 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Enhanced main content */}
        <div className="container mx-auto px-4 pt-32 relative z-10" ref={containerRef}>
          <motion.div
            style={{ y: y1, opacity }}
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Enhanced title animation */}
            <motion.div 
              className="relative inline-block"
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.1)",
              }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4CEBBB] via-[#3EA0F4] to-[#4CEBBB] bg-size-200"
                animate={{
                  backgroundPosition: ['0% center', '200% center'],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Soon DAO
              </motion.h1>
              
              {/* Enhanced glow effect */}
              <motion.div 
                className="absolute inset-0 blur-3xl bg-gradient-to-r from-[#4CEBBB]/20 via-[#3EA0F4]/20 to-[#4CEBBB]/20 -z-10"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.p 
              className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building the future of decentralized governance and community-driven innovation
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div 
              className="mt-10 flex gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.button 
                className="px-8 py-3 bg-[#4CEBBB] rounded-full text-[#1C2936] font-semibold"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#3dd6a9",
                  boxShadow: "0 0 20px rgba(76, 235, 187, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Join Now
              </motion.button>
              <button className="px-8 py-3 border border-[#4CEBBB] rounded-full text-[#4CEBBB] hover:bg-[#4CEBBB]/10 transition-all">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* New: Floating dashboard preview */}
          <motion.div
            style={{ y: y2 }}
            className="mt-20 relative"
          >
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4CEBBB]/20 to-[#3EA0F4]/20 blur-xl -z-10" />
              <motion.div
                className="bg-[#1C2936]/80 backdrop-blur-xl rounded-xl p-6 border border-[#4CEBBB]/20"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Mock dashboard content */}
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-32 rounded-lg bg-[#243446] animate-pulse" />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
