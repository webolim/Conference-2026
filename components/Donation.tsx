import React from 'react';
import { ASSETS } from '../constants.ts';
import { QrCode, CreditCard } from 'lucide-react';

const Donation: React.FC = () => {
  return (
    <section id="donate" className="py-16 bg-maroon text-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-serif text-3xl text-center font-bold text-gold mb-8">Support WEBOLIM</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Mobile UPI Button & Desktop QR */}
            <div className="bg-white/10 p-6 rounded-2xl border border-gold/30 text-center flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4">Make a Contribution</h3>
                
                {/* Desktop QR - Hidden on Mobile */}
                <div className="hidden md:block bg-white p-2 rounded-lg mb-4">
                    {/* Placeholder for QR Code since I cannot generate a real one dynamically without a library easily. using an image placeholder or logic */}
                    <div className="w-48 h-48 bg-gray-100 flex items-center justify-center text-charcoal text-xs">
                       <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=qr919443887456-9830@unionbankofindia&pn=WEBOLIM%20TRUST`} alt="UPI QR" className="w-full h-full" />
                    </div>
                </div>
                <p className="hidden md:block text-sm opacity-80 mb-4">Scan with any UPI App</p>

                {/* Mobile UPI Button */}
                <a 
                    href="upi://pay?pa=qr919443887456-9830@unionbankofindia&pn=WEBOLIM%20TRUST&cu=INR"
                    className="md:hidden w-full bg-gold text-maroon font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg animate-pulse"
                >
                    <QrCode size={20} /> Donate via UPI App
                </a>
                
                <p className="mt-4 text-xs bg-black/20 p-2 rounded text-left w-full">
                    <span className="font-bold text-gold">Note:</span> All donations to WEBOLIM Trust are eligible for tax exemption under Section 80G.
                </p>
            </div>

            {/* Right: Bank Details */}
            <div className="space-y-6">
                <div className="bg-cream/5 p-4 rounded-xl border-l-4 border-gold">
                    <h4 className="font-bold text-lg text-gold flex items-center gap-2">
                        <CreditCard size={18}/> Union Bank of India
                    </h4>
                    <div className="mt-2 space-y-1 text-sm font-mono opacity-90">
                        <p>Acct Name: WEBOLIM TRUST</p>
                        <p>Acct No: 520101257799830</p>
                        <p>IFSC: UBIN0912883</p>
                        <p>Branch: Jigani</p>
                    </div>
                </div>

                <div className="bg-cream/5 p-4 rounded-xl border-l-4 border-gold">
                    <h4 className="font-bold text-lg text-gold flex items-center gap-2">
                        <CreditCard size={18}/> City Union Bank (CUB)
                    </h4>
                    <div className="mt-2 space-y-1 text-sm font-mono opacity-90">
                        <p>Acct Name: WEBOLIM TRUST</p>
                        <p>Acct No: 500101013583858</p>
                        <p>IFSC: CIUB0000583</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;