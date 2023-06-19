type ProgressBarProps = {
    percentage: number,
    value?: string | number,
    label?: string
}
const ProgressBar = ({percentage, value, label}: ProgressBarProps) => {
  return (
    <div className="flex space-x-3 items-center space-x-5">
        { label && <span>{label}</span> }
        <div className="w-full bg-gray-200 rounded-full h-2.5 bg-gray-200">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{"width": percentage + "%"}}></div>
        </div>
        { value && <span>{value}</span> }
    </div>
  )
}

export default ProgressBar;