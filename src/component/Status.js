function Status(props) {
    function getStatus(){
        switch (props.Status) {
            case 'active':
                return 'bg-success'
                case 'expired':
                    return 'bg-warning';
                case 'banned':
                    return 'bg-danger';
                default:
                    return 'bg-secondary';    
        }
    }

    return ( 
        <div className={`badge ${getStatus()}`}>
            {props.Status}
        </div>
     );
}

export default Status;