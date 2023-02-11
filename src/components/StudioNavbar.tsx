import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center p-5">
        <Link href="/" className="flex items-center text-primary">
          <ArrowUturnLeftIcon className="mr-2 h-6 w-6" />
          Go To Website
        </Link>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar
