import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: 'Winson Herry',
      review: "Thank you to everybody involved with our unload yesterday. Another day at the office for A&A, but a day of huge significance to me.",
      img: people1,
      rating: <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
    },
    {
      _id: 2,
      name: 'orna ',
      review: "We are very pleased with the job and look forward to working with A&A again. Everybody did a great job and I am pleased with A&A’s whole approach",
      img: people2,
      rating: <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
    },
    {
      _id: 3,
      name: 'orni',
      review: "I wanted to let you know how pleased we were working with A&A. Your team is fantastic. Everyone we dealt with was professional and friendly. ",
      img: people3,
      rating: <div class="rating">
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
    },
  ]
  return (
    <section>
      <div className='flex justify-between mt-16'>
        <div>
          <h1 className="text-primary font-bold text-2xl font-bold">Testimonial</h1>
          <h2 className='text-3xl text-accent'>What Our Customer Says</h2>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
        {
          reviews.map(review => <Review
          key={review._id}
          review={review}
          ></Review>)
        }
      </div>
    </section>
  );
};

export default Testimonials;