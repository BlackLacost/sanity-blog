import Image from 'next/image'

function Logo(props: any) {
  const { renderDefault } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://avatars.githubusercontent.com/u/1394083"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
