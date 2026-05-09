import React from 'react';

const EmailPreview = () => {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl w-full">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-neutral-900">Email Template Preview</h1>
          <p className="text-neutral-500 mt-2">This is how the confirmation email will look to your leads.</p>
        </div>

        {/* Email Container Mockup */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-neutral-200">
          
          {/* Email Header */}
          <div className="bg-[#0a0a0a] px-8 py-8 items-center text-center">
            <span className="text-2xl font-bold text-white tracking-tight">SolarReclaim</span>
          </div>

          {/* Email Body */}
          <div className="px-8 py-10">
            <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-6">
              Your Free Lead Audit Request is Confirmed
            </h2>
            
            <p className="text-neutral-700 text-base mb-6 leading-relaxed">
              Hi <strong>[First Name]</strong>,
            </p>
            
            <p className="text-neutral-700 text-base mb-6 leading-relaxed">
              Thank you for requesting a free audit from SolarReclaim. We have successfully received your information, and our team is already reviewing the details you provided about <strong>[Company Name]</strong>.
            </p>

            <div className="bg-[#fff7ed] border-l-4 border-[#f97316] p-6 mb-8 rounded-r-md">
              <h3 className="text-[#9a3412] font-semibold text-lg mb-2">What happens next?</h3>
              <ul className="text-[#9a3412] space-y-2 list-disc list-inside">
                <li>We analyze your aged leads potential.</li>
                <li>We prepare a custom strategy just for you.</li>
                <li>One of our experts will reach out to you within 24 hours to schedule the audit call.</li>
              </ul>
            </div>

            <p className="text-neutral-700 text-base mb-8 leading-relaxed">
              If you have any immediate questions, feel free to reply directly to this email. We're looking forward to helping you reclaim lost revenue.
            </p>

            <div className="mb-2">
              <p className="text-neutral-900 font-semibold mb-1">Best regards,</p>
              <p className="text-[#f97316] font-bold">The SolarReclaim Team</p>
            </div>
          </div>

          {/* Email Footer */}
          <div className="bg-neutral-50 px-8 py-6 text-center border-t border-neutral-200">
            <p className="text-neutral-400 text-sm mb-2">
              © {new Date().getFullYear()} SolarReclaim. All Rights Reserved.
            </p>
            <p className="text-neutral-400 text-xs">
              <a href="#" className="hover:text-[#f97316] underline">contact@solarreclaim.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
