import { motion, AnimatePresence } from 'framer-motion'

export default function ResetModal({ open, onCancel, onConfirm }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onCancel}
            className="fixed inset-0 bg-black/60 z-40"
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 border border-slate-600 rounded-2xl shadow-2xl p-6 w-80"
          >
            <h2 className="text-white font-bold text-lg mb-2">Reset bracket?</h2>
            <p className="text-slate-400 text-sm mb-6">
              This will clear all your picks. This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={onCancel}
                className="flex-1 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition-colors"
              >
                Reset Bracket
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
