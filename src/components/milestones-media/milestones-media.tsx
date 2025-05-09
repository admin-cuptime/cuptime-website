"use client";
import React from 'react';
// import './milestones-media.css';
import pic from '@/assets/png/journeygirl.png';
// import { Card, CardContent } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const MilestonesMedia = () => {
    // const milestones = [
    //     {
    //         image: pic,
    //         title: 'Awarded from Hon’ble Chief Minister of Tamilnadu Thiru M. K. Stalin',
    //         description: '',
    //     },
    //     {
    //         image: pic,
    //         title: 'Featured in VIKATAN',
    //         description: '',
    //     },
    //     {
    //         image: pic,
    //         title: 'Signed a MOU with Tamilnadu Startup and Innovation Mission for Supporting Women Entrepreneurs',
    //         description: '',
    //     },
    //     {
    //         image: pic,
    //         title: 'Featured in Your Story',
    //         description: 'Read More',
    //     },
    // ];

    return (
        <div className="milestones-media">
            <h2>Our Milestones & Media Recognition</h2>
            <p>
                From the Chief Minister’s appreciation to media spotlights, Cup Time’s journey has been marked by trust, innovation, and community impact. These recognitions reflect our commitment to quality, entrepreneurship, and empowering local talent.
            </p>
            {/* <div className="milestones-container">
                {milestones.map((milestone, index) => (
                    <div className="milestone-card" key={index}>
                        <img 
                        // src={milestone.image} 
                        alt={milestone.title} />
                        <h3>{milestone.title}</h3>
                        {milestone.description && <p>{milestone.description}</p>}
                    </div>
                ))}
            </div> */}
            <Carousel className="w-full justify-center max-w-sm">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <div>
                                    <div className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default MilestonesMedia;