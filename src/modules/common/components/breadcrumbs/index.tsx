const Breadcrumbs = ({ path }: { path?: string }) => {
  return (
    <div className="w-[100%] h-[40px] xsmall:h-[90px] py-8 xsmall:py-10 bg-bg justify-center items-center gap-2.5 inline-flex">
      <div className="text-center text-theme-dark text-base xsmall:text-xl capitalize tracking-wide font-light">
        {path}
      </div>
    </div>
  )
}

export default Breadcrumbs
