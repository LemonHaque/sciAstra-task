import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";



const MeetYourMentor = () => {

    const [mentorsData, setMentorsData] = useState([]);

    useEffect(() => {
        fetch('mentors.json')
            .then(res => res.json())
            .then(data => setMentorsData(data))
    }, [])

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-indigo-700'>Meet Your Mentor</h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-3 my-10">
                {
                    mentorsData.map(singleData => (
                        <div key={singleData.id}>
                            <div className="my-3">
                                <img className="w-1/2 rounded-full mx-auto" src={singleData.img} alt="Mentor" />
                                <div className="">
                                    <h2 className="text-center text-xl">{singleData.name}</h2>
                                    <p>{singleData.university}</p>
                                    <button className="flex w-1/2 mx-auto items-center rounded-2xl px-2 py-1 border-2 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white">
                                        Message him now
                                        <span className="ml-2"><FaTelegramPlane /></span>
                                    </button>


                                </div>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default MeetYourMentor;