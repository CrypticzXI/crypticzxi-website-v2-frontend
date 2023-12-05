const Border = ({ properties }) => {
    return (
        <div className='h-4 bg-gradient-to-r via-primary from-secondary to-third flex flex-col'>
            <div className="h-1 bg-white opacity-40"></div>
            <div className="flex-grow"></div>
            <div className="h-[3px] bg-black opacity-40"></div>
        </div>
    )
}

export default Border