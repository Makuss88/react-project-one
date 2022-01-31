import './Spinner.css'

const LoadingSpinner = (props) => {
  const { variant } = props
  return <div className={`spinner ${variant}`}></div>
}

export default LoadingSpinner
