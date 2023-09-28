
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="">
      <div className="nav mt-8 mr-6">
        <ul className="flex space-x-10 font-bold text-lg font-sans">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/movie">Movie</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          

        </ul>
      </div>
    </nav>
  )
}

export default Nav