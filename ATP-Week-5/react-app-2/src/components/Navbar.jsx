function Navbar(){
    return(
        <div className="flex justify-between items-center px-8 py-4 bg-slate-100 border-b">
            <h1 className="font-bold text-xl">LOGO</h1>
            <ul className="flex gap-10">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Register</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar