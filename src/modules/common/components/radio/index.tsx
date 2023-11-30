import clsx from "clsx"

const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={clsx(
        "h-3 w-3 rounded-full border border-gray-200 flex items-center justify-center",
        {
          "border-theme": checked,
        }
      )}
    >
      {checked && <div className="w-2 h-2 rounded-full bg-theme" />}
    </div>
  )
}

export default Radio
