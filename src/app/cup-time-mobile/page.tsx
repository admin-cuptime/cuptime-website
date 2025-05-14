"use client";
import CupTimeMobileOrder from "@/components/cuptime-mobile-order/cuptime-mobileorder";
import CuptimeStandout from "@/components/cuptime-standout/cuptime-standout";
import ReviewMarquee from "@/components/review-marquee/review-marquee"


const CuptimeMobilepage = () => {
    return (
        <div  className="max-w-screen-3xl mx-auto space-y-32">
            <section className="space-y-16">
                 <div className="space-y-32">
                    <CupTimeMobileOrder />
                    <CuptimeStandout/>
                    <ReviewMarquee />
                </div>
            </section>
        </div>
    )
}
export default CuptimeMobilepage;