function Card({ dataAos, imagePath,width, height, heading, usingTech, description, flexDirection }) {
    return (
        <div data-aos={dataAos} className={`flex ${flexDirection} 
        items-center gap-x-20 flex-col gap-y-4 sm:flex-row md:flex-row
        lg:flex-row
        `}>
            {/* image */}
            <div className="border-2">
                <img src={imagePath} alt="project-image"
                className={`rounded-md sm:w-auto sm:h-auto ${width} ${height}`} />
            </div>


            {/* detail data */}
            <div className="flex flex-col">
                <h2 className="font-bold text-[2.5rem] sm:text-[1.5rem]">{heading}</h2>
                <h3 className="text-[2rem] font-semibold sm:text-[1.2rem]"><span className="font-medium  sm:text-[1.2rem] text-[2rem]">Using Technology: </span> {usingTech}</h3>
                <p><span className="font-semibold">Description:</span> {description}</p>
            </div>
        </div>
    )
}

export default Card;