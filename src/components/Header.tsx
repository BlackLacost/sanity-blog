import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 px-10 py-5 font-bold">
      <Link className="flex items-center space-x-2" href="/">
        <Image
          className="rounded-full object-cover"
          height={50}
          width={50}
          src="https://avatars.githubusercontent.com/u/1394083"
          alt="logo"
        />
        <h1>Блог</h1>
      </Link>
    </header>
  )
}

export default Header
