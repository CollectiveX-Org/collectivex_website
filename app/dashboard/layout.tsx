'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { MdDashboard, MdSwapHoriz, MdWaterDrop, MdSend, MdRefresh } from 'react-icons/md'
import { FaStream, FaExchangeAlt } from 'react-icons/fa'
import { BiTransfer } from 'react-icons/bi'
import { IoWalletOutline } from 'react-icons/io5'
import { IoMdNotifications, IoMdSettings } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'

const navItems = [
  {
    label: 'Overview',
    icon: MdDashboard,
    href: '/dashboard',
  },
  {
    label: 'Limit Order',
    icon: FaExchangeAlt,
    href: '/dashboard/limit-order',
  },
  {
    label: 'Streams',
    icon: FaStream,
    href: '/dashboard/streams',
  },
  {
    label: 'Active Transactions',
    icon: BiTransfer,
    href: '/dashboard/transaction',
  },
  {
    label: 'Send',
    icon: MdSend,
    href: '/dashboard/send',
  },
  {
    label: 'Stake',
    icon: MdWaterDrop,
    href: '/dashboard/stake',
  },
  {
    label: 'Managed Assets',
    icon: IoWalletOutline,
    href: '/dashboard/assets',
  },
]

const quickActions = [
  {
    label: 'Send',
    icon: MdSend,
    action: () => console.log('Send clicked')
  },
  {
    label: 'Receive',
    icon: BiTransfer,
    action: () => console.log('Receive clicked')
  },
  {
    label: 'Swap',
    icon: MdSwapHoriz,
    action: () => console.log('Swap clicked')
  }
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isCollapsed] = useState(false)

  const isTransactionRoute = pathname.includes('/transactions')

  return (
    <div className="flex min-h-screen bg-[#1C2936]">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-[#0F0121]/90 backdrop-blur-xl transition-all duration-300 
        border-r border-violet-500/20 ${isCollapsed ? 'w-16' : 'w-64'} z-20`}
      >
        {/* Logo Section */}
        <div className="p-4 border-b border-violet-500/20">
          <Link href="/" className="flex items-center group">
            <Image
              src="/son.svg"
              alt="Soon DAO"
              width={isCollapsed ? 24 : 32}
              height={isCollapsed ? 24 : 32}
              className="group-hover:scale-105 transition-transform"
            />
            {!isCollapsed && (
              <span className="ml-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-violet-400">
                DAO
              </span>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          <nav className="p-2 space-y-1 flex-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg
                  ${pathname === item.href
                      ? 'bg-violet-500/20 text-violet-200'
                      : 'text-gray-400 hover:bg-violet-500/10 hover:text-violet-200'
                    } transition-colors`}
                >
                  <Icon size={20} />
                  {!isCollapsed && <span className="text-sm">{item.label}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-violet-500/20">
            <WalletMultiButton className="!bg-violet-500/20 hover:!bg-violet-500/30 !text-violet-200 
              !px-4 !py-2 !rounded-lg !text-sm !font-normal w-full justify-center" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-16' : 'ml-64'}`}>
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[#1C2936]/90 backdrop-blur-xl border-b border-violet-500/20">
          {/* Primary Header */}
          <div className="px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-xl text-white font-medium">
                {navItems.find(item => item.href === pathname)?.label || 'Dashboard'}
              </h1>
              {isTransactionRoute && (
                <>
                  <div className="h-6 w-px bg-violet-500/20" />
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <MdRefresh size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center gap-4">
              {isTransactionRoute ? (
                <>
                  <div className="text-sm text-gray-400">
                    Unclaimed rent: <span className="text-white">≈0.09 SOL</span>
                    <button className="ml-2 text-violet-400 hover:text-violet-300 transition-colors">
                      Claim
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 
                    text-violet-200 rounded-lg text-sm transition-colors flex items-center gap-2">
                    Batch Actions
                    <BsThreeDotsVertical size={14} />
                  </button>
                </>
              ) : (
                <>
                  <div className="flex gap-2">
                    {quickActions.map((action, index) => {
                      const Icon = action.icon
                      return (
                        <button
                          key={index}
                          onClick={action.action}
                          className="px-3 py-1.5 bg-violet-500/10 hover:bg-violet-500/20 
                          text-violet-200 rounded-lg text-sm flex items-center gap-2 transition-colors"
                        >
                          <Icon size={16} />
                          {action.label}
                        </button>
                      )
                    })}
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 transition-colors">
                      <IoMdNotifications size={20} className="text-violet-200" />
                    </button>
                    <button className="p-2 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 transition-colors">
                      <IoMdSettings size={20} className="text-violet-200" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Secondary Header for Transaction Route */}
          {isTransactionRoute && (
            <div className="px-6 py-3 border-t border-violet-500/20 flex items-center gap-6">
              <button className="text-violet-200 text-sm hover:text-white transition-colors">
                All
              </button>
              <button className="text-gray-400 text-sm hover:text-white transition-colors">
                Pending
              </button>
              <button className="text-gray-400 text-sm hover:text-white transition-colors">
                Executed
              </button>
              <button className="text-gray-400 text-sm hover:text-white transition-colors">
                Failed
              </button>
            </div>
          )}
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
