import './Banner.css'

const Banner = () => {
    return (
        <div className="backgroundImage bg-no-repeat bg-center bg-cover px-4 lg:px-16 py-4 lg:py-36 rounded-3xl text-white text-center mt-4 mx-8 lg:mx-16 space-y-8">
            <h1 className='font-bold text-4xl'>Discover an exceptional cooking <br />class tailored for you!</h1>
            <p>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />problems to become an exceptionally well world-class Programmer.</p>
            <div className='gap-4'>
                <button className='bg-[#0BE58A] text-black font-bold px-4 py-2 mr-4 rounded-2xl'>Explore Now</button>
                <button className='border-[2px] text-white font-bold rounded-2xl px-4 py-2'>Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;