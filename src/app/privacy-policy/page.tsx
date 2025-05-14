'use client';

import PrivacypolicyHero from "@/components/privacy-policy-hero/privacy-policy-hero";
import PrivacyPolicyQuestion from "@/components/privacy-policy-questions/privacy-policy-section";

export default function PrivacyPolicy() {
    return (
        <div className="max-w-screen-3xl mx-auto">
            <PrivacypolicyHero/>
            <div className="-mt-0 md:-mt-24">
                <PrivacyPolicyQuestion/>
            </div>
        </div>
    )
}