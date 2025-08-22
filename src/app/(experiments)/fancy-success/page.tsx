"use client";

import { useState, useRef } from "react";
import { Confetti, ConfettiRef } from "@/components/magicui/confetti";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, Check, Loader2, Lock, Shield } from "lucide-react";

export default function FancySuccess() {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const handlePayment = async () => {
    if (!amount || parseFloat(amount) <= 0) return;

    setIsProcessing(true);

    await new Promise((resolve) => setTimeout(resolve, 2500));

    setIsProcessing(false);
    setIsComplete(true);

    setTimeout(() => {
      confettiRef.current?.fire({});
    }, 200);
  };

  const reset = () => {
    setAmount("");
    setIsComplete(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-50 size-full pointer-events-none"
        />
        {!isComplete ? (
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-zinc-800/50 p-8 space-y-8">
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                Quick Payment
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Enter amount and complete your transaction securely
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 dark:text-zinc-400 font-medium">
                    $
                  </span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="pl-8 text-lg font-medium h-12 bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Pay ${amount || "0.00"}
                  </div>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <Shield className="w-4 h-4" />
                <span>Secured by 256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-zinc-800/50 p-8 text-center space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mx-auto animate-pulse">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">
                  Payment Successful!
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Your payment of{" "}
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    ${amount}
                  </span>{" "}
                  has been processed successfully.
                </p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Transaction ID:
                </span>
                <span className="font-mono text-zinc-900 dark:text-zinc-100">
                  TXN-{Date.now()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">
                  Status:
                </span>
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  Completed
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-600 dark:text-zinc-400">Date:</span>
                <span className="text-zinc-900 dark:text-zinc-100">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            </div>

            <Button
              onClick={reset}
              variant="outline"
              className="w-full h-11 font-medium rounded-xl border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800">
              Make Another Payment
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
