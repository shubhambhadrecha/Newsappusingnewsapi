import React, { useState } from "react";

function Navbar(props) {
  const [search, setSearch] = useState('')
  return (
    <header className="bg-cyan-400">
      <nav className="flex items-center justify-between py-3 px-6">
        <div className="flex lg:flex-1 font-extrabold text-2xl">DAILY NEWS</div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">Here are the top {props.newsTopic} news from today</div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* <a href="/" className="text-gray-900 font-extrabold text-2xl">
            DAILY NEWS
          </a> */}
          <span>
            <input type="text" className="rounded-md h-8 w-auto px-2 bg-neutral-50" name="" id="topic" placeholder="Search Topic" onChange={e => setSearch(e.target.value)} />
            <button className="mx-1 border-2 py-0.5 rounded-md border-black px-3 hover:font-semibold delay-50" onClick={() => { console.log(search) }}>Search</button>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
