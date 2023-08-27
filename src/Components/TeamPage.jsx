import { useEffect, useState } from "react";

const TeamPage = () => {
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        fetch('universities.json')
            .then(res => res.json())
            .then(data => setUniversity(data))
    }, [])

    return (
        <div>
            <div className='text-center my-10 mx-10'>
                <h1 className='text-4xl  text-indigo-700 font-bold mt-6 mb-'>Team Page</h1>
                <h3 className='text-xl mb-4'>Learn from scientists, research scholars from the top institude in the world.</h3>
                <div className="grid grid-cols-3 gap-10 mx-14">

                    {
                        university.map(uni => (
                            <div className="md:w-1/2 mx-auto" key={uni.id}>
                                <img className="" src={uni.img} alt="" />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default TeamPage;