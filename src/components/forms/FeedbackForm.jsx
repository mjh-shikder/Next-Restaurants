"use-client";

import React from 'react';

const FeedbackForm = () => {
    return (
        <div>
            
            <form className='space-y-5 text-center'>

                <textarea
                    required
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className='w-xl border border-dashed p-3 rounded-xl '
                ></textarea>
                <hr />
                <button className='btn'>Add Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;