import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button';
const category = [
    "Frontend development",
    "Backend development",
    "Data Science",
    "Graphical Designer",
    "FullStack development",

];

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-20'>
                <CarouselContent>
                    {
                        category.map((cat,index)=>(
                            <CarouselItem className='md-basis-1/2 lg-basis-1/3' key={index}>
                                <Button variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
