const Wrapper = (WrappedComponent , className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/> 
            </div>
        )
    }
}
 
 
export default Wrapper;