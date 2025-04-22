
const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <footer className="text-center m-[30px] pb-[1%]">
                <p className="uppercase  text-gray-500 ">COPYRIGHT © {year} ABIMEL Jewerly – ALL RIGHTS RESERVED.</p>
            </footer>
        </div>
    )
}

export default Footer
