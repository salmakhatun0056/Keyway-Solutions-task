import React from 'react';
import Navbar from '../components/Navbar';

const Guest = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='mt-48'>
                <div className=' flex justify-center items-center'>
                    <label htmlFor="my-modal" className="btn modal-button bg-black">open modal</label>
                </div>

                {/* <!-- Put this part before </body> tag --> */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Congratulations Keyway Solutions Private Limited!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn bg-black">Close</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Guest;