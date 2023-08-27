
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
            <h1 className='text-5xl font-bold'>Meet Your Mentor</h1>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto sm:w-3/5 md:w-4/5 gap-4">
           {
                mentorsData.map(singleData => (
                    <div key={singleData.id}>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={singleData.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{singleData.name}</h2>
                                <p>{singleData.university}</p>
                                <div className="">
                                    <button className="btn btn-outline">Message</button>
                                </div>
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