"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FilterItem {
  id: string
  label: string
  gradient: string
  iconColor: string
  icon?: ReactNode
}

interface GlowFilterMenuProps {
  items: FilterItem[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.5,
    transition: {
      opacity: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.4, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const activeGlowVariants = {
  initial: { opacity: 0.6, scale: 1 },
  animate: {
    opacity: [0.6, 0.8, 0.6],
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.4,
}

export default function GlowFilterMenu({ items, activeFilter, onFilterChange }: GlowFilterMenuProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 p-4 rounded-2xl bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-lg border border-gray-200/40 shadow-lg relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute -inset-2 bg-gradient-radial from-transparent via-blue-400/10 via-30% via-green-400/10 via-60% via-purple-400/10 via-90% to-transparent rounded-3xl z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
      />

      {items.map((item) => {
        const isActive = activeFilter === item.id
        return (
          <motion.div key={item.id} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative cursor-pointer"
              style={{ perspective: "600px" }}
              whileHover={!isActive ? "hover" : undefined}
              initial="initial"
              onClick={() => onFilterChange(item.id)}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                variants={isActive ? activeGlowVariants : glowVariants}
                animate={isActive ? "animate" : "initial"}
                style={{
                  background: item.gradient,
                  opacity: isActive ? 0.6 : 0,
                }}
              />

              {/* Front face */}
              <motion.div
                className={`flex items-center gap-2 px-4 py-2 relative z-10 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-green-500 text-white shadow-lg shadow-green-500/25"
                    : "bg-white/60 text-gray-700 hover:text-gray-900 hover:bg-white/80"
                }`}
                variants={!isActive ? itemVariants : undefined}
                transition={sharedTransition}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center bottom",
                }}
              >
                {item.icon && (
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? "text-white" : `${item.iconColor} group-hover:scale-110`
                    }`}
                  >
                    {item.icon}
                  </span>
                )}
                <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
              </motion.div>

              {/* Back face (only for non-active items) */}
              {!isActive && (
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 absolute inset-0 z-10 bg-white/80 text-gray-900 rounded-xl"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    rotateX: 90,
                  }}
                >
                  {item.icon && (
                    <span className={`transition-colors duration-300 ${item.iconColor} scale-110`}>{item.icon}</span>
                  )}
                  <span className="font-semibold text-sm whitespace-nowrap">{item.label}</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
