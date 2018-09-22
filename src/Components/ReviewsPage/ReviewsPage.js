import React from 'react';

const ReviewsPage = () => {
  return(
    <div className='main-section'>
      <div className='header-image review-image'>
      </div>
      <div className='background review-section'>
        <div className='text-background'>
          <h2>Customer Reviews</h2>
          <p>
            <em>
              "Joanna was excellent!  Sent so many beautiful photos and a video of Karl.  She even dealt with my building’s confusing and horrible parking garage and had a great attitude about it.  Will definitely be booking with her again in the future!"
              <br />
              <br />
              -NICHOLAS G. - 5/5
            </em>
          </p>
          <p>
            <em>
              "Outstanding with lots of pictures of my dog!  Very friendly!"
              <br />
              <br />
              -KATHLEEN R. - 5/5
            </em>
          </p>
          <p>
            <em>
              "Wonderful!  Treats our dogs like her own and takes beautiful pictures that make me want to be home and not at work!"
              <br />
              <br />
              -AMANDA M. - 5/5
            </em>
          </p>
          <p>
            <em>
              "Fran LOVED her time with Joanna and is completely exhausted!  Joanna is also a fantastic photographer and got some amazing shots of Frances that she sent me!  Thank you so much!  We hope to see you again soon!"
              <br />
              <br />
              -AVERY L. - 5/5
            </em>
          </p>

        </div>
        {/* <a href="/schedule">Schedule Dog Walk</a> */}
      </div>
    </div>
  )
};

export default ReviewsPage;